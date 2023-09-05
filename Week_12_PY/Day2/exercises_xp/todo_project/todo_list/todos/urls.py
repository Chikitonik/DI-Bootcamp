from django.urls import path
from . import views

urlpatterns = [
    path('tasks_list/', views.tasks_list, name='tasks_list'),
    path('add_todo/', views.add_todo, name='add_todo'),
]
