from django.contrib import admin
from django.urls import path, include, re_path
from frontend.views import index
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('backend/', include('api.urls')),
    path('common/', include('common.urls')),
    path('', include('frontend.urls')),
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
