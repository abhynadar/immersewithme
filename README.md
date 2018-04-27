# Run locally
npm start

# Build only
npm build

# Build with push to aws
npm run build && aws s3 sync build/ s3://immersewithabhy

# On AWS site can be accessed at
http://immersewithabhy.s3-website.us-east-2.amazonaws.com
