from django.shortcuts import render
from account.v1.serializers import CreateUserSerializer
from account.v1.services import account_service
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from utils.responses import success_response
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi


# Define the view
@swagger_auto_schema(
    method="post",
    request_body=CreateUserSerializer,
    responses={
        201: openapi.Response("Created Successfully", CreateUserSerializer),
        400: "Bad Request",
    },
)
@api_view(["POST"])
def create_user(request: Request) -> Response:
    serializer = CreateUserSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()

    data = serializer.data

    return success_response(
        message="User Created Successfully",
        status_code=status.HTTP_201_CREATED,
        data=data,
    )
