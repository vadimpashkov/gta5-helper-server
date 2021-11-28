FROM alpine:latest

RUN apk add --update nginx && rm -rf /var/cache/apk/*

# forward request and error logs to docker log collector
RUN ln -svf /dev/stdout /var/log/nginx/access.log \
    && ln -svf /dev/stderr /var/log/nginx/error.log

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]