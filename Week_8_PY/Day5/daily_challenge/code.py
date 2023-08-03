# Challenge 1 : Sorting
# Instructions
# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:
# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world
unsorted_string = input('Input comma separated sequence of words: ')
sorted_list = unsorted_string.split(',')
sorted_list.sort()
print(','.join(sorted_list))

# Challenge 2 : Longest Word
# Instructions
# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
# Examples
# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"
# longest_word("A thing of beauty is a joy forever.") ➞ "forever."
# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"


def longest_word(phrase):
    words_list = ([word.strip() for word in phrase.split(' ') if word.strip()])
    the_longest_word = max(words_list, key=len)
    return the_longest_word


longest_word("Margaret's toy is a pretty doll.")
