# Montar mongo en un contedor docker

docker run --name mongo -d -p 27017:27017 mongo


# Conectarse a mongo

docker exec -it mongo mongo
