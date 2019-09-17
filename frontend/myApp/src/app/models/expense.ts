export  class  Expense {
    private _expenseId: number;
    private _expenseType: string;
    private _expenseDate: string;
    private _expenseStatus: string;
    private _expenseTotal: number;
    private _expenseRefounded: number;
    private _expenseDepart: string;
    private _expenseArrival: string;
    private _expenseDistance: number;
    private _missionId: number;
    private _missionName: string;
    private _customerFirstName: string;
    private _customerLastName: string;
    private _societyName: string;
    private _userEmail: string;

    constructor(expenseId?, expenseType?, expenseDate?, expenseStatus?, expenseTotal?, expenseRefounded?, expenseDepart?, expenseArrival?, expenseDistance?, missionId?, missionName?, customerFirstName?, customerLastName?, societyName?, userEmail?) {
        this._expenseId = expenseId;
        this._expenseType = expenseType;
        this._expenseDate = expenseDate;
        this._expenseStatus = expenseStatus;
        this._expenseTotal = expenseTotal;
        this._expenseRefounded = expenseRefounded;
        this._expenseDepart = expenseDepart;
        this._expenseArrival = expenseArrival;
        this._expenseDistance = expenseDistance;
        this._missionId = missionId;
        this._missionName = missionName;
        this._customerFirstName = customerFirstName;
        this._customerLastName = customerLastName;
        this._societyName = societyName
        this._userEmail = userEmail;
    }

    // Get and Set of expenseId
    get expenseId() {
        return this._expenseId;
    }
    set expenseId(value: number) {
        this._expenseId = value;
    }

    // Get and Set of expenseType
     get expenseType() {
        return this._expenseType;
    }
    set expenseType(value: string) {
        this._expenseType = value;
    }

    // Get and Set of expenseDate
    get expenseDate() {
        return this._expenseDate;
    }
    set expenseDate(value: string) {
        this._expenseDate = value;
    }

    // Get and Set of expenseStatus
    get expenseStatus() {
        return this._expenseStatus;
    }
    set expenseStatus(value: string) {
        this._expenseStatus = value;
    }

    // Get and Set of expenseTotal
    get expenseTotal() {
        return this._expenseTotal;
    }
    set expenseTotal(value: number) {
        this._expenseTotal = value;
    }

    // Get and Set of expenseRefounded
    get expenseRefounded() {
        return this._expenseRefounded;
    }
    set expenseRefounded(value: number) {
        this._expenseRefounded = value;
    }

    // Get and Set of expenseDepart
    get expenseDepart() {
        return this._expenseDepart;
    }
    set expenseDepart(value: string) {
        this._expenseDepart = value;
    }

    // Get and Set of expenseArrival
    get expenseArrival() {
        return this._expenseArrival;
    }
    set expenseArrival(value: string) {
        this._expenseArrival = value;
    }

    // Get and Set of expenseDistance
    get expenseDistance() {
        return this._expenseDistance;
    }
    set expenseDistance(value: number) {
        this._expenseDistance = value;
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

    // Get and Set of customerFirstName
    get customerFirstName() {
        return this._customerFirstName;
    }
    set customerFirstName(value: string) {
        this._customerFirstName = value;
    }

    // Get and Set of customerLastName
    get customerLastName() {
        return this._customerLastName;
    }
    set customerLastName(value: string) {
        this._customerLastName = value;
    }

    // Get and Set of societyName
    get societyName() {
        return this._societyName;
    }
    set societyName(value: string) {
        this._societyName = value;
    }

    // Get and Set of userEmail
    get userEmail() {
        return this._userEmail;
    }
    set userEmail(value: string) {
        this._userEmail = value;
    }
}
