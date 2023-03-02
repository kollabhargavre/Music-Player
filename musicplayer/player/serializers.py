from rest_framework.serializers import ModelSerializer

from .models import User,Song

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['email','username','id']

class SongSerializer(ModelSerializer):
    user = UserSerializer(many=False,read_only= True)
    likes = UserSerializer(many=True,read_only=True)
    class Meta:
        model = Song
        fields = '__all__'
