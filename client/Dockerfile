FROM node:10.13.0-alpine as build
WORKDIR /usr/src/budgetly
COPY . /usr/src/budgetly
RUN npm install --silent
RUN npm run build

FROM nginx:1.15.6-alpine
COPY --from=build /usr/src/budgetly/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
