"""
CLI to calculate the difference between hashes.
CLI receives N amount of arguments.
The first argument is considered as a original hash, all the rest are considered as candidates.
The return value is an array with difference between candidates and origin hashes.
The length of the array is the same as the amount of passed candidates

Example:
python ./diff.py <origin-hash> <candidate-hash> <another-hash>
// [1, 56]
"""

import click
from PIL import Image
import imagehash

@click.command()
@click.argument('origin', nargs=1)
@click.argument('candidates', nargs=-1)
def calculate_distance(origin, candidates):
    res = []
    origin = imagehash.hex_to_hash(str(origin))
    for u in candidates:
        candidate = imagehash.hex_to_hash(str(u))
        calc = (float(origin - candidate)/len(origin.hash)**2)
        res.append(calc)
    click.echo(res)

if __name__ == '__main__':
    calculate_distance()