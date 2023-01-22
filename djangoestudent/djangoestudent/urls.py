"""djangoestudent URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include

from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.views import token_verify, token_refresh
from estudent_simplejwt.views import EstudentObtainPairView
from university.views import GetAllUniversities
from approval.views import GetApprovals
from discipline.views import GetAllDisciplines
from subject.views import GetSubjects
from appeal.views import GetAppeals


urlpatterns = [
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api-token-auth/', csrf_exempt(EstudentObtainPairView.as_view())),
    path('api-token-refresh/', csrf_exempt(token_refresh)),
    path('api-token-verify/', csrf_exempt(token_verify)),
    path('get-all-universities/',
         csrf_exempt(GetAllUniversities.as_view())),
    path('get-all-disciplines/<int:id_university>',
         csrf_exempt(GetAllDisciplines.as_view())),
    path('get-subjects/<int:id_discipline>',
         csrf_exempt(GetSubjects.as_view())),
    path('get-approvals/<int:fk_student>',
         csrf_exempt(GetApprovals.as_view())),
    path('get-appeals/<int:fk_student>',
         csrf_exempt(GetAppeals.as_view()))
]
