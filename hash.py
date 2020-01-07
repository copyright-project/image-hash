import click
from PIL import Image
import imagehash

@click.command()
@click.argument('image_path')
def calculate_hash(image_path): 
    imageFile = Image.open(image_path)
    phash = imagehash.phash(imageFile, 12)
    whash = imagehash.whash(imageFile)
    click.echo(phash)
    click.echo(whash)

if __name__ == '__main__':
    calculate_hash()