from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_gifs, name='all_gifs'),

]
