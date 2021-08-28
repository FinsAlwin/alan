from rest_framework import  permissions, viewsets, views
from .serializers import CategorySerializer, ItemsSerializer, TablesSerializer, CategoryImageSerializer, ItemImageSerializer, TablesImageSerializer, TypeSerializer
from api.models import Category, Items, Tables, CategoryImage, ItemsImage, TableImage, TypeEst
from rest_framework.decorators import action
from rest_framework.response import Response

class CategoryViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_queryset(self):
        return self.request.user.usercat.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class CategoryUploadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_queryset(self):
        return self.request.user.usercat.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ItemsViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    queryset = Items.objects.all()
    serializer_class = ItemsSerializer

    def get_queryset(self):
        return self.request.user.useritem.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class TablesViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    queryset = Tables.objects.all()
    serializer_class = TablesSerializer

    def get_queryset(self):
        return self.request.user.usertable.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CategoryImageViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    queryset = CategoryImage.objects.all()
    serializer_class = CategoryImageSerializer

    @action(detail=True,methods=['post'])
    def upload_docs(request):
        try:
            file = request.data['file']
        except KeyError:
            raise ParseError('Request has no resource file attached')
        items = Items.objects.create(image=file)

    def get_queryset(self):
        return self.request.user.userimgcat.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ItemImageViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    queryset = ItemsImage.objects.all()
    serializer_class = ItemImageSerializer

    @action(detail=True,methods=['post'])
    def upload_docs(request):
        try:
            file = request.data['file']
        except KeyError:
            raise ParseError('Request has no resource file attached')
        items = Items.objects.create(image=file)

    def get_queryset(self):
        return self.request.user.userimgitem.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class TableImageViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    queryset = TableImage.objects.all()
    serializer_class = TablesImageSerializer

    @action(detail=True,methods=['post'])
    def upload_docs(request):
        try:
            file = request.data['file']
        except KeyError:
            raise ParseError('Request has no resource file attached')
        items = Items.objects.create(image=file)

    def get_queryset(self):
        return self.request.user.userimgtable.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class TypeViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    queryset = TypeEst.objects.all()
    serializer_class = TypeSerializer


