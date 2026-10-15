"""
The three remote test sessions for the Readyware case study, made safe to
publish and set to one size.

Each input is a screen recording still in a rounded window with a shadow.
The window heights differ by a few pixels, so every still is cropped to the
shortest one and pasted into that one's window and shadow: the three come
out exactly the same size. Then the private parts are blurred: the video
tiles of everyone in the call, the name labels, and the browser's tabs,
address bar and bookmarks (they name participants' employers).

Usage:

    python3 test-session-frames.py <template.webp> <out-dir> \
        <name>:<still.webp>:<trim-top> ...

`template` is the still with the shortest window; `trim-top` is how many
pixels to cut from the top of the others (the rest comes off the bottom).
Blur boxes are per still, in BLURS below, in the output's coordinates.
"""

import sys

from PIL import Image, ImageFilter

# The opaque window inside every still: left, top, width, height.
WINDOW = (26, 35, 1917, 1028)

# Blur boxes per output name: (left, top, right, bottom, radius).
BLURS = {
    "test-session-situation-report": [
        (1700, 35, 1943, 1063, 40),  # the video tiles
        (26, 172, 1700, 228, 14),  # tabs, address bar, bookmarks
        (26, 1030, 260, 1063, 14),  # the name label
    ],
    "test-session-action-cards-task": [
        (1700, 35, 1943, 1063, 40),
        (26, 62, 1700, 142, 14),
        (26, 1030, 260, 1063, 14),
    ],
    "test-session-test-mode": [
        (1696, 35, 1943, 1063, 40),
        (26, 52, 1680, 116, 14),
        (26, 1020, 260, 1063, 14),
    ],
}


def main(template_path, out_dir, specs):
    template = Image.open(template_path).convert("RGBA")
    x, y, w, h = WINDOW
    mask = template.getchannel("A").crop((x, y, x + w, y + h))

    for spec in specs:
        name, path, trim_top = spec.split(":")
        still = Image.open(path).convert("RGBA")
        window = still.crop((x, y + int(trim_top), x + w, y + int(trim_top) + h))

        for left, top, right, bottom, radius in BLURS[name]:
            box = (left - x, top - y, right - x, bottom - y)
            region = window.crop(box).filter(ImageFilter.GaussianBlur(radius))
            window.paste(region, box[:2])

        out = template.copy()
        out.paste(window, (x, y), mask)
        out.save(f"{out_dir}/{name}.webp", "WEBP", quality=90, method=6)
        print(name, out.size)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2], sys.argv[3:])
