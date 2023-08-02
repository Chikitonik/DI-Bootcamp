import random
from datetime import datetime
# 🌟 Exercise 1 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40

# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.


def get_random_temp(season):
    val = False
    if season == 'winter':
        val = random.randint(-10, 16)
    if season == 'spring':
        val = random.randint(17, 24)
    if season == 'summer':
        val = random.randint(25, 39)
    if season == 'autumn':
        val = random.randint(17, 24)
    return val


def main():
    season = input('Input season ')
    rnd_temp = get_random_temp(season)
    if rnd_temp == False:
        return print("Error season")

    print(f'The temperature right now is {rnd_temp} degrees Celsius.')
    if rnd_temp <= 0:
        print('Brrr, that’s freezing! Wear some extra layers today')
    if 0 < rnd_temp < 15:
        print('Quite chilly! Don’t forget your coat')
    if 16 < rnd_temp < 24:
        print('norm')
    if 24 < rnd_temp < 32:
        print('pretty hot')
    if 31 < rnd_temp < 40:
        print('hot')


main()

# 🌟 Exercise 2 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.


def quiz(data):
    correct = 0
    incorrect = 0
    for question_answer in data:
        user_answer = input(question_answer['question'])
        if user_answer == question_answer['answer']:
            correct += 1
        else:
            incorrect += 1
    return print(f'correct {correct}, incorrect {incorrect}')


quiz(data)

# Exercise 3 : When Will I Retire ?
# Instructions
# The point of the exercise is to check if a person can retire depending on their age and their gender.
# Note : Let’s say retirement age is 67 for men, and 62 for women (born after April, 1947).

# Create a function get_age(year, month, day)
# Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
# After calculating the age of a person, the function should return the age (the age is an integer).
# Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# Calculate. You may need to do a little more hard-coding here.
# Return True if the person can retire, and False if he/she can’t.
# Some Hints

# Ask for the user’s gender as “m” or “f”.
# Ask for the user’s date of birth in the form of “yyyy/mm/dd”, eg. “1993/09/21”.
# Call can_retire to get a definite value for whether the person can or can’t retire.
# Display a message informing the user whether they can retire or not.
# As always, test your code to ensure it works.


def get_age(birthday_str):
    birthday = datetime.strptime(birthday_str, "%Y/%m/%d")
    today = datetime.today()
    age = today.year - birthday.year - \
        ((today.month, today.day) < (birthday.month, birthday.day))
    return age


def can_retire():
    birthday_str = input('Tap your birthday yyyy/mm/dd ')
    gender = input('Input your gender m or f ')
    age = get_age(birthday_str)
    if gender == 'm' and age >= 67:
        return print('You can retire')
    if gender == 'f' and age >= 62:
        return print('You can retire')
    else:
        return print('You can not retire')


can_retire()

# Exercise 4:
# Instructions
# Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.
# Example:

# If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333)

# Hint: treating our number as a int or a str at different points in our code may be helpful


def function_exercise_4(num):
    num = str(num)
    numbers = [num, num*2, num*3, num*4]
    return print(sum(map(int, numbers)))


function_exercise_4(3)
