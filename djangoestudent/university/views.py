from django.http import HttpResponse, JsonResponse

from .models import University
from rest_framework.views import APIView
from django.core import serializers


class GetAllUniversities(APIView):
    def get(self, request, *args, **kwargs) -> HttpResponse:
        universities = serializers.serialize("json", University.objects.all())

        return JsonResponse({'universities': universities})
