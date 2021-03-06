import random, os
from django.shortcuts import render
from django.views import generic
from django.contrib.gis.geos import Point
from travel.models import Travel, Location

# Create your views here.
# pages/views.py
from django.views.generic import TemplateView


def rand_background():
  background_urls = []
  dir_path = "static/img/backgrounds/"
  background_files = os.listdir(dir_path)
  for name in background_files:
    if name[0] != '.':
      background_urls.append('../' + dir_path + name)
  image = random.choice(background_urls)
  return [image, image[26:27]];


def index(request):
  background = rand_background();
  mode = 'dark' if background[1] == 'd' else 'light';
  title = "2omain 3030Ξ";
  return render(request, 'index.html', {'title': title, 'mode' : mode });

def home(request):
  background = rand_background()
  mode = 'dark' if background[1] == 'd' else 'light'
  display = 'hide'
  qs = Travel.objects.all()
  last_place = list(qs)[-1]
  context = {
            'background_url': background[0],
            'mode' : mode,
            'display': display,
            'travels_list' : qs,
            'last_place' : last_place
            }
  return render(request, 'home.html', context);



def now(request):
  return render(request, 'now.html');


def about(request):
  mode = 'dark'
  return render(request, 'about.html', {'mode' : mode });

def projects(request):
  return render(request, 'projects.html');

def contact(request):
  return render(request, 'contact.html');

