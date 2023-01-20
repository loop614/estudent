from django.db import models


class Student(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=256)
    email = models.CharField(max_length=256)
    password = models.CharField(max_length=256)
