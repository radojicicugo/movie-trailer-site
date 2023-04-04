from django.shortcuts import render

# Create your views here.
# Create your views here.
from django.http import HttpResponse
from . models import Podaci
from . serializer import PodaciSerializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class PodaciView(viewsets.ModelViewSet):
    queryset = Podaci.objects.all()
    serializer_class = PodaciSerializer