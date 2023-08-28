from django.shortcuts import render
from django.http import JsonResponse, HttpResponse

# Create your views here.
name = 'Bob Smith'
age = 35
country = 'USA'

people = ['bob', 'martha', 'fabio', 'john']

all_people = [
    {
        'id': 1,
        'name': 'Bob Smith',
        'age': 35,
        'country': 'USA'
    },
    {
        'id': 2,
        'name': 'Martha Smith',
        'age': 60,
        'country': 'USA'
    },
    {
        'id': 3,
        'name': 'Fabio Alberto',
        'age': 18,
        'country': 'Italy'
    },
    {
        'id': 4,
        'name': 'Dietrich Stein',
        'age': 85,
        'country': 'Germany'
    }
]


def display_person(request):
    context = {'person': {'name': name, 'age': age, 'country': country}}
    return render(request, 'person.html', context)


def display_people(request):
    people.sort()
    capitalized_people = [person.capitalize() for person in people]
    context = {'capitalized_people': capitalized_people}
    return render(request, 'people.html', context)


def display_all_people(request):
    context = {'all_people': all_people}
    return render(request, 'all_people.html', context)
