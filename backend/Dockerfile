# Base image
FROM php:8.0-fpm

# Copy composer.lock and composer.json
COPY composer.lock composer.json /var/www/

# Set working directory
WORKDIR /var/www

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# install zip package
RUN apt-get update -y && apt-get install -y openssl zip unzip git libgmp-dev

# install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN apt -yqq update
RUN apt -yqq install libonig-dev

# run PHP modules: PDO and mbstring
RUN docker-php-ext-configure gmp
RUN docker-php-ext-install pdo mbstring mysqli pdo_mysql gmp

# install all PHP dependencies
RUN composer install --no-scripts --no-autoloader

# Add user for laravel application
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

# Copy existing application directory contents
COPY . /var/www

RUN composer dump-autoload --optimize

# Copy existing application directory permissions
COPY --chown=www:www . /var/www

# Change current user to www
USER www

# Optimize config & route cache
RUN php artisan cache:clear
RUN php artisan route:cache
# RUN php artisan config:cache

# Copy upload.ini to /usr/local/etc/php/conf.d
COPY uploads.ini /usr/local/etc/php/conf.d

# Copy php.ini to /usr/local/etc/php
COPY php.ini /usr/local/etc/php

# Copy www.conf to /usr/local/etc/php-fpm.d
COPY www.conf /usr/local/etc/php-fpm.d

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
