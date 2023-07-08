docker compose rm -fsv gateway_service
docker compose build gateway_service

docker compose rm -fsv user_service
docker compose build --build-arg NODE_ENV=development --build-arg MONGO_URI=mongodb://10.1.5.3:27017/nest_users?authSource=admin user_service

docker compose up -d
docker compose logs -f
