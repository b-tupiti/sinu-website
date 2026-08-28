import os

from .base import *

DEBUG = False

SECRET_KEY = os.environ["SECRET_KEY"]

ALLOWED_HOSTS = [h.strip() for h in os.environ.get("ALLOWED_HOSTS", "").split(",") if h.strip()]

CSRF_TRUSTED_ORIGINS = [
    o.strip() for o in os.environ.get("CSRF_TRUSTED_ORIGINS", "").split(",") if o.strip()
]

# Cloud Run terminates TLS at the proxy and forwards over HTTP.
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

# Firebase Hosting strips all cookies from GET requests to Cloud Run
# except `__session`. Rename the session cookie so authenticated GETs work.
# See https://firebase.google.com/docs/hosting/manage-cache#using_cookies
SESSION_COOKIE_NAME = "__session"

WAGTAILADMIN_BASE_URL = os.environ.get("WAGTAILADMIN_BASE_URL", "")

# Compressed + hashed static files served by WhiteNoise.
STORAGES["staticfiles"]["BACKEND"] = "whitenoise.storage.CompressedManifestStaticFilesStorage"

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {"console": {"class": "logging.StreamHandler"}},
    "loggers": {
        "django.security.csrf": {"handlers": ["console"], "level": "WARNING"},
        "django.request": {"handlers": ["console"], "level": "WARNING"},
    },
}

try:
    from .local import *
except ImportError:
    pass
