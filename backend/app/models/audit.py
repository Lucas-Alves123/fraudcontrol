from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, JSON
from sqlalchemy.sql import func
from app.models.base import Base

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    action = Column(String, nullable=False) # LOGIN, ALERT_CREATED, ALERT_ASSIGNED, etc
    entity = Column(String) # ALERT, TRANSACTION, INVESTIGATION
    entity_id = Column(Integer)
    details = Column(JSON)
    timestamp = Column(DateTime(timezone=True), server_default=func.now())
