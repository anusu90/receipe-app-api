from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenVerifySerializer
from rest_framework_simplejwt.tokens import AccessToken, UntypedToken

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    """ Serializer for the user object. """

    class Meta:
        model = User
        fields = ['email', 'password', 'name']
        extra_kwargs = {'password': {'write_only': True, 'min_length': 5}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        # .update will make the db changes for all the other fields, but not the password
        user = super().update(instance, validated_data)
        if password:
            user.set_password(password)
            user.save()  # This will save the password to the database
        return user


#  Overriding the TokenVerifySerializer to return {'valid': True} instead of empty object.
class VerifyTokenSerializer(TokenVerifySerializer):

    def validate(self, attrs):
        token = attrs['token']
        token = AccessToken(token)
        return {'valid': True}


# This is being commented because we do not need this after
# switching to jwt
# class AuthTokenSerializer(TokenObtainPairSerializer):
#     """ Serializer for the user authentication object. """
#     email = serializers.EmailField()
#     password = serializers.CharField(
#         style={'input_type': 'password'},
#         trim_whitespace=False,
#     )

#     def validate(self, attrs):

#         authenticate_kwargs = {
#             "email": attrs["email"],
#             "password": attrs["password"],
#         }
#         try:
#             authenticate_kwargs["request"] = self.context["request"]
#         except KeyError:
#             pass

#         user = authenticate(**authenticate_kwargs)

#         if not user:
#             msg = _('Unable to authenticate with provided credentials')
#             raise serializers.ValidationError(msg, code='authorization')

#         self.user = user

#         data = {}

#         refresh = self.get_token(self.user)

#         data["refresh"] = str(refresh)
#         data["access"] = str(refresh.access_token)

#         return data
