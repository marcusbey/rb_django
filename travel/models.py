from django.contrib.gis.db import models


# Create your models here.
class Location(models.Model):
  _next = 'Going'
  _now = 'Base'
  _done = 'Been'
  _noth = 'Not'
  place_status = (
    (_next, 'Planning to visit'),
    (_now, 'Located now'),
    (_done, 'Visited'),
    (_noth, 'No plan yet'),
    )
  name = models.CharField(max_length = 30, null=True)
  position = models.PointField()
  status = models.CharField(max_length = 6, choices = place_status, default = _noth)

  def __str__(self):
    return self.name



class Travel(models.Model):
  base = 'base'
  work = 'work'
  visit = 'visit'

  status_choice = (
    (base, 'Based'),
    (work, 'For work'),
    (visit, 'For visit'),
    )
  place = models.ForeignKey(
              Location,
              on_delete=models.CASCADE,
              default = None
              )
  start = models.DateField()
  end = models.DateField()
  status = models.CharField(max_length = 6 , choices = status_choice, default = base)
  info = models.TextField(max_length = 300)

  def __str__(self):
    return self.place.name

  class Meta:
    verbose_name_plural = "Travels"


