from django.http import JsonResponse
from .models import *


def products_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)})
    return JsonResponse(product.to_json())


def categories_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)


def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)})
    return JsonResponse(category.to_json())


def category_products(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as exception:
        return JsonResponse({'exception': str(exception)})
    products = Product.objects.filter(category=category)
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)
