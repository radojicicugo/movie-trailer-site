from rest_framework import serializers
from . models import Podaci

class PodaciSerializer(serializers.ModelSerializer):
    class Meta:
        model = Podaci
        fields = '__all__'