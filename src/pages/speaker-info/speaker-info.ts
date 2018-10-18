import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
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

    if(doc.link.trim().length <= 0){
      let toast = this.toastCtrl.create({
        message: 'No Document to download',
        duration: 3000,
        position: 'top'
      });
      toast.present();
      return;
    }

    console.log("file", this.file.externalRootDirectory  + 'file.pdf')
    const fileTransfer: FileTransferObject = this.transfer.create();

    let loading = this.loadingCtrl.create({
      content: 'Downloading PDF...'
    });

    loading.present();
    var fileName = doc.link.split("/")[2];

    this.file.copyFile(
     this.file.applicationDirectory + 'www/assets/pdfs/', 
      fileName, 
      this.file.externalRootDirectory+"/Download/", 
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
        duration: 3000,
        position: 'top'
      });
      toast.present();

      console.log("f",e)
      loading.dismiss();
    })
  }
}
