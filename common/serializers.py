from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from api.models import Category, CategoryImage, Items, ItemsImage, Tables, TableImage, TypeEst, Profile
from api.serializers import UserSerializer
# from .models import Items

class CategoryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryImage
        fields = "__all__"

class ItemImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemsImage
        fields = "__all__"

class ItemsSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=100, allow_blank=True)
    description = serializers.CharField(max_length=200, allow_blank=True)
    
    itemImg = ItemImageSerializer( many=True, required=False)
    class Meta:
        model = Items
        fields = "__all__"
        # extra_kwargs = {'name': {'required': False}, 'description': {'required': False}}
        
        
class CategorySerializer(serializers.ModelSerializer):
    catImg = CategoryImageSerializer( many=True, required=False)
    items = ItemsSerializer( many=True, required=False)
    class Meta:
        model = Category
        fields = "__all__"

class TablesImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TableImage
        fields = "__all__"
        
class TablesSerializer(serializers.ModelSerializer):
    tableImg = TablesImageSerializer( many=True, required=False)
    class Meta:
        model = Tables
        fields = "__all__"
        
class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeEst
        fields = "__all__"


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"
    
    