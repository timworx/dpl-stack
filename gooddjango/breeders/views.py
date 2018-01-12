from rest_framework import viewsets

from .models import Breeder, Litter
from .serializers import BreederSerializer

# Create your views here.
class BreederViewset(viewsets.ModelViewSet):
    queryset = Breeder.objects.prefetch_related('breeds', 'litter_set')
    serializer_class = BreederSerializer