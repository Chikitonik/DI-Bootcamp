# 🌟 Exercise 1: Currencies
# Instructions
from faker import Faker
import datetime
import string
import random


class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self) -> str:
        return f'{self.amount} {self.currency}'

    def __int__(self) -> int:
        return int(self.amount)

    def __repr__(self) -> str:
        return f'{self.amount} {self.currency}'

    def __add__(self, another_amount) -> int:
        if isinstance(another_amount, (int, float)):
            return self.amount + int(another_amount)
        elif isinstance(another_amount, Currency):
            if self.currency == another_amount.currency:
                return self.amount + another_amount.amount
            else:
                raise ValueError(
                    f"Cannot add between Currency type {self.currency} and {another_amount.currency}")
        else:
            raise ValueError("unsupported")

    def __iadd__(self, another_amount) -> int:
        if isinstance(another_amount, (int, float)):
            self.amount += int(another_amount)
            return self
        elif isinstance(another_amount, Currency):
            if self.currency == another_amount.currency:
                self.amount += another_amount.amount
                return self
            else:
                raise ValueError("different currency")
        else:
            raise ValueError("unsupported"
                             )
#     #Your code starts HERE


# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

str(c1)
# '5 dollars'

int(c1)
# 5

repr(c1)
# '5 dollars'

c1 + 5
# 10

c1 + c2
# 15

c1
# 5 dollars

c1 += 5
c1
# 10 dollars

c1 += c2
c1
# 20 dollars

c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>


# 🌟 Exercise 2: Import
# Instructions
# In a file named func.py create a function that adds 2 number, and prints the result
# In a file namedexercise_one.py import and the function
# Hint: You can use the the following syntaxes:

# import module_name

# OR

# from module_name import function_name

# OR

# from module_name import function_name as fn

# OR

# import module_name as mn


# 🌟 Exercise 3: Random Module
# Instructions
# Create a function that accepts a number between 1 and 100, then rolls a random number between 1 and 100,
# if it’s the same number, display a success message to the user, else don’t.


def random_num():
    while True:
        user_number = int(input('Input a number from 1 to 100: '))
        if 1 <= user_number <= 100:
            break
    if user_number == random.randint(1, 100):
        print('success')
    else:
        print('NOT success')


random_num()
# 🌟 Exercise 4: String Module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module
solution = ''
for _ in range(5):
    solution += random.choice(string.ascii_letters)

# 🌟 Exercise 5 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.


def return_current_date():
    return datetime.date.today().isoformat()


return_current_date()

# Exercise 6 : Amount Of Time Left Until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).


def to_january_1():
    current_datetime = datetime.datetime.now()
    january_1 = datetime.datetime(datetime.datetime.now().year + 1, 1, 1)

    time_left = january_1 - current_datetime

    days = time_left.days
    hours, remainder = divmod(time_left.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    print(
        f"The 1st of January is in {days} days and {hours} hours {minutes} minutes {seconds} seconds.")


to_january_1()

# Exercise 7 : Birthday And Minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice),
# then displays a message stating how many minutes the user lived in his life.


def from_birthday(birthday_str):
    birthday_date = datetime.datetime.strptime(birthday_str, '%Y-%m-%d')
    time_lived = datetime.datetime.now() - birthday_date

    days = time_lived.days
    hours, remainder = divmod(time_lived.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    print(
        f"You have lived {days} days and {hours} hours {minutes} minutes {seconds} seconds.")


from_birthday('2023-08-13')

# Exercise 8 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.


fake = Faker('en_US')
users = []


def users_add():
    users.append({'name': fake.user_name(),
                 'adress': fake.address(), 'country': fake.country()})


users_add()
users_add()
users_add()
print(users)
