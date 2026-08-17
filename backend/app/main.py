from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api import auth, customers, transactions, alerts

app = FastAPI(title=settings.PROJECT_NAME)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(customers.router, prefix="/customers", tags=["customers"])
app.include_router(transactions.router, prefix="/transactions", tags=["transactions"])
app.include_router(alerts.router, prefix="/alerts", tags=["alerts"])

@app.get("/")
def root():
    return {"message": "Welcome to FraudControl API"}
