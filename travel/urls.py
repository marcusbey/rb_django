# pages/urls.py
from django.urls import path
from travel.views import Traveler

urlpatterns = [
  path('', Traveler.as_view(), name = 'travel'),
]
