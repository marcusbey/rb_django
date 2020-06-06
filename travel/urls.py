# pages/urls.py
from django.urls import path
from . import views

urlpatterns = [
  path('travel/', views.Traveler.as_view(), name = 'travel'),
]
