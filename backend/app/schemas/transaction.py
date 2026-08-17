from pydantic import BaseModel, ConfigDict
from typing import Optional
from datetime import datetime

class DeviceBase(BaseModel):
    id: str
    type: str
    operating_system: str

class DeviceCreate(DeviceBase):
    pass

class Device(DeviceBase):
    first_seen: datetime
    last_seen: datetime
    model_config = ConfigDict(from_attributes=True)

class TransactionBase(BaseModel):
    customer_id: int
    device_id: str
    amount: float
    type: str
    status: str = "COMPLETED"
    location: Optional[str] = None

class TransactionCreate(TransactionBase):
    pass

class Transaction(TransactionBase):
    id: int
    timestamp: datetime
    model_config = ConfigDict(from_attributes=True)
