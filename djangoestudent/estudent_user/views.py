from django.http import HttpResponse, JsonResponse

from django.contrib.auth.models import User
from rest_framework.views import APIView
from django.core import serializers


class GetAllStudents(APIView):
    def get(self, request, *args, **kwargs) -> HttpResponse:
        students = User.objects.filter(is_superuser=False)
        students_json = serializers.serialize("json", students)

        return JsonResponse({'students': students_json})


class GetAllAdmins(APIView):
    def get(self, request, *args, **kwargs) -> HttpResponse:
        admins = User.objects.filter(is_superuser=True)
        admins_json = serializers.serialize("json", admins)

        return JsonResponse({'admins': admins_json})
