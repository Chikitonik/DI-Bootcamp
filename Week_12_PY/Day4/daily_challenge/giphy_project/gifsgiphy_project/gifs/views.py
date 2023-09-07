from django.shortcuts import render, get_object_or_404, redirect
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


def increment_likes(request, gif_id):
    gif = get_object_or_404(Gif, pk=gif_id)
    gif.likes += 1
    gif.save()
    gifs = Gif.objects.all()
    search_form = GifSearchForm(request.GET)
    return render(request, 'all_gifs.html', {'gifs': gifs, 'search_form': search_form})


def decrement_likes(request, gif_id):
    gif = get_object_or_404(Gif, pk=gif_id)
    if gif.likes > 0:
        gif.likes -= 1
        gif.save()
    gifs = Gif.objects.all()
    search_form = GifSearchForm(request.GET)
    return render(request, 'all_gifs.html', {'gifs': gifs, 'search_form': search_form})


def positive_likes_gifs(request):
    gifs = Gif.objects.filter(likes__gt=0).order_by('-likes')
    return render(request, 'positive_likes_gifs.html', {'gifs': gifs})
