from rest_framework import routers

from .views import BreederViewset

router = routers.DefaultRouter()
router.register(r'breeders', BreederViewset)

urlpatterns = router.urls
