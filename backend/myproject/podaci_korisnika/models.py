from django.db import models

# Create your models here.
class Podaci(models.Model):
    email  = models.EmailField(max_length=70,blank=True,unique=True) 
    name = models.CharField(max_length=50, null=False, blank=False)
    message = models.CharField(max_length=500)
        
    def __str__(self):
        return self.name 