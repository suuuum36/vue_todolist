from django.db import models

# Create your models here.
class Account(models.Model):
    name = models.CharField(max_length=1000)
    email = models.CharField(max_length=1000)
    subscribe_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '{} : {} {}'.format(self.id, self.name, self.email)