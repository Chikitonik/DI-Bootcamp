from django.shortcuts import render, get_object_or_404
from .models import Card, User
from django.http import JsonResponse


cards = Card.objects.all()
cards_list = []
for card in cards:
    card_data = {
        "id": card.id,
        "name": card.name_character,
        "species": card.species,
        "house": card.house,
        "image": card.image_url,
        "date of birth": card.date_of_birth,
        "patronus": card.patronus,
        "price": card.price,
        "xp_points": card.xp_points,
        "current owner": card.current_owner,
        "previous owner": card.previous_owner,
    }
    cards_list.append(card_data)


def display_all_cards(request):
    context = {'cards': cards_list}
    return render(request, 'cards.html', context)


def display_one_card(request, card_id):
    card = get_object_or_404(Card, id=card_id)
    card_data = {
        "id": card.id,
        "name": card.name_character,
        "species": card.species,
        "house": card.house,
        "image": card.image_url,
        "date_of_birth": card.date_of_birth,
        "patronus": card.patronus,
        "price": card.price,
        "xp_points": card.xp_points,
        "current_owner": card.current_owner,
        "previous_owner": card.previous_owner,
    }

    context = {'card': card_data}
    return render(request, 'card_detail.html', context)


def user_profile(request, user_id):
    user = get_object_or_404(User, pk=user_id)
    context = {'user': user}
    return render(request, 'user_profile.html', context)


def buy_one_card(request, card_id, user_id):
    card = get_object_or_404(Card, pk=card_id)
    user = get_object_or_404(User, pk=user_id)

    if user.amount_of_money >= card.price:
        card.current_owner = user
        card.save()
        user.points += card.xp_points
        user.save()
        user.amount_of_money -= card.price
        user.save()

        # return redirect('homepage')
    else:
        return render(request, 'not_enough_money.html')


def sell_one_card(request, card_id, user_id):
    card = get_object_or_404(Card, pk=card_id)
    user = get_object_or_404(User, pk=user_id)

    if card.current_owner == user:
        card.current_owner = None
        card.save()
        user.points -= card.xp_points
        user.save()
        card.previous_owner = user
        card.save()

        # return redirect('user_profile', user_id=user.id)
    else:
        return render(request, 'not_card_owner.html')
