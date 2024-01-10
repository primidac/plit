from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/api/data")
def get_data():
    data = {"message": "Hello testing the microphone"}
    return JSONResponse(content=data)
