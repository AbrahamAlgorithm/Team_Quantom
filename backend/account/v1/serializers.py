from rest_framework import serializers
from django.contrib.auth import get_user_model
from account.v1.services import account_service
import uuid

User = get_user_model()


class CreateUserSerializer(serializers.HyperlinkedModelSerializer):
    access_token = serializers.CharField(read_only=True)
    refresh = serializers.CharField(read_only=True)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["id", "email", "password", "refresh", "access_token"]

    def create(self, validated_data):
        data = validated_data
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

    id = serializers.UUIDField(read_only=True)
    email = serializers.EmailField()
    access_token = serializers.CharField(read_only=True)
    refresh = serializers.CharField(read_only=True)
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
