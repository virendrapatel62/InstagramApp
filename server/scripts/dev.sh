#!/bin/bash

echo "🚀 Starting servers in dev mode..."

concurrently \
    --names "AUTH,STREAM" \
    --prefix-colors "blue,magenta" \
    "nx run auth:dev" \
    "nx run live-stream:dev"
