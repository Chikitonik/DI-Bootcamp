from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_gifs, name='all_gifs'),
    path('increment_likes/<int:gif_id>/',
         views.increment_likes, name='increment_likes'),
    path('decrement_likes/<int:gif_id>/',
         views.decrement_likes, name='decrement_likes'),
    path('positive_likes/', views.positive_likes_gifs, name='positive_likes_gifs'),
]
