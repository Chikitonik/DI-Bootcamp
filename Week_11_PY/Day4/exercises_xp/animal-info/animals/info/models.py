from django.db import models


class Family(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Animal(models.Model):
    id = models.AutoField(primary_key=True)
    family = models.ForeignKey(Family, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    legs = models.IntegerField()
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    height = models.DecimalField(max_digits=5, decimal_places=2)
    speed = models.IntegerField()

    def __str__(self):
        return self.name
