import requests
from django.core.management.base import BaseCommand
from cards.models import Card, User


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        User.objects.create(username='User1', email='user1@email.com')

        api_url = 'https://hp-api.onrender.com/api/characters'
        try:
            response = requests.get(api_url)
            response.raise_for_status()
            data = response.json()
            for item in data:
                Card.objects.create(
                    name_character=item['name'],
                    species=item['species'],
                    house=item['house'],
                    image_url=item['image'],
                    date_of_birth=item['dateOfBirth'],
                    patronus=item['patronus'],
                )
        except Exception as e:
            self.stderr.write(self.style.ERROR(f'An error: {e}'))
