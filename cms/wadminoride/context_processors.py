from django.conf import settings


def public_urls(request):
    """Expose the public frontend base URL to admin templates so the
    branding logo can link out to the live site."""
    return {"BASE_URL": settings.SERVE_BASE_URL}
