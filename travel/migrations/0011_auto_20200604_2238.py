# Generated by Django 3.0.4 on 2020-06-04 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('travel', '0010_auto_20200604_2131'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='country',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='location',
            name='location_name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
