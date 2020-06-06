from django.shortcuts import render
from django.views import generic
from django.contrib.gis.geos import Point
from .models import Travel, Location

# Create your views here.

class Traveler(generic.ListView):
    template_name = "travel_list.html"
    model = Travel
    place = "me"
    queryset = model.objects.all()

