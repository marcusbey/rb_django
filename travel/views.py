from django.shortcuts import render
from django.views import generic
from django.contrib.gis.geos import Point
from .models import Travel, Location

# Create your views here.

class Traveler(generic.ListView):
    model = Location
    place = "me"
    queryset = Location.location_name
    template_name = "travel.html"
