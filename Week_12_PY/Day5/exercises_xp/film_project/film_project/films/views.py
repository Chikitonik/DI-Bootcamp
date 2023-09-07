from django.urls import reverse_lazy
from django.views.generic import ListView
from django.views.generic.edit import CreateView
from .models import Film, Director
from .forms import FilmForm, DirectorForm


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


class FilmCreateView(CreateView):
    model = Film
    form_class = FilmForm
    template_name = 'film/addFilm.html'
    success_url = reverse_lazy('addFilm')


class DirectorCreateView(CreateView):
    model = Director
    form_class = DirectorForm
    template_name = 'director/addDirector.html'
    success_url = reverse_lazy('addDirector')
