from django.shortcuts import render
from account.v1.serializers import CreateUserSerializer
from account.v1.services import account_service
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status


@api_view(["POST"])
def create_user(request: Request) -> Response:
    serializer = CreateUserSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()

    data = serializer.data

    return Response(data, status=status.HTTP_201_CREATED)

