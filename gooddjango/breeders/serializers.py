from rest_framework import serializers

from .models import Breeder, Breed, Litter


class BreedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Breed
        fields = '__all__'


class LitterSerializer(serializers.ModelSerializer):
    breed = BreedSerializer()

    class Meta:
        model = Litter
        fields = '__all__'

class BreederSerializer(serializers.ModelSerializer):
    breeds = BreedSerializer(many=True)
    litters = LitterSerializer(source='litter_set', many=True, read_only=True)

    class Meta:
        model = Breeder
        fields = '__all__'