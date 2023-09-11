from django.db.models import Avg
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import BookReview


@receiver(post_save, sender=BookReview)
def update_book_rating(sender, instance, **kwargs):
    book = instance.book
    # Calculate the average rating for the book's reviews
    average_rating = BookReview.objects.filter(
        book=book).aggregate(avg_rating=Avg('rating'))['avg_rating']
    # Update the book's rating field
    book.rating = average_rating
    book.save()
