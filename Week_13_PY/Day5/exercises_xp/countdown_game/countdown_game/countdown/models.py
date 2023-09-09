from django.db import models
from django.contrib.auth.models import User


class HighScore(models.Model):
    player = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.IntegerField()
    word_text = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.player.username}'s High Score: {self.score} for Word: {self.word_text}"


class Word(models.Model):
    word_text = models.CharField(max_length=100)
    word_length = models.IntegerField()
    category = models.CharField(max_length=50)

    def __str__(self):
        return f"Word: {self.word_text}, Length: {self.word_length}, Category: {self.category}"
