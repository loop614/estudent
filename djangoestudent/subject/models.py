from django.db import models

from discipline.models import Discipline


class Subject(models.Model):
    fk_discipline = models.ForeignKey(Discipline, on_delete=models.CASCADE)
    name = models.CharField(max_length=256)
    description = models.TextField()
    ects = models.IntegerField()
