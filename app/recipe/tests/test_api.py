from unittest import TestCase

from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse

from recipe.models import Recipe

CREATE_RECIPE_URL = reverse('recipe:recipe-list')


class PublicAppRecipeApiTests(TestCase):
    """ Test the publicly available recipe API. """

    def setUp(self):
        self.client = APIClient()

    def test_auth_required(self):
        """ Test that authentication is required. """
        res = self.client.get(CREATE_RECIPE_URL)
        self.assertEqual(res.status_code, status.HTTP_401_UNAUTHORIZED)


class PrivateAppRecipeApiTests(TestCase):
    """ Test the private features of the recipe API. """

    def setUp(self):
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(
            email='test+recipe@example.com',
            password='testpass123',
            name='Test User',
        )
        self.client.force_authenticate(self.user)

    def test_retrieve_recipes(self):
        """ Test retrieving a list of recipes. """
        Recipe.objects.create(
            user=self.user, title='Test Recipe', description='Test Description')
        res = self.client.get(CREATE_RECIPE_URL)
        self.assertEqual(res.status_code, status.HTTP_200_OK)
