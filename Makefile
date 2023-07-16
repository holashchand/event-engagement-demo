PORTAL_RELEASE_VERSION = 0.0.1-beta
build:
	docker buildx build -t ghcr.io/sunbird-rc/event-engagement-demo/nginx-gateway .
	docker buildx build -t ghcr.io/sunbird-rc/event-engagement-demo/event-engagement-service backend/event-engagement-service

release: build
	docker tag ghcr.io/sunbird-rc/event-engagement-demo/event-engagement-service ghcr.io/sunbird-rc/event-engagement-demo/event-engagement-service:$(PORTAL_RELEASE_VERSION)
	docker push ghcr.io/sunbird-rc/event-engagement-demo/event-engagement-service:latest
	docker push ghcr.io/sunbird-rc/event-engagement-demo/event-engagement-service:$(PORTAL_RELEASE_VERSION)
	docker tag ghcr.io/sunbird-rc/event-engagement-demo/nginx-gateway ghcr.io/sunbird-rc/event-engagement-demo/nginx-gateway:$(PORTAL_RELEASE_VERSION)
	docker push ghcr.io/sunbird-rc/event-engagement-demo/nginx-gateway:latest
	docker push ghcr.io/sunbird-rc/event-engagement-demo/nginx-gateway:$(PORTAL_RELEASE_VERSION)