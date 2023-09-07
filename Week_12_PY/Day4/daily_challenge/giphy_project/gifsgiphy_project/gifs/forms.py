from django import forms


class GifSearchForm(forms.Form):
    search_query = forms.CharField(
        required=False, label='Search by title or category')
