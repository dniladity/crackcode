from django.urls import path
from . import views

urlpatterns = [
    path('', views.health_check),  # GET /api/
    path('problems/', views.get_problems),
    path('problems/<int:pk>/', views.get_problem),
    path('submit/', views.submit_code),
]
