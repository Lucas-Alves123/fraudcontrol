from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.models.base import Base

class Alert(Base):
    __tablename__ = "alerts"

    id = Column(Integer, primary_key=True, index=True)
    transaction_id = Column(Integer, ForeignKey("transactions.id"), unique=True)
    risk_score = Column(Integer, nullable=False)
    risk_level = Column(String, nullable=False) # LOW, MEDIUM, HIGH, CRITICAL
    status = Column(String, default="PENDING") # PENDING, ASSIGNED, INVESTIGATING, RESOLVED
    assigned_to = Column(Integer, ForeignKey("users.id"), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    transaction = relationship("Transaction", back_populates="alert")
    analyst = relationship("User")
    factors = relationship("RiskFactor", back_populates="alert")
    investigation = relationship("Investigation", back_populates="alert", uselist=False)

class RiskFactor(Base):
    __tablename__ = "risk_factors"

    id = Column(Integer, primary_key=True, index=True)
    alert_id = Column(Integer, ForeignKey("alerts.id"))
    code = Column(String, nullable=False)
    description = Column(String)
    weight = Column(Integer)
    
    alert = relationship("Alert", back_populates="factors")

class RiskRule(Base):
    __tablename__ = "risk_rules"
    
    id = Column(Integer, primary_key=True, index=True)
    code = Column(String, unique=True, index=True)
    description = Column(String)
    weight = Column(Integer)
    is_active = Column(Boolean, default=True)
