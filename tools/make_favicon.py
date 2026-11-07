"""生成 SVG 标签图标的几何图形 ICO 兼容版；需要 Pillow，不影响普通构建。"""
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
SCALE = 8
image = Image.new("RGBA", (64*SCALE,64*SCALE))
draw = ImageDraw.Draw(image)
def box(values):
    return tuple(round(v*SCALE) for v in values)
draw.rounded_rectangle(box((1,1,63,63)), radius=16*SCALE, fill="#9a96bd")
draw.rounded_rectangle(box((3,3,61,61)), radius=14*SCALE, fill="#143832")
draw.line([box(p) for p in ((45,17),(20,17),(34,32),(20,47),(45,47))], fill="#fffaf0", width=5*SCALE, joint="curve")
for x,y in ((45,17),(20,17),(34,32),(20,47),(45,47)):
    draw.ellipse(box((x-2.5,y-2.5,x+2.5,y+2.5)), fill="#fffaf0")
for x,y,color in ((45,17,"#78d3c4"),(45,47,"#e0bc70")):
    draw.ellipse(box((x-3.5,y-3.5,x+3.5,y+3.5)),fill=color)
image = image.resize((64,64), Image.Resampling.LANCZOS)
image.save(ROOT/"site/favicon.ico", sizes=[(16,16),(32,32),(48,48)])
print("Generated site/favicon.ico (16 / 32 / 48 px)")
