"""
Phone mockups for the TryggDrift case study, in the style of the KSL
tablet mockups: the raw screenshot pasted 1:1 into a clay-white frame
(245, 243, 241) with a soft shadow below, on a transparent background.

The canvas is the phone plus room for its shadow, so in the carousel the
caption under it is as wide as the phone. The carousel's "phone" layout
gives these narrower slides than KSL's tablets.

Usage (screenshots are 923 x 2000, as exported from the phone):

    python3 phone-mockup.py <screenshot> <out.webp>

Every mockup made with this script is 1071 x 2172.
"""

import sys

from PIL import Image, ImageChops, ImageDraw, ImageFilter

CLAY = (245, 243, 241, 255)
ISLAND = (18, 18, 18, 255)
BEZEL = 34
OUTER_RADIUS = 150
SCREEN_RADIUS = OUTER_RADIUS - BEZEL
TOP, BOTTOM, SIDE = 24, 80, 40  # room for the shadow


def rounded(size, radius):
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius, fill=255)
    return mask


def mockup(screenshot_path, out_path):
    screen = Image.open(screenshot_path).convert("RGBA")
    sw, sh = screen.size
    dw, dh = sw + 2 * BEZEL, sh + 2 * BEZEL
    ch = TOP + dh + BOTTOM
    cw = SIDE + dw + SIDE
    dx, dy = SIDE, TOP

    canvas = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))

    # Shadow: a soft ambient one all round, and a deeper one below.
    device_mask = rounded((dw, dh), OUTER_RADIUS)
    for alpha, offset, blur in ((40, 0, 14), (60, 18, 30)):
        shadow = Image.new("L", (cw, ch), 0)
        shadow.paste(device_mask.point(lambda v: v * alpha // 255), (dx, dy + offset))
        shadow = shadow.filter(ImageFilter.GaussianBlur(blur))
        layer = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))
        layer.putalpha(shadow)
        canvas = Image.alpha_composite(canvas, layer)

    # The frame.
    frame = Image.new("RGBA", (dw, dh), CLAY)
    canvas.paste(frame, (dx, dy), device_mask)

    # The screen, 1:1, with rounded corners.
    screen_mask = ImageChops.multiply(rounded((sw, sh), SCREEN_RADIUS), screen.getchannel("A"))
    canvas.paste(screen, (dx + BEZEL, dy + BEZEL), screen_mask)

    # The camera island, in the gap the status bar leaves for it.
    iw, ih = round(sw * 0.27), 74
    ix, iy = dx + BEZEL + (sw - iw) // 2, dy + BEZEL + 31
    ImageDraw.Draw(canvas).rounded_rectangle((ix, iy, ix + iw, iy + ih), ih // 2, fill=ISLAND)

    canvas.save(out_path, "WEBP", quality=90, method=6)
    return canvas.size


if __name__ == "__main__":
    print(mockup(sys.argv[1], sys.argv[2]))
