#!/usr/bin/env python3
"""
Script to update the RPDN logo by removing the weapons portion
"""

from PIL import Image, ImageDraw
import os

# Load the current logo
logo_path = "public/rpdn-logo.png"
img = Image.open(logo_path)

# Get image dimensions
width, height = img.size
print(f"Original logo size: {width}x{height}")

# Create a new image with the same width but slightly shorter height
# Remove the bottom 35% where the weapons are located
crop_ratio = 0.65  # Keep top 65% of the image
new_height = int(height * crop_ratio)
new_img = Image.new('RGBA', (width, new_height), (0, 0, 0, 0))

# Crop and paste the top portion of the original image
cropped = img.crop((0, 0, width, new_height))
new_img.paste(cropped, (0, 0))

# Save the updated logo
new_img.save(logo_path)
print(f"Logo updated successfully!")
print(f"New logo size: {new_img.size}")
print("Weapons portion removed from the logo.")
