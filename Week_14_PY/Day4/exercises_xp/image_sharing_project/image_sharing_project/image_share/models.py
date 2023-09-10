from django.db import models
from django.contrib.auth.models import User


class Image(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image_file = models.ImageField(upload_to='images/')
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    uploaded_images_count = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.user.username
