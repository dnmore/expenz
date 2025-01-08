import os
import asyncpg
from dotenv import load_dotenv

load_dotenv()
DATABASE_URL = os.getenv('DATABASE_URL')

pool = None

async def init_db():
    global pool
    if not pool:
        pool = await asyncpg.create_pool(DATABASE_URL, ssl="require")

async def close_db():
    if pool:
        await pool.close()

async def get_income_data():
    await init_db()
    
    async with pool.acquire() as conn:
        rows = await conn.fetch('SELECT description, amount, date, category FROM income')    
        return [dict(row) for row in rows]
    
    await pool.close()


async def get_expense_data():
    await init_db()
    
    async with pool.acquire() as conn:
        rows = await conn.fetch('SELECT description, amount, date, category FROM expense')    
        return [dict(row) for row in rows] 
    
    await pool.close()   



