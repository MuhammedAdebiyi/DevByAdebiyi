from django.urls import path
from .views import solutions_list


urlpatterns = [
    path('', solutions_list),  # all solutions
    path('<str:category>/', solutions_list),  # filter by category
]