import { AlertController } from 'ionic-angular';
import { MessageHelper } from './../../providers/message-helper';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Grid } from 'ionic-angular';
import { ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-add-project',
  templateUrl: 'add-project.html',
})
export class AddProjectPage {

  projectName: any = null;
  projectAlias: any = null;
  projectDescription: any = null;
  businessUnitId: any = null;
  brandId: any = null;
  projectTypeId: any = null;
  nVideos: any = null;
  nPhotos: any = null;
  nWallpapers: any = null;
  nOthers: any = null;
  eStartDate: any = '2020-03-30';
  eEndDate: any = '2020-03-30';
  aStartDate: any = '2020-03-30';
  aEndDate: any = '2020-03-30';


  projectTypes: any = null;
  businessUnits: any = null;
  brands: any = null;
  users: any = null;
  areas: any = null;
  materials: any = null;
  activites: any = null;
  roles: any = null;
  areaIds: any = null;



  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public httpCall: HttpProvider, public codes: Codes, public dataValidation: DataValidation,
    public msgHelper: MessageHelper, public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProjectPage');


    //Load the project phases
    var requestJson = {
      "ProjectStatus": 4,
      "AppType": "W"
    };

    this.httpCall.callApi(requestJson, this.codes.API_GET_PROJECT_INFO).then(responseJson => {

      if (this.dataValidation.isEmptyJson(responseJson)) {
        this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Server !!!');
        return;
      }


      this.users = responseJson['resultData']['ProjectUserLookup'];
      this.businessUnits = responseJson['resultData']['BULookup'];
      this.areas = responseJson['resultData']['AreaLookup'];
      this.brands = responseJson['resultData']['BrandLookup'];
      this.projectTypes = responseJson['resultData']['ProjectTypeLookup'];
      this.materials = responseJson['resultData']['MaterialLookup'];
      this.roles = responseJson['resultData']['RoleLookup'];

    });


    var reqJson = {
      "AppType": "W"
    };
    this.httpCall.callApi(reqJson, this.codes.API_GET_ACTIVITY).then(respJson => {

      if (this.dataValidation.isEmptyJson(respJson)) {
        this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Server !!!');
        return;
      }

      this.activites = respJson['resultData'];

      for (let i = 0; i < this.activites.length; i++) {
        this.activites[i]['PhaseName'] = this.getPhaseNameByPhaseId(this.activites[i]['PhaseId']);
        this.activites[i]['userIds'] = [];
        this.activites[i]['materialId'] = 1;
        this.activites[i]['roleId'] = 1;

        this.activites[i]['eStartDate'] = '2020-03-30';
        this.activites[i]['aStartDate'] = '2020-03-30';
        this.activites[i]['eEndDate'] = '2020-03-30';
        this.activites[i]['aEndDate'] = '2020-03-30';
      }
    });
  }

  closeModal() {
    this.navCtrl.pop();
  }


  //TODO: Make this server driven
  getPhaseNameByPhaseId(phaseId) {
    if (phaseId == 1)
      return "Pre Production";
    if (phaseId == 2)
      return "Production";
    if (phaseId == 3)
      return "Post Production";
    if (phaseId == 4)
      return "Analysis";
  }



  addProject() {


    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));


    if(this.dataValidation.isEmptyJson(currentUserInfo)){
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }


    //Create the json for activity
    var projectPhases = [];
    for (let i = 0; i < this.activites.length; i++) {
      projectPhases[i] = this.getActivityInPostFormat(this.activites[i]);
    }




    var requestData = {
      "ProjectMode": 1,
      "SelectedArea": this.areaIds,
      "ProjectName": this.projectName,
      "ProjectAlias": this.projectAlias,
      "ProjectDescription": this.projectDescription,
      "BusinessUnitID": this.businessUnitId,
      "ProjectTypeID": this.projectTypeId,
      "ExpectedStartDate": this.eStartDate,
      "ActualStartDate": this.aStartDate,
      "ExpectedEndDate": this.eEndDate,
      "ActualEndDate": this.aEndDate,
      "IsBranded": false,
      "BrandID": this.brandId,
      "ProjectIcon": null,
      "ProjectStatus": 0,
      "CompletePer": 0.0,
      "ProjectOwner": currentUserInfo[0]['UserId'],
      "ProjectOwnerName": null,
      "NoOfVideos": this.nVideos,
      "NoOfWallPapers": this.nWallpapers,
      "NoOfPhotos": this.nPhotos,
      "NoOfOthers": this.nOthers,
      "CreatedByID": currentUserInfo[0]['UserId'],
      "BrandImagePath": null,
      "CreatedOn": '2020-03-30', //TODO: Change This
      "CreatedBy": currentUserInfo[0]['UserId'],
      "CreatedByUserName": null,
      "ModifiedOn": '2020-03-30', //TODO: Change This
      "LastModifiedBy": 0,
      "LastModifiedByUserName": null,
      "ProjectPhases": projectPhases
    };


    console.warn('To Post this data : ' + JSON.stringify(requestData));

    var loading = this.msgHelper.showWorkingDialog('Adding Project ...');
    this.httpCall.callApi(requestData, this.codes.API_ADD_PROJECT).then(responseJson => {

      loading.dismiss();
      if (this.dataValidation.isEmptyJson(requestData)) {
        this.msgHelper.showErrorDialog('Error !!!', 'Empty response received !!!');
        return;
      }

      if (responseJson['status'] == 1) {
        this.msgHelper.showToast('Added Project Successfully !!!!');
        this.navCtrl.pop();
      }

    });

  }

  getActivityInPostFormat(activity) {
    var json = {
      "Activity": {
        "AssignedUserID": activity['userIds'],
        "ProjectID": 0,
        "ProjectTypeID": this.projectTypeId,
        "PhaseID": activity['PhaseId'],
        "ActivityID": activity['ActivityId'],
        "EndDate": activity['aEndDate'],
        "AssignedMaterialID": activity['materialId'],
        "ActivityRoleID": activity['roleId'],
        "CoinRewardQuantity": activity['CoinRewardQuantity'],
        "DiamondRewardQuantity": activity['DiamondRewardQuantity'],
        "CouponRewardQuantity": activity['CouponRewardQuantity'],
        "TrophyRewardQuantity": activity['TrophyRewardQuantity'],
        "IsFinished": false

      },
      "ProjectID": 0,
      "PhaseID": activity['PhaseId'],
      "PhaseName": activity['PhaseName'],
      "PhaseDescription": activity['PhaseName'],
      "ExpectedStartDate": activity['eStartDate'],
      "ActualStartDate": activity['aStartDate'],
      "ExpectedEndDate": activity['eEndDate'],
      "ActualEndDate": activity['aEndDate']
    };
    return json;
  }
}