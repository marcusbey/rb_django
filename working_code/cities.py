import os
import json

filename = "locations_base.json"

with open(str(filename)) as datafile:
  objects = json.load(datafile)


def count(my_list):
  new_list = []
  for element in my_list:
    name = element.get('city')
    if len(name) >= 30:
      new_list.append([len(name), name])
  return new_list

# print(count(objects))


