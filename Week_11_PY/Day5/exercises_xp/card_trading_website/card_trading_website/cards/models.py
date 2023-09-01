from django.db import models
import random


class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=30, unique=True)
    email = models.EmailField(unique=True)
    amount_of_money = models.DecimalField(
        max_digits=10, decimal_places=2, default=1000)
    points = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.username


def generate_random_price():
    return round(random.uniform(200, 2000), 2)


def generate_random_xp():
    return round(random.uniform(1, 10), 2)


class Card(models.Model):
    id = models.AutoField(primary_key=True)
    name_character = models.CharField(max_length=100)
    species = models.CharField(max_length=100)
    house = models.CharField(max_length=100)
    image_url = models.URLField()
    date_of_birth = models.CharField(null=True)
    patronus = models.CharField(max_length=100)
    price = models.DecimalField(
        max_digits=10, decimal_places=2, default=generate_random_price)
    xp_points = models.PositiveIntegerField(default=generate_random_xp)
    current_owner = models.ForeignKey(
        User, related_name='owned_cards', on_delete=models.SET_NULL, null=True)
    previous_owner = models.ForeignKey(
        User, related_name='transferred_cards', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name_character
