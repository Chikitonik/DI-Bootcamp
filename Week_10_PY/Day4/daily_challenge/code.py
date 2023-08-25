# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code

# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.


# Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

# Implement a classmethod that returns a Text instance but with a text file:

#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.


# Now, use the provided the_stranger.txt file and try using the class you created above.


# Bonus:
# Create a class called TextModification that inherits from Text.

# Implement the following methods:
# a method that returns the text without any punctuation.
# a method that returns the text without any english stop-words (check out what this is !!).
# a method that returns the text without any special characters.
# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)
import string
from collections import Counter


class Text():

    def __init__(self, file_path):
        self.file_path = file_path
        self.words = []
        self.unique_words = set()
        with open(file_path, 'r') as file:
            for line in file:
                line_words = line.strip().split()
                line_words = [word.strip(string.punctuation)
                              for word in line_words]
                self.words.extend(line_words)
                self.unique_words.update(line_words)
        self.words = [word.lower() for word in self.words]
        self.unique_words = {word.lower() for word in self.unique_words}

    def word_frequency(self, word):
        word_count = self.words.count(word.lower())
        if word_count == 0:
            return None
        else:
            return word_count

    def the_most_common_word(self):
        word_counter = Counter(self.words)
        most_common = word_counter.most_common(1)
        return most_common[0] if most_common else None

    def get_unique_words_set(self):
        return list(self.unique_words)


text = Text('the_stranger.txt')
print(text.word_frequency('Prosecutor'))
print(text.the_most_common_word())
print(text.get_unique_words_set())
