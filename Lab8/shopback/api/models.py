from django.db import models


class Category(models.Model):
    name = models.CharField('Name', max_length=50)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }


class Product(models.Model):
    name = models.CharField('Name', max_length=50)
    price = models.FloatField('Price', default=0)
    description = models.TextField('Description', default='')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=None)
    count = models.IntegerField('Count', default=0)
    is_active = models.BooleanField('IsActive', default=True)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'category': self.category.name,
            'count': self.count,
            'is_active': self.is_active,
        }
