from django.shortcuts import render
from django.http import JsonResponse
from django.core.serializers import serialize
from .models import Family, Animal

animals = Animal.objects.all()
animal_list = []
for animal in animals:
    animal_data = {
        "id": animal.id,
        "name": animal.name,
        "legs": animal.legs,
        "weight": animal.weight,
        "height": animal.height,
        "speed": animal.speed,
        "family": animal.family.name
    }
    animal_list.append(animal_data)

families = Family.objects.all()
family_list = []
for family in families:
    family_data = {
        "id": family.id,
        "name": family.name,
    }
    family_list.append(family_data)


def display_all_animals(request):
    return JsonResponse({"animals": animal_list}, safe=False)


def display_all_families(request):
    return JsonResponse({"families": family_list}, safe=False)


def display_one_animal(request, animal_id):
    return JsonResponse({"animal": animal_list[animal_id]})


def display_animal_per_family(request, family_id):
    family = str(Family.objects.get(pk=family_id))
    family_animals = [
        animal for animal in animal_list if animal["family"] == family]
    return JsonResponse({"animals": family_animals})
