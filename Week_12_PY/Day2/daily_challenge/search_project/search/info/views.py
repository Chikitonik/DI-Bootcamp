from django.shortcuts import render, redirect
from .models import Phone, Person
from django.http import JsonResponse
from .forms import PersonForm

persons = Person.objects.all()
persons_list = []
for person in persons:
    person_data = {
        "id": person.id,
        "name": person.name,
        "email": person.email,
        "phone_number": str(person.phone_number.number),
        "address": person.address,
    }
    persons_list.append(person_data)

phones = Phone.objects.all()
phone_list = []
for phone in phones:
    phone_data = {
        "id": phone.id,
        "number": phone.number,
    }
    phone_list.append(phone_data)


def display_person_by_phonenumber(request, phonenumber):
    # should show the person’s information, depending on his phone number
    person_phone = [
        person for person in persons_list if person["phone_number"] == phonenumber]
    return JsonResponse({"person": person_phone})


def display_person_by_name(request, name):
    # should show the person’s information, depending on his name
    person_name = [
        person for person in persons_list if person["name"] == name]
    return JsonResponse({"person": person_name})


def display_all_persons(request):
    return JsonResponse({"persons": persons_list}, safe=False)


def add_person(request):
    if request.method == 'POST':
        form = PersonForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('add_person')
    else:
        form = PersonForm()

    context = {
        'form': form,
    }

    return render(request, 'search/add_person.html', context)
