from django.http import HttpResponse
from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView
from urllib.parse import unquote

import random
import hashlib
import subprocess
import os


class MainView(TemplateView):
    template_name = "codelab/index.html"


class CompilerView(View):

    # This method generates a file with a random name in the 'temp' directory,
    # writes the provided code to it, and returns the path to the file.
    def generate_file(self, language, code):
        # Generate a random 7-character string for the file name
        random_str = hashlib.md5(str(random.randint(0, 999999)).encode()).hexdigest()[:7]
        # Construct the file path by combining the 'temp' directory, the random string,
        # and the language extension (e.g. 'temp/abcdefg.py')
        file_path = f"temp/{random_str}.{language}"
        # Open the file in write mode and write the provided code to it
        with open(file_path, "w") as program_file:
            program_file.write(code)
        # Return the path to the file
        return file_path

    # This method handles HTTP POST requests to the view.
    def post(self, request):
        # Get the language and code parameters from the POST request
        language = request.POST['language']
        code = unquote(request.POST['code'])
        output = ''

        # Generate a file with the provided code and get its path
        file_path = self.generate_file(language=language, code=code)

        # If the language is Python, execute the file using subprocess and capture
        # its output. Otherwise, set the output to a message indicating that the language
        # is not supported.
        if language == 'py':
            try:
                process = subprocess.Popen(f'python {file_path}', stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
                output = process.communicate()
            except Exception as e:
                # Log the error for debugging purposes
                print(f'Error executing command: {e}')
                # Set the output to an error message
                output = 'An error occurred while executing the program'

        else:
            output = 'Not a Python'

        # Remove the file to clean up after ourselves
        os.remove(file_path)

        # Return an HTTP response containing the output of the program
        return HttpResponse(output)
