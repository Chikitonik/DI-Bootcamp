from django.db.models import Avg, Count
from django.contrib.auth.views import LoginView, LogoutView, PasswordChangeView
from django.shortcuts import render, get_object_or_404, redirect
from .models import Book, BookReview
from .forms import BookReviewForm


def book_search(request):
    books = Book.objects.filter(...)  # Customize this filter as needed
    return render(request, 'book_search.html', {'books': books})


def book_detail(request, book_id):
    book = get_object_or_404(Book, pk=book_id)
    reviews = BookReview.objects.filter(book=book)
    return render(request, 'book_detail.html', {'book': book, 'reviews': reviews})


def write_review(request, book_id):
    book = get_object_or_404(Book, pk=book_id)

    if request.method == 'POST':
        form = BookReviewForm(request.POST)
        if form.is_valid():
            review = form.save(commit=False)
            review.book = book
            review.user = request.user
            review.save()
            return redirect('book_detail', book_id=book_id)
    else:
        form = BookReviewForm()

    return render(request, 'write_review.html', {'book': book, 'form': form})


class CustomLoginView(LoginView):
    template_name = 'login.html'
    redirect_authenticated_user = True


class CustomLogoutView(LogoutView):
    next_page = 'book_search.html'


class CustomPasswordChangeView(PasswordChangeView):
    template_name = 'password_change.html'
    success_url = 'book_search.html'


def book_detail(request, book_id):
    book = get_object_or_404(Book, pk=book_id)

    # Calculate average rating and count of reviews for the book
    book_reviews = BookReview.objects.filter(book=book)
    average_rating = book_reviews.aggregate(
        avg_rating=Avg('rating'))['avg_rating']
    review_count = book_reviews.count()

    return render(request, 'book_detail.html', {
        'book': book,
        'reviews': book_reviews,
        'average_rating': average_rating,
        'review_count': review_count,
    })
