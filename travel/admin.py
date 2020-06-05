from django.contrib import admin
from .models import Location, Travel
from django.contrib.gis.admin import OSMGeoAdmin
#from leaflet.admin import LeafletGeoAdmin
# Register your models here.

@admin.register(Location)
class LocationAdmin(OSMGeoAdmin):
  list_display = ('location_name', 'position')


@admin.register(Travel)
class TravelAdmin(admin.ModelAdmin):
  list_display = ('city', 'status')


