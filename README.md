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
E.g.:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"url": "https://some-image-url"}' localhost:5000/hash
```
