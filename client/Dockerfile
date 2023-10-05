FROM node

WORKDIR /trink
COPY . .
RUN npm install
RUN npm run build

CMD ["npx", "serve", "web-build"]