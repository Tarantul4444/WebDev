from rest_framework.views import APIView, Response
from rest_framework.status import HTTP_404_NOT_FOUND, HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_201_CREATED
from .models import Company, Vacancy
from .serializer import VacancySerializer, CompanySerializer


class CompaniesView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class CompanyView(APIView):
    def get_company(self, company_id):
        try:
            return Company.objects.get(id=company_id)
        except Company.DoesNotExist as error:
            return Response({'message': str(error)}, status=HTTP_404_NOT_FOUND)

    def get(self, request, company_id):
        company = self.get_company(company_id)
        serializer = CompanySerializer(company)
        return Response(serializer.data, status=HTTP_200_OK)

    def put(self, request, company_id):
        company = self.get_company(company_id)
        serializer = CompanySerializer(company)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

    def delete(self, request, company_id):
        company = self.get_company(company_id)
        company.delete()
        return Response({'message': 'Deleted successfully'}, status=HTTP_200_OK)


class CompanyVacanciesView(APIView):
    def get(self, request, company_id):
        try:
            company = Company.objects.get(id=company_id)
        except Company.DoesNotExist as error:
            return Response({'message': str(error)}, status=HTTP_400_BAD_REQUEST)

        vacancies = Vacancy.objects.filter(company=company)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data, status=HTTP_200_OK)


class VacanciesView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class VacancyView(APIView):
    def get_vacancy(self, vacancy_id):
        try:
            return Vacancy.objects.get(id=vacancy_id)
        except Vacancy.DoesNotExist as error:
            return Response({'message': str(error)}, status=HTTP_404_NOT_FOUND)

    def get(self, request, vacancy_id):
        vacancy = self.get_vacancy(vacancy_id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data, status=HTTP_200_OK)

    def put(self, request, vacancy_id):
        vacancy = self.get_vacancy(vacancy_id)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

    def delete(self, request, vacancy_id):
        vacancy = self.get_vacancy(vacancy_id)
        vacancy.delete()
        return Response({'message': 'Deleted successfully'}, status=HTTP_200_OK)


class VacancyTopView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
