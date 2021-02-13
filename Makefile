# Docker build commands
build-server:
	cd server && make build

build-client:
	cd client && make build


# NPM run commands
dev:
	cd server && npm run dev

server:
	cd server && npm start

client:
	cd client && npm start
