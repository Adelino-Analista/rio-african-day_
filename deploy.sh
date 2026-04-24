#!/bin/bash

# FTP Deployment Script
set -e

FTP_SERVER="${1}"
FTP_USERNAME="${2}"
FTP_PASSWORD="${3}"

echo "Starting FTP deployment..."
echo "Server: $FTP_SERVER"

# Create lftp batch file
cat > /tmp/ftp-commands.txt << EOF
set ftp:ssl-allow no
set ftp:passive-mode on
open ftp://${FTP_USERNAME}:${FTP_PASSWORD}@${FTP_SERVER}
mirror -R --delete dist/ public_html/
quit
EOF

# Execute lftp with batch file
lftp < /tmp/ftp-commands.txt

echo "FTP deployment completed!"
