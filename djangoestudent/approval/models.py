from django.db import models

from appeal.models import Appeal
from django.contrib.auth.models import User


class Approval(models.Model):
    fk_appeal = models.OneToOneField(
        Appeal,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    fk_admin = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    date_created = models.DateTimeField(auto_created=True)
    date_updated = models.DateTimeField(auto_now=True)
