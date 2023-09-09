from countdown.models import Word
import os
import django

# Calculate the path to your Django project's settings module
project_directory = os.path.dirname(os.path.abspath(__file__))
settings_module = 'countdown_game.settings'
django_settings_module = f"{project_directory}/{settings_module}"

# Set the DJANGO_SETTINGS_MODULE environment variable
os.environ.setdefault("DJANGO_SETTINGS_MODULE", django_settings_module)
django.setup()


def save_words_from_file(file_path):
    with open(file_path, 'r') as file:
        word_list = [line.strip() for line in file.readlines()]

    for word_text in word_list:
        word_length = len(word_text)
        category = "unknown"
        word = Word(word_text=word_text,
                    word_length=word_length, category=category)
        word.save()


if __name__ == "__main__":
    file_path = os.path.join(project_directory, 'sowpods.txt')
    save_words_from_file(file_path)
