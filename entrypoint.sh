#!/bin/sh
echo "window._env_['ENDPOINT'] = '$ENDPOINT';" >> /usr/share/nginx/html/env-config.js
exec "$@"