import random, os
from django.shortcuts import render

# Create your views here.
# pages/views.py
from django.views.generic import TemplateView

def rand_background():
  background_urls = []
  dir_path = "static/img/backgrounds/"
  background_files = os.listdir(dir_path)
  for name in background_files:
    background_urls.append('../' + dir_path + name)
  return random.choice(background_urls);

def index(request):
  title = "2omain 3030Ξ";
  return render(request, 'index.html', {'title': title});


def home(request):
  background_url = rand_background();
  return render(request, 'home.html', {'background_url': background_url});

def now(request):
  return render(request, 'now.html');

def about(request):
  return render(request, 'about.html');

def projects(request):
  return render(request, 'projects.html');

def contact(request):
  return render(request, 'contact.html');

