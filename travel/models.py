from django.contrib.gis.db import models


# Create your models here.
class Location(models.Model):
  _next = 'Going'
  _now = 'Home'
  _done = 'Been'
  _old = 'Lived'
  _noth = 'Not'
  location_status = (
    (_next, 'Planning to visit'),
    (_now, 'Located now'),
    (_done, 'Visited'),
    (_old, 'Used to live here'),
    (_noth, 'No plan yet'),
    )
  location_name = models.CharField(max_length=50, null=True)
  country = models.CharField(max_length=50, null=True)
  position = models.PointField()
  status = models.CharField(max_length=6, choices = location_status, default = _noth)

  def __str__(self):
    return self.location_name
  @property
  def lat_lng(self):
    return list(getattr(self.position, 'coords', [])[::-1])


class Travel(models.Model):
  base = 'base'
  work = 'work'
  visit = 'visit'

  status_choice = (
    (base, 'Based'),
    (work, 'For work'),
    (visit, 'For visit'),
    )

  # A afficher en ordre Alphabetic
  city = models.ForeignKey(
              Location,
              on_delete=models.CASCADE,
              default = None
              )
  start = models.DateField()
  end = models.DateField()
  status = models.CharField(max_length = 6 , choices = status_choice, default = base)
  info = models.TextField(max_length = 300)

  def __str__(self):
    return self.city.location_name
  class Meta:
    verbose_name_plural = "Travels"


