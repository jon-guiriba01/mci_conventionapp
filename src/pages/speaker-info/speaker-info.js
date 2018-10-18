var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
var SpeakerInfoPage = /** @class */ (function () {
    function SpeakerInfoPage(navCtrl, navParams, transfer, file, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transfer = transfer;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.speaker = {};
        this.speaker = this.navParams.get("speaker");
    }
    SpeakerInfoPage.prototype.ionViewDidLoad = function () {
    };
    // download(doc){
    //   console.log("file", this.file.externalRootDirectory  + 'file.pdf')
    //   const fileTransfer: FileTransferObject = this.transfer.create();
    //   let loading = this.loadingCtrl.create({
    //     content: 'Downloading PDF...'
    //   });
    //   loading.present();
    //   fileTransfer.download(doc.link, this.file.externalRootDirectory+"/Download/" +doc.title+".pdf", true).then((e)=>{
    //     console.log("success: ", e)
    //     loading.dismiss();  
    //     let toast = this.toastCtrl.create({
    //       message: 'Successfully downloaded document',
    //       duration: 5000,
    //       position: 'top'
    //     });
    //     toast.present();
    //   }).catch((err)=>{
    //     let toast = this.toastCtrl.create({
    //       message: 'Failed to download document',
    //       duration: 5000,
    //       position: 'top'
    //     });
    //     toast.present();
    //     console.log("err",err)
    //     loading.dismiss();  
    //   });
    // }
    SpeakerInfoPage.prototype.download = function (doc) {
        var _this = this;
        if (doc.link.trim().length <= 0) {
            var toast = this.toastCtrl.create({
                message: 'No Document to download',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }
        console.log("file", this.file.externalRootDirectory + 'file.pdf');
        var fileTransfer = this.transfer.create();
        var loading = this.loadingCtrl.create({
            content: 'Downloading PDF...'
        });
        loading.present();
        var fileName = doc.link.split("/")[2];
        this.file.copyFile(this.file.applicationDirectory + 'www/assets/pdfs/', fileName, this.file.externalRootDirectory + "/Download/", fileName).then(function (e) {
            var toast = _this.toastCtrl.create({
                message: 'Downloaded to ' + e.fullPath,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            console.log("e", e);
            loading.dismiss();
        }).catch(function (e) {
            var toast = _this.toastCtrl.create({
                message: 'Failed to download document',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            console.log("f", e);
            loading.dismiss();
        });
    };
    SpeakerInfoPage = __decorate([
        Component({
            selector: 'page-speaker-info',
            templateUrl: 'speaker-info.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            FileTransfer,
            File,
            LoadingController,
            ToastController])
    ], SpeakerInfoPage);
    return SpeakerInfoPage;
}());
export { SpeakerInfoPage };
//# sourceMappingURL=speaker-info.js.map