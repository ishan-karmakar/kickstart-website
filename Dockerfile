FROM node:latest AS build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:latest
COPY --from=build /app/build/client /usr/share/nginx/html
EXPOSE 80
