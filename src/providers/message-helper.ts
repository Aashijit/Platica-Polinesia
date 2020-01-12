import {Alert, AlertController, Loading, LoadingController, ToastController} from "ionic-angular";
import {Injectable} from "@angular/core";

@Injectable()
export class MessageHelper {

  constructor(public alertCtrl: AlertController, public  loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  public showWorkingDialog(message: string = "Please wait..."): Loading {
    //Working, please wait...
    let l = this.loadingCtrl.create({
      content: message
    });
    l.present();
    return l;
  }

  public showToast(message: string, autoClose: boolean = true): void {
    if (autoClose) {
      this.toastCtrl.create({
        message: message,
        duration: 3000
      }).present();
    } else {
      this.toastCtrl.create({
        message: message,
        showCloseButton: true,
        closeButtonText: 'Ok'
      }).present();
    }
  }

  public showAlert(title: string, msg: string, button: string = 'Close'): Alert {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: [button]
    });
    alert.present();
    return alert;
  }

  public showConnectionErrorDialog() {
    this.alertCtrl.create({
      title: "Connection Error!",
      subTitle: "Failed to connect with server. Please try again.",
      buttons: ['Close']
    }).present();
  }


  public showErrorDialog(title: any, message : any) {
    this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Close']
    }).present();
  }

  public showNoProductDialog() {
    this.alertCtrl.create({
      title: "Not Available!",
      subTitle: "No products found. Please try again.",
      buttons: ['Close']
    }).present();
  }
  public showNoModelDialog() {
    this.alertCtrl.create({
      title: "Not Available!",
      subTitle: "No Car Model found. Please try again.",
      buttons: ['Close']
    }).present();
  }

  public showNoOrderDialog() {
    this.alertCtrl.create({
      title: "Not Available!",
      subTitle: "No Order found.",
      buttons: ['Close']
    }).present();
  }

  public showNoProductDialogPRODUCTOUTOFSTOCK() {
    this.alertCtrl.create({
      title: "Not Available!",
      subTitle: "PRODUCT OUT OF STOCK",
      buttons: ['Close']
    }).present();
  }

  public showNoProductDialogINSUFFICIENTSTOCK() {
    this.alertCtrl.create({
      title: "Not Available!",
      subTitle: "INSUFFICIENT STOCK",
      buttons: ['Close']
    }).present();
  }

  public showNoProductDialogINVALIDUSER() {
    this.alertCtrl.create({
      title: "Error!",
      subTitle: "INVALID USER",
      buttons: ['Close']
    }).present();
  }

  public showNoProductDialogFAILURE() {
    this.alertCtrl.create({
      title: "Error!",
      subTitle: "FAILURE",
      buttons: ['Close']
    }).present();
  }
  public showNoProductDialogSYSTEMERROR() {
    this.alertCtrl.create({
      title: "Error!",
      subTitle: "SYSTEM ERROR",
      buttons: ['Close']
    }).present();
  }

  public showDialogChangePassword() {
    this.alertCtrl.create({
      title: "Error!",
      subTitle: "Your old password does not match.",
      buttons: ['Close']
    }).present();
  }

  /*public showSomethingWentWrongDialog(close: boolean = false, navCtrl: NavController = null) {
    if (close) {
      this.alertCtrl.create({
        title: "Error!",
        subTitle: "Something went wrong. Please try again.",
        buttons: [{
          text: 'Close',
          handler: () => {
            navCtrl.pop();
          }
        }]
      }).present();
    } else {
      this.alertCtrl.create({
        title: "Error!",
        subTitle: "Something went wrong. Please try again.",
        buttons: ['Close']
      }).present();
    }
  }*/
}
