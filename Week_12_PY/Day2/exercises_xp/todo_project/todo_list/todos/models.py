from django.db import models
from django.utils import timezone


class Category(models.Model):
    name = models.CharField(max_length=255)
    image = models.URLField()

    def __str__(self):
        return self.name


class Todo(models.Model):
    title = models.CharField(max_length=255)
    details = models.TextField()
    has_been_done = models.BooleanField(default=False)
    date_creation = models.DateTimeField(default=timezone.now)
    date_completion = models.DateTimeField(null=True, blank=True)
    deadline_date = models.DateTimeField(null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
