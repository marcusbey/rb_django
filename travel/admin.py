from django.contrib import admin
from django.contrib.gis.admin import OSMGeoAdmin
from .models import Travel, Place
# Register your models here.


@admin.register(Travel)

class TravelAdmin(OSMGeoAdmin):
  def location(self, name):
    return "\n".join([p.places for p in name.place.all()])

  list_display = ('location', 'status')
