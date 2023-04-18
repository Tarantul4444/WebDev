from .views import *
from django.urls import path


urlpatterns = [
    path('', CompaniesView.as_view()),
    path('companies/', CompaniesView.as_view()),
    path('companies/<int:company_id>/', CompanyView.as_view()),
    path('companies/<int:company_id>/vacancies/', CompanyVacanciesView.as_view()),
    path('vacancies/', VacanciesView.as_view()),
    path('vacancies/<int:vacancy_id>/', VacancyView.as_view()),
    path('vacancies/top_ten/', VacancyTopView.as_view()),
]