from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth import logout, login, authenticate
from django.contrib.auth.models import User
from .forms import LoginForm, SignUpForm
from django.contrib.auth.forms import AuthenticationForm


def signup_view(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(request, username=username, password=password)
            if user:
                login(request, user)
                return redirect('homepage')
        else:
            # Form is not valid, display errors
            print('===========form.errors================')
            print(form.errors)
            # print(form)
    else:
        form = SignUpForm()
    return render(request, 'signup.html', {'form': form})


def login_view(request):
    # if request.method == 'POST':
    #     # form = LoginForm(request.POST)
    #     if form.is_valid():
    #         username = form.cleaned_data.get('username')
    #         password = form.cleaned_data.get('password')
    #         user = authenticate(request, username=username, password=password)
    #         if user:
    #             login(request, user)
    #             return redirect('homepage')
    #     else:
    #         # Form is not valid, display errors
    #         print('===========form.errors================')
    #         print(form.errors)
    #         print(form)

    # else:
    #     # form = LoginForm()
    # return render(request, 'login.html', {'form': form})
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('homepage')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})


def logout_view(request):
    logout(request)
    return redirect('homepage')


def profile_view(request, user_id):
    user = get_object_or_404(User, id=user_id)
    return render(request, 'profile.html', {'user': user})
