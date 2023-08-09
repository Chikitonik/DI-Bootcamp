# Part 2: Create A Deck Of Cards Class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.
import random


class Card:
    def __init__(self, suit, value) -> None:
        self.suit = suit
        self.value = value


class Deck:
    def __init__(self) -> None:
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
        self.desk = []
        for suit in suits:
            for value in values:
                self.desk.append(Card(suit, value))

    def shuffle(self):
        if len(self.desk) == 52:
            random.shuffle(self.desk)

    def deal(self):
        card = self.desk[0]
        self.desk.remove(card)
        return card
