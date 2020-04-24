from django.shortcuts import render

# Create your views here.
# pages/views.py
from django.views.generic import TemplateView

def index(request):

  return render(request, 'index.html')

