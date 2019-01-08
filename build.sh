#!/bin/bash
cd frontend
echo '--- Compiling frontend files ---'
npm run start
echo '--- Removing old static files from server ---'
rm ../backend/public/* -rv
echo '--- Copying new compiled static files to server ---'
cp dist/* ../backend/public/ -rv
echo '--- Starting web server ---'
cd ../backend
node main.js