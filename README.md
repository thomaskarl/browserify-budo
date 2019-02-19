# browserify-budo
simple setup with browserify and budo

To use browserify to compile the js, run: browserify ./app/app.js > ./dist/bundle.js

To start Livereload of JS with budo, run: budo app/app.js:dist/bundle.js --live

Make sure you have the following dependencies installed globally: 

`npm install -g browserify`

`npm install budo -g`

And you need to install jQuery in your project, using: 

`npm i jquery`
