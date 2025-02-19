FROM node:lts-alpine3.18 AS build

COPY . .

RUN npm install workbox-cli@7.3.0 --save-dev
RUN npm ci
RUN npm run build

FROM nginx:1.25.3

COPY --from=build /dist /var/www/test-pwa/
COPY --from=build /nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]