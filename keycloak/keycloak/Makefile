build:
	echo "Building docker image"
	@cd ../keycloak-mobile-number-login-spi/ && sh ./build.sh
	@docker buildx build -t ghcr.io/sunbird-rc/event-engagement-demo/keycloak .

push:
	@docker push ghcr.io/sunbird-rc/event-engagement-demo/keycloak
