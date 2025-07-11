#!/bin/bash
cd /home/dkhoa2906/apps/ucpc-2025-website/backend || exit
git pull origin main
docker-compose down
docker-compose up -d --build
