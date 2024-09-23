from django.db import models
import uuid
from uuid import UUID
from django.contrib.auth.models import AbstractUser
from account.manager import CustomUserManager


class User(AbstractUser):
    id: UUID = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    username: str = models.CharField(max_length=50, null=True, blank=True)
    email: str = models.EmailField(unique=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self) -> str:
        return self.email
