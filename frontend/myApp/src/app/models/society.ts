export  class  Society {
    private _societySiret: string;
    private _societyName: string;

    constructor(societySiret?, societyName?) {
        this._societySiret = societySiret;
        this._societyName = societyName;
    }

    // Get and Set of societySiret
    get societySiret() {
        return this._societySiret;
    }
    set societySiret(value: string) {
        this._societySiret = value;
    }

     // Get and Set of societyName
     get societyName() {
        return this._societyName;
    }
    set societyName(value: string) {
        this._societyName = value;
    }

}
