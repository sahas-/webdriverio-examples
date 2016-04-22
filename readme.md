#install globals
	npm install phantomjs -g
	npm install webdriverio -g
#local development
    Navigate to *_concrete directory 
    npm install
    npm link (this will create a symbolic link for this concrete package)
    Navigate to *_tests directory
    npm install 
    npm link <<package_name>> (package name from the above command)
#run local selenium standalone server for local development 
    ref:https://www.npmjs.com/package/selenium-standalone
    Open new terminal
    Navigate to *_tests directory
    Change startSeleniumServer.sh as appropriate
        uncomment first 2 lines to install selenium stand alone server, if not installed already
        start the selenium stand alone server     
#run test locally
    Navigate to *_tests directory 
	npm run test-local 
#run test saucelabs
    Navigate to *_tests directory  
    npm run test-saucelabs   