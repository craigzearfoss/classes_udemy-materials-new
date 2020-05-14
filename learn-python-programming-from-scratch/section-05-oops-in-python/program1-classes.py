class Car:
    def __init__(self):
        self.speed = 10
    def calcVelocity(self, x):
        return 3*x+10

example_car = Car()
print(example_car.speed)
print(example_car.calcVelocity(20))