# Build static deck from slides.md
FROM node:22-alpine AS builder
WORKDIR /app
COPY slides.md ./
COPY styles ./styles/
COPY scripts/build-html.js ./scripts/
RUN npm install --no-save marked@18 \
    && node scripts/build-html.js

# Minimal runtime — nginx alpine
FROM nginx:1.27-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/slides.html /usr/share/nginx/html/index.html
EXPOSE 3030
STOPSIGNAL SIGQUIT
CMD ["nginx", "-g", "daemon off;"]
