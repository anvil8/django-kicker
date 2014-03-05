django-kicker
=============

this app informs broker on model change

installation
-----------

** pip install django-kicker **

dependencies
------------

 django, djangorestframework redis

setup
-----

- add 'kicker', 'rest_framework' to INSTALLED_APPS
- add  KICKER_BROKER = "redis" , REDIS_URL = *redis_url*, REDIS_PORT = *redis_port*
- add url(r'^kicker/', include('kicker.urls')) to apps

usage
-----
- run redis-server
- from kicker.models import DiffTracker
- class Model1(DiffTracker):
    *list of fields*

    class Meta:
        abstract = False

websocket server installation
-----------------------------

- install nodejs
- install npm
- run npm install http-server sockjs websocket-multiplex redis-nodejs
- configure server.js file (You need to edit REDIS_URL, REDIS_PORT, channels, websocket_url, websocket_port)
- run node server.js
