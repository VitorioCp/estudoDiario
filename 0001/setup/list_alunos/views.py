from django.shortcuts import render
from .models import Usuario 

def home(request):
    return render(request, 'usuarios/home.html')

def usuarios(request):
    novo_usuario = Usuario()
    novo_usuario.nome = request.POST.get(nome)
    novo_usuario.password = request.POST.get(password)
    novo_usuario.email = request.POST.get(email)
    novo_usuario.save()

    
