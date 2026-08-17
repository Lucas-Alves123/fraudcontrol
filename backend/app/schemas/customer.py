from pydantic import BaseModel, ConfigDict
from typing import Optional, List
from datetime import datetime

class AccountBase(BaseModel):
    account_number: str
    average_transaction: float = 0.0
    monthly_volume: float = 0.0

class AccountCreate(AccountBase):
    customer_id: int

class Account(AccountBase):
    id: int
    customer_id: int
    model_config = ConfigDict(from_attributes=True)

class CustomerBase(BaseModel):
    name: str
    risk_profile: str = "LOW"

class CustomerCreate(CustomerBase):
    pass

class Customer(CustomerBase):
    id: int
    created_at: datetime
    accounts: List[Account] = []
    model_config = ConfigDict(from_attributes=True)
