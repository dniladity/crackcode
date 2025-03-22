from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Problem, Submission
from .serializers import ProblemSerializer, SubmissionSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def health_check(request):
    return Response({"status": "CrackCode API is running 🚀"})

@api_view(['GET'])
def get_problems(request):
    problems = Problem.objects.all()
    serializer = ProblemSerializer(problems, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_problem(request, pk):
    try:
        problem = Problem.objects.get(pk=pk)
    except Problem.DoesNotExist:
        return Response({'error': 'Problem not found'}, status=404)

    serializer = ProblemSerializer(problem)
    return Response(serializer.data)

@api_view(['POST'])
def submit_code(request):
    serializer = SubmissionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(status='Pending')  # Default status
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
