build:
	npm install
	npx expo export:web
	docker build -t trinkapp-image .
	docker run -d -p 3000:3000 --name trinkapp-container trinkapp-image

clean:
	rm -rf ./web-build
	rm -rf ./.expo