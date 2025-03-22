from django.contrib import admin
from .models import User, Problem, Submission

admin.site.register(User)
admin.site.register(Problem)
admin.site.register(Submission)
