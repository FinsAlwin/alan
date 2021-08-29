from api.models import Profile, TypeEst
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
import json
from django.contrib.auth.models import User,auth
from common.serializers import ProfileSerializer
from .models import Profile
from django.core import serializers

class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request):
        body_data = json.loads(request.body.decode())
        profileIdData = body_data['profileId']
        resturantNameData = body_data['resturantName']
        typeData = body_data['type']
        nameData = body_data['name']
        phoneData = body_data['phone']
        passwordData = body_data['password']
        descriptionData = body_data['description']

        if request.user.is_authenticated:
           current_user = request.user
           
           if TypeEst.objects.filter(typeId=typeData).exists():
            typbeObject = TypeEst.objects.get(typeId=typeData)
            profile = Profile.objects.get(profileId=profileIdData)
            
            profile.__dict__.update(resturantName=resturantNameData, 
                                        typeItem=typbeObject, description=descriptionData, 
                                        phone=phoneData, user=current_user) 
            profile.save()

            current_user.__dict__.update(first_name=nameData) 
            current_user.save()

            current_user.set_password(passwordData)  # replace with your real password
            current_user.save()
            
            data = {"Success"}
           else:
             data={"Key Empty or missing"}
        else:
            data={"User not Authenticated"}

        return Response(data)
        