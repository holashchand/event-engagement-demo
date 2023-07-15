PORTAL_RELEASE_VERSION = 0.0.1-beta
build:
	docker build -t ghcr.io/sunbird-rc/event-engagement-demo/event-engagement-service backend/event-engagement-service
	docker build -t ghcr.io/sunbird-rc/event-engagement-demo/notification-service backend/notification-service

release: build
	docker tag ghcr.io/sunbird-rc/event-engagement-demo/event-engagement-service ghcr.io/sunbird-rc/event-engagement-demo/event-engagement-service:$(PORTAL_RELEASE_VERSION)
	docker tag ghcr.io/sunbird-rc/event-engagement-demo/notification-service ghcr.io/sunbird-rc/event-engagement-demo/notification-service:$(PORTAL_RELEASE_VERSION)
	docker push ghcr.io/sunbird-rc/event-engagement-demo/notification-service:latest
	docker push ghcr.io/sunbird-rc/event-engagement-demo/notification-service:$(PORTAL_RELEASE_VERSION)
	docker push ghcr.io/sunbird-rc/event-engagement-demo/event-engagement-service:latest
	docker push ghcr.io/sunbird-rc/event-engagement-demo/event-engagement-service:$(PORTAL_RELEASE_VERSION)