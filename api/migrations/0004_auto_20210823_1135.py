# Generated by Django 3.2.6 on 2021-08-23 06:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_tables'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='image',
        ),
        migrations.RemoveField(
            model_name='items',
            name='image',
        ),
    ]
