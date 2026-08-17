from pydantic import BaseModel, ConfigDict
from typing import Optional, List
from datetime import datetime

class RiskFactorBase(BaseModel):
    code: str
    description: Optional[str] = None
    weight: int

class RiskFactorCreate(RiskFactorBase):
    pass

class RiskFactor(RiskFactorBase):
    id: int
    alert_id: int
    model_config = ConfigDict(from_attributes=True)

class AlertBase(BaseModel):
    transaction_id: int
    risk_score: int
    risk_level: str
    status: str = "PENDING"
    assigned_to: Optional[int] = None

class AlertCreate(AlertBase):
    pass

class Alert(AlertBase):
    id: int
    created_at: datetime
    factors: List[RiskFactor] = []
    model_config = ConfigDict(from_attributes=True)
