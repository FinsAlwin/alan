# from django.shortcuts import render
# from rest_framework.permissions import IsAuthenticated
# from django.http.response import JsonResponse
# from rest_framework.parsers import JSONParser 
# from rest_framework.decorators import api_view
# import json

# @api_view(['POST',])
# def profile(request, *args, **kwargs):
#     permission_classes = [IsAuthenticated]
#     body_data = json.loads(request.body.decode())
#     print(body_data)
#     alwin ={
#         "alwin":"alwin"
#     }
    
#     return JsonResponse(alwin)

from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
import json

class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        body_data = json.loads(request.body.decode())
        resturantNameData = body_data['resturantName']
        typeData = body_data['type']
        nameData = body_data['name']
        emailData = body_data['email']
        phoneData = body_data['phone']
        passwordData = body_data['password']
        descriptionData = body_data['description']

        if resturantNameData == "":
            resturantNameExist = False
        else:
            resturantNameExist = False

        return Response(data)
        