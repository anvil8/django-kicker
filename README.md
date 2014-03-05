django-kicker
=============

this app informs broker on model change

installation
-----------

** pip install django-kicker **

dependencies
------------

** django, djangorestframework redis**

setup
-----

- add 'kicker', 'rest_framework' to INSTALLED_APPS
- add ** KICKER_BROKER = "redis" **, **REDIS_URL = *redis_url***, **REDIS_PORT = *redis_port***

usage
-----
- run redis-server
- from kicker.models import DiffTracker
- class Model1(DiffTracker):
    *list of fields*

    class Meta:
        abstract = False

