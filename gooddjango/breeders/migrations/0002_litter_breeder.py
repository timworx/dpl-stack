# Generated by Django 2.0.1 on 2018-01-10 16:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('breeders', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='litter',
            name='breeder',
            field=models.ForeignKey(default=-1, on_delete=django.db.models.deletion.PROTECT, to='breeders.Breeder'),
            preserve_default=False,
        ),
    ]
