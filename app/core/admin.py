from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


from core import models
# Register your models here.


class UserAdmin(BaseUserAdmin):
    ordering = ['id']
    list_display = ['email', 'name']

    fieldsets = (
        (None, {'fields': ("name", 'email', 'password')}),
        ("Permissions", {'fields': ("is_active", 'is_staff', "is_superuser")}),
        ("Important dates", {'fields': ("last_login",)}),

    )

    readonly_fields = ('last_login',)

    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("name", "email", "password1", "password2"),
        }),
        ("Permissions", {'fields': ("is_active", 'is_staff', "is_superuser")}),
    )


admin.site.register(models.User, UserAdmin)
