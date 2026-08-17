from pydantic import BaseModel, EmailStr
from app.models.user import RoleEnum

# Token
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenPayload(BaseModel):
    sub: str | None = None

# User
class UserBase(BaseModel):
    email: EmailStr
    full_name: str | None = None
    role: RoleEnum = RoleEnum.ANALYST
    is_active: bool = True

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    
    class Config:
        from_attributes = True
