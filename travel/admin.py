from django.contrib import admin
from django.contrib.gis.admin import OSMGeoAdmin
from .models import Travel, Place
# Register your models here.


@admin.register(Travel)
class TravelAdmin(OSMGeoAdmin):
  list_display = ('name', 'status')
