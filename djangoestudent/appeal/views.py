from django.http import HttpResponse, JsonResponse

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
