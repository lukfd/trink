init:
	npm install
	npx expo export:web

build:	
	docker build -t trinkapp-image .

build-aws:
	docker build -f Dockerfile.aws -t trinkapp-image-aws .

run:
	docker run -d -p 3000:3000 --name trinkapp-container trinkapp-image

awspush:
	docker tag trinkapp-image-aws:latest 947914131899.dkr.ecr.us-east-1.amazonaws.com/trinkapp:latest
	docker push 947914131899.dkr.ecr.us-east-1.amazonaws.com/trinkapp:latest

clean:
	rm -rf ./web-build
	rm -rf ./.expo