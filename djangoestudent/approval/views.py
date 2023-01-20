from django.http import HttpResponse, JsonResponse
from rest_framework import status

from .models import Approval
from rest_framework.views import APIView

class GetApprovals(APIView):
    def get(self, request, *args, **kwargs) -> HttpResponse:
        if 'fk_student' not in request.POST:
            return JsonResponse({
                'status': 'Bad request',
                'message': 'Please provide the user email.'
            }, status=status.HTTP_400_BAD_REQUEST)

        fk_student = request.data.GET.fk_student
        approval = Approval.objects.select_related('fk_university').get(fk_student=fk_student)

        return JsonResponse({'approvals': approval})
