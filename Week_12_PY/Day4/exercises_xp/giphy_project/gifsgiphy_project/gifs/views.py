from django.shortcuts import render
from .models import Gif
from .forms import GifSearchForm


def all_gifs(request):
    gifs = Gif.objects.all()
    search_form = GifSearchForm(request.GET)

    if search_form.is_valid():
        search_query = search_form.cleaned_data['search_query']
        gifs = gifs.filter(title__icontains=search_query) | gifs.filter(
            categories__name__icontains=search_query)

    return render(request, 'all_gifs.html', {'gifs': gifs, 'search_form': search_form})
