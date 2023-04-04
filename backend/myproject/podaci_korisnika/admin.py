from django.contrib import admin

from . models import Podaci

# Register your models here.
# Register your models here.
class PodaciAdmin(admin.ModelAdmin):
    list_display=['name', 'email', 'message']

admin.site.register(Podaci, PodaciAdmin)