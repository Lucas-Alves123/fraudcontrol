from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.models.base import Base

class Customer(Base):
    __tablename__ = "customers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    risk_profile = Column(String, default="LOW")  # LOW, MEDIUM, HIGH
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    accounts = relationship("Account", back_populates="customer")
    transactions = relationship("Transaction", back_populates="customer")

class Account(Base):
    __tablename__ = "accounts"

    id = Column(Integer, primary_key=True, index=True)
    customer_id = Column(Integer, sqlalchemy.ForeignKey("customers.id"))
    account_number = Column(String, unique=True, index=True)
    average_transaction = Column(Float, default=0.0)
    monthly_volume = Column(Float, default=0.0)
    
    customer = relationship("Customer", back_populates="accounts")
