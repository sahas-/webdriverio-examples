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
}