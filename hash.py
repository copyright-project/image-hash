import click
from PIL import Image
import imagehash

@click.command()
@click.argument('image_path')
def calculate_hash(image_path): 
    click.echo(imagehash.whash(Image.open(image_path), 16))

if __name__ == '__main__':
    calculate_hash()