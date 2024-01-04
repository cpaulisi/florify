#!/bin/bash
echo ""
echo "Restoring frontend npm packages"
echo ""

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

cd florify
npm install
if [ $? -ne 0 ]; then

    echo "Failed to restore frontend npm packages"

    exit $?

fi
echo ""
echo "Building frontend"
echo ""
nvm use node 
npm --version
npm run build
if [ $? -ne 0 ]; then

    echo "Failed to build frontend"

    exit $?

fi
cd ..
. ./scripts/loadenv.sh