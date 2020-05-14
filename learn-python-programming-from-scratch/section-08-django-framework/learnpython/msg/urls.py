from django.urls import path
from msg import views

urlpatterns = [
    path('', views.index, name='index')
]
