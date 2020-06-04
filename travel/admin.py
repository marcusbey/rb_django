from django.contrib import admin
from django.contrib.gis.admin import OSMGeoAdmin
from .models import Location, Travel
# Register your models here.

@admin.register(Location)
class LocationAdmin(OSMGeoAdmin):
  list_display = ('name', 'position')


@admin.register(Travel)
class TravelAdmin(admin.ModelAdmin):
  list_display = ('place', 'status')


