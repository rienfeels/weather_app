import requests
from django.http import JsonResponse
from .models import WeatherData

def get_weather(request):
    city = request.GET.get('city', 'London')
    api_key = 'bdbfbae0dda6350e9e9302de060c4468'
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=imperial"

    response = requests.get(url)
    data = response.json()

    if response.status_code == 200:
        # def save_weather_data(city, temperature, description):
        #     WeatherData.objects.create(city=city, temperature=temperature, description=description)
        return JsonResponse(data)
    else:
        return JsonResponse({'error': 'Failed to fetch data'}, status=500)
