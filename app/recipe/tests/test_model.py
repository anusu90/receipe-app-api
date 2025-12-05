from unittest import TestCase

from django.contrib.auth import get_user_model

from recipe.models import Recipe


class RecipeModelTests(TestCase):
    """ Test the recipe model. """

    def setUp(self):
        self.user = get_user_model().objects.create_user(
            email='test@example.com',
            password='testpass123',
            name="Test User",
        )

    def test_create_recipe(self):
        """ Test creating a recipe is successful. """
        recipe = Recipe.objects.create(
            user=self.user,
            title="Sample recipe name",
            description="Sample recipe description",
        )
        self.assertEqual(str(recipe), recipe.title)
