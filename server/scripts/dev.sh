#!/bin/bash

echo "🚀 Starting servers in dev mode..."

concurrently \
    --names "TEMPLATE,AUTH,STREAM,POST-SERVE" \
    --prefix-colors "blue,magenta" \
    "NX_DAEMON=false nx run template:dev" \
    "NX_DAEMON=false nx run auth:dev" \
    "NX_DAEMON=false nx run live-stream:dev" \
    "NX_DAEMON=false nx run post-serve:dev" \
   
