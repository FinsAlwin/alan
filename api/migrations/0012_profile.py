# Generated by Django 3.2.6 on 2021-08-28 06:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0011_auto_20210826_1704'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('profileId', models.AutoField(primary_key=True, serialize=False)),
                ('phone', models.IntegerField()),
                ('description', models.CharField(max_length=200)),
                ('typeItem', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='typeitem', to='api.typeest')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='userProfile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
