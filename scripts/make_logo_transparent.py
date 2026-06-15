import sys
from PIL import Image

def make_transparent(img_path, output_path):
    img = Image.open(img_path).convert("RGBA")
    data = img.load()
    width, height = img.size
    
    # We will do a flood fill of light pixels starting from the corners (0,0), (width-1, 0), (0, height-1), (width-1, height-1)
    visited = set()
    queue = [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]
    
    # Add all edge pixels as starting points for background detection
    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))
        
    for pt in queue:
        visited.add(pt)
        
    while queue:
        cx, cy = queue.pop(0)
        r, g, b, a = data[cx, cy]
        
        # If the pixel is light-colored (red > 220, green > 220, blue > 220), we make it transparent
        # and search its neighbors.
        if r > 220 and g > 220 and b > 220:
            data[cx, cy] = (r, g, b, 0)
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = cx + dx, cy + dy
                if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                    visited.add((nx, ny))
                    queue.append((nx, ny))
                    
    img.save(output_path)
    print("Logo transparency processed successfully!")

make_transparent("public/riamriam-logo.png", "public/riamriam-logo.png")
