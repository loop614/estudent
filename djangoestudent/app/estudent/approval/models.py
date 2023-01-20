from django.db import models

from appeal.models import Appeal


class Approval(models.Model):
    fk_admin = models.IntegerField()
    appeal = models.OneToOneField(
        Appeal,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    date_created = models.DateTimeField(auto_created=True)
    date_updated = models.DateTimeField(auto_now=True)
