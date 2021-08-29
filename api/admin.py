from django.contrib import admin
from .models import Category, CategoryImage, Items, ItemsImage ,Tables, TableImage ,TypeEst, Profile
# Register your models here.

admin.site.register(Category)
admin.site.register(CategoryImage)
admin.site.register(Items)
admin.site.register(ItemsImage)
admin.site.register(Tables)
admin.site.register(TableImage)
admin.site.register(TypeEst)
admin.site.register(Profile)

admin.site.site_header = "Yumme"