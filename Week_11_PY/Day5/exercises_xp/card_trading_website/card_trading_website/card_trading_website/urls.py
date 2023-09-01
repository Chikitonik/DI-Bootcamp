"""
URL configuration for card_trading_website project.

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
from cards import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cards/', views.display_all_cards, name='display_all_cards'),
    path('cards/<card_id>', views.display_one_card, name='display_one_card'),
    path('users/<user_id>', views.user_profile, name='user_profile'),
    path('buy/<int:card_id>/<int:user_id>/',
         views.buy_one_card, name='buy_one_card'),
    path('sell/<int:card_id>/<int:user_id>/',
         views.sell_one_card, name='sell_one_card'),
]
