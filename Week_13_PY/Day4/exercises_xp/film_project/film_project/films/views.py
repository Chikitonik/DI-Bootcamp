from django.views.generic import DeleteView
from django.urls import reverse_lazy
from django.views.generic import ListView
from django.views.generic.edit import CreateView
from .models import Film, Director, Review
from .forms import FilmForm, DirectorForm, ReviewForm
from django.core.exceptions import PermissionDenied
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib import messages
from django.shortcuts import get_object_or_404, redirect
from django.views import View
from django.views.generic.detail import DetailView


class HomePageView(ListView):
    model = Film
    template_name = 'homepage.html'
    context_object_name = 'films'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        films = context['films']
        for film in films:
            film.directors = film.director.all()
            # Format release date in a human-friendly format
            film.formatted_release_date = film.release_date.strftime(
                '%B %d, %Y')
        return context


@method_decorator(login_required, name='dispatch')
class FilmCreateView(CreateView):
    model = Film
    form_class = FilmForm
    template_name = 'film/addFilm.html'
    success_url = reverse_lazy('addFilm')

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            raise PermissionDenied
        return super().dispatch(request, *args, **kwargs)


class DirectorCreateView(CreateView):
    model = Director
    form_class = DirectorForm
    template_name = 'director/addDirector.html'
    success_url = reverse_lazy('addDirector')


@method_decorator(login_required, name='dispatch')
class ReviewCreateView(LoginRequiredMixin, CreateView):
    model = Review
    form_class = ReviewForm
    template_name = "film/addReview.html"
    success_url = reverse_lazy("homepage")

    def form_valid(self, form):
        form.instance.review_author = self.request.user
        form.instance.film_id = self.request.POST.get('film_id')
        return super().form_valid(form)


class FilmDeleteView(LoginRequiredMixin, DeleteView):
    model = Film
    template_name = 'film/confirm_delete.html'
    # Redirect to the homepage after deletion
    success_url = reverse_lazy('homepage')

    def get_queryset(self):
        # Only allow superusers to delete films
        return Film.objects.filter(pk=self.kwargs['pk'])

    def delete(self, request, *args, **kwargs):
        messages.success(self.request, 'Film deleted successfully.')
        return super().delete(request, *args, **kwargs)


class FavoriteFilmView(View):
    def post(self, request, film_id):
        film = get_object_or_404(Film, pk=film_id)

        if request.user.favorite_films.filter(pk=film_id).exists():
            request.user.favorite_films.remove(film)
        else:
            request.user.favorite_films.add(film)

        return redirect('homepage')


class FilmDetailView(DetailView):
    model = Film
    template_name = 'film/filmDetail.html'
    context_object_name = 'film'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        film = context['film']
        film.directors = film.director.all()
        film.formatted_release_date = film.release_date.strftime('%B %d, %Y')
        return context
