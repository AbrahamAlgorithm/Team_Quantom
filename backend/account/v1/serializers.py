from rest_framework import serializers
from django.contrib.auth import get_user_model
from account.v1.services import account_service

User = get_user_model()


class CreateUserSerializer(serializers.HyperlinkedModelSerializer):

    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["email", "password"]

    def create(self, validated_data):
        data = validated_data
        print(data)
        user = account_service.create_user(
            email=data["email"], password=data["password"]
        )
        return user

class UserResponseSerializer(serializers.ModelSerializer):
    access_token = serializers.CharField()
    refresh = serializers.CharField()

    class Meta:
        model = User
        fields = ["id", "email", "access_token", "refresh"]


class LoginUserSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()


#Token serialization
class TokenObtainPairResponseSerializer(serializers.Serializer):
    access = serializers.CharField()
    refresh = serializers.CharField()

    def create(self, validated_data):
        raise NotImplementedError()

    def update(self, instance, validated_data):
        raise NotImplementedError()


class TokenRefreshResponseSerializer(serializers.Serializer):
    access = serializers.CharField()

    def create(self, validated_data):
        raise NotImplementedError()

    def update(self, instance, validated_data):
        raise NotImplementedError()


class TokenBlacklistResponseSerializer(serializers.Serializer):
    def create(self, validated_data):
        raise NotImplementedError()

    def update(self, instance, validated_data):
        raise NotImplementedError()
