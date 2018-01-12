from django.db import models
from django.utils import timezone

class Breeder(models.Model):
    '''
    Model to contain all breeder information.
    '''

    name = models.CharField(max_length=100)

    # Breeds, etc
    breeds = models.ManyToManyField('breeders.Breed')

    # Contact
    email = models.EmailField(null=True, blank=True)
    phone = models.CharField(max_length=15, null=True, blank=True)
    website = models.CharField(max_length=50, null=True, blank=True)

    # NOTE: These should probably be a JSONB field for flexibility
    facebook = models.CharField(max_length=50, null=True, blank=True)
    twitter = models.CharField(max_length=50, null=True, blank=True)
    instagram = models.CharField(max_length=50, null=True, blank=True)

    # Location
    zip_code = models.CharField(max_length=10)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=2)

    # Source type options
    MANUAL = 'MANUAL'
    SIGNUP = 'SIGNUP'
    SOURCE_CHOICES = (
        (SIGNUP, 'User Signed Up'),
        (MANUAL, 'Manual Entry'),
    )

    # Meta
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    source = models.CharField(max_length=20, default=SIGNUP, choices=SOURCE_CHOICES)

    def __str__(self):
        return self.name


class Breed(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Litter(models.Model):
    count = models.PositiveIntegerField(null=True)
    due_date = models.DateField(null=True)
    breed = models.ForeignKey('breeders.Breed', on_delete=models.PROTECT)
    breeder = models.ForeignKey('breeders.Breeder', on_delete=models.PROTECT)

    def __str__(self):
        return f'{self.count} due {self.due_date}'
