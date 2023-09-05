from django import forms
from .models import Todo, Category


class TodoForm(forms.ModelForm):
    category = forms.ModelChoiceField(queryset=Category.objects.all())

    class Meta:
        model = Todo
        fields = ['title', 'details', 'has_been_done',
                  'date_creation', 'date_completion', 'deadline_date', 'category']
