import {Injectable} from "@angular/core";

@Injectable()
export class DialogService {
  public dialogHeader:string;
  public dialogMessage:string;
  public dialogConfirmation: () => void;
  public dialogRejection: () => void;

  // viditelnost modalnych okien
  public confirmVisible: boolean;

  constructor(){

  }

  confirmDialog(titlebar: string, message: string) {
    this.dialogHeader = titlebar;
    this.dialogMessage = message;

    return new Promise<boolean>((resolve, reject) =>{
      this.dialogConfirmation = () => resolve(true);
      this.dialogRejection = () => resolve(false);

      // otvorenie formu
      this.confirmVisible = true;
    });
  };
}
