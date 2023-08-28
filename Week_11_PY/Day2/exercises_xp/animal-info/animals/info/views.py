from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from . import data
# Create your views here.


def index(request):
    return HttpResponse("Hello, world. You're at index.")


def display_all_animals(request):
    # should show a list of all the animals. Display all the information : name, legs, weight, height and speed
    return JsonResponse({"animals": data.animals})


def display_all_families(request):
    # should show a list of all the families’ name.
    return JsonResponse({"animals": data.families})


def display_one_animal(request, animal_id):
    # should show the information about one animal depending on its id.
    return JsonResponse({"animal": data.animals[animal_id]})


def display_animal_per_family(request, family_id):
    # should show the information about all the animals from the family (Hint: check the family key in the dictionaries of the animals list)
    family_animals = [
        animal for animal in data.animals if animal["family"] == family_id]
    if family_animals:
        return JsonResponse({"animals": family_animals})
