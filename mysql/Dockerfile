# flyctl init
# flyctl launch (load fly.toml or create new)
# flyctl destroy [appname]
# flyctl logs [appname]
FROM mysql:latest

RUN chown -R mysql:root /var/lib/mysql/

COPY my.cnf /etc/mysql/conf.d/my.cnf

RUN chmod 0444 /etc/mysql/conf.d/my.cnf

ENV MYSQL_ALLOW_EMPTY_PASSWORD true

ARG MYSQL_DATABASE=metacourses
ARG MYSQL_USER=root
ARG MYSQL_PASSWORD=root123
ARG MYSQL_ROOT_PASSWORD=root123

ENV MYSQL_DATABASE=${MYSQL_DATABASE}
ENV MYSQL_USER=${MYSQL_USER}
ENV MYSQL_PASSWORD=${MYSQL_PASSWORD}
ENV MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}

CMD ["mysqld","--ignore-db-dir=lost+found"]

EXPOSE 3306