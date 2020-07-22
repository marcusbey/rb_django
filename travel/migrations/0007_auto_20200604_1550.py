# Generated by Django 3.0.4 on 2020-06-04 15:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('travel', '0006_auto_20200604_0817'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='contry',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='location',
            name='status',
            field=models.CharField(choices=[('Going', 'Planning to visit'), ('Home', 'Located now'), ('Been', 'Visited'), ('Lived', 'Used to live here'), ('Not', 'No plan yet')], default='Not', max_length=6),
        ),
    ]
