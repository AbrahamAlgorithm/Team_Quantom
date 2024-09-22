from django.contrib.auth import get_user_model

User = get_user_model()


class AccountServices:
    def create_user(self, username: str, email: str, password: str):
        user = User.objects.create_user(username=username, email=email, password=password)
        return user


account_service = AccountServices()
