# Generated by Django 3.2.6 on 2021-08-28 06:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_profile'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='resturantName',
            field=models.CharField(default=0, max_length=100),
            preserve_default=False,
        ),
    ]
