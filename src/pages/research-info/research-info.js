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
import { NavController, NavParams } from 'ionic-angular';
var ResearchInfoPage = /** @class */ (function () {
    function ResearchInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = "Analytical Research Paper Contest";
        this.content = [];
        this.contents = {
            analytical: {
                title: "Analytical Research Paper Contest",
                body: [
                    "ARC1:  Comparison of The Incidence of Post-Operative Bleeding in Tonsillectomy versus Tonsillectomy with Fossa Closure in a Tertiary Military Hospital: A Retrospective Cohort Study",
                    "ARC2: The use of Smartphone vs Conventional ENT Endoscopy among Otolaryngologists: A cross-sectional analytical study",
                    "ARC3: Association Of Ultrasonographic Findings And Thyroid Malignancy In A Tertiary Hospital In Metro Manila",
                    "ARC4: Morbidity Outcomes of Prophylactic Central Neck Dissection with Total Thyroidectomy versus Total Thyroidectomy alone in Patients with Node Negative Papillary Thyroid Cancer: A Meta Analysis",
                    "ARC5: Comparison of Salivary pH and Taste Sensitivity among Patients in a Tertiary Hospital: A Cross Sectional Study"
                ]
            },
            descriptive: {
                title: "Descriptive Research Paper Contest",
                body: [
                    "DRC1: Incidence of Facial Paralysis in Temporal Bone Fracture at a Tertiary Government Hospital in the Philippines",
                    "DRC2:Outcome of Single-operator Rigid Esophagoscopy in Sword Swallower’s Position Technique for Extraction of Ingested Foreign Body",
                    "DRC3: Maxillary Sinus Squamous Cell Carcinoma in a Tertiary Hospital in the Philippines",
                    "DRC4: Advanced Laryngotracheal Stenosis Patients in a Tertiary Government Hospital: Clinico-etiologic profile, Management & Outcome (A Preliminary Study)",
                    "DRC5: Clinical Profile of Filipino Patients with Epistaxis: A University Hospital Experience"
                ]
            },
            innovation: {
                title: "Surgical Innovation Paper Contest",
                body: [
                    "PSC1: Penetrating Neck Injury Secondary To Hacking Wound: A Case Report",
                    "PSC2: One Day Simultaneous Bilateral Endoscopic Type I Tympanoplasty With Cartilage Reinforcement: Our Experience In Tertiary Public Hospital",
                    "PSC3: The Application Of Open-source 3d Planning Software In Virtual Reconstruction Of Complex Maxillofacial Defects: Our Local Experience",
                    "PSC4: The Use Of Middle Turbinate Mucosal Graft In Endoscopic Guided Repair Of Csf Leak At The Cribriform Plate In A Patient With Severe Craniofacial",
                    "PSC5: A Qualitative Experimental Study On The Efficacy Of Polydioxanone Suture (Pds) I As Internal Fixator Among Pediatric Patients With Open Displaced Linear Fracture Of The Mandibular Body, Angle Or Symphysis Admitted In A Tertiary Hospital From November 2016 – May 2018"
                ]
            },
            instrumentation: {
                title: "Surgical Instrumentation Paper Contest",
                body: [
                    "PSC6: Electrocautery Knife",
                    "PSC7: Titanium Mesh as an alternative to Isshiki’s Thyroplasty Titanium Bridge for Isshiki Thyroplasty Type II"
                ]
            },
            free: {
                title: "Free Paper Presentation",
                body: [
                    "FP1: A Case of Ciguatera Fish Poisoning in a 23 Year Old Male",
                    "FP2: A Case Report of a Bilateral Non-Contiguous Buccal Squamous Cell Carcinoma in a 39-year Old Male",
                    "FP3: A Primary Submental Papillary Cystadenocarcinoma from a Salivary Gland Origin – A Rare Case Report",
                    "FP4: A Retrospective Study Comparing Enucleation Combined with Peripheral Ostectomy and Segmental Mandibulectomy in the Management of Large Cystic Ameloblastomas Among Patients in Cebu City, Philippines from year January 1, 2000 to December 31, 2017.",
                    "FP5: A Retrospective Study of Hypocalcemic Patients with Benign or Malignant Thyroid Mass Who Underwent Total Thyroidectomy at Vicente Sotto Memorial Medical Center, Cebu City",
                    "FP6: A Retrospective Study on the Possible Risk Factors of Failed Otoacoustic Emission Testing Results among Neonates Delivered in a Tertiary Hospital from January to December 2015",
                    "FP7: Adenoid Cystic Carcinoma of the Nasal Ala",
                    "FP8: Association of ultrasonographic findings and thyroid malignancy in a tertiary hospital in Metro Manila",
                    "FP9: Basal Cell Carcinoma, Odontogenic Cysts, Brain and Skeletal Abnormalities (Gorlin Goltz) Syndrome in a 46-year-old female",
                    "FP10: Calcifying Epithelial Odontogenic Tumor in a Young face: Conservative Surgery in an Adolescent Patient",
                    "FP11: Case Report on Nasopharyngeal Inflammatory Pseudotumor: A Diagnostic and Therapeutic Quandary",
                    "FP12: Clinical Outcomes Post CO2 Laser Posterior Cordotomy With Anterior Partial Arytenoidectomy in Bilateral Vocal Fold Immobility: A Case Series Retrospective Review of Twenty-Two Filipino Patients in a Tertiary Hospital",
                    "FP13: Clinicopathologic Profile of  Pediatric Thyroid Carcinoma",
                    "FP14: Cyanoacrylate utilization for facial nerve repair after iatrogenic injury post-mastoidectomy: a case report",
                    "FP15: Delayed Presentation Of Supraglottic Web From Caustic Ingestion",
                    "FP16: Diagnostic Utility of Fine Needle Aspiration Biopsy and Frozen Section in Parotid Masses: a 5-year Retrospective Review in a Tertiary Government Hospital, An Update",
                    "FP17: Endoscopic Sinus Surgery Extended Transsphenoidal Approach Performed in a Tertiary Government Hospital, a Case Series",
                    "FP18: Esophageal Fistula, An Unusual Complication of Total Thyroidectomy",
                    "FP19: Frontotemporal mass in oral cavity carcinoma: synchronous tumor or distant metastasis?",
                    "FP20: Game of Groans: A Case Report on Recurrent Pancreatitis with Primary Hyperparathyroidism",
                    "FP21: Hypoglossal nerve schwannoma, Parapharyngeal space, post styloid, right",
                    "FP22: Implication of Extracapsular Spread in the Staging of Patients with Head and Neck Squamous Cell Carcinoma Who Underwent Neck Dissection in a Tertiary Hospital in the City of Manila, Philippines ",
                    "FP23: In vitro study on tea tree oil and eucalyptus as alternative treatment for aspergillus spp.",
                    "FP24: Inflammatory Myofibroblastic Tumor of the Gingiva",
                    "FP25: Intratracheal Mass: Adenoid Cystic Carcinoma",
                    "FP26: Juvenile Laryngeal Amyloidosis Presenting as Laryngeal Papillomatosis : A Case Report",
                    "FP27: Laryngeal Amyloidosis Presenting as a Glottic-Subglottic Bulging",
                    "FP28: Malignancy that Mimics Cholesteatoma",
                    "FP29: Meta-analysis and systematic review of the post-operative ionized calcium slope in predicting symptomatic hypocalcemia among post-thyroidectomy patients",
                    "FP30: Nasopharyngolaryngeal amyloidosis in a 70 year old female",
                    "FP31: Non-Recurrent Laryngeal Nerve in Thyroid Surgery: A Report of Case Series in Vietnam and Literature Review",
                    "FP32: One Stage Simultaneous Bilateral Endoscopic Type I Tympanoplasty with Cartilage reinforcement: Our experience in Ospital ng Makati",
                    "FP33: Outcomes of Transoral CO2 Laser Surgery for Early Glottic Carcinoma: Experience of Two Private Tertiary Hospitals",
                    "FP34: Palliative Right lower lid blepharoplasty, right partial temporal bone resection, right neck dissection, right tympanoplasty, right pectoralis major flap reconstruction in a case of a Recurrent Parotid Adenocarcinoma",
                    "FP35: Patterns Of Craniomaxillofacial Fractures Among Military Personnel: A 3-Year Retrospective Analysis In A Tertiary Military Hospital",
                    "FP36: Profile and Treatment Outcomes of Laryngo-tracheal stenosis in a Tertiary Private Hospital",
                    "FP37: Pyoderma gangrenosum presenting as an ulceration of the eyelid and ear lobule",
                    "FP38: Skull base and Cervical spine Osteomyelitis, an under-recognized complication of Endoscopic Nasopharyngectomy – A case series and review of the literature",
                    "FP39: Spindle Cell Carcinoma of the Left Parotid Gland in a 71 year-old Female",
                    "FP40: Spontaneous Retropharyngeal Emphysema",
                    "FP41: Surgical Reconstruction of the Upper Esophagus via Deltopectoral Flap",
                    "FP42: Tension pneumocephalus from an occult anterior skull base defect in a patient with a ventriculoperitoneal shunt without clinically apparent rhinorrhea",
                    "FP43: The Participation of the Manobo In the Development of Their Community",
                    "FP44: Thyroglossal Duct Cyst ",
                    "FP45: Tongue Teratoma in a Newborn",
                    "FP46: Tonsillar Lymphagiomatous Polyp of the Palatine Tonsil in a 25 year old male",
                    "FP47: Treatment of a Dysfunctional Larynx from Post-Radiation Changes: A Case Report"
                ]
            },
        };
        this.title = this.contents[this.navParams.get("type")].title;
        this.content = this.contents[this.navParams.get("type")].body;
    }
    ResearchInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResearchInfoPage');
    };
    ResearchInfoPage = __decorate([
        Component({
            selector: 'page-research-info',
            templateUrl: 'research-info.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], ResearchInfoPage);
    return ResearchInfoPage;
}());
export { ResearchInfoPage };
//# sourceMappingURL=research-info.js.map