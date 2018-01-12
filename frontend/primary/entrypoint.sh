# echo "Switch to mounted host files"
# cd /stack/frontend/primary
# echo $PWD

# echo "symlink to dockerized .next directory"
# rm -rf /app/pages
# ln -sfn /stack/frontend/primary/pages /app
# ln -sfn /stack/frontend/primary/node_modules /app/node_modules

# echo "The app dir"
# ls -lah
# echo "root"

# echo "cd"
# cd /stack/primary
# echo $PWD

echo "Start dev server."
echo "> npm run dev"
npm install
npm run dev -- -p 80
