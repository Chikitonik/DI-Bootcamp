from rest_framework import serializers
from .models import Department, Employee, Task


class DepartmentSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='department-detail')

    class Meta:
        model = Department
        fields = ('url', 'id', 'name', 'description')


class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='employee-detail')

    class Meta:
        model = Employee
        fields = ('url', 'id', 'name', 'email',
                  'phone_number', 'department', 'projects')


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='task-detail')

    class Meta:
        model = Task
        fields = ('url', 'id', 'name', 'description',
                  'due_date', 'completed', 'project')
