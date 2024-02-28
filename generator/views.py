from django.shortcuts import render
from django.http import HttpResponse

def helloWorld(request):
    return HttpResponse('Hello World!')

def index(request):
    return render(request, "generator/index.html")
