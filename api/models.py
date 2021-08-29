from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Category(models.Model):
    catId = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    user = models.ForeignKey(
        User, related_name="usercat", on_delete=models.CASCADE, null=True)
    
    def __str__(self):
        return self.title

class CategoryImage(models.Model):
    catImgId = models.AutoField(primary_key=True)
    user = models.ForeignKey(
        User, related_name="userimgcat", on_delete=models.CASCADE, null=True)
    image = models.ImageField(upload_to='category',null=True, blank=True)
    category = models.ForeignKey(
        Category, related_name="catImg", on_delete=models.CASCADE, null=True)

    
class Items(models.Model):
    itemId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    category = models.ForeignKey(
        Category, related_name="items", on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(
        User, related_name="useritem", on_delete=models.CASCADE, null=True)
   
    def __str__(self):
        return self.name


class ItemsImage(models.Model):
    itemImgId = models.AutoField(primary_key=True)
    user = models.ForeignKey(
        User, related_name="userimgitem", on_delete=models.CASCADE, null=True)
    image = models.ImageField(upload_to='items',null=True, blank=True)
    items = models.ForeignKey(
        Items, related_name="itemImg", on_delete=models.CASCADE, null=True)

class Tables(models.Model):
    tableId = models.AutoField(primary_key=True)
    tableNumber = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    chair = models.IntegerField()
    user = models.ForeignKey(
        User, related_name="usertable", on_delete=models.CASCADE, null=True)
    isActive = models.BooleanField(default=False)
    isNotify = models.BooleanField(default=False)

    def __str__(self):
        return self.tableNumber

class TableImage(models.Model):
    tableImgId = models.AutoField(primary_key=True)
    user = models.ForeignKey(
        User, related_name="userimgtable", on_delete=models.CASCADE, null=True)
    image = models.ImageField(upload_to='tables',null=True, blank=True)
    table = models.ForeignKey(
        Tables, related_name="tableImg", on_delete=models.CASCADE, null=True)

class TypeEst(models.Model):
    typeId = models.AutoField(primary_key=True)
    type = models.CharField(max_length=100)

class Profile(models.Model):
    profileId = models.AutoField(primary_key=True)
    resturantName = models.CharField(max_length=100)
    phone = models.IntegerField(max_length=15)
    description = models.CharField(max_length=200)
    user = models.ForeignKey(
        User, related_name="userProfile", on_delete=models.CASCADE, null=True)
    typeItem = models.ForeignKey(
        TypeEst, related_name="typeitem", on_delete=models.CASCADE, null=True)
    