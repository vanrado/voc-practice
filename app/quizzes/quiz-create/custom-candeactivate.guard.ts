import {Injectable, Component} from "@angular/core";
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute,
  CanDeactivate
} from "@angular/router";
import {Observable} from "rxjs";
import {DialogService} from "./dialog.service";
import {EditFormComponent} from "./EditFormComponent";

@Injectable()
export class CustomGuard implements CanDeactivate<EditFormComponent> {

  constructor(private router: Router, private route: ActivatedRoute, private dialogService: DialogService) {
  }

  canDeactivate(component: EditFormComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    console.log('can deactivate component', component);

    if (!component.isFormChanged()) {
      // ak nebol formular editovany tak presmeruj
      return true;
    }

    // vyzvy na konfirmaciu
    return this.dialogService.confirmDialog('confirm', 'blabla');
  }

}
