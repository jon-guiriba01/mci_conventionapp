import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
				"FP1: A Case of Ciguatera Fish Poisoning in a 23 Year Old Male" 
				, "FP2: A Case Report of a Bilateral Non-Contiguous Buccal Squamous Cell Carcinoma in a 39-year Old Male"
				, "FP3: A Primary Submental Papillary Cystadenocarcinoma from a Salivary Gland Origin – A Rare Case Report"
				, "FP4: A Retrospective Study Comparing Enucleation Combined with Peripheral Ostectomy and Segmental Mandibulectomy in the Management of Large Cystic Ameloblastomas Among Patients in Cebu City, Philippines from year January 1, 2000 to December 31, 2017."
				, "FP5: A Retrospective Study of Hypocalcemic Patients with Benign or Malignant Thyroid Mass Who Underwent Total Thyroidectomy at Vicente Sotto Memorial Medical Center, Cebu City"
				, "FP6: A Retrospective Study on the Possible Risk Factors of Failed Otoacoustic Emission Testing Results among Neonates Delivered in a Tertiary Hospital from January to December 2015"
				, "FP7: Adenoid Cystic Carcinoma of the Nasal Ala"
				, "FP8: Association of ultrasonographic findings and thyroid malignancy in a tertiary hospital in Metro Manila"
				, "FP9: Basal Cell Carcinoma, Odontogenic Cysts, Brain and Skeletal Abnormalities (Gorlin Goltz) Syndrome in a 46-year-old female"
				, "FP10: Calcifying Epithelial Odontogenic Tumor in a Young face: Conservative Surgery in an Adolescent Patient"
			]
		},
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
			this.title = this.contents[this.navParams.get("type")].title;
			this.content = this.contents[this.navParams.get("type")].body;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResearchInfoPage');
  }

}
