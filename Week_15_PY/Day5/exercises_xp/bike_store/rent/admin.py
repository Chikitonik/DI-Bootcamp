from django.contrib import admin
from .models import Customer, Address, Rental, RentalRate, RentalStation, Vehicle, VehicleAtRentalStation, VehicleSize, VehicleType

admin.site.register(Customer)
admin.site.register(Address)
admin.site.register(Rental)
admin.site.register(RentalRate)
admin.site.register(RentalStation)
admin.site.register(Vehicle)
admin.site.register(VehicleAtRentalStation)
admin.site.register(VehicleSize)
admin.site.register(VehicleType)
