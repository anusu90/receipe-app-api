from django.test import TestCase
from django.contrib.auth import get_user_model

User = get_user_model()


class ModelTests(TestCase):
    """ Test models. """

    def test_create_user_with_email_successful(self):
        """ Test creating a user with an email is successful. """
        email = 'test@example.com'
        password = 'testpass123'
        user = User.objects.create_user(
            email=email,
            password=password,
        )
        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))

    def test_new_user_without_email_raises_error(self):

        with self.assertRaises(ValueError):
            User.objects.create_user(email=None, password='abcd123')

    def test_create_superuser(self):
        """ Test creating a superuser. """
        email = 'test@example.com'
        password = 'testpass123'
        user = User.objects.create_superuser(
            email=email,
            password=password,
        )

        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))
        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)
