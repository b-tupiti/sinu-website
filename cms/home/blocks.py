from grapple.helpers import register_streamfield_block
from grapple.models import (
    GraphQLBoolean,
    GraphQLDocument,
    GraphQLImage,
    GraphQLPage,
    GraphQLString,
)
from wagtail import blocks
from wagtail.documents.blocks import DocumentChooserBlock
from wagtail.images.blocks import ImageChooserBlock


@register_streamfield_block
class HeroItemBlock(blocks.StructBlock):
    """One hero slide.

    Buttons are flattened rather than nested as their own StructBlock —
    grapple auto-registers types for blocks used in a StreamField, but
    struct-inside-struct isn't a first-class shape; keeping the button
    fields at the top level avoids a workaround and gives grapple a
    flat set of typed fields to expose.

    Image and video are both optional. Editorially they're mutually
    exclusive; when both are set the frontend prefers video. If
    neither is set the frontend falls back to a plain gradient.
    """

    # Per-item feature flag. Unchecked items are excluded from the
    # live page but still render in preview (with a "Hidden" badge)
    # so editors can iterate on staged slides before flipping them on.
    display = blocks.BooleanBlock(
        required=False,
        default=True,
        help_text="Uncheck to hide this item on the live site. Preview still shows it.",
    )
    main_text = blocks.CharBlock(
        required=True,
        max_length=200,
        help_text="The big headline on the slide.",
    )
    sub_text = blocks.TextBlock(
        required=False,
        max_length=500,
        help_text="Supporting sentence beneath the headline.",
    )

    # Primary CTA (always shown)
    primary_button_text = blocks.CharBlock(
        required=True,
        max_length=50,
        help_text="Primary button label (short — 1–3 words).",
    )
    primary_button_page = blocks.PageChooserBlock(
        required=True,
        help_text="Page the primary button links to.",
    )

    # Optional secondary CTA
    secondary_button_text = blocks.CharBlock(
        required=False,
        max_length=50,
        help_text="Secondary button label. Leave blank to hide.",
    )
    secondary_button_page = blocks.PageChooserBlock(
        required=False,
        help_text="Page the secondary button links to (required if label is set).",
    )

    image = ImageChooserBlock(
        required=False,
        help_text="Background image. Leave blank if using video.",
    )
    video = DocumentChooserBlock(
        required=False,
        help_text=(
            "Background video (mp4/webm/mov). Uploaded to the document "
            "library. If both image and video are set, video wins."
        ),
    )

    graphql_fields = [
        GraphQLBoolean("display"),
        GraphQLString("main_text"),
        GraphQLString("sub_text"),
        GraphQLString("primary_button_text"),
        GraphQLPage("primary_button_page"),
        GraphQLString("secondary_button_text"),
        GraphQLPage("secondary_button_page"),
        GraphQLImage("image"),
        GraphQLDocument("video"),
    ]

    class Meta:
        icon = "image"
        label = "Hero item"
        graphql_name = "HeroItemBlock"
