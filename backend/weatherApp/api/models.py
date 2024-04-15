from django.db import models

class WeatherData(models.Model):
    city = models.CharField(max_length=255)
    temperature = models.FloatField()
    description = models.CharField(max_length=500)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.city} ({self.date.strtime('%Y-%m-%d')}) - {self.description}"