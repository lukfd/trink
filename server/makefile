build: clean
	docker build . -t trink/server-image
	docker run --name trink-server-container -p 3000:3000 -d trink/server-image

clean:
	docker stop trink-server-container
	docker rm trink-server-container
	docker image rm trink/server-image
