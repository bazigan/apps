FROM nginx:alpine

# Copy file konfigurasi default Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Salin file statis
COPY index.html /usr/share/nginx/html/index.html
COPY app.js /usr/share/nginx/html/app.js

# Salin script environment loader
COPY ./env.template.js /usr/share/nginx/html/env.template.js

# Saat container dijalankan, environment akan di-replace
CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/env.template.js > /usr/share/nginx/html/env.js && nginx -g 'daemon off;'"]

EXPOSE 80
