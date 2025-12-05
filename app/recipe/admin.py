from django.contrib import admin
from recipe import models
# Register your models here.


class RecipeAdmin(admin.ModelAdmin):
    ordering = ['id']
    list_display = ['title', 'user', 'created_at']

    fieldsets = (
        (None, {'fields': ("title", "user")}),
        ("Content", {'fields': ("description",)}),
    )


admin.site.register(models.Recipe, RecipeAdmin)
