from django.shortcuts import render
from account.v1.serializers import CreateUserSerializer, LoginUserSerializer, UserResponseSerializer
from account.v1.services import account_service
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from utils.responses import success_response
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from rest_framework_simplejwt.views import (
    TokenBlacklistView,
    TokenObtainPairView,
    TokenRefreshView,
)
from account.v1.serializers import (
    TokenObtainPairResponseSerializer,
    TokenRefreshResponseSerializer,
    TokenBlacklistResponseSerializer,
)


# Define the view
@swagger_auto_schema(
    tags=["account"],
    method="post",
    request_body=CreateUserSerializer,
    responses={
        201: openapi.Response(
            "User Created Successfully",
            UserResponseSerializer,
        ),
        400: "Bad Request",
    },
    operation_description="Create User account",
    operation_summary="Register User",
)
@api_view(["POST"])
def create_user(request: Request) -> Response:
    serializer = CreateUserSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()

    return success_response(
        message="User Created Successfully",
        status_code=status.HTTP_201_CREATED,
        data=serializer.data,
    )


@swagger_auto_schema(
        tags=["account"],
        method="post",
        request_body=LoginUserSerializer,
        responses={
            201: openapi.Response(
                "Login Successfully",
                UserResponseSerializer,
                ),
            401: "Unauthorized: invalid user credentials",
            },
        operation_description="Login to User account",
        operation_summary="Login User",
)
@api_view(["POST"])
def login(request: Request) -> Response:
    serializer = LoginUserSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    data = account_service.login(**serializer.data)

    return success_response(
            message="Login Successfully",
            status_code=status.HTTP_200_OK,
            data=data)


# Token documentation
class DecoratedTokenObtainPairView(TokenObtainPairView):
    @swagger_auto_schema(
        tags=["token"],
        responses={
            status.HTTP_200_OK: TokenObtainPairResponseSerializer,
        },
        operation_summary="Get Token",
        operation_description="Get a Token for subsequent request"
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


class DecoratedTokenRefreshView(TokenRefreshView):
    @swagger_auto_schema(
        tags=["token"],
        responses={
            status.HTTP_200_OK: TokenRefreshResponseSerializer,
        },
        operation_summary="Refresh Token",
        operation_description="Use refresh token to get new access token"
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


class DecoratedTokenBlacklistView(TokenBlacklistView):
    @swagger_auto_schema(
        tags=["token"],
        responses={
            status.HTTP_200_OK: TokenBlacklistResponseSerializer,
        },
        operation_summary="Blacklist Token",
        operation_description="Once a token is refreshed, the old token is blacklisted(marked as already used)"
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)
