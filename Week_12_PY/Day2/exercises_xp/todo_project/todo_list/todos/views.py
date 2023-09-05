from django.shortcuts import render, redirect
from .models import Todo
from .forms import TodoForm


def tasks_list(request):
    todos = Todo.objects.all()
    context = {'todos': todos}
    return render(request, 'tasks_list.html', context)


def add_todo(request):
    if request.method == 'POST':
        form = TodoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('add_todo')
    else:
        form = TodoForm()

    todos = Todo.objects.all()

    context = {
        'form': form,
        'todos': todos,
    }

    return render(request, 'add_todo.html', context)
