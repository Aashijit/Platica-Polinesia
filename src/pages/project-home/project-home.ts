import { AlertController } from 'ionic-angular';
import { MessageHelper } from './../../providers/message-helper';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Grid } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DatePipe } from '@angular/common';

@IonicPage()
@Component({
  selector: 'page-project-home',
  templateUrl: 'project-home.html',
})
export class ProjectHomePage {

  projects: any = null;
  materials : any = null;
  materialIssues : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public httpCall: HttpProvider, public codes: Codes, public dataValidation: DataValidation,
    public msgHelper: MessageHelper, public alertController: AlertController, public datePipe: DatePipe) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectHomePage');


    //Call the change password API
    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));

    console.error(JSON.stringify(currentUserInfo));

    if (this.dataValidation.isEmptyJson(currentUserInfo)) {
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }

    //Get user wise project list
    var requestJson = {
      "AssignedUserId": currentUserInfo[0]['UserId'],
      "ProjectYear": new Date().getFullYear(),
      "AppType": "W"
    };

    this.httpCall.callApi(requestJson, this.codes.API_GET_USER_WISE_PROJECT_REPORT).then(responseJson => {

      if (this.dataValidation.isEmptyJson(responseJson)) {
        this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server !!!');
        return;
      }

      this.projects = responseJson['resultData'];

      for (let i = 0; i < this.projects.length; i++) {
        this.projects[i]['materialShow'] = false;
        this.projects[i]['materialIssueListShow']  = false;
        this.projects[i]['imagePath'] = this.getProjectTypeImage(this.projects[i]['ProjectImage']);
      }



      var reqJson = {
        "FinancialYear": new Date().getFullYear(),
        "AppType": "W"
      };
  
      this.httpCall.callApi(reqJson,this.codes.API_GET_MATERIAL_REQUISITION_LIST).then(respJson => {
  
  
        if (this.dataValidation.isEmptyJson(respJson)) {
          this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server (Get Material Requisition List) !!!');
          return;
        }
  
        this.materials = respJson['resultData'];


        //Get the material issue list

        var reqJson = {
          "FinancialYear": new Date().getFullYear(),
          "AppType": "W"
        };

        this.httpCall.callApi(reqJson, this.codes.API_LIST_ISSUE_MATERIAL).then(matRespJson => {
          
          if (this.dataValidation.isEmptyJson(matRespJson)) {
            this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server (Get Material Issue List) !!!');
            return;
          }

          this.materialIssues = matRespJson['resultData'];
          console.warn('Issue Materials : '+JSON.stringify(this.materialIssues));



              //Update the projects
              for(let i=0;i<this.projects.length;i++){
                var material = this.getMaterialByProjectId(this.projects[i]['ProjectId'], this.materials);
                var materialIssueList = this.getMaterialIssueByProjectId(this.projects[i]['ProjectId'],this.materialIssues);
                if(!this.dataValidation.isEmptyJson(material)){
                  this.projects[i]['materials'] = material;
                }   
                if(!this.dataValidation.isEmptyJson(materialIssueList)){
                  this.projects[i]['materialIssues'] = materialIssueList;
                }   
            }
        });
      });
    });   
  }

  refundMaterial(materialIssue){
    let materialModal = this.modalCtrl.create('MaterialRefundPage',{'material' : materialIssue});
    materialModal.present();
  }


  getMaterialIssueByProjectId(projectId, materialList){
    var material = [];
    for(let i=0;i<materialList.length;i++){
      if(materialList[i]['ProjectId'] == projectId)
        material.push(materialList[i]);
    }
    return material;
  }


  getMaterialByProjectId(projectId, materials){
    var material = [];
    for(let i=0;i<materials.length;i++){
      if(materials[i]['ProjectId'] == projectId)
        material.push(materials[i]);
    }
    return material;
  }


  issueMaterial(material){
    let materialModal = this.modalCtrl.create('MaterialIssuePage',{'material' : material});
    materialModal.present();
  }
  

  addProject(){
    let userModal = this.modalCtrl.create('AddProjectPage');
    userModal.present();
  }


  //TODO: Fix this
  getProjectTypeImage(projectImage) {
    if (projectImage == "Icons/microphone.png") {
      return "../../assets/imgs/icon_mic.png";
    }
    return "../../assets/imgs/icon_image.png";
  }


  goToUserMessages() {
    let userModal = this.modalCtrl.create('UserMessageNotificationListPage');
    userModal.present();
  }
}