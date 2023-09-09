from django import forms


class WordGuessForm(forms.Form):
    guess = forms.CharField(
        max_length=50,
        widget=forms.TextInput(attrs={'autofocus': 'autofocus'})
    )
