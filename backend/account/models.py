from django.db import models
import uuid
from uuid import UUID
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    id: UUID = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    username: str = models.CharField(max_length=50)
    email: str = models.EmailField(unique=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELD = []

    def __str__(self) -> str:
        return self.username
