# 🌟 Exercise 3 : Dogs Domesticated
# Instructions
# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True

# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.
import code
import random


class PetDog(code.Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        self.trained = True
        return super().bark()

    def play(self, *args):
        dog_names = self.name
        for dog in args:
            dog_names += ', ' + dog.name
        return f'{dog_names} all play together'

    def do_a_trick(self):
        tricks = [
            f'{self.name} does a barrel roll',
            f'{self.name} stands on his back legs',
            f'{self.name} shakes your hand',
            f'{self.name} plays dead']
        random_trick = random.choice(tricks)
        return random_trick


pet = PetDog('E', 1, 1)
print(pet.train())
pet_2 = PetDog('F', 12, 10)
pet_3 = PetDog('G', 13, 10)
print(pet_2.play(pet, pet_3))
print(pet.do_a_trick())
