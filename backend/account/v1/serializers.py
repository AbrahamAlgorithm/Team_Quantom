from rest_framework import serializers
from django.contrib.auth import get_user_model
from account.v1.services import account_service

User = get_user_model()

class CreateUserSerializer(serializers.HyperlinkedModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["username", "email", "password"]


    def create(self, validated_data):
        data = validated_data
        print(data)
        user = account_service.create_user(username=data["username"], email=data["email"], password=data["password"])
        return user
