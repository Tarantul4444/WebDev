from django.urls import path
from .views import *

urlpatterns = [
    path('', products_list),
    path('products/', products_list),
    path('products/<int:product_id>/', product_detail),
    path('categories/', categories_list),
    path('categories/<int:category_id>/', category_detail),
    path('categories/<int:category_id>/products', category_products),
]