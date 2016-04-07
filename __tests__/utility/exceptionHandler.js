export default class exceptionHandler {
    constructor(){
        this._status={
            isSuccess: null,
            scenario: null,
            message: null
        }
    }
    handleException(error,scenarioName) {
        this._status = {
            isSuccess: false,
            scenario: scenarioName,
            message: error            
        }
        console.log(this._status);
        //do something with the error details, like generate a json and sent it to ELK stack for dashboarding
        //update saucelabs status
    }

    get status(){
        return this._status;
    }
}