from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from .forms import WordGuessForm
from .models import Word, HighScore
import random


@method_decorator(login_required, name='dispatch')
class CountdownGameView(View):
    template_name = 'countdown/game.html'

    def get(self, request):
        random_word = Word.objects.filter(
            word_length__gte=6).order_by('?').first()
        characters = list(random_word.word_text)
        random.shuffle(characters)
        shuffled_word = ''.join(characters)
        form = WordGuessForm()
        request.session['guess_count'] = 0  # Initialize guess counter
        return render(request, self.template_name, {'shuffled_word': shuffled_word, 'form': form})

    def post(self, request):
        form = WordGuessForm(request.POST)
        if form.is_valid():
            guess = form.cleaned_data['guess']
            shuffled_word = request.POST['shuffled_word']
            user = request.user
            score = self.calculate_score(guess, shuffled_word)

            # Increment the guess counter
            request.session['guess_count'] = request.session.get(
                'guess_count', 0) + 1

            # Check if the user has reached the maximum number of guesses (3)
            if request.session['guess_count'] >= 3:
                # Display a message or perform actions for when the user has reached the maximum guesses
                return render(request, self.template_name, {'form': form, 'message': 'You have reached the maximum number of guesses.'})

            HighScore.objects.create(
                player=user, score=score, word_text=shuffled_word)

            return redirect('game_result', word=shuffled_word, score=score)
        return render(request, self.template_name, {'form': form, 'shuffled_word': request.POST['shuffled_word']})

    def shuffle_word(self, word):
        characters = list(word)
        random.shuffle(characters)
        shuffled_word = ''.join(characters)
        return shuffled_word

    def calculate_score(self, guess, shuffled_word):
        score = 0

        if guess == shuffled_word:
            score = 10
        else:
            length_difference = len(shuffled_word) - len(guess)

            if length_difference == 0:
                score = 8
            elif length_difference == 1:
                score = 5
            elif length_difference == 2:
                score = 3

        return score


def game_result(request, word, score):
    # Implement your logic to display the game result
    context = {'word': word, 'score': score}
    return render(request, 'countdown/game_result.html', context)
