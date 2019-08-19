from PIL import Image
import imagehash

def calculate_distance(hash1, hash2):
    return abs(hash1 - hash2)