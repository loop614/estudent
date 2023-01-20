from django.db import models

from university.models import University


class Discipline(models.Model):
    fk_university = models.ForeignKey(University, on_delete=models.CASCADE)
    name = models.CharField(max_length=256)
    quote = models.IntegerField()
