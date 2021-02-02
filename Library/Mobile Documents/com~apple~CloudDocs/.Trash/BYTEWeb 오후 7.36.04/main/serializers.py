from rest_framework import serializers
from .models import Subscriber

class SubscriberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Subscriber
        fields = ('name', 'email')
        
