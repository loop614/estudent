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
from django.contrib import admin
from django.urls import path, include

from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken import views as authtoken_views
from approval import views as approval_views
from discipline import views as discipline_views
from appeal import views as appeal_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api-token-auth/', csrf_exempt(authtoken_views.obtain_auth_token)),
    path('get-all-disciplines/<str:university>', csrf_exempt(discipline_views.GetAllDisciplines.as_view())),
    path('get-approvals/<str:fk_student>', csrf_exempt(approval_views.GetApprovals.as_view())),
    path('get-appeals/<str:fk_student>', csrf_exempt(appeal_views.GetAppeals.as_view()))
]
