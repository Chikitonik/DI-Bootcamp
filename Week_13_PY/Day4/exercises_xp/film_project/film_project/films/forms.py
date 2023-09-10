from django import forms
from .models import Film, Director, Review, Producer
from django.forms import formset_factory


class FilmForm(forms.ModelForm):
    class Meta:
        model = Film
        fields = '__all__'


class DirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = '__all__'


class ReviewForm(forms.ModelForm):
    film_id = forms.ModelChoiceField(
        queryset=Film.objects.all(), widget=forms.HiddenInput())

    class Meta:
        model = Review
        fields = ["rating", "review_text"]

    def __init__(self, *args, **kwargs):
        user = kwargs.pop("user", None)
        super().__init__(*args, **kwargs)
        if user:
            self.fields["review_author"].initial = user
            self.fields["review_author"].widget = forms.HiddenInput()


class ProducerForm(forms.ModelForm):
    class Meta:
        model = Producer
        fields = ['first_name', 'last_name']


ProducerFormSet = formset_factory(ProducerForm, extra=1)
