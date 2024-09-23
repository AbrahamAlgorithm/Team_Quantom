from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions
from account.v1.views import (
        DecoratedTokenObtainPairView,
        DecoratedTokenRefreshView,
        DecoratedTokenBlacklistView
        )

# drf_yasg configurations
schema_view = get_schema_view(
    openapi.Info(
        title="Doctrim API",
        default_version="v1",
        description="This API manages user account",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="joshuajosephizzyjosh@gmail.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/account/", include("account.v1.urls")),

    # authentication urls 
    path('api/v1/token/', DecoratedTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/token/refresh/', DecoratedTokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/token/blacklist/', DecoratedTokenBlacklistView.as_view(), name='token_blacklist'),

    # api documentation urls
    path(
        "swagger<format>/", schema_view.without_ui(cache_timeout=0), name="schema-json"
    ),
    path(
        "",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),
]
