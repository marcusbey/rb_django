from django.shortcuts import render

# Create your views here.
# pages/views.py
from django.views.generic import TemplateView

def index(request):
  title = "2omain 3030Ξ"
  return render(request, 'index.html', {'title': title})

def home(request):
  return render(request, 'home.html')

def now(request):
  return render(request, 'now.html')

def about(request):
  return render(request, 'about.html')

def projects(request):
  return render(request, 'projects.html')

def contact(request):
  return render(request, 'contact.html')

