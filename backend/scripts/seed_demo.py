import sys
import os

# Add the 'backend' directory to the Python path so we can import 'app'
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.database.session import SessionLocal
from app.models.user import User, RoleEnum
from app.security.auth import get_password_hash

def seed_demo_user():
    db = SessionLocal()
    email = "admin@fraudcontrol.local"
    
    user = db.query(User).filter(User.email == email).first()
    if user:
        print(f"User {email} already exists.")
        return

    admin_user = User(
        email=email,
        hashed_password=get_password_hash("Demo@123456"),
        full_name="Admin Demo",
        role=RoleEnum.ADMIN,
        is_active=True
    )
    
    db.add(admin_user)
    db.commit()
    db.refresh(admin_user)
    print(f"Demo user {email} created successfully.")
    db.close()

if __name__ == "__main__":
    seed_demo_user()
