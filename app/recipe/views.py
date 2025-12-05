from rest_framework import viewsets, permissions

from recipe.serializer import RecipeSerializer
from recipe.models import Recipe


class RecipeModelViewSet(viewsets.ModelViewSet):
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Recipe.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
