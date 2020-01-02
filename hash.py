import click
from PIL import Image
import imagehash

@click.command()
@click.argument('image_path')
def calculate_hash(image_path): 
    imageFile = Image.open(image_path)
    phash = imagehash.phash(imageFile, 16)
    whash = imagehash.whash(imageFile, 16, 16)
    click.echo(phash)
    click.echo(whash)

if __name__ == '__main__':
    calculate_hash()