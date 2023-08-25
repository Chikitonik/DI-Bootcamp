# Instructions
# Using this REST Countries API, create the functionality which will write 10 random countries to your database.

# These are the attributes which you should populate your tables with: name, capital, flag, subregion, population.

import requests
import random

response = requests.get("https://restcountries.com/v3.1/all")
random_countries_list = []

if response.status_code == 200:
    countries_data = response.json()
    rnd_countries_data = random.sample(countries_data, 10)
    for country_data in rnd_countries_data:
        random_countries_list.append({
            'country_name': country_data['name']['common'],
            'capital': country_data.get('capital', 'N/A'),
            'flag': country_data.get('flag', 'N/A'),
            'subregion': country_data.get('subregion', 'N/A'),
            'population': country_data.get('population', 'N/A')
        })

else:
    print(f"Failed to fetch data. Status code: {response.status_code}")

for country in random_countries_list:
    print(country)
