"""
Tablet mockups for the Readyware case study, matched to the KSL tablet
mockups (`site/public/work/ksl/*-tablet.webp`): the raw desktop screenshot
pasted 1:1 into a clay-white landscape frame, a 46px bezel with a camera
dot at the top, a soft shadow all round and a deeper one below, on a
transparent background.

The KSL frames were made outside this repo; the numbers here are measured
from them (frame 80px corner radius, screen 34px, the same margins), so the
two case studies look like one set.

Usage (screenshots are 2000 px wide, as exported from Figma):

    python3 tablet-mockup.py <screenshot> <out.webp>

A 2000 x 1422 screenshot makes a 2272 x 1704 mockup.
"""

import sys

from PIL import Image, ImageChops, ImageDraw, ImageFilter

TOP_CLAY = (251, 250, 248)
BOTTOM_CLAY = (236, 234, 230)
RIM = (222, 220, 217, 255)
CAMERA = (205, 202, 196, 255)
SHADOW = (20, 24, 33)
BEZEL = 46
OUTER_RADIUS = 80
SCREEN_RADIUS = OUTER_RADIUS - BEZEL
TOP, BOTTOM, SIDE = 40, 150, 90  # room for the shadow


def rounded(size, radius):
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius, fill=255)
    return mask


def mockup(screenshot_path, out_path):
    screen = Image.open(screenshot_path).convert("RGBA")
    sw, sh = screen.size
    dw, dh = sw + 2 * BEZEL, sh + 2 * BEZEL
    cw, ch = SIDE + dw + SIDE, TOP + dh + BOTTOM
    dx, dy = SIDE, TOP

    canvas = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))

    # Shadow: a soft ambient one all round, and a deeper one below.
    device_mask = rounded((dw, dh), OUTER_RADIUS)
    # The deeper one is inset at the sides, so it only shows below.
    for alpha, inset, offset, blur in ((22, 0, 20, 24), (76, 60, 40, 44)):
        mask = rounded((dw - 2 * inset, dh), OUTER_RADIUS)
        shadow = Image.new("L", (cw, ch), 0)
        shadow.paste(mask.point(lambda v: v * alpha // 255), (dx + inset, dy + offset))
        shadow = shadow.filter(ImageFilter.GaussianBlur(blur))
        layer = Image.new("RGBA", (cw, ch), SHADOW + (0,))
        layer.putalpha(shadow)
        canvas = Image.alpha_composite(canvas, layer)

    # The frame: a 1px rim, and clay lit slightly from above.
    canvas.paste(Image.new("RGBA", (dw, dh), RIM), (dx, dy), device_mask)
    clay = Image.linear_gradient("L").resize((dw - 2, dh - 2))
    clay = Image.merge(
        "RGB",
        [clay.point(lambda v, i=i: TOP_CLAY[i] + (BOTTOM_CLAY[i] - TOP_CLAY[i]) * v // 255) for i in range(3)],
    ).convert("RGBA")
    canvas.paste(clay, (dx + 1, dy + 1), rounded((dw - 2, dh - 2), OUTER_RADIUS - 1))

    # The camera, centred in the top bezel.
    cx, cy, r = dx + dw // 2, dy + BEZEL // 2, 7
    ImageDraw.Draw(canvas).ellipse((cx - r, cy - r, cx + r, cy + r), fill=CAMERA)

    # The screen, 1:1, with rounded corners.
    screen_mask = ImageChops.multiply(rounded((sw, sh), SCREEN_RADIUS), screen.getchannel("A"))
    canvas.paste(screen, (dx + BEZEL, dy + BEZEL), screen_mask)

    # Lossless, like KSL's: these are mostly small UI text.
    canvas.save(out_path, "WEBP", lossless=True, method=6)
    return canvas.size


if __name__ == "__main__":
    print(mockup(sys.argv[1], sys.argv[2]))
