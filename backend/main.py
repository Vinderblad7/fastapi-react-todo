from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import select, delete
from typing import Optional, Annotated
from pydantic import BaseModel, Field


engine = create_async_engine('sqlite+aiosqlite:///todolist.db')


new_session = async_sessionmaker(engine, expire_on_commit=False)


async def get_session():
    async with new_session() as session:
        yield session


SessionDep = Annotated[AsyncSession, Depends(get_session)]


class Base(DeclarativeBase):
    pass


class TodoModel(Base):
    __tablename__ = "todos"
    
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str]
    description: Mapped[Optional[str]] = mapped_column(default=None)

app = FastAPI()


origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:3000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,       
    allow_credentials=True,
    allow_methods=["*"],         
    allow_headers=["*"],         
)

@app.post("/setup_database")
async def setup_database():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
    return {"ok": True}


class TodoAddSchema(BaseModel):
    title: str = Field(min_length=1, max_length=100)
    description: Optional[str] = Field(None, max_length=1000)
    

class TodoSchema(TodoAddSchema):
    id: int


@app.post("/todos", name="Создать новую задачу")
async def add_todo(data: TodoAddSchema, session: SessionDep):
    new_todo = TodoModel(
        title=data.title,
        description=data.description,
    )
    session.add(new_todo)
    await session.commit()
    return {"ok": True}


@app.get("/todos", name="Получить все задачи")
async def get_todo(session: SessionDep):
    query = select(TodoModel)
    result = await session.execute(query)
    return result.scalars() .all()


@app.delete("/todos/{todo_id}", name="Удалить задачу") 
async def delete_todo(todo_id: int, session: SessionDep):
    todo = await session.get(TodoModel, todo_id)
    if not todo:
        return {"ok": False, "msg": "Задача не найдена"}
    stmt = delete(TodoModel).where(TodoModel.id == todo_id)
    await session.execute(stmt)
    await session.commit()
    return {"ok": True}
    
          
if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)