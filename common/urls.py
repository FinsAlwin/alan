from rest_framework import routers
from .api import CategoryViewset, CategoryUploadViewSet, ItemsViewSet, TablesViewSet,CategoryImageViewSet, ItemImageViewSet, TableImageViewSet, TypeViewSet

router = routers.DefaultRouter()
router.register('api/category', CategoryViewset, 'category')
router.register('api/categoryimage', CategoryImageViewSet, 'categoryimage')
router.register('api/categoryupload', CategoryUploadViewSet, 'categoryupload')
router.register('api/items', ItemsViewSet, 'items')
router.register('api/itemsimage', ItemImageViewSet, 'itemimage')
router.register('api/tables', TablesViewSet, 'tables')
router.register('api/tablesimage', TableImageViewSet, 'tablesimage')
router.register('api/type', TypeViewSet, 'type')


urlpatterns = router.urls