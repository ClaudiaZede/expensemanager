export  class  Customer {
    private _customerId: number;
    private _userEmail: string;
    private _customerLastName: string;
    private _customerFirstName: string;
    private _societySiret: string;
    private _societyName: string;

    constructor(userEmail?, customerId?, customerLastName?, customerFirstName?, societyName?) {
        this._userEmail = userEmail;
        this._customerId = customerId;
        this._customerLastName = customerLastName;
        this._customerFirstName = customerFirstName;
        this._societyName = societyName;
        this._societyName = societyName;
    }

    // Get and Set of customerId
    get customerId() {
        return this._customerId;
    }
    set customerId(value: number) {
        this._customerId = value;
    }

    // Get and Set of userEmail
    get userEmail() {
        return this._userEmail;
    }
    set userEmail(value: string) {
        this._userEmail = value;
    }
   
    // Get and Set of customerLastName
    get customerLastName() {
        return this._customerLastName;
    }
    set customerLastName(value: string) {
        this._customerLastName = value;
    }

    // Get and Set of customerFirstName
    get customerFirstName() {
        return this._customerFirstName;
    }
    set customerFirstName(value: string) {
        this._customerFirstName = value;
    }

    // Get and Set of societyName
    get societyName() {
        return this._societyName;
    }
    set societyName(value: string) {
        this._societyName = value;
    }

    // Get and Set of societySiret
    get societySiret() {
        return this._societySiret;
    }
    set societySiret(value: string) {
        this._societySiret = value;
    }
}
