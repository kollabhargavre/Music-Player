from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import MyTokenObtainPairView

urlpatterns = [

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("",views.index, name = "index"),
    path("register/", views.register,name="register"),
    path("songs/", views.songs, name="songs"),
    path("likes/",views.getLikedSongs, name="likes"),
    path("likes/song/<str:id>",views.handleLike, name="likeupdate")
]