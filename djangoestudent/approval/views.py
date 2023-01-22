from django.http import HttpResponse, JsonResponse
from rest_framework import status

from appeal.models import Appeal
from .models import Approval
from rest_framework.views import APIView
from django.core import serializers


class GetApprovals(APIView):
    def get(self, request, id_user, *args, **kwargs) -> HttpResponse:
        appeals = Appeal.objects.filter(fk_student=id_user)
        fk_appeals = [appeal.pk for appeal in appeals]
        approvals = Approval.objects.filter(fk_appeal__in=fk_appeals)
        approvals_json = serializers.serialize("json", approvals)

        return JsonResponse({'approvals': approvals_json})


class GetAllApprovals(APIView):
    def get(self, request, *args, **kwargs) -> HttpResponse:
        approvals = Approval.objects.all()
        approvals_json = serializers.serialize("json", approvals)

        return JsonResponse({'approvals': approvals_json})
