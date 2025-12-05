"""
View for the user API
"""

from rest_framework import generics, permissions
from rest_framework_simplejwt.views import TokenObtainPairView, TokenVerifyView


from user.serializers import UserSerializer, VerifyTokenSerializer


class CreateUserView(generics.CreateAPIView):
    """ Create a new user in the system. """
    serializer_class = UserSerializer


class CreateTokenView(TokenObtainPairView):
    """ Create a new auth token for user. """
    pass


class VerifyTokenView(TokenVerifyView):
    serializer_class = VerifyTokenSerializer


class ManageUserView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer

    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user
