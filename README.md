# Image Hash and Comparison
> Calculate image hash

## Requirements
1. NodeJS
1. Python

## Getting started
1. `pip install -r requirements.txt`
1. `npm install`
1. `npm run dev`

## API
### `POST /hash`
Calculates the wavelet hashing for a given image url. Url should be passed in a JSON object in the body of a request. <br />
Image hashing is based on [ImageHash](https://pypi.org/project/ImageHash/) Python library. <br />
E.g.:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"url": "https://some-image-url"}' localhost:5000/hash

fffffff9fc11fffee7ffeff0fffd1ff80fe006f0002000010003000300038007
```

### `POST /diff`
Calculates the distance between passed hashes. <br />
Body message should be in following structure
```json
{
    "origin": "<64-chars-string-hash>",
    "candidates": ["some-hash", "another-hash"]
}
The method returns the array of distances between origin hash and candidates. The length of the response equals to the amount of candidates.
```
E.g.
```bash
curl -X POST -H "Content-Type: application/json" -d '{"origin":"fffffff9fc11fffee7ffeff0fffd1ff80fe006f0002000010003000300038007", "candidates": ["fffffff9fc11fffee7ffeff0fffd1ff80fe006f0002000010003000300038009"]}' localhost:5000/diff

[3]
```
