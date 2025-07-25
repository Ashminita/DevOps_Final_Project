#!/bin/bash
echo "Starting application..."
cd /var/www/myapp
npm install --production
npm start &
