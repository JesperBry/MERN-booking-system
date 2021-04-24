# Docker build commands
build-server:
	cd server && make build

build-client:
	cd client && make build

# Docker run commands
run-server:
	docker run -d -p 5000:5000 server

run-client:
	docker run -d -p 3000:3000 client

# NPM run commands
dev:
	cd server && npm run dev

node-server:
	cd server && npm start

react-client:
	cd client && npm start
