from django.http import HttpResponse, JsonResponse

from .models import Discipline
from rest_framework.views import APIView
from django.core import serializers


class GetDisciplines(APIView):
    def get(self, request, id_university, *args, **kwargs) -> HttpResponse:
        disciplines = Discipline.objects.filter(fk_university=id_university)
        disciplines_json = serializers.serialize("json", disciplines)

        return JsonResponse({'disciplines': disciplines_json})


class GetDiscipline(APIView):
    def get(self, request, id_discipline, *args, **kwargs) -> HttpResponse:
        discipline = Discipline.objects.filter(id=id_discipline)
        disciplines_json = serializers.serialize("json", discipline)

        return JsonResponse({'discipline': disciplines_json})
