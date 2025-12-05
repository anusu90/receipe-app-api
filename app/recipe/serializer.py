from django.contrib.auth import get_user_model
from rest_framework import serializers

from recipe.models import Recipe


User = get_user_model()


class UserNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['name']   # Only one field returned

    def get_name(self, obj):
        return f"{obj.name}".strip()


class RecipeSerializer(serializers.ModelSerializer):

    user = UserNameSerializer(read_only=True)

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'description', 'user']
        read_only_fields = ['id', 'created_at', 'updated_at']

        extra_kwargs = {
            'title': {'required': True},
            'description': {'required': True},
        }
