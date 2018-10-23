import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  selector: 'page-speaker-info',
  templateUrl: 'speaker-info.html',
})
export class SpeakerInfoPage {

	speaker = {};
  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
    , private transfer: FileTransfer
    , private file: File
    , public loadingCtrl: LoadingController
    , private toastCtrl: ToastController
    , private androidPermissions: AndroidPermissions
    , private platform: Platform
  ) {
  	this.speaker = this.navParams.get("speaker")
  }


  ionViewDidLoad() {
  }

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

  download(doc){
    this.androidPermissions.requestPermissions([
      this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
      , this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE]
    ).then((res)=>{
    

      let loading = this.loadingCtrl.create({
        content: 'Downloading PDF...'
      });
      loading.present();

      if(!doc.link){
        let toast = this.toastCtrl.create({
          message: 'No Document to download',
          duration: 3000,
          position: 'top'
        });
        toast.present();
        loading.dismiss();

        return;
      }

      console.log("file", this.file.externalRootDirectory  + 'file.pdf')
      const fileTransfer: FileTransferObject = this.transfer.create();


      var fileName = doc.link.split("/")[2];

      let destDir = "file:///storage/emulated/0/Download/"
      let srcDir = this.file.applicationDirectory + 'www/assets/pdfs/'
      
      if(this.platform.is('ios')){
        destDir = this.file.documentsDirectory+"/Download/"
        srcDir = this.file.applicationDirectory+ 'www/assets/pdfs/'
      }
      
        let isFile = this.file.checkFile(this.file.applicationDirectory+ 'www/assets/',  'pdfs')
        let isDir = this.file.checkDir(srcDir, fileName)

        let toast = this.toastCtrl.create({
          message: 
            'DEBUG src:' + srcDir + 
            " dest:" + destDir + 
            "isFile:"+ isFile +
            "isDir:"+ isDir,
          duration: 5000,
          position: 'top'
        });
        toast.present();

      this.file.copyFile(
        srcDir, 
        fileName, 
        destDir, 
        fileName
      ).then((e)=>{
        let toast = this.toastCtrl.create({
          message: 'Downloaded to ' + e.fullPath,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        console.log("e",e)
        loading.dismiss();
      }).catch((e)=>{
        let toast = this.toastCtrl.create({
          message: 'Failed to download document',
          duration: 1000,
          position: 'top'
        });
        toast.present();

        console.log("f",e)
        loading.dismiss();
      })
    
    });
  }

}
