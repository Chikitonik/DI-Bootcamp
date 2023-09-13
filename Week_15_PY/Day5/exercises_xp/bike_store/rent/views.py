from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Rental, Customer, Vehicle, RentalStation, VehicleType
from .serializers import RentalSerializer, CustomerSerializer, VehicleSerializer, RentalStationSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Count
from django.db.models.functions import TruncMonth


class RentalList(APIView):
    def get(self, request):
        rentals = Rental.objects.filter(return_date__isnull=True).order_by(
            'return_date', 'rental_date')
        serializer = RentalSerializer(rentals, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RentalSerializer(data=request.data)
        if serializer.is_valid():
            # Check if the customer and vehicle exist and if the vehicle is currently rented
            customer_id = serializer.validated_data.get('customer').id
            vehicle_id = serializer.validated_data.get('vehicle').id
            if Customer.objects.filter(id=customer_id).exists() and Vehicle.objects.filter(id=vehicle_id, rental__return_date__isnull=True).exists():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response({"error": "Customer or vehicle does not exist, or vehicle is currently rented."}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RentalDetail(APIView):
    def get(self, request, pk):
        rental = Rental.objects.get(pk=pk)
        serializer = RentalSerializer(rental)
        return Response(serializer.data)

    def put(self, request, pk):
        rental = Rental.objects.get(pk=pk)
        serializer = RentalSerializer(rental, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        rental = Rental.objects.get(pk=pk)
        rental.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CustomerList(APIView):
    def get(self, request):
        customers = Customer.objects.all().order_by('last_name', 'first_name')
        serializer = CustomerSerializer(customers, many=True)
        return Response(serializer.data)


class CustomerAdd(APIView):
    def post(self, request):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VehicleList(APIView):
    def get(self, request):
        vehicles = Vehicle.objects.all()
        serializer = VehicleSerializer(vehicles, many=True)
        return Response(serializer.data)


class VehicleDetail(APIView):
    def get(self, request, pk):
        vehicle = Vehicle.objects.get(pk=pk)
        serializer = VehicleSerializer(vehicle)
        return Response(serializer.data)

    def put(self, request, pk):
        vehicle = Vehicle.objects.get(pk=pk)
        serializer = VehicleSerializer(vehicle, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        vehicle = Vehicle.objects.get(pk=pk)
        vehicle.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class VehicleAdd(APIView):
    def post(self, request):
        serializer = VehicleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RentalStationList(APIView):
    def get(self, request):
        stations = RentalStation.objects.all()
        serializer = RentalStationSerializer(stations, many=True)
        return Response(serializer.data)


class RentalStationAdd(APIView):
    def post(self, request):
        serializer = RentalStationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RentalStationDetail(APIView):
    def get(self, request, station_id):
        station = RentalStation.objects.get(id=station_id)
        serializer = RentalStationSerializer(station)
        return Response(serializer.data)


class VehicleDistribution(APIView):
    def get(self, request):
        return Response({"message": "Not implemented yet."}, status=status.HTTP_501_NOT_IMPLEMENTED)


class DistributeVehicles(APIView):
    def post(self, request):
        return Response({"message": "Not implemented yet."}, status=status.HTTP_501_NOT_IMPLEMENTED)


class MonthlyRentalStats(APIView):
    def get(self, request):
        monthly_stats = Rental.objects.annotate(
            month=TruncMonth('rental_date')
        ).values('month').annotate(count=Count('id')).order_by('month')

        stats_dict = {}
        for stat in monthly_stats:
            stats_dict[stat['month'].strftime('%Y-%m')] = stat['count']

        return Response(stats_dict)


class PopularRentalStation(APIView):
    def get(self, request):
        popular_stations = RentalStation.objects.annotate(
            rental_count=Count('address')
        ).order_by('-rental_count')

        stats_dict = {}
        for station in popular_stations:
            stats_dict[station.name] = station.rental_count

        return Response(stats_dict)


class PopularVehicleType(APIView):
    def get(self, request):
        vehicle_types = VehicleType.objects.annotate(
            rental_count=Count('vehicle__rental')
        ).values('name', 'rental_count')

        stats_dict = {}
        for vehicle_type in vehicle_types:
            stats_dict[vehicle_type['name']] = vehicle_type['rental_count']

        return Response(stats_dict)
