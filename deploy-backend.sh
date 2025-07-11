#!/bin/bash

cd /home/dkhoa2906/apps/ucpc-2025-website/backend || exit
PULL_OUTPUT=$(git pull origin main)

if [[ "$PULL_OUTPUT" != "Already up to date." ]]; then
  echo "Code changed. Restarting container..."
  docker compose down
  docker compose up -d --build
else
  echo "No change. Skipping restart."
fi