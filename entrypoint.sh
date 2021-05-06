#!/bin/sh
echo "window._env_['ENDPOINT'] = '$ENDPOINT';" >> /usr/share/nginx/html/env-config.js
echo "window._env_['DEPLOY_MESSAGE'] = '$DEPLOY_MESSAGE';" >> /usr/share/nginx/html/env-config.js
exec "$@"