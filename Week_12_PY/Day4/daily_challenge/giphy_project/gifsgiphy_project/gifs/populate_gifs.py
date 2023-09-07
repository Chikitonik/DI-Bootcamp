import requests
from models import Gif, Category
from faker import Faker
import random

# Function to fetch data from the GIPHY API


def fetch_gifs_from_giphy():
    api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    url = f"https://api.giphy.com/v1/gifs/trending?limit=20&rating=g&api_key={api_key}"

    try:
        response = requests.get(url)
        data = response.json()

        faker = Faker()
        categories = ["Funny", "Cute", "Cool", "Awesome",
                      "Animals", "Dance", "Sports", "Nature", "Science", "Art"]

        for gif_data in data.get("data", []):
            gif_url = gif_data.get("images", {}).get(
                "original", {}).get("url", "")
            gif_title = gif_data.get("title", "")
            uploader_name = faker.name()

            gif = Gif(title=gif_title, url=gif_url,
                      uploader_name=uploader_name)
            gif.save()

            # Add at least 2 random categories to each gif
            random_categories = random.sample(categories, 2)
            for category_name in random_categories:
                category, _ = Category.objects.get_or_create(
                    name=category_name)
                gif.categories.add(category)

            print(f"Added GIF: {gif_title}")

    except Exception as e:
        print(f"An error occurred while fetching GIFs from GIPHY: {e}")


if __name__ == "__main__":
    fetch_gifs_from_giphy()
