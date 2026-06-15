from PIL import Image, ImageChops

def trim(im):
    # Convert image to RGBA if not already
    im = im.convert("RGBA")
    
    # Create a white background image
    bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
    
    # Find difference
    diff = ImageChops.difference(im, bg)
    
    # Get bounding box
    # However, if there are transparent pixels, they might differ from white.
    # So we should also check alpha.
    
    # Let's use getbbox on alpha channel if it's transparent background
    # or find non-white pixels
    
    # Actually, let's get the bounding box of pixels that are NOT (255, 255, 255, 255)
    # and NOT (0, 0, 0, 0).
    
    # A simpler approach:
    # 1. create a mask of pixels that are considered 'background'
    # For a logo, it's usually white or transparent.
    
    data = im.getdata()
    min_x, min_y, max_x, max_y = im.width, im.height, 0, 0
    
    for y in range(im.height):
        for x in range(im.width):
            pixel = data[y * im.width + x]
            # Not transparent and not white
            # Let's say white is r>240, g>240, b>240
            if pixel[3] > 10 and not (pixel[0] > 240 and pixel[1] > 240 and pixel[2] > 240):
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y
                
    if min_x < max_x and min_y < max_y:
        # Add a small padding? 
        # User said "remove the too much white margins", so let's crop exactly.
        return im.crop((min_x, min_y, max_x + 1, max_y + 1))
    return im

for img_path in ["public/riamriam-logo.png"]:
    try:
        im = Image.open(img_path)
        trimmed = trim(im)
        print(f"Original {img_path}: {im.size}, Trimmed: {trimmed.size}")
        trimmed.save(img_path)
    except Exception as e:
        print(f"Error: {e}")

