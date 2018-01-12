from django.contrib import admin

from .models import Breeder, Breed, Litter

# Register your models here.

@admin.register(Breeder, Breed, Litter)
class BreedersAdmin(admin.ModelAdmin):
    pass