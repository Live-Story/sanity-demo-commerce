#!/bin/bash

export HOST=0.0.0.0

echo ">>> Starting Sanity Studio..."
npm run serve --workspace=studio &
sanity_pid=$!

echo ">>> Running Hydrogen preview..."
NODE_OPTIONS="--max-old-space-size=2048" npm run dev --workspace=storefront &
storefront_pid=$!

echo ">>> Starting proxy server..."
npm run proxy &
proxy_pid=$!

# Attendi che uno dei due termini
wait -n $preview_pid
wait -n $sanity_pid

echo ">>> One process exited, shutting down..."
kill $preview_pid $sanity_pid 2>/dev/null
