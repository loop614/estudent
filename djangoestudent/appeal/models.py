from django.db import models

from django.db import models

from django.contrib.auth.models import User
from discipline.models import Discipline


class Appeal(models.Model):
    fk_student = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    fk_discipline = models.ForeignKey(Discipline, on_delete=models.DO_NOTHING)

    date_of_birth = models.DateField()
    place_of_birth = models.CharField(max_length=256)
    finished_school = models.CharField(max_length=256)
    cover_letter = models.TextField()
    finished_school_file_path = models.CharField(max_length=256)
    average_grade = models.CharField(max_length=256)
    graduation_test_result = models.CharField(max_length=256)
    datetime_created = models.DateTimeField(auto_created=True)
    datetime_updated = models.DateTimeField(auto_now=True)
