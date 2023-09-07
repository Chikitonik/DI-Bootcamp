from django.db import models
from django.utils import timezone


class Country(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Director(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Film(models.Model):
    title = models.CharField(max_length=255)
    release_date = models.DateTimeField(default=timezone.now)
    created_in_country = models.ForeignKey(
        Country, on_delete=models.CASCADE, related_name='films_created')
    available_in_countries = models.ManyToManyField(
        Country, related_name='films_available')
    category = models.ManyToManyField(Category)
    director = models.ManyToManyField(Director)

    def __str__(self):
        return self.title
