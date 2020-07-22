from django.contrib import admin
from .models import Location, Travel
#from django.contrib.gis.admin import OSMGeoAdmin
from leaflet.admin import LeafletGeoAdmin
# Register your models here.

@admin.register(Location)
class LocationAdmin(LeafletGeoAdmin):
  default_lon=1400000
  default_lat=7495000
  default_zoom=12
  list_display = ('location_name', 'position')

@admin.register(Travel)
class TravelAdmin(admin.ModelAdmin):
  list_display = ('city', 'status')


