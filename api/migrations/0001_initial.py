# Generated by Django 3.2.6 on 2021-08-30 13:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('catId', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='usercat', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Items',
            fields=[
                ('itemId', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=200)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='items', to='api.category')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='useritem', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='TypeEst',
            fields=[
                ('typeId', models.AutoField(primary_key=True, serialize=False)),
                ('type', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Tables',
            fields=[
                ('tableId', models.AutoField(primary_key=True, serialize=False)),
                ('tableNumber', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=200)),
                ('chair', models.IntegerField()),
                ('isActive', models.BooleanField(default=False)),
                ('isNotify', models.BooleanField(default=False)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='usertable', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='TableImage',
            fields=[
                ('tableImgId', models.AutoField(primary_key=True, serialize=False)),
                ('image', models.ImageField(blank=True, null=True, upload_to='tables')),
                ('table', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tableImg', to='api.tables')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='userimgtable', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('profileId', models.AutoField(primary_key=True, serialize=False)),
                ('resturantName', models.CharField(max_length=100)),
                ('phone', models.IntegerField(max_length=15)),
                ('description', models.CharField(max_length=200)),
                ('typeItem', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='typeitem', to='api.typeest')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='userProfile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ItemsImage',
            fields=[
                ('itemImgId', models.AutoField(primary_key=True, serialize=False)),
                ('image', models.ImageField(blank=True, null=True, upload_to='items')),
                ('items', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='itemImg', to='api.items')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='userimgitem', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CategoryImage',
            fields=[
                ('catImgId', models.AutoField(primary_key=True, serialize=False)),
                ('image', models.ImageField(blank=True, null=True, upload_to='category')),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='catImg', to='api.category')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='userimgcat', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
