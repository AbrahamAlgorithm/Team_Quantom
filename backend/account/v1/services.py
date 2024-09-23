from django.contrib.auth import get_user_model, authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import AuthenticationFailed


User = get_user_model()


class AccountServices:
    def create_user(self, email: str, password: str):
        user = User.objects.create_user(email=email, password=password)
        return user


    def login(self, email: str, password: str):
        user = authenticate(username=email, password=password)

        if user is None:
            raise AuthenticationFailed("Invalid Credentials")

        refresh = RefreshToken.for_user(user)
        access_token = refresh.access_token

        data = {
                "refresh": str(refresh),
                "access_token": str(access_token),
            }
        return data





account_service = AccountServices()
