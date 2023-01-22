from django.http import HttpResponse, JsonResponse

from .models import Subject
from rest_framework.views import APIView
from django.core import serializers


class GetSubjects(APIView):
    def get(self, request, id_discipline, *args, **kwargs) -> HttpResponse:
        subjects = Subject.objects.filter(fk_discipline=id_discipline)
        subjects_json = serializers.serialize("json", subjects)

        return JsonResponse({'subjects': subjects_json})
