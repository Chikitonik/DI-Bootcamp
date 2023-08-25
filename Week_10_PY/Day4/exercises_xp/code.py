# 🌟 Exercise 1 – Random Sentence Generator
# Instructions
# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.

# Hint : The generated sentences do not have to make sense.

# Download this word list

# Save it in your development directory.

# Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?

# Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
# use the words list to get your random words.
# the amount of words should be the value of the length parameter.

# Take the random words and create a sentence (using a python method), the sentence should be lower case.

# Create a function called main which will:

# Print a message explaining what the program does.

# Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# If the user inputs incorrect data, print an error message and end the program.
# If the user inputs correct data, run your code.
import json
import random


def get_words_from_file():
    file_path = 'sowpods.txt'
    words = []
    with open(file_path, 'r') as file:
        for word in file:
            words.append(word.strip())
    return words


def get_random_sentence(length):
    sentence = []
    words = get_words_from_file()
    for i in range(length):
        sentence.append(random.choice(words).lower())
    return ' '.join(sentence)


def main():
    print('This program does..')
    try:
        length = int(input('how long you want the sentence to be: '))
        if 2 > length > 21:
            raise ValueError('Error value')
        else:
            print(get_random_sentence(length))
    except ValueError as e:
        print(e)


main()

# 🌟 Exercise 2: Working With JSON
# Instructions
sampleJson = """{
   "company":{
      "employee":{
         "name":"emma",
         "payable":{
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""


# Access the nested “salary” key from the JSON-string above.
# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
# Save the dictionary as JSON to a file.

json_converted = json.loads(sampleJson)
salary = json_converted['company']['employee']['payable']['salary']
print(salary)

json_converted['company']['employee']['birth_date'] = '25.08.2023'
with open('updated_json.json', 'w') as json_file:
    json.dump(json_converted, json_file, indent=4)
