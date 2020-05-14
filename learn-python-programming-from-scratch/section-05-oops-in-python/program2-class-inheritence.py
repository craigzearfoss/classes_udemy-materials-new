class vehicle:
    wheels = 4
    def __init__(self):
        print("vehicle")
    def calcVelocity(self, x):
        return 3*x+10

class Car(vehicle):
    def __init__(self):
        self.speed = 10

example_car = Car()
print(example_car.speed)
print(example_car.calcVelocity(20))
print(example_car.wheels)