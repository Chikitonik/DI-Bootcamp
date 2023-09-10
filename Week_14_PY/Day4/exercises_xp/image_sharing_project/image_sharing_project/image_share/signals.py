# signals.py
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Image, Profile


@receiver(post_save, sender=Image)
def update_user_profile(sender, instance, created, **kwargs):
    if created:
        user = instance.user
        profile, created = Profile.objects.get_or_create(user=user)
        profile.uploaded_images_count = Image.objects.filter(user=user).count()
        profile.save()
