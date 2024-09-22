from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from account.v1 import views

urlpatterns = [
        path("register/", views.create_user, name="signup"),
        ]

urlpatterns = format_suffix_patterns(urlpatterns)
