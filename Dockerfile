FROM nginx:1.12-alpine

# Copy built app to wwwroot
COPY dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
