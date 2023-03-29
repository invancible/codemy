from django.urls import path

from . import views


urlpatterns = [
    path('', views.MainView.as_view(), name='codelab-index'),
]

ajaxpatterns = [
    path('compiler/', views.CompilerView.as_view(), name='codelab-compiler')
]

urlpatterns += ajaxpatterns

