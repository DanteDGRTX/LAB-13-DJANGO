from django.urls import path
from .views import CategoriaListAPIView, ProductoListAPIView

urlpatterns = [
    path('categorias/', CategoriaListAPIView.as_view(), name='categorias-list'),
    path('productos/', ProductoListAPIView.as_view(), name='productos-list'),
]
