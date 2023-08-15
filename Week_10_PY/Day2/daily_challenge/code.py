import math

# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles


class Circle:
    def __init__(self, radius=None, diameter=None) -> None:
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError('Error in radius or diameter')

    def get_radius(self):
        return self.radius

    def get_diameter(self):
        return self.radius * 2

    def area(self):
        return self.radius ** 2 * math.pi

    def __repr__(self) -> str:
        return f'Circle radius {self.radius}'

    def __add__(self, another_circle):
        return Circle(radius=self.radius + another_circle.get_radius())

    def __eq__(self, another_circle):
        return self.radius == another_circle.get_radius()

    def __lt__(self, another_circle):
        return self.radius < another_circle.get_radius()

    def __gt__(self, another_circle):
        return self.radius > another_circle.get_radius()


circle_1 = Circle(radius=10)
print(circle_1.get_diameter())
print(circle_1.area())
print(circle_1)
circle_2 = Circle(radius=15)
circle_3 = circle_1 + circle_2
print(circle_3)
print(circle_1 > circle_2)
print(circle_1 < circle_2)
print(circle_1 == circle_2)
circles = [circle_3, circle_1, circle_2]
print(circles)
print(sorted(circles))
