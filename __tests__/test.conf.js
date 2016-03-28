let instance = null;

export default class config {
    config() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }
    get baseUrl() {
        return "http://www.google.com"
    }
    get defaultTimeout() {
        return 5000;
    }
    get searchTerm() {
        return "galaxy";
    }

    browserOptions(executionLocation = "local") {
        let opt = new _browserOptions();
        
        switch (executionLocation.toLowerCase()) {
            case "local":
                opt.options = "local";
                return opt.options;
            case "saucelabs":
                opt.options = "saucelabs";
                return opt.options;
            default:
                opt.options = "local";
                return opt.options;
        }
    }
}
class _browserOptions {
    set options(choice) {
        switch (choice.toLowerCase()) {
            case "local":
                this._options = {
                    host: "localhost",
                    port: 4444,
                    desiredCapabilities: { browserName: 'chrome' }
                }
                break;
            case "saucelabs":
                this._options = {
                    host: "ondemand.saucelabs.com",
                    port: 80,
                    user: "<<user>>",
                    key: "<<key>>",
                    logLevel: 'debug',
                    desiredCapabilities: { browserName: 'chrome' }
                }
                break;

        }
    }
    
    get options(){
        return this._options;
    }

}