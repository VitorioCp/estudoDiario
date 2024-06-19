from django.urls import path
from list_alunos import views

urlpatterns = [
    path('', views.home,name='home'),
    path('usuarios/', views.usuarios,name='listagem_usuarios')
]
