from rest_framework import generics
from .models import Categoria, Producto
from .serializers import CategoriaSerializer, ProductoSerializer


class CategoriaListAPIView(generics.ListAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class ProductoListAPIView(generics.ListAPIView):
    queryset = Producto.objects.select_related('categoria').all()
    serializer_class = ProductoSerializer
