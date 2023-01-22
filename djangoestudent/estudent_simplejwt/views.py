from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class EstudentObtainPairSerializer(TokenObtainPairSerializer):
    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass

    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)

        # Add extra responses here
        data['username'] = self.user.username
        data['email'] = self.user.email
        data['isSuperUser'] = self.user.is_superuser
        data['idUser'] = self.user.id

        return data


class EstudentObtainPairView(TokenObtainPairView):
    serializer_class = EstudentObtainPairSerializer
