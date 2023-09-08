from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model


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


class Review(models.Model):
    review_author = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE)
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField()
    review_text = models.TextField()
    review_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Review by {self.review_author.email} for {self.film.title}"
