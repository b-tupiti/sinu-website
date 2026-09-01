from wagtail.models import Page
from wagtail_headless_preview.models import HeadlessMixin


class HomePage(HeadlessMixin, Page):
    pass
