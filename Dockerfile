# étape de build
FROM node:lts-alpine as build-stage
ARG URL_BACKEND
ARG DISCORD_CLIENT_ID
ARG DISCORD_CLIENT_SECRET
ARG DISCORD_REDIRECT_URI

ENV VUE_APP_URL_BACKEND=$URL_BACKEND
ENV VUE_APP_DISCORD_CLIENT_ID=$DISCORD_CLIENT_ID
ENV VUE_APP_DISCORD_CLIENT_SECRET=$DISCORD_CLIENT_SECRET
ENV VUE_APP_DISCORD_REDIRECT_URI=$DISCORD_REDIRECT_URI
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# étape de production
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
