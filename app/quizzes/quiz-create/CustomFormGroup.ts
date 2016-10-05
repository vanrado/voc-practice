import {FormGroup, AbstractControl, ValidatorFn, AsyncValidatorFn} from "@angular/forms";
import {HostListener} from "@angular/core";

export class CustomFormGroup extends FormGroup {

  userInput: boolean;

  constructor(controls: {[key: string]: AbstractControl}, validator?: ValidatorFn, asyncValidator?: AsyncValidatorFn) {
    super(controls, validator, asyncValidator);
    this.valueChanges.subscribe(data => this.onChange(data));
  }

  onChange(data: any) {
    let userInput: boolean = false;
    console.log('data changes', data);


    for (let property in data) {
      if (data.hasOwnProperty(property)) {
        if (data[property] &&
          /\S/.test(data[property])) {
          // string nieje prazdny alebo neobsahuje len whitespace
          userInput = true;
          console.log('property', data[property], this.userInput);
          break;
        }
      }
    }

    if (userInput) {
      console.log('user inputed');
    }

    this.userInput = userInput;
  }

  @HostListener('click', ['$event'])
  public applyDialog(event){
    console.log('click', event);
    var aElems = document.getElementsByTagName('a');

    if(this.userInput){
      console.log('dialog registered');
      for (var i = 0, len = aElems.length; i < len; i++) {

        // aElems[i].onclick = function() {
        //   var check = confirm("Are you sure you want to leave?");
        //   if (check == true) {
        //     return true;
        //   }
        //   else {
        //     return false;
        //   }
        // };
      }
    }

  }
}
