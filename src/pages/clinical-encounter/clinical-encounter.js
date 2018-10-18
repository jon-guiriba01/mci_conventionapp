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
var ClinicalEncounterPage = /** @class */ (function () {
    function ClinicalEncounterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timeRange = [
            "8:00 - 9:00 AM",
            "10:00 - 11:00 AM",
            "1:00 - 2:00 PM",
            "3:00 - 4:00 PM"
        ];
        this.schedule = [
            [
                {
                    title: "Challenges and Advances in Tonsillectomy and Adenoidectomy",
                    speakers: "Dr. Agnes T. Remulla, Dr. Keith Romeo A. Aguilera",
                    room: "Sampaguita A"
                },
                {
                    title: "Symptoms of Eustachian Tube Dysfunction ",
                    speakers: "Dr. Manuel E. Villegas Jr. ",
                    room: "Sampaguita B"
                },
                {
                    title: "Management of Estachian Tube Dysfunction ",
                    speakers: "Dr. Natividad A. Almazan ",
                    room: "Sampaguita B"
                },
                {
                    title: "Hearing Aids: Updates and New Trends",
                    speakers: "Dr. Ma. Leah C. Tantoco",
                    room: "Sampaguita C"
                },
                {
                    title: "Implantable Devices: Candidacy, Indications and Contraindications ",
                    speakers: "Dr. Maria Rina T. Reyes-Quintos",
                    room: "Sampaguita C"
                },
                {
                    title: "Septorhinoplasty  for the Crooked Nose",
                    speakers: "Dr. Cesar V. Villafuerte, Jr.",
                    room: "Roma Salon"
                },
                {
                    title: "The Role of Nasal Septum in Structural Rhinoplasty ",
                    speakers: "Dr. Eduardo C. Yap ",
                    room: "Roma Salon"
                },
                {
                    title: "Flexible Laryngoscopy and Related ENT Procedures ",
                    speakers: "Dr. Ryner Jose C. Carrillo ",
                    room: "Champagne Salon"
                },
                {
                    title: "Videostroboscopy",
                    speakers: "Dr. Fortuna Corazon A. Aberin-Roldan",
                    room: "Champagne Salon"
                },
            ],
            [
                {
                    title: "Diagnosis, Differentiation and Management of Different Types of BPPV ",
                    speakers: "Dr. Joanne Sebastiana M. De Ramos",
                    room: "Sampaguita A"
                },
                {
                    title: "Home-Based Vestibular Exercises",
                    speakers: "Dr. Manuel E. Villegas Jr.",
                    room: "Sampaguita A"
                },
                {
                    title: "Basic VNG for the ENTs",
                    speakers: "Dr. Ernest Roberto H. Manas",
                    room: "Sampaguita A"
                },
                {
                    title: "Bone-Anchored Hearing Aid",
                    speakers: "Dr. Erasmo Gonzalo DV. Llanes ",
                    room: "Sampaguita B"
                },
                {
                    title: "Cochlear Implant Surgery",
                    speakers: "Dr. Nathaniel W. Yang ",
                    room: "Sampaguita B"
                },
                {
                    title: "Surgery of Juvenile Angiofibroma",
                    speakers: "Dr. Josefino G.  Hernandez",
                    room: "Sampaguita C"
                },
                {
                    title: "Surgery of Inverting Papilloma",
                    speakers: "Dr. Ramon Antonio B. Lopa",
                    room: "Sampaguita C"
                },
                {
                    title: "Basic Principles & Overview on the Use of the Harmonic Scalpel in ENT ",
                    speakers: "Dr. Jaime Anthony A. Arzadon IV ",
                    room: "Rome Salon"
                },
                {
                    title: "The Use of Harmonic Scalpel in ORL-Head and Neck Surgeries",
                    speakers: "Dr. Alfredo Q.Y. Pontejos Jr. ",
                    room: "Rome Salon"
                },
                {
                    title: "Overview and Indications of Image-Guided Systems in Sinus and Skull Base Surgery ",
                    speakers: "Dr. Antonio H. Chua ",
                    room: "Champagne Salon"
                },
                {
                    title: "Image Guided Surgery in the Sinuses and Beyond",
                    speakers: "Dr. Jose Raindrop S. Embate",
                    room: "Champagne Salon"
                },
            ],
            [
                {
                    title: "Steroids 101",
                    speakers: "Dr. Ruzanne M. Caro",
                    room: "Sampaguita A"
                },
                {
                    title: "Steroids for Hearing Loss and Vertigo",
                    speakers: "Dr. Rosario R. Ricalde",
                    room: "Sampaguita A"
                },
                {
                    title: "Barrier Dysfunction in Allergic Rhinitis",
                    speakers: "Dr. Anne Marie V. Espiritu ",
                    room: "Sampaguita B"
                },
                {
                    title: "Local Allergic Rhinitis",
                    speakers: "Dr. Victoria C. Sarmiento",
                    room: "Sampaguita B"
                },
                {
                    title: "Diagnostic Tests for OSA",
                    speakers: "Dr. Michael Alexius A. Sarte",
                    room: "Sampaguita C"
                },
                {
                    title: "Upper Airway Evaluation in OSA Surgery",
                    speakers: "Dr. Cesar V. Villafuerte, Jr.",
                    room: "Sampaguita C"
                },
                {
                    title: "Intuitive Landmark Base Endoscopic Sinus Surgery",
                    speakers: "Dr. Benjamin S.A. Campomanes Jr",
                    room: "Roma Salon"
                },
                {
                    title: "Quality Sleep CME ",
                    speakers: "Cox. Angelo Yu Tan-Ngo, RRT. ",
                    room: "Roma Salon"
                },
                {
                    title: "Investment ",
                    speakers: "Dr. Edgardo C. Rodriguez, Jr.",
                    room: "Champagne Salon"
                },
                {
                    title: "Common ENT-HNS Outpatient Selected Conditions and Situations: How I Managed It  ",
                    speakers: "Dr. Rodolfo P. Nonato",
                    room: "Champagne Salon"
                },
                {
                    title: "Tympanostomy and Nasal Polypectomy using Microdebrider in the Clinic",
                    speakers: "Dr. Cesar Anthony P. Yabut",
                    room: "Champagne Salon"
                },
                {
                    title: "My Unconventional Methods in Otolaryngology-Head and Neck Surgery  ",
                    speakers: "Dr. Felixberto D. Ayahao",
                    room: "Champagne Salon"
                },
                {
                    title: "1. Practice Pearls in Preventive ORL, 2. Cultural Sensitivity in Healthcare, The National TB Program and its Implications in ENT Practice ",
                    speakers: "Dr. Manuel E. Villegas Jr.",
                    room: "Champagne Salon"
                },
            ],
            [
                {
                    title: "CMF Plating That Gets the Best Results: What an ENT Should Know ",
                    speakers: "Dr. Francis V. Roasa ",
                    room: "Sampaguita A"
                },
                {
                    title: "Condylar Fractures: When and When Not To Plate ",
                    speakers: "Dr. Roberto M. Pangan",
                    room: "Sampaguita A"
                },
                {
                    title: "Unsedated Office-based Procedure in Laryngology",
                    speakers: "Dr. Ma. Clarissa S. Fortuna",
                    room: "Sampaguita B"
                },
                {
                    title: "Vocal Fold Injection in the Clinic: When, Why, How ",
                    speakers: "Dr. Melfred L. Hernandez",
                    room: "Sampaguita B"
                },
                {
                    title: "Retroauricular incision: A New Surgical Technique on Selected Parotid Gland Cases ",
                    speakers: "Dr. Dewan Hassan",
                    room: "Sampaguita C"
                },
                {
                    title: "Upper Airway Evaluation in OSA Surgery ",
                    speakers: "Dr. Cesar V. Villafuerte, Jr.",
                    room: "Sampaguita C"
                },
                {
                    title: "Facial Shaping with Neuromodulators and Fillers",
                    speakers: "Dr. Joseph Amado C. Galvez",
                    room: "Roma Salon"
                },
                {
                    title: "Nasal Augmentation using Thread and Fillers in Laryngology Results:",
                    speakers: "Dr. Henry John F. Claravall",
                    room: "Roma Salon"
                },
                {
                    title: "The Value of Ultrasound in the Evaluation of Head and Neck Neoplasms",
                    speakers: "Dr. Daniel M. Alonzo",
                    room: "Champagne Salon"
                },
                {
                    title: '\"No More Blind Biopsies\": Integrating the Use of Ultrasound in Head and Neck Practice',
                    speakers: "Dr. Geraldine L. Luna",
                    room: "Champagne Salon"
                },
                {
                    title: "Interventional Techniques in Neck Ultrasound ",
                    speakers: "Dr. Maria Karen A. Capuz",
                    room: "Champagne Salon"
                },
            ],
        ];
        this.range = 0;
    }
    ClinicalEncounterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClinicalEncounterPage');
    };
    ClinicalEncounterPage.prototype.left = function () {
        console.log("LEFT", this.range);
        if (this.range <= 0)
            return;
        this.range--;
    };
    ClinicalEncounterPage.prototype.right = function () {
        console.log("Right", this.range);
        if (this.range > 2)
            return;
        this.range++;
    };
    ClinicalEncounterPage = __decorate([
        Component({
            selector: 'page-clinical-encounter',
            templateUrl: 'clinical-encounter.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], ClinicalEncounterPage);
    return ClinicalEncounterPage;
}());
export { ClinicalEncounterPage };
//# sourceMappingURL=clinical-encounter.js.map