export  class  User {
    private _userEmail: string;
    private _userPassword: string;
    private _userType: string;
    private _societySiret: string;
    private _connected: boolean;

    constructor(userEmail?, userPassword?, userType?, societySiret?, connected?) {
        this._userEmail = userEmail;
        this._userPassword = userPassword;
        this._userType = userType;
        this._societySiret = societySiret;
        this._connected = connected;
    }

    // Get and Set of userEmail
    get userEmail() {
        return this._userEmail;
    }
    set userEmail(value: string) {
        this._userEmail = value;
    }

     // Get and Set of userPassword
     get userPassword() {
        return this._userPassword;
    }
    set userPassword(value: string) {
        this._userPassword = value;
    }

    // Get and Set of userType
    get userType() {
        return this._userType;
    }
    set userType(value: string) {
        this._userType = value;
    }

    // Get and Set of societySiret
    get societySiret() {
        return this._societySiret;
    }
    set societySiret(value: string) {
        this._societySiret = value;
    }

    // Get and Set of connected
    get connected() {
        return this._connected;
    }
    set connected(value: boolean) {
        this._connected = value;
    }
}
