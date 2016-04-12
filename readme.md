#install globals
	npm install phantomjs -g
	npm install webdriverio -g
#install dependencies
    cd ./*_tests
	npm install
#local development
    cd ./*_concrete
    npm link (this will create a symbolic link for this concrete package)
    cd ./*_tests
    npm link <<package_name>> (package name from the above command)
#run test locally
    cd ./*_tests    
	npm run test-local 
#run test saucelabs
    cd ./*_tests   
    npm run test-saucelabs   

(follow this to run selenium stand alone - https://www.npmjs.com/package/selenium-standalone)