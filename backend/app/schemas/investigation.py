from pydantic import BaseModel, ConfigDict
from typing import Optional, List
from datetime import datetime

class InvestigationNoteBase(BaseModel):
    content: str
    investigation_id: int
    author_id: int

class InvestigationNoteCreate(InvestigationNoteBase):
    pass

class InvestigationNote(InvestigationNoteBase):
    id: int
    created_at: datetime
    model_config = ConfigDict(from_attributes=True)

class DecisionBase(BaseModel):
    investigation_id: int
    action: str
    reason: str
    notes: Optional[str] = None
    decided_by: int

class DecisionCreate(DecisionBase):
    pass

class Decision(DecisionBase):
    id: int
    created_at: datetime
    model_config = ConfigDict(from_attributes=True)

class InvestigationBase(BaseModel):
    alert_id: int
    status: str = "OPEN"

class InvestigationCreate(InvestigationBase):
    pass

class Investigation(InvestigationBase):
    id: int
    created_at: datetime
    notes: List[InvestigationNote] = []
    decision: Optional[Decision] = None
    model_config = ConfigDict(from_attributes=True)
