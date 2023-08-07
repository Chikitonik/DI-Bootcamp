# Exercise 1 : Family
# Instructions
# Create a class called Family and implement the following attributes:

# members: list of dictionaries with the following keys : name, age, gender and is_child (boolean).
# last_name : (string)
# Initial members data:
# [
#     {'name':'Michael','age':35,'gender':'Male','is_child':False},
#     {'name':'Sarah','age':32,'gender':'Female','is_child':False}
# ]
# Implement the following methods:
# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
# family_presentation: a method that prints the family’s last name and all the members’ first name.
class Family():
    def __init__(self, last_name) -> None:
        self.last_name = last_name
        self.members = [{'name': 'Michael', 'age': 35,
                        'gender': 'Male', 'is_child': False},
                        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}]

    def born(self, **kwargs):
        if 'name' in kwargs and 'age' in kwargs:
            new_member = {
                'name': kwargs['name'],
                'age': kwargs['age'],
                'gender': kwargs.get('gender', 'Unknown'),
                'is_child': kwargs.get('is_child', False)
            }
            self.members.append(new_member)
            print('Congratulations with a new family member')
        else:
            print('Missing name and/or age in the argument.')

    def family_presentation(self):
        print(self.last_name + "'s family:")
        for person in self.members:
            print(person['name'])

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] > 18:
                    return True
                return False
        return 'Not found'


mitchels = Family('Mitchel')
mitchels.born(name='Mal', age=3, gender='Male', is_child=True)
mitchels.family_presentation()
print(mitchels.is_18('Mal'))

# Exercise 2 : TheIncredibles Family
# Instructions
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore we need to add the following keys to our dictionaries: power and incredible_name.

# Initial members data:
# [
#     {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#     {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
# ]
# Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.
# Add a method called incredible_presentation which :
# Prints the family’s last name and all the members’ first name (ie. use the super() function, to call the family_presentation method)
# Prints all the members’ incredible name and power.
# Call the incredible_presentation method.
# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
# Call the incredible_presentation method again.


class TheIncredibles(Family):
    def __init__(self, last_name) -> None:
        super().__init__(last_name)
        self.members = [
            {'name': 'Michael', 'age': 35, 'gender': 'Male',
                'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
            {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False,
                'power': 'read minds', 'incredible_name': 'SuperWoman'}
        ]

    def use_power(self, name):
        if self.is_18(name):
            for member in self.members:
                try:
                    if member['name'] == name:
                        print(member['power'])
                    else:
                        raise RuntimeError('Less than 18 yo')
                except RuntimeError as e:
                    print(str(e))

    def born(self, **kwargs):
        super().born(**kwargs)
        for member in self.members:
            try:
                if member['name'] == kwargs['name']:
                    member['power'] = kwargs['power']
                    kwargs['incredible_name'] = kwargs['incredible_name']
            except RuntimeError as e:
                print(str(e))

    def incredible_presentation(self):
        super().family_presentation()
        for person in self.members:
            if 'incredible_name' in person:
                print(person['incredible_name'] + ':', person['power'])
            else:
                print('Superhero name not available for:', person['name'])


incredibles = TheIncredibles('The incredibles')
incredibles.incredible_presentation()
incredibles.born(name='Jack', age=3, gender='Male', is_child=True,
                 power='Unknown Power', incredible_name='No name')
incredibles.incredible_presentation()
