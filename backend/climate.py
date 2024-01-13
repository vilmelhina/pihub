from sense_hat import SenseHat

class Climate:
    def __init__(self):
        self.sense = SenseHat()

    def get_pressure(self):
        return self.sense.get_pressure()

    def get_humidity(self):
        return self.sense.get_humidity()

    def get_temperature(self):
        # TODO: change to other thermometer further from Pi
        return self.sense.get_temperature()