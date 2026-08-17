from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.models.base import Base

class Investigation(Base):
    __tablename__ = "investigations"

    id = Column(Integer, primary_key=True, index=True)
    alert_id = Column(Integer, ForeignKey("alerts.id"), unique=True)
    status = Column(String, default="OPEN") # OPEN, CLOSED
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    alert = relationship("Alert", back_populates="investigation")
    notes = relationship("InvestigationNote", back_populates="investigation")
    decision = relationship("Decision", back_populates="investigation", uselist=False)

class InvestigationNote(Base):
    __tablename__ = "investigation_notes"

    id = Column(Integer, primary_key=True, index=True)
    investigation_id = Column(Integer, ForeignKey("investigations.id"))
    author_id = Column(Integer, ForeignKey("users.id"))
    content = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    investigation = relationship("Investigation", back_populates="notes")
    author = relationship("User")

class Decision(Base):
    __tablename__ = "decisions"

    id = Column(Integer, primary_key=True, index=True)
    investigation_id = Column(Integer, ForeignKey("investigations.id"), unique=True)
    action = Column(String, nullable=False) # APPROVE, BLOCK, FALSE_POSITIVE, ESCALATE
    reason = Column(String, nullable=False)
    notes = Column(Text)
    decided_by = Column(Integer, ForeignKey("users.id"))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    investigation = relationship("Investigation", back_populates="decision")
    author = relationship("User")
