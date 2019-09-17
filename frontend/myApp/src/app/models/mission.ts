export  class  Mission {
    private _missionId: number;
    private _missionName: string;
    private _userEmail: string;
    private _customerId: string;
    private _customerLastName: string;
    private _customerFirstName: string;
    private _societyName: string;

    constructor(missionId?, missionName?, userEmail?, customerId?, customerLastName?, customerFirstName?, societyName?) {
        this._missionId = missionId;
        this._missionName = missionName;
        this._userEmail = userEmail;
        this._customerId = customerId;
        this._customerLastName = customerLastName;
        this._customerFirstName = customerFirstName;
        this._societyName = societyName;
    }

    // Get and Set of missionId
    get missionId() {
        return this._missionId;
    }
    set missionId(value: number) {
        this._missionId = value;
    }

     // Get and Set of missionName
     get missionName() {
        return this._missionName;
    }
    set missionName(value: string) {
        this._missionName = value;
    }

    // Get and Set of userEmail
    get userEmail() {
        return this._userEmail;
    }
    set userEmail(value: string) {
        this._userEmail = value;
    }

    // Get and Set of customerId
    get customerId() {
        return this._customerId;
    }
    set customerId(value: string) {
        this._customerId = value;
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
}
