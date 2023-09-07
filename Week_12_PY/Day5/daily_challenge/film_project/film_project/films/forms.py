from django import forms
from .models import Film, Director, Review


class FilmForm(forms.ModelForm):
    class Meta:
        model = Film
        fields = '__all__'


class DirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = '__all__'


class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['film', 'review_text', 'rating']
        widgets = {
            'rating': forms.RadioSelect(choices=Review.RATING_CHOICES),
        }
