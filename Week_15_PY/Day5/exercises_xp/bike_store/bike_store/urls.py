"""
URL configuration for bike_store project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rent import views

urlpatterns = [
    path('admin/', admin.site.urls),
    # Rental endpoints
    path('rent/rental/', views.RentalList.as_view(), name='rental-list'),
    path('rent/rental/<int:pk>/', views.RentalDetail.as_view(), name='rental-detail'),

    # Customer endpoints
    path('rent/customer/', views.CustomerList.as_view(), name='customer-list'),
    path('rent/customer/add/', views.CustomerAdd.as_view(), name='customer-add'),

    # Vehicle endpoints
    path('rent/vehicle/', views.VehicleList.as_view(), name='vehicle-list'),
    path('rent/vehicle/<int:pk>/',
         views.VehicleDetail.as_view(), name='vehicle-detail'),
    path('rent/vehicle/add/', views.VehicleAdd.as_view(), name='vehicle-add'),

    # Rental Station endpoints
    path('rent/station/', views.RentalStationList.as_view(), name='station-list'),
    path('rent/station/add/', views.RentalStationAdd.as_view(), name='station-add'),
    path('rent/station/<int:station_id>/',
         views.RentalStationDetail.as_view(), name='station-detail'),

    # Vehicle Distribution
    path('rent/station/distribution/',
         views.VehicleDistribution.as_view(), name='vehicle-distribution'),

    # Distribute Vehicles
    path('rent/station/distribute/', views.DistributeVehicles.as_view(),
         name='distribute-vehicles'),

    # monthly rental statistics endpoint
    path('rent/stats/monthly/', views.MonthlyRentalStats.as_view(),
         name='monthly-rental-stats'),

    #  popular
    path('rent/stats/popular_station/',
         views.PopularRentalStation.as_view(), name='popular-rental-station'),
    path('rent/stats/popular_vehicle_type/',
         views.PopularVehicleType.as_view(), name='popular_vehicle_type'),
]
