#!/usr/bin/env bash

heroku container:push web -a image-hash
heroku container:release web -a image-hash