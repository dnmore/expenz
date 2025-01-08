from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from db import get_income_data, get_expense_data
from export import generate_csv


app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Welcome to the CSV Export Service"}


@app.get('/export/income')
async def export_income():
    try:
        income_data = await get_income_data()
        csv_data = generate_csv(income_data, ["description", "amount", "date", "category"])
        return StreamingResponse(
            iter([csv_data]),
            media_type="text/csv",
            headers={"Content-Disposition": "attachment; filename=income.csv"}
        )
           
    except Exception as e:
        raise HTTPException(status_code=500, detail = f"Error exporting income data: {str(e)}")


@app.get('/export/expense')
async def export_expense():
    try:
        expense_data = await get_expense_data()
        csv_data = generate_csv(expense_data, ["description", "amount", "date", "category"])
        return StreamingResponse(
            iter([csv_data]),
            media_type="text/csv",
            headers={"Content-Disposition": "attachment; filename=expense.csv"}
        )
           
    except Exception as e:
        raise HTTPException(status_code=500, detail = f"Error exporting expense data: {str(e)}")
