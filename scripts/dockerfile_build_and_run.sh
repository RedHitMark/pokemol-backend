#!/bin/bash

docker build -t app ../app/.
docker run -d -p 3000:3000 --name=app --restart always -it app
