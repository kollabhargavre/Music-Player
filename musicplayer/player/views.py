from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import User, Song
from .serializers import UserSerializer, SongSerializer
from rest_framework import status

#Create your views

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['email'] = user.email
        token['username'] = user.username
        

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def index(request):
    return HttpResponse("hello welcome to index page")

@api_view(['POST'])
def register(request):
    data = request.data
    try:
        user = User.objects.create_user(username=data['username'],email=data['email'],password=data['password'])
        user.save()
    except:
        content = "These credenatials already exists"
        return Response(content,status=status.HTTP_409_CONFLICT)
    serializer = UserSerializer(user)
    return Response(serializer.data)


@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def songs(request):
    if request.method=='GET':
        songs = Song.objects.all()
        serializer = SongSerializer(songs,many=True)
        return Response(serializer.data)
    elif request.method=="POST":
        data = request.data
        try:
            song = Song(user=request.user,name = data['name'],description=data['description'],artistName = data['artist'],coveralbum=data['cover'],mp3file=data['song'])
            song.save()
        except:
            content = "Upload failed"
            return Response(content,status=status.HTTP_409_CONFLICT)
        serializer = SongSerializer(song,many=False)
        return Response(serializer.data)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getLikedSongs(request):
    if request.method=='GET':
        user = request.user
        songs = user.likes.all()
        serializer = SongSerializer(songs,many=True)
    return Response(serializer.data)




@api_view(['POST','DELETE'])
@permission_classes([IsAuthenticated])
def handleLike(request,id):
    user = request.user
    song = Song.objects.get(pk=id)
    if request.method == "POST":
        song.likes.add(user)
        serializer = SongSerializer(song,many=False)
        return Response(serializer.data)
    elif request.method=="DELETE":
        song.likes.remove(user)
        return Response("deleted")