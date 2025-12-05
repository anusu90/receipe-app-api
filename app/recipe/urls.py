from rest_framework.routers import DefaultRouter

from recipe.views import RecipeModelViewSet

app_name = 'recipe'

router = DefaultRouter()
router.register('recipes', RecipeModelViewSet, basename='recipe')

urlpatterns = router.urls
