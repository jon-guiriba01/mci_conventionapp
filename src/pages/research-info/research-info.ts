import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  selector: 'page-research-info',
  templateUrl: 'research-info.html',
})
export class ResearchInfoPage {

	title = "Analytical Research Paper Contest"

	content = [];


	contents = {
		analytical:{
			title:"Analytical Research Paper Contest",
			body:[
				"ARC1:  Comparison of The Incidence of Post-Operative Bleeding in Tonsillectomy versus Tonsillectomy with Fossa Closure in a Tertiary Military Hospital: A Retrospective Cohort Study"
				,"ARC2: The use of Smartphone vs Conventional ENT Endoscopy among Otolaryngologists: A cross-sectional analytical study"
				,"ARC3: Association Of Ultrasonographic Findings And Thyroid Malignancy In A Tertiary Hospital In Metro Manila"
				,"ARC4: Morbidity Outcomes of Prophylactic Central Neck Dissection with Total Thyroidectomy versus Total Thyroidectomy alone in Patients with Node Negative Papillary Thyroid Cancer: A Meta Analysis"
				,"ARC5: Comparison of Salivary pH and Taste Sensitivity among Patients in a Tertiary Hospital: A Cross Sectional Study"
			]
		},
		descriptive:{
			title:"Descriptive Research Paper Contest",
			body:[
				"DRC1: Incidence of Facial Paralysis in Temporal Bone Fracture at a Tertiary Government Hospital in the Philippines"
				, "DRC2:Outcome of Single-operator Rigid Esophagoscopy in Sword Swallower’s Position Technique for Extraction of Ingested Foreign Body"
				, "DRC3: Maxillary Sinus Squamous Cell Carcinoma in a Tertiary Hospital in the Philippines"
				, "DRC4: Advanced Laryngotracheal Stenosis Patients in a Tertiary Government Hospital: Clinico-etiologic profile, Management & Outcome (A Preliminary Study)"
				, "DRC5: Clinical Profile of Filipino Patients with Epistaxis: A University Hospital Experience"
			]
		},
		innovation:{
			title:"Surgical Innovation Paper Contest",
			body:[
				"PSC1: Penetrating Neck Injury Secondary To Hacking Wound: A Case Report"
				, "PSC2: One Day Simultaneous Bilateral Endoscopic Type I Tympanoplasty With Cartilage Reinforcement: Our Experience In Tertiary Public Hospital"
				, "PSC3: The Application Of Open-source 3d Planning Software In Virtual Reconstruction Of Complex Maxillofacial Defects: Our Local Experience"
				, "PSC4: The Use Of Middle Turbinate Mucosal Graft In Endoscopic Guided Repair Of Csf Leak At The Cribriform Plate In A Patient With Severe Craniofacial"
				, "PSC5: A Qualitative Experimental Study On The Efficacy Of Polydioxanone Suture (Pds) I As Internal Fixator Among Pediatric Patients With Open Displaced Linear Fracture Of The Mandibular Body, Angle Or Symphysis Admitted In A Tertiary Hospital From November 2016 – May 2018"
			]
		},
		instrumentation:{
			title:"Surgical Instrumentation Paper Contest",
			body:[
				"PSC6: Electrocautery Knife"
				, "PSC7: Titanium Mesh as an alternative to Isshiki’s Thyroplasty Titanium Bridge for Isshiki Thyroplasty Type II"
			]
		},
		free:{
			title:"Free Paper Presentation",
			body:[
				"FP 1 A Case of Ciguatera Fish Poisoning in a 23 Year Old Male" 
				, "FP 2 A Case Report of a Bilateral Non-Contiguous Buccal Squamous Cell Carcinoma in a 39-year Old Male"
				, "FP 3 A Primary Submental Papillary Cystadenocarcinoma from a Salivary Gland Origin A Rare Case Report"
				, "FP 4 A Retrospective Study Comparing Enucleation Combined with Peripheral Ostectomy and Segmental Mandibulectomy in the Management of Large Cystic Ameloblastomas Among Patients in Cebu City, Philippines from year January 1, 2000 to December 31, 2017."
				, "FP 5 A Retrospective Study of Hypocalcemic Patients with Benign or Malignant Thyroid Mass Who Underwent Total Thyroidectomy at Vicente Sotto Memorial Medical Center, Cebu City"
				, "FP 6 A Retrospective Study on the Possible Risk Factors of Failed Otoacoustic Emission Testing Results among Neonates Delivered in a Tertiary Hospital from January to December 2015"
				, "FP 7 Adenoid Cystic Carcinoma of the Nasal Ala"
				, "FP 8 Association of ultrasonographic findings and thyroid malignancy in a tertiary hospital in Metro Manila"
				, "FP 9 Basal Cell Carcinoma, Odontogenic Cysts, Brain and Skeletal Abnormalities (Gorlin Goltz) Syndrome in a 46-year-old female"
				, "FP 10 Calcifying Epithelial Odontogenic Tumor in a Young face: Conservative Surgery in an Adolescent Patient"
				, "FP 11 Case Report on Nasopharyngeal Inflammatory Pseudotumor: A Diagnostic and Therapeutic Quandary"
				, "FP 12 Clinical Outcomes Post CO2 Laser Posterior Cordotomy With Anterior Partial Arytenoidectomy in Bilateral Vocal Fold Immobility: A Case Series Retrospective Review of Twenty-Two Filipino Patients in a Tertiary Hospital"
				, "FP 13 Clinicopathologic Profile of  Pediatric Thyroid Carcinoma"
				, "FP 14 Cyanoacrylate utilization for facial nerve repair after iatrogenic injury post-mastoidectomy: a case report"
				, "FP 15 Delayed Presentation Of Supraglottic Web From Caustic Ingestion"
				, "FP 16 Diagnostic Utility of Fine Needle Aspiration Biopsy and Frozen Section in Parotid Masses: a 5-year Retrospective Review in a Tertiary Government Hospital, An Update"
				, "FP 17 Endoscopic Sinus Surgery Extended Transsphenoidal Approach Performed in a Tertiary Government Hospital, a Case Series"
				, "FP 18 Esophageal Fistula, An Unusual Complication of Total Thyroidectomy"
				, "FP 19 Frontotemporal mass in oral cavity carcinoma: synchronous tumor or distant metastasis?"
				, "FP 20 Game of Groans: A Case Report on Recurrent Pancreatitis with Primary Hyperparathyroidism"
				, "FP 21 Hypoglossal nerve schwannoma, Parapharyngeal space, post styloid, right"
				, "FP 22 Implication of Extracapsular Spread in the Staging of Patients with Head and Neck Squamous Cell Carcinoma Who Underwent Neck Dissection in a Tertiary Hospital in the City of Manila, Philippines "
				, "FP 23 In vitro study on tea tree oil and eucalyptus as alternative treatment for aspergillus spp"
				, "FP 24 Inflammatory Myofibroblastic Tumor of the Gingiva"
				, "FP 25 Intratracheal Mass: Adenoid Cystic Carcinoma"
				, "FP 26 Juvenile Laryngeal Amyloidosis Presenting as Laryngeal Papillomatosis: A Case Report"
				, "FP 27 Laryngeal Amyloidosis Presenting as a Glottic-Subglottic Bulging"
				, "FP 28 Malignancy that Mimics Cholesteatoma"
				, "FP 29 Meta-analysis and systematic review of the post-operative ionized calcium slope in predicting symptomatic hypocalcemia among post-thyroidectomy patients"
				, "FP 30 Nasopharyngolaryngeal amyloidosis in a 70 year old female"
				, "FP 31 Non-Recurrent Laryngeal Nerve in Thyroid Surgery: A Report of Case Series in Vietnam and Literature Review"
				, "FP 32 One Stage Simultaneous Bilateral Endoscopic Type I Tympanoplasty with Cartilage reinforcement: Our experience in Ospital ng Makati"
				, "FP 33 Outcomes of Transoral CO2 Laser Surgery for Early Glottic Carcinoma: Experience of Two Private Tertiary Hospitals"
				, "FP 34 Palliative Right lower lid blepharoplasty, right partial temporal bone resection, right neck dissection, right tympanoplasty, right pectoralis major flap reconstruction in a case of a Recurrent Parotid Adenocarcinoma"
				, "FP 35 Patterns Of Craniomaxillofacial Fractures Among Military Personnel: A 3-Year Retrospective Analysis In A Tertiary Military Hospital"
				, "FP 36 Profile and Treatment Outcomes of Laryngo-tracheal stenosis in a Tertiary Private Hospital"
				, "FP 37 Pyoderma gangrenosum presenting as an ulceration of the eyelid and ear lobule"
				, "FP 38 Skull base and Cervical spine Osteomyelitis, an under-recognized complication of Endoscopic Nasopharyngectomy – A case series and review of the literature"
				, "FP 39 Spindle Cell Carcinoma of the Left Parotid Gland in a 71 year-old Female"
				, "FP 40 Spontaneous Retropharyngeal Emphysema"
				, "FP 41 Surgical Reconstruction of the Upper Esophagus via Deltopectoral Flap"
				, "FP 42 Tension pneumocephalus from an occult anterior skull base defect in a patient with a ventriculoperitoneal shunt without clinically apparent rhinorrhea"
				, "FP 43 The Participation of the Manobo In the Development of Their Community"
				, "FP 44 Thyroglossal Duct Cyst"
				, "FP 45 Tongue Teratoma in a Newborn"
				, "FP 46 Tonsillar Lymphagiomatous Polyp of the Palatine Tonsil in a 25 year old male"
				, "FP 47 Treatment of a Dysfunctional Larynx from Post-Radiation Changes: A Case Report"

			]
		},
	}

  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
    , public loadingCtrl: LoadingController
    , private toastCtrl: ToastController
    , private androidPermissions: AndroidPermissions
    , private transfer: FileTransfer
    , private file: File
    , private platform: Platform
  	) {
			this.title = this.contents[this.navParams.get("type")].title;
			this.content = this.contents[this.navParams.get("type")].body;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResearchInfoPage');
  }

  downloadPDF(item){
  	  this.androidPermissions.requestPermissions([
      this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
      , this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE]
    ).then((res)=>{
    

      let loading = this.loadingCtrl.create({
        content: 'Downloading PDF...'
      });
      loading.present();

      const fileTransfer: FileTransferObject = this.transfer.create();

      let dir = "assets/pdfs/eventapresprespapers/"
      switch (this.navParams.get("type")) {
      	case "free":
      		dir+="FREE PAPER/"
      		break;
      	case "analytical":
      	case "descriptive":
      		dir+="ORAL/"
      		break;
      	case "innovation":
      	case "instrumentation":
      		dir+="POSTER/"
      		break;
      }
// 12, 19,  22,  26, 31, 32, 34, , 36, 38 
      var fileName = item.trim().replace(/:/g, "").replace(/\?/g, "")+".pdf";

      if(fileName.indexOf("FP 12") != -1)
      	fileName = "FP 12 Clinical Outcomes Post CO2 Laser Posterior Cordotomy With Anterior Partial Arytenoidectomy in Bilateral Vocal Fold Immobility A Case Series Retrospective Review.pdf";
      if(fileName.indexOf("FP 22") != -1)
        fileName = "FP 22 Implication of Extracapsular Spread in the Staging of Patients with Head and Neck Squamous Cell Carcinoma.pdf";
      if(fileName.indexOf("FP 20") != -1)
      	fileName = "FP 20 Game of Groans.pdf";
      if(fileName.indexOf("FP 34") != -1)
      	fileName = "FP 34 Palliative Right lower lid blepharoplasty, right partial temporal bone resection, right neck dissection, right tympanoplasty, right pectoralis major flap reconstruction.pdf";
      if(fileName.indexOf("FP 38") != -1)
      	fileName = "FP 38 Skull base and Cervical spine Osteomyelitis, an under-recognized complication of Endoscopic Nasopharyngectomy A case series and review of the literature.pdf";
     
     if(fileName.indexOf("ARC1") != -1)
    	fileName = "ARC1  Comparison of The Incidence of Post-Operative Bleeding in Tonsillectomy versus Tonsillectomy with Fossa Closure in a Tertiary Military Hospital A Retrospective Cohort Study.pdf";     
     if(fileName.indexOf("ARC2") != -1)
    	fileName = "ARC2 The use of Smartphone vs Conventional ENT .pdf";     
     if(fileName.indexOf("ARC3") != -1)
    	fileName = "ARC3 Association Of Ultrasonographic Findings And Thyroid Malignancy In A Tertiary Hospital In Metro Manila.pdf";     
     if(fileName.indexOf("ARC4") != -1)
    	fileName = "ARC4 Morbidity Outcomes of Prophylactic Central Neck Dissection with Total Thyroidectomy versus Total Thyroidectomy alone in Patients with Node Negative Papillary Thyroid Cance.pdf";     
     if(fileName.indexOf("ARC5") != -1)
    	fileName = "ARC5 Comparison of Salivary pH and Taste Sensitivity among Patients in a Tertiary Hospital A Cross Sectional Study.pdf";     
    
     if(fileName.indexOf("DRC1") != -1)
    	fileName = "DRC1 Incidence of Facial Paralysis in Temporal Bone Fracture at a Tertiary Government Hospital in the Philippines.pdf";     
     if(fileName.indexOf("DRC2") != -1)
    	fileName = "DRC2 Outcome of Single-operator Rigid Esophagoscopy in Sword Swallower_s Position Technique for Extraction of Ingested Foreign Body.pdf";     
     if(fileName.indexOf("DRC3") != -1)
    	fileName = "DRC3 Maxillary Sinus Squamous Cell Carcinoma in a Tertiary Hospital in the Philippines.pdf";     
     if(fileName.indexOf("DRC4") != -1)
    	fileName = "DRC4 Advanced Laryngotracheal Stenosis Patients in a Tertiary Government Hospital Clinico-etiologic profile, Management & Outcome A Preliminary Study.pdf";     
     if(fileName.indexOf("DRC5") != -1)
    	fileName = "DRC5 Clinical Profile of Filipino Patients with Epistaxis A University Hospital Experience.pdf";  

     if(fileName.indexOf("PSC1") != -1)
    	fileName = "PSC1 PENETRATING NECK INJURY SECONDARY TO HACKING.pdf";     
     if(fileName.indexOf("PSC2") != -1)
    	fileName = "PSC2 One Day Simultaneous Bilateral Endoscopic Type I Tympanoplasty with Cartilage reinforcement Our experience in Tertiary Public Hospital.pdf";     
     if(fileName.indexOf("PSC3") != -1)
    	fileName = "PSC3 The Application of Open-Source 3D Planning Software in Virtual Reconstruction of Complex Maxillofacial Defects Our Local Experience.pdf";     
     if(fileName.indexOf("PSC4") != -1)
    	fileName = "PSC4 The Use Of Middle Turbinate Mucosal Graft In Endoscopic Guided Repair Of CSF Leak At The Cribriform Plate In A Patient With Severe Craniofacial.pdf";     
     if(fileName.indexOf("PSC5") != -1)
    	fileName = "PSC5 A Qualitative Experimental Study on the Efficacy of Polydioxanone Suture PSD as Internal Fixator among Pediatric Patients.pdf";     
     if(fileName.indexOf("PSC6") != -1)
    	fileName = "PSC6 Electrocautery Knife.pdf";     
     if(fileName.indexOf("PSC7") != -1)
    	fileName = "PSC7 Titanium Mesh as an alternative to Isshiki_s Thyroplasty Titanium Bridge for Isshiki Thyroplasty Type 2.pdf";
      

      console.log("file", fileName)


      let destDir = "file:///storage/emulated/0/Download/"
      let srcDir = this.file.applicationDirectory + 'www/' + dir
      
      if(this.platform.is('ios')){
        destDir = this.file.documentsDirectory+"/Download/"
        srcDir = this.file.applicationDirectory + 'www/' + dir
      }

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
          message: 'Document not found',
          duration: 3000,
          position: 'top'
        });
        toast.present();

        console.log("f",e)
        loading.dismiss();
      })
    
    });
  }

}
