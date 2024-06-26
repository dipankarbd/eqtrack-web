FROM node:14-alpine AS builder
ENV NODE_ENV production

ARG REACT_APP_GOOGLE_MAP_API_KEY
ENV REACT_APP_GOOGLE_MAP_API_KEY $REACT_APP_GOOGLE_MAP_API_KEY

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build



FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production 

COPY --from=builder /app/build /usr/share/nginx/html 
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000 
CMD ["nginx", "-g", "daemon off;"]