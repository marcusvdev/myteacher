from django.contrib import admin
from django.urls import path

from teacher.views import ProfessorList, CadastrarAulaAPIView, ProfessorDeleteAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('professores/', ProfessorList.as_view()),
    path('professores/<int:id>/aulas', CadastrarAulaAPIView.as_view()),
    path('professores/<int:pk>/', ProfessorDeleteAPIView.as_view()),
]