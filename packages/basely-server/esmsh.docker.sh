# docker pull ghcr.io/esm-dev/esm.sh  
# IMPORTANT: verdaccio --listen 0.0.0.0:4873

docker run -p 3344:8080 \
  -e NPM_REGISTRY=http://host.docker.internal:4873/ \
  -v MY_VOLUME:/esmd \
  ghcr.io/esm-dev/esm.sh:latest