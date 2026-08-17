from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.models.base import Base

class Device(Base):
    __tablename__ = "devices"
    
    id = Column(String, primary_key=True, index=True) # Device ID (hash or uuid)
    type = Column(String)
    operating_system = Column(String)
    first_seen = Column(DateTime(timezone=True), server_default=func.now())
    last_seen = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    
    transactions = relationship("Transaction", back_populates="device")

class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    customer_id = Column(Integer, ForeignKey("customers.id"))
    device_id = Column(String, ForeignKey("devices.id"))
    amount = Column(Float, nullable=False)
    type = Column(String, nullable=False) # PIX, CARD, TRANSFER
    status = Column(String, default="COMPLETED") # COMPLETED, PENDING, FAILED, BLOCKED, FLAGGED
    location = Column(String)
    timestamp = Column(DateTime(timezone=True), server_default=func.now())
    
    customer = relationship("Customer", back_populates="transactions")
    device = relationship("Device", back_populates="transactions")
    alert = relationship("Alert", back_populates="transaction", uselist=False)
