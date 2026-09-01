from grapple.models import GraphQLStreamfield
from wagtail.admin.panels import FieldPanel
from wagtail.fields import StreamField
from wagtail.models import Page
from wagtail_headless_preview.models import HeadlessMixin

from home.blocks import HeroItemBlock


class HomePage(HeadlessMixin, Page):
    # 0–4 hero items. Zero is allowed so the frontend can render a
    # placeholder before the first item is added; four is the cap that
    # keeps the slider legible and prevents editors turning the hero
    # into a novel.
    hero = StreamField(
        [("item", HeroItemBlock())],
        blank=True,
        min_num=0,
        max_num=4,
        use_json_field=True,
        help_text="Add 1–4 hero items. Reorder by dragging.",
    )

    content_panels = Page.content_panels + [
        FieldPanel("hero"),
    ]

    graphql_fields = [
        GraphQLStreamfield("hero"),
    ]
