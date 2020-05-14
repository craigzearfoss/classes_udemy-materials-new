from django.shortcuts import render
from msg.models import Message

# Create your views here.
def index(request):
    msgobjects = Message.objects.all()
    context = {'msgobjects':msgobjects}
    return render(request, 'index.html', context)
