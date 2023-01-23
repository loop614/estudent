from django.http import HttpResponse, JsonResponse

import json
from .models import Appeal
from rest_framework.views import APIView
from django.core import serializers


class GetAppeals(APIView):
    def get(self, request, id_user, *args, **kwargs) -> HttpResponse:
        appeals = Appeal.objects.filter(fk_student=id_user)
        appeals_json = serializers.serialize("json", appeals)

        return JsonResponse({'appeals': appeals_json})


class GetAllAppeals(APIView):
    def get(self, request, *args, **kwargs) -> HttpResponse:
        appeals = Appeal.objects.all()
        appeals_json = serializers.serialize("json", appeals)

        return JsonResponse({'appeals': appeals_json})


class CreateAppeal(APIView):
    def post(self, request, *args, **kwargs) -> HttpResponse:
        content = json.loads(request.body.decode("utf-8"))
        appeal = Appeal(
            fk_student=content['id_user'],
            fk_discipline=content['id_discipline'],
            date_of_birth=content['date_of_birth'],
            place_of_birth=content['place_of_birth'],
            finished_school=content['finished_school'],
            cover_letter=content['cover_letter'],
            finished_school_file_path=content['finished_school_file_path'],
            average_grade=content['average_grade'],
            graduation_test_result=content['graduation_test_result']
        )
        appeal.save()
        appeal_json = serializers.serialize("json", appeal)

        return JsonResponse({'appeal': {'appeal': appeal_json}})
