from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.shortcuts import render, redirect
from .models import Image
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic.edit import CreateView
from django.contrib.auth.decorators import login_required


def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'register.html', {'form': form})


def home_view(request):
    user = request.user
    image_count = Image.objects.filter(user=user).count()
    return render(request, 'home.html', {'image_count': image_count})


class ImageUploadView(LoginRequiredMixin, CreateView):
    model = Image
    fields = ['image_file', 'title', 'description']
    template_name = 'upload_image.html'
    success_url = '/myimages/'  # Redirect to the user's images after successful upload

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)


@login_required
def view_other_images(request):
    images = Image.objects.exclude(user=request.user)
    return render(request, 'view_other_images.html', {'images': images})


@login_required
def view_my_images(request):
    user = request.user
    image_count = Image.objects.filter(user=user).count()
    images = Image.objects.filter(user=request.user)
    return render(request, 'view_my_images.html', {'images': images, 'image_count': image_count})
