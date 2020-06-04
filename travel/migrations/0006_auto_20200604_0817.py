# Generated by Django 3.0.4 on 2020-06-04 08:17

import django.contrib.gis.db.models.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('travel', '0005_auto_20200603_0929'),
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, null=True)),
                ('position', django.contrib.gis.db.models.fields.PointField(srid=4326)),
                ('status', models.CharField(choices=[('Going', 'Planning to visit'), ('Base', 'Located now'), ('Been', 'Visited'), ('Not', 'No plan yet')], default='Not', max_length=6)),
            ],
        ),
        migrations.CreateModel(
            name='Travel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start', models.DateField()),
                ('end', models.DateField()),
                ('status', models.CharField(choices=[('base', 'Based'), ('work', 'For work'), ('visit', 'For visit')], default='base', max_length=6)),
                ('info', models.TextField(max_length=300)),
                ('place', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='travel.Location')),
            ],
            options={
                'verbose_name_plural': 'Travels',
            },
        ),
        migrations.DeleteModel(
            name='Places',
        ),
        migrations.DeleteModel(
            name='Travels',
        ),
    ]