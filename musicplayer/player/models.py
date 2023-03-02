from django.db import models
from django.contrib.auth.models import AbstractUser

from .managers import CustomUserManager
# Create your models here.
class User(AbstractUser):
    email = models.EmailField(verbose_name='email', unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = CustomUserManager()

    def __str__(self):
        return self.email

class Song(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name="uploads")
    name = models.CharField(max_length=60)
    description = models.TextField()
    artistName = models.CharField(max_length=60)
    coveralbum = models.ImageField(upload_to="songs/", null=True, blank= True)
    mp3file = models.FileField(upload_to="songs/")
    likes = models.ManyToManyField(User,related_name="likes")

    def __str__(self):
        return f"{self.name}"


    
