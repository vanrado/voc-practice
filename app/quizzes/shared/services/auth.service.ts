import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
  private _loggedIn: boolean;
  redirectUrl: string;

  constructor(){

  }

  get loggedIn(): boolean{
    return this._loggedIn;
  }

  public login(): Observable<boolean>{
    this._loggedIn = true;
    return Observable.of(this._loggedIn);
  }

  public logout(){
    this._loggedIn = false;
  }
}
