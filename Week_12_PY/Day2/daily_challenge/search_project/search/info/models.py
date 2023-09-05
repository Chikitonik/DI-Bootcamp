from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Phone(models.Model):
    id = models.AutoField(primary_key=True)
    number = PhoneNumberField()


class Person(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone_number = models.ForeignKey(Phone, on_delete=models.CASCADE)
    address = models.CharField(max_length=200)
