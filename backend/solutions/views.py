from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Solution
from .serializers import SolutionSerializer

@api_view(['GET'])
def solutions_list(request, category=None):
    if category:
        solutions = Solution.objects.filter(category=category)
    else:
        solutions = Solution.objects.all()
    serializer = SolutionSerializer(solutions, many=True)
    return Response(serializer.data)
