# -*- coding: utf-8 -*-
"""
This module will define all URL Configurations
to be used by the Application.
"""
from django.urls import path

from status.views import ServicesStatusView, SubscriptionView, \
    ServiceHistoryView, ServiceHistoryDetailsView, \
    ModifyUserSubscription

urlpatterns = [
    path('', ServicesStatusView.as_view(),
         name='services_status_view'),
    path('subscription/', SubscriptionView.as_view(),
         name='subscription_view'),

    path('history/', ServiceHistoryView.as_view(),
         name='service_history_view'),
    path('history/service_id:<int:service_id>/', ServiceHistoryView.as_view(),
         name='service_history_view'),
    path('history/subservice_id:<int:subservice_id>/', ServiceHistoryView.as_view(),
         name='service_history_view_subservices'),
    path('history/domain_id:<int:domain_id>/', ServiceHistoryView.as_view(),
         name='service_history_view_domains'),
    path('history/service_id:<int:service_id>/', ServiceHistoryView.as_view(),
         name='service_history_view_services'),

    path('subscription/<int:service_id>/', SubscriptionView.as_view(),
         name='subscription_view'),
    path('details/<int:ticket_id>/', ServiceHistoryDetailsView.as_view(),
         name='service_history_details_view'),
    path('details/<int:ticket_id>/<int:service_id>/', ServiceHistoryDetailsView.as_view(),
         name='service_history_details_view'),
    path('subscriber/<email>/<token>', ModifyUserSubscription.as_view(),
         name='modify_user_subscription_view'),
]
