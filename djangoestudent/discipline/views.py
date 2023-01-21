from django.http import HttpResponse, JsonResponse
from rest_framework import status

from .models import Discipline
from rest_framework.views import APIView

from django.apps import apps


class GetAllDisciplines(APIView):
    def get(self, request, *args, **kwargs) -> HttpResponse:
        # tables = [m._meta.db_table for c in apps.get_app_configs() for m in c.get_models()]
        #
        # return JsonResponse({
        #     'status': 'Bad request',
        #     'message': tables
        # }, status=status.HTTP_400_BAD_REQUEST)

        if 'id_student' not in request.GET:
            return JsonResponse({
                'status': 'Bad request',
                'message': 'Please provide the student id.'
            }, status=status.HTTP_400_BAD_REQUEST)
        id_student = request.GET['id_student']
        disciplines = Discipline.objects.select_related(
            'fk_university').get(appeal__fk_student=id_student)
        if disciplines.count() == 0:
            return JsonResponse({'disciplines': []})

        return JsonResponse({'disciplines': disciplines})
