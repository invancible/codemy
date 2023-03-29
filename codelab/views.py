from django.http import HttpResponse
from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView


class MainView(TemplateView):
    template_name = "codelab/index.html"


class CompilerView(View):

    def post(self, request):
        language = request.POST['language']
        code = request.POST['code']
        print(language)
        print(code)

        return HttpResponse('Compiled Succesfully!')
