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
import { SpeakerInfoPage } from '../speaker-info/speaker-info';
var SpeakersPage = /** @class */ (function () {
    function SpeakersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.speakers = [
            {
                lastname: "ABERIN-ROLDAN",
                firstname: "Fortuna Corazon MD",
                details: "Chair, Philippine Academy of Laryngologybroncoesophagology & Phoniatrics (PALP) Consultant, The Medical City Ortigas & East Avenue Medical Center",
                imageUrl: "assets/imgs/speakers/ABERIN-ROLDAN.jpg",
                docs: [
                    {
                        title: "Videostroboscopy",
                        info: "Oct. 24, 8:00-9:00 AM, Champagne Salon",
                        link: "assets/pdfs/CE 5.2 ROLDAN.pdf"
                    }
                ]
            },
            {
                lastname: "ABES",
                firstname: "Generoso MD",
                details: "Professor Emeritus, ORL, University of the Philippines, Manila President Emeritus, Philippine Academy of Neurotology, Otology and	Related Sciences (PANORS) Consultant, Manila Doctors Hospital, Makati Medical Center and Asian 	Hospital & Med. Ctr. ",
                imageUrl: "assets/imgs/speakers/ABES.jpg",
                docs: [
                    {
                        title: "Allergic Rhinitis 101: Simple Case Presentation",
                        info: "Oct. 22, 12:30-1:30 PM, Fiesta Pavilion",
                        link: "assets/pdfs/CE 12.1 ESPIRITU.pdf"
                    },
                    {
                        title: "Insights of a Seasoned Otorhinolaryngologist",
                        info: "Oct. 24, 7:45 – 8:00 AM, Fiesta Pavilion",
                        link: "assets/pdfs/P1.2 ABES.pdf"
                    },
                ]
            },
            {
                lastname: "ADHAM",
                firstname: "Marlinda MD",
                details: "",
                imageUrl: "assets/imgs/speakers/ADHAM.jpg",
                docs: [
                    {
                        title: "Multidisciplinary Management",
                        info: "Oct. 22, 2:30-3:00 PM, Fiesta Pavilion"
                        // , link: "assets/pdfs/CE 5.2 ROLDAN.pdf"
                    },
                ]
            },
            {
                lastname: "AGUILERA",
                firstname: "Keith Romeo MD",
                details: "Assistant Professor I, St. Luke's College of Medicine Consultant, Dept. of ORL-HNS, St. Luke's Medical Center-Global City",
                imageUrl: "assets/imgs/speakers/AGUILERA.jpg",
                docs: [
                    {
                        title: "Challenges and Advances in Tonsillectomy and Adenoidectomy",
                        info: "Oct. 24, 8:00-9:00 AM, Sampaguita A",
                        link: "images/assets/pdfs/CE 1.1 AGUILERA.pdf"
                    },
                ]
            },
            {
                lastname: "ALFANTA",
                firstname: "Eduard MD",
                details: "Chair, Subcommittee on Research, PSO-HNS Consultant, Dept. of ORL-HNS, East Avenue Medical Center Visiting Consultant, Dept. of ORL-HNS, Manila Doctors Hosp. and Asian 	Hospital & Med. Ctr. ",
                imageUrl: "assets/imgs/speakers/ALFANTA.jpg",
                docs: [
                    {
                        title: "EMR: Issues and Challenges in the Clinical Practice",
                        info: "Oct. 24, 10:25 – 10:50 AM, Maynila Ballroom",
                        link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                ]
            },
            {
                lastname: "ALMAZAN",
                firstname: "Natividad MD",
                details: "Secretary, Philippine Board of Otolaryngology-HNS Head, Otology Section, East Avenue Medical Center, Manila Central University and Veterans-MMC",
                imageUrl: "assets/imgs/speakers/ALMAZAN.jpg",
                docs: [
                    {
                        title: "Management of Estachian Tube Dysfunction",
                        info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita A",
                        link: "images/assets/pdfs/CE 2.2 ALMAZAN.pdf"
                    },
                ]
            },
            {
                lastname: "ALMELOR",
                firstname: "Mamerto MD",
                details: "",
                imageUrl: "assets/imgs/speakers/ALFANTA.jpg",
                docs: [
                    {
                        title: "Cancer of Oral Cavity",
                        info: "Oct. 22, 9:45-10:30 AM, Fiesta Pavilion "
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                ]
            },
            {
                lastname: "ALONZO",
                firstname: "Daniel MD",
                details: "Director, Cancer Institute, The Medical City",
                imageUrl: "assets/imgs/speakers/ALFANTA.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Thyroid Cancer",
                        info: "Oct. 22, 11:30 AM – 12:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                    {
                        title: "The Value of Ultrasound in the Evaluation of Head and Neck Neoplasms",
                        info: "Oct. 24, 8:00 – 9:00 AM, Champagne Salon",
                        link: "images/assets/pdfs/CE 20.1 ALONZO.pdf"
                    },
                ]
            },
            {
                lastname: "ARZADON",
                firstname: "Jaime Anthony, IV MD",
                details: "Proprietor & Medical Director, Arzadon Clinic Cosmetic Surgery & Dermatology Head, Section of Facial Plastic Surgery, Department of ORL-HNS, Asian 	Hospital & Med. Ctr.",
                imageUrl: "assets/imgs/speakers/ARZADON.jpg",
                docs: [
                    {
                        title: "Basic Principles & Overview on the Use of the Harmonic Scalpel in ENT",
                        info: "Oct. 24, 8:00 – 9:00 AM, Roma Salon"
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                    {
                        title: "Neuromodulators",
                        info: "Oct. 24, 1:15 – 1:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                ]
            },
            {
                lastname: "AYAHAO",
                firstname: "Felixberto MD",
                details: "MS 3, Baguio General Hospital",
                imageUrl: "assets/imgs/speakers/AYAHAO.jpg",
                docs: [
                    {
                        title: "My Unconventional Methods in Otolaryngology-Head and Neck Surgery",
                        info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon",
                        link: "images/assets/pdfs/CE 15.4 AYAHAO.pdf"
                    },
                ]
            },
            {
                lastname: "BAÑEZ",
                firstname: "Ryan Julius MD",
                details: "Clinical Associate Professor, UPCM Medical Informatics Unit Lecturer, Ateneo School of Medicine and Public Health Consultant for Health Information Systems, National Kidney and Transplant Institute",
                imageUrl: "assets/imgs/speakers/BANEZ.jpg",
                docs: [
                    {
                        title: "Overview of EMR in the Philippines",
                        info: "Oct. 24, 10:00 – 10:25 AM, Maynila Ballroom",
                        link: "images/assets/pdfs/S2.1 BANEZ.pdf"
                    },
                ]
            },
            {
                lastname: "BOUSQUET",
                firstname: "Jean MD, PhD",
                details: "Director, Cancer Institute, The Medical City",
                imageUrl: "assets/imgs/speakers/BOUSQUET.jpg",
                docs: [
                    {
                        title: "The Unmet Medical Need in AR: European Perspective and Parallels in the Philippines",
                        info: "Oct. 23, 12:00 – 1:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                ]
            },
            {
                lastname: "CABUNGCAL",
                firstname: "Arsenio Claro MD",
                details: "Clinical Associate Professor, UP-PGH Board of Trustee, Philippine Society of Otolaryngology-HNS Attending ORL, Victor R. Potenciano Medical Center and National Kidney & Transplant Institute",
                imageUrl: "assets/imgs/speakers/CABUNGCAL.jpg",
                docs: [
                    {
                        title: "Endonasal Endoscopic Transphenoidal Pituitary Surgery ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita C",
                        link: "images/assets/pdfs/CE 8.3 CABUNGCAL.pdf"
                    },
                    {
                        title: "Facial Nerve Identification & Dissection in Parotid Surgery: Let's Make it Easy ",
                        info: "Oct. 24, 3:00 - 4:00 PM, Sampaguita C"
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                ]
            },
            {
                lastname: "CAÑAL",
                firstname: "Johanna MD",
                details: "Professor 4, University of the Philippines-College of Medicine Chair, Radiology, UP-Philippine General Hospital",
                imageUrl: "assets/imgs/speakers/CANAL.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Oropharynx Cancer",
                        info: "Oct 23, 8:40-9:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                    {
                        title: "Basic CT and MRI Imaging for Common Head and Neck Conditions",
                        info: "Oct. 24, 9:20 – 9:40 AM, Maynila Ballroom",
                        link: "images/assets/pdfs/S1.2 Cañal.pdf"
                    },
                ]
            },
            {
                lastname: "CAPUZ",
                firstname: "Maria Karen MD",
                details: "Clinical Faculty, Ateneo School of Medicine & Public Health Assistant Professor, Manila Central University, College of Medicine Head & Neck Subspecialty Consultant, Dept. of ORL-HNS, UST Hospital",
                imageUrl: "assets/imgs/speakers/CAPUZ.jpg",
                docs: [
                    {
                        title: "Techniques of Office Ultrasonography",
                        info: "Oct. 24, 3:00 – 4:00 PM, Champagne Salon",
                        link: "images/assets/pdfs/CE 20.3 CAPUZ.pdf"
                    },
                ]
            },
            {
                lastname: "CARRILLO",
                firstname: "Ryner Jose MD",
                details: "Associate Professor, Dept. of Anatomy, UP-College of Medicine Clinical Associate Professor, Section of Laryngology 			Bronchoesophagology, Dept. of ORL-HNS, UP-PGH",
                imageUrl: "assets/imgs/speakers/CARRILLO.jpg",
                docs: [
                    {
                        title: "Flexible Laryngoscopy and Related ENT Procedures",
                        info: "Oct. 24, 8:00 – 9:00 AM, Champagne Salon"
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                ]
            },
            {
                lastname: "CARO",
                firstname: "Ruzanne MD",
                details: "Associate Professor, UP-College of Medicine Active Consultant, Capitol Medical Center and UPCM-Philippine General	Hospital",
                imageUrl: "assets/imgs/speakers/CARO.jpg",
                docs: [
                    {
                        title: "Steroids 101 ",
                        info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita A",
                        link: "images/assets/pdfs/CE 11.1 CARO.pdf"
                    },
                ]
            },
            {
                lastname: "CASTAÑEDA",
                firstname: "Samantha MD",
                details: "Assistant Professor, Ateneo School of Medicine & Public Health Section Head, Head & Neck, The Medical City  Training Officer, Dept. of ORL-HNS, Rizal Medical Center",
                imageUrl: "assets/imgs/speakers/CASTANEDA.jpg",
                docs: [
                    {
                        title: "Panel Discussion – Reconstructive Surgery",
                        info: "Oct. 24, 2:30 - 3:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                ]
            },
            {
                lastname: "CHANG",
                firstname: "Jimmy MD",
                details: "Secretary, Philippine Society of Sleep Medicine Vice-President, Philippine Academy of Sleep Surgery (PASS) Head, Comprehensive Sleep Disorder Center, St. Luke's Medical Center, QC",
                imageUrl: "assets/imgs/speakers/CHANG.jpg",
                docs: [
                    {
                        title: "Upper Airway Evaluation in OSA Surgery ",
                        info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita C",
                        link: "images/assets/pdfs/CE 13.2 CHANG.pdf"
                    },
                ]
            },
            {
                lastname: "CHIE-YEH",
                firstname: "Chien MD",
                details: "",
                imageUrl: "assets/imgs/speakers/CHIE-YEH.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Cancer of the Oral Cavity",
                        info: "Oct 22, 9:45 - 10:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "CHIONG",
                firstname: "Armando, Jr. MD",
                details: "",
                imageUrl: "assets/imgs/speakers/CHIONG.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Reconstructive Surgery",
                        info: "Oct 23, 2:30 - 3:00PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "CHIONG",
                firstname: "Charlotte MD",
                details: "Dean, University of the Philippines-College of Medicine Director, Philippine National Ear Institute Director, Newborn Hearing Screening Reference Center",
                imageUrl: "assets/imgs/speakers/CHIONG2.jpg",
                docs: [
                    {
                        title: "Approach for Single-sided Deafness",
                        info: "Oct. 24, 10:30 – 10:45 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "CHUA",
                firstname: "Antonio MD",
                details: "Oct. 24, 10:00 – 11:00 AM,   Champagne Salon",
                imageUrl: "assets/imgs/speakers/CHUA.jpg",
                docs: [
                    {
                        title: "Overview and Indications of Image-Guided Systems in Sinus and Skull Base Surgery",
                        info: "",
                        link: "images/assets/pdfs/CE 10.1 CHUA.pdf"
                    },
                ]
            },
            {
                lastname: "CLARAVALL",
                firstname: "Henry John MD",
                details: "Consultant, Dept. of ORL-HNS, University of Santo Tomas Hospital, St. Luke's Global City and The Medical City",
                imageUrl: "assets/imgs/speakers/CLARAVALL.jpg",
                docs: [
                    {
                        title: "Threadlifts and Fillers for Noselift",
                        info: "Oct. 24, 1:45 – 2:00 PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P7.4 CLARAVALL.pdf"
                    },
                    {
                        title: "Nasal Augmentation using Thread and Fillers ",
                        info: "Oct. 24, 3:00 – 4:00 PM, Roma Salon",
                        link: "images/assets/pdfs/P7.4 CLARAVALL.pdf"
                    },
                ]
            },
            {
                lastname: "DAVID",
                firstname: "Joselito MD",
                details: "Chairman, Dept. of ORL-HNS, Jose R. Reyes Memorial Medical Center Clinical Faculty, Dept. of ORL-HNS, Faculty of Medicine & Surgery, UST Consultant, Santo Tomas University Hospital & Angeles University Foundation Med. Ctr.",
                imageUrl: "assets/imgs/speakers/DAVID.jpg",
                docs: [
                    {
                        title: "Prosthesis",
                        info: "Oct. 24, 8:30 – 8:45 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P2.3 DAVID.pdf"
                    },
                ]
            },
            {
                lastname: "DELA PEÑA",
                firstname: "Arturo MD",
                details: "",
                imageUrl: "assets/imgs/speakers/DelaPena.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Salivary Gland Tumors",
                        info: "Oct 22, 4:15-4:45PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "DE RAMOS",
                firstname: "Joanne Sebastiana MD",
                details: "Professor 1 (former College Secretary & Associate Dean), St. Luke's College 	of Medicine Active Consultant, Section Head Otology, St. Luke's Medical Center QC Medical Specialist !, Part Time, Veterans Memorial Medical Center",
                imageUrl: "assets/imgs/speakers/DE RAMOS.jpg",
                docs: [
                    {
                        title: "Diagnosis, Differentiation and Management of Different Types of BPPV",
                        info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita A",
                        link: "images/assets/pdfs/CE 6.1 DE RAMOS.pdf"
                    },
                ]
            },
            {
                lastname: "DOFITAS",
                firstname: "Rodney MD",
                details: "",
                imageUrl: "assets/imgs/speakers/DOFITAS.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Thyroid Cancer",
                        info: "Oct 22, 11:30-12:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "EMBATE",
                firstname: "Jose Raindrop MD",
                details: "Assistant Professor 1, Davao Medical School Active Consultant, Davao Medical School Foundation Hospital Part Time Associate Active Consultant, Davao Doctors Hospital",
                imageUrl: "assets/imgs/speakers/EMBATE.jpg",
                docs: [
                    {
                        title: "Image Guided Surgery in the Sinuses and Beyond ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Champagne Salon",
                        link: "images/assets/pdfs/CE 10.2 EMBATE.pdf"
                    },
                ]
            },
            {
                lastname: "ENECILLA",
                firstname: "Ma. Lourdes MD",
                details: "Secretary, Philippine Academy of Rhinology (PAR) Active Consultant, St. Luke's Medical Center-Global City  and Asian 	Hospital & Medical Center ",
                imageUrl: "assets/imgs/speakers/ENECILLA.jpg",
                docs: [
                    {
                        title: "Office Procedures in Managing Chronic Rhinosinusitis and Nasal Polyposis",
                        info: "Oct. 24, 2:15 – 2:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "ESPIRITU",
                firstname: "Anne Marie MD",
                details: "Board of Trustee, Philippine Society of Otolaryngology-HNS Head, Section of Rhinopharyngology & Allergy, Dept. of ORL-HNS, Manila Doctors Hospital Associate Board ExAMiner, Philippine Board of Otolaryngology-HNS",
                imageUrl: "assets/imgs/speakers/ESPIRITU.jpg",
                docs: [
                    {
                        title: "Barrier Dysfunction in Allergic Rhinitis ",
                        info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita B",
                        link: "images/assets/pdfs/CE 12.1 ESPIRITU.pdf"
                    },
                ]
            },
            {
                lastname: "FORTUNA",
                firstname: "Ma. Clarissa MD",
                details: "Chair, Dept. of ORL-HNS, The Medical City Consultant Director, ENT-HNS, Center for Voice & Swallowing Disorders, The Medical City Head, Section of Laryngology, Dept. of ORL-HNS, UST Hospital  ",
                imageUrl: "assets/imgs/speakers/CHANG.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Laser Surgery in Laryngology",
                        info: "Oct 24, 9:00-9:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Unsedated Office-based Procedure in Laryngology ",
                        info: "Oct. 24, 3:00 – 4:00 PM, Sampaguita B"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "FRAGANTE",
                firstname: "Edilberto Joaquin Jr. MD",
                details: "Clinical Associate Professor, UP-College of Medicine Medical Specialist, UP-PGH and National Kidney & Transplant Institute Active Consultant, Cardinal Santos Medical Center",
                imageUrl: "assets/imgs/speakers/FRAGANTE.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Larynx Cancer",
                        info: "Oct 23, 11:00 AM-12:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "GALVEZ",
                firstname: "Joseph Amado MD",
                details: "Chairman, Dept. of ORL-HNS, Ospital ng Maynila Associate Professor, Dept. of ORL-HNS, Emilio Aguinaldo College- College of Medicine Instructor, ORL-HNS, PAMantasan ng Lungsod ng Maynila  College of Medicine",
                imageUrl: "assets/imgs/speakers/GALVEZ.jpg",
                docs: [
                    {
                        title: "Soft Tissue Filler Augmentation",
                        info: "Oct. 24, 1:30 – 1:45 PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P7.3  GALVEZ.pdf"
                    },
                    {
                        title: "Facial Shaping with Neuromodulators and Fillers",
                        info: "Oct. 24, 3:00 – 4:00 PM, Roma Salon",
                        link: "images/assets/pdfs/CE 19.1 GALVEZ.pdf"
                    },
                ]
            },
            {
                lastname: "GLORIA-CRUZ",
                firstname: "Teresa Luisa MD",
                details: "",
                imageUrl: "assets/imgs/speakers/GLORIA.jpg",
                docs: [
                    {
                        title: "Vertigo: Let’s Review",
                        info: "Oct. 22, 7:00 – 8:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "HAO",
                firstname: "Sheng-po MD",
                details: "",
                imageUrl: "assets/imgs/speakers/HAO.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Skull Base Tumors",
                        info: "Oct 23, 1:30-3:00PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "HASSAN",
                firstname: "Dewan MD",
                details: "Senior Consultant & Head, Otolaryngology & Head and Neck Surgery, Sarkari Karmachari Hospital Life Member, Society of Otolaryngology & Head and Neck Surgeons of Bangladesh ",
                imageUrl: "assets/imgs/speakers/HASSAN.jpg",
                docs: [
                    {
                        title: "Retroauricular incision: A New Surgical Technique on Selected Parotid Gland Cases ",
                        info: "Oct 24, 3:00-4:00 PM, Sampaguita C",
                        link: "images/assets/pdfs/CE 18.1 HASSAN.pdf"
                    },
                ]
            },
            {
                lastname: "HERNANDEZ",
                firstname: "Josefino MD",
                details: "Associate Professor & Vice-Chairman, Dept. of ORL-HNS, UP-Philippine 	General Hospital Consultant, Asian Hospital & Medical Center and Rizal Medical Center",
                imageUrl: "assets/imgs/speakers/HERNANDEZ.jpg",
                docs: [
                    {
                        title: "Surgery of Juvenile Angiofibroma ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita C",
                        link: "images/assets/pdfs/CE 8.1 HERNANDEZ.pdf"
                    },
                ]
            },
            {
                lastname: "HERNANDEZ",
                firstname: "Melfred MD",
                details: "Director, Office of Alumni Relations, UP Manila Assistant to the Vice Chancellor for Administration, UP Manila Head, Section of Laryngobronchoesophagology & Neck, Asian Hospital & 	Medical Center ",
                imageUrl: "assets/imgs/speakers/HERNANDEZ2.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Laser Surgery in Laryngology",
                        info: "Oct 24, 9:00-9:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Vocal Fold Injection in the Clinic: When, Why, How ",
                        info: "Oct. 24, 3:00 – 4:00 PM, Sampaguita B",
                        link: "images/assets/pdfs/CE 17.2 HERNANDEZ M.pdf"
                    },
                ]
            },
            {
                lastname: "HIGGS",
                firstname: "Russell",
                details: "International Sales Manager, PATH Medical GmbH (Germany)",
                imageUrl: "",
                docs: [
                    {
                        title: "AEP Testing with Patient Follow-up via Pathtrack Tracking Software",
                        info: "Oct 24, 11:00-11:20 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "IGNACIO",
                firstname: "Jorge MD",
                details: "",
                imageUrl: "assets/imgs/speakers/IGNACIO.jpg",
                docs: [
                    {
                        title: "Panel Discussion–Multidisciplinary",
                        info: "Oct 22, 2:30-3:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "ISIP-TAN",
                firstname: "Iris MD",
                details: "Professor 3, Dept. of Medicine, University of the Philippines College of Medicine Attending Physician, Dept. of Medicine, UP-Philippine General Hospital Visiting Consultant, Manila Doctors Hospital ",
                imageUrl: "assets/imgs/speakers/ISIP.jpg",
                docs: [
                    {
                        title: "Social Media in the Clinical Practice",
                        info: "Oct. 24, 1:25 – 1:50 PM, Maynila Ballroom"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "JARIN",
                firstname: "Peter MD",
                details: "Chair, Philippine Academy of Rhinology (PAR) Consultant, Dept. of ORL-HNS, The Medical City & Quirino Memorial 	Medical Center",
                imageUrl: "assets/imgs/speakers/JARIN.jpg",
                docs: [
                    {
                        title: "Image-guided Systems in Sinus and Skullbase Surgery",
                        info: "Oct. 24, 2:30 – 2:45 PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P8.3 JARIN.pdf"
                    },
                    {
                        title: "Landmark Base Endoscopic Sinus Surgery",
                        info: "Oct. 24, 1:00 – 2:00 PM, Roma Salon",
                        link: "images/assets/pdfs/CE 14.1 JARIN.pdf"
                    },
                ]
            },
            {
                lastname: "JURADO",
                firstname: "Adonis MD",
                details: "Chair, Philippine Academy of Paediatric Otolaryngology (PAPO) Head, Section of Paediatric ORL, Philippine Children's Medical Center Consultant, Dept. of ORL-HNS, Philippine Heart Center and The Medical 	City ",
                imageUrl: "assets/imgs/speakers/JURADO.jpg",
                docs: [
                    {
                        title: "Office Management of the Pediatric Airway",
                        info: "Oct. 24, 10:00 – 10:15 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "KAY-IGNACIO",
                firstname: "Caroline Bernadette King MD",
                details: "Doctor of Medicine, Faculty of Medicine and Surgery, University of Santo Tomas, Espana, Manila Residency Training in Internal Medicine, University of Santo Tomas Hospital, Espana Manila Fellowshi",
                imageUrl: "assets/imgs/speakers/KAY-IGNACIO.jpg",
                docs: [
                    {
                        title: "Patient Preference Study for Allergic Rhinitis",
                        info: "Oct. 24, 3:30 – 4:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "LACOUR",
                firstname: "Michel MD",
                details: "",
                imageUrl: "assets/imgs/speakers/LACOUR.jpg",
                docs: [
                    {
                        title: "Vestibular Compensation",
                        info: "Oct. 24, 12:00 – 1:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "LAXAMANA",
                firstname: "Joman MD",
                details: "Rhinology Fellow & Rhinology Section Consultant, Dept. of ORL-HNS, East Avenue Medical Center Visiting/Teaching Consultant, Dept. of ORL-HNS, Jose B. Lingad, Memorial 	Regional Hospital ",
                imageUrl: "assets/imgs/speakers/LAXAMANA.jpg",
                docs: [
                    {
                        title: "Evolving Trends in Sinus Surgery",
                        info: "Oct. 24, 2:00 – 2:15 PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P8.1 LAXAMANA.pdf"
                    },
                ]
            },
            {
                lastname: "LIM",
                firstname: "Ida Marie MD",
                details: "",
                imageUrl: "assets/imgs/speakers/LIM.jpg",
                docs: [
                    {
                        title: "Panel Discussion - Cancer of the Oral Cavity",
                        info: "Oct 22, 9:45-10:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "LIM",
                firstname: "WilliAM MD",
                details: "Associate Professor, UERMMMC Head, Dept. of ORL-HNS, St. Luke's Medical Center-Global City",
                imageUrl: "assets/imgs/speakers/LIM2.jpg",
                docs: [
                    {
                        title: "Panel Discussion - Larynx Cancer",
                        info: "Oct 23, 11:00 AM - 12:00 NN, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Office-based Laryngeal Surgery",
                        info: "Oct. 24, 8:45 – 9:00 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P3.1 LIM.pdf"
                    },
                    {
                        title: "Panel Discussion: Laser Surgery in Laryngology",
                        info: "Oct. 24, 9:00 – 9:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "LLANES",
                firstname: "Erasmo Gonzalo MD",
                details: "Treasurer, Philippine Society of Otolaryngology-HNS Clinical Associate Professor/Attending Otorhinolaryngologist, Dept. of 	ORL-HNS, PGH Consultant Staff and Faculty-External Services, Philippine National Ear 	Institute, NIH, UP Manila ",
                imageUrl: "assets/imgs/speakers/LLANES.jpg",
                docs: [
                    {
                        title: "Bone-Anchored Hearing Aid ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita B",
                        link: "images/assets/pdfs/CE 7.1 LLANES.pdf"
                    },
                ]
            },
            {
                lastname: "LOPA",
                firstname: "Ramon Antonio MD",
                details: "Associate Professor, University of the Philippines College of Medicine Attending Consultant, Dept. of ORL-HNS, Makati Medical Center Section Chief, Section of Rhinology, Dept. of ORL-HNS, Makati Medical 	Center ",
                imageUrl: "assets/imgs/speakers/LOPA.jpg",
                docs: [
                    {
                        title: "Panel Discussion – Skull Base Tumors ",
                        info: "Oct 23, 1:30-2:00PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Surgery of Inverting Papilloma ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita C"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "LUNA",
                firstname: "Geraldine MD",
                details: "Consultant, Dept. of ORL-HNS, Asian Hospital & Medical Center",
                imageUrl: "assets/imgs/speakers/LUNA.jpg",
                docs: [
                    {
                        title: "\"No More Blind Biopsies\": Integrating the Use of Ultrasound in Head and Neck Practice ",
                        info: "Oct. 24, 3:00 – 4:00 PM, Champagne Salon",
                        link: "images/assets/pdfs/CE 20.2 LUNA.pdf"
                    },
                ]
            },
            {
                lastname: "MAGLAYA",
                firstname: "Jehan Grace MD",
                details: "Assistant Professor, UERMMMCI Visiting Consultant, East Avenue Medical Center",
                imageUrl: "assets/imgs/speakers/MAGLAYA.jpg",
                docs: [
                    {
                        title: "Closed Reduction: Nasal Bone Fracture",
                        info: "Oct. 24, 8:15 – 8:30 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P2.2 MAGLAYA.pdf"
                    },
                ]
            },
            {
                lastname: "MAI",
                firstname: "Natalie",
                details: "Director of Sales of Healthcare and Hearing Services",
                imageUrl: "assets/imgs/speakers/MAI.jpg",
                docs: [
                    {
                        title: "Shoebox Audiometry Update: How the iPad Audiometer Continues to Revolutionize the World of Hearing Health",
                        info: "Oct 24, 10:45-11:00 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P6.1 MAI.pdf"
                    },
                ]
            },
            {
                lastname: "MANAS",
                firstname: "Ernest Roberto MD",
                details: "Chairman, Dept. of ORL-HNS, Asian Hospital & Medical Center",
                imageUrl: "assets/imgs/speakers/MANAS.jpg",
                docs: [
                    {
                        title: "Basic VNG for the ENT ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita A",
                        link: "images/assets/pdfs/CE 6.3 MANAS.pdf"
                    },
                ]
            },
            {
                lastname: "MATIAS",
                firstname: "Homer MD",
                details: "Plastic, Reconstructive, Aesthetic Surgeon & Head and Neck Surgeon in General Santos City and Davao City Member, PSO-HNS and Philippine Academy of Aesthetics Surgery (PAAS)",
                imageUrl: "assets/imgs/speakers/MATIAS.png",
                docs: [
                    {
                        title: "Nerve Blocks/Anesthesia for Office Procedures and Goretex Thread for Rhinoplasty",
                        info: "Oct. 24, 1:00 – 1:15 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "MATUBIS",
                firstname: "Jacob MD",
                details: "",
                imageUrl: "assets/imgs/speakers/MATUBIS.jpg",
                docs: [
                    {
                        title: "Panel Discussion - Salivary Gland Tumors",
                        info: "Oct. 22, 4:15 – 4:45 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "MARTINEZ",
                firstname: "Norberto MD",
                details: "Professor, Dept. of ENT, Faculty of Medicine, University of Santo Tomas Chair, Dept. of ENT, Faculty of Medicine, University of Santo Tomas Head, Section of Otology, St. Luke's Medical Center-Quezon City Head, Hearing & Balance Lab., St. Luke's Medical Center-Global City ",
                imageUrl: "assets/imgs/speakers/MARTINEZ.jpg",
                docs: [
                    {
                        title: "Fat Myringoplasty",
                        info: "Oct. 24, 10:15 – 10:30 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P4.3 MARTINEZ.pdf"
                    },
                ]
            },
            {
                lastname: "MEJIA",
                firstname: "Michael MD",
                details: "",
                imageUrl: "assets/imgs/speakers/MEJIA.jpg",
                docs: [
                    {
                        title: "Panel Discusson - Multidisciplinary Management",
                        info: "Oct. 22, 2:30 – 3:00 PM, Sampaguita B"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "METHEETRAIRUT",
                firstname: "Choakchai MD",
                details: "Senior Consultant & Head, Otolaryngology & Head and Neck Surgery, Sarkari Karmachari Hospital Life Member, Society of Otolaryngology & Head and Neck Surgeons of 	Bangladesh",
                imageUrl: "",
                docs: [
                    {
                        title: "Panel Discusson - Thyroid Cancer",
                        info: "Oct. 22, 11:30 AM – 12:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "MOSGES",
                firstname: "Ralph MD PhD, FAAAAI",
                details: "Associate Professor & Vice-Chairman, Dept. of ORL-HNS, UP-Philippine 	General Hospital Consultant, Asian Hospital & Medical Center and Rizal Medical Center",
                imageUrl: "",
                docs: [
                    {
                        title: "Allergic Rhinoconjunctivitis: Guidelines Update and New Treatment Strategies",
                        info: "Oct. 23, 7:00 – 11:00 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "NAVARRO-LOCSIN",
                firstname: "Cecilia Gretchen MD",
                details: "Assistant Professor II, St. Luke's Medical Center College of Medicine Head, Dept. of ORL-HNS, St. Luke's Medical Center-Quezon City Medical Specialist II, Philippine Children's Medical Center",
                imageUrl: "assets/imgs/speakers/NAVARRO-LOCSIN.jpg",
                docs: [
                    {
                        title: "Ventilation tubes for OME in Cleft Palate: Do We or Do We Not?",
                        info: "Oct. 24, 9:45 – 10:00 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P4.2 LOCSIN.pdf"
                    },
                ]
            },
            {
                lastname: "NONATO",
                firstname: "Rodolfo MD",
                details: "Board of Director, Philippine Board of Otolaryngology-HNS Consultant, Dept. of ORL-HNS, Corazon Locsin Montelibano Memorial Regional Hospital ",
                imageUrl: "assets/imgs/speakers/NONATO.jpg",
                docs: [
                    {
                        title: "Common ENT-HNS Outpatient Selected Conditions and Situations: How I Managed It ",
                        info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon",
                        link: "images/assets/pdfs/CE 15.2 NONATO.pdf"
                    },
                ]
            },
            {
                lastname: "PANGAN",
                firstname: "Roberto MD",
                details: "Associate Clinical Professor, Dept. of ORL-HNS, UP-Philippine General Hospital Consultant, Dept. of ORL-HNS, East Avenue Medical Center and Cebu 	Doctor's Hospital",
                imageUrl: "assets/imgs/speakers/PANGAN.jpg",
                docs: [
                    {
                        title: "Condylar Fractures: When and When Not To Plate ",
                        info: "Oct. 24, 3:00 – 4:00 PM, Sampaguita A"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "PASAYAN",
                firstname: "Mark Kristoffer MD",
                details: "Chair, Philippine Academy of Rhinology (PAR) Consultant, Dept. of ORL-HNS, The Medical City & Quirino Memorial 	Medical Center",
                imageUrl: "assets/imgs/speakers/PASAYAN.jpg",
                docs: [
                    {
                        title: "NECK Session (Natrapharm Enhancing Clinical Knowledge in Current Practice): Solving the Mysteries of Cervical Lymphadenopathy",
                        info: "Oct. 24, 11:30 AM – 12:00 NN, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "PATDU",
                firstname: "Ivy MD, REB, JD",
                details: "Lecturer in Medical Jurisprudence, UP Manila, College of Medicine. Lecturer in Legal Medicine, San Beda College of Law. Lecturer in Forensic Medicine, Ateneo Law School",
                imageUrl: "assets/imgs/speakers/PATDU.png",
                docs: [
                    {
                        title: "Data Privacy",
                        info: "Oct. 24, 1:00 – 1:25 PM, Maynila Ballroom",
                        link: "images/assets/pdfs/S3.1 PATDU.pdf"
                    },
                ]
            },
            {
                lastname: "PONTEJOS",
                firstname: "Alfredo Jr. MD",
                details: "Professor 8, University of Manila-College of Medicine Board of Director, Philippine Board of Otolaryngology-HNS Otorhinolaryngologist, Manila Doctors Hospital and Philippine General 	Hospital",
                imageUrl: "assets/imgs/speakers/PONTEJOS.jpg",
                docs: [
                    {
                        title: "Panel Discussion - Larynx Cancer",
                        info: "Oct. 23, 11:00 AM – 12:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "The Use of Harmonic Scalpel in ORL-Head and Neck Surgeries ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Roma Salon",
                        link: "images/assets/pdfs/CE 9.2 PONTEJOS.pdf"
                    },
                ]
            },
            {
                lastname: "PUNO",
                firstname: "Maria Patricia Ann MD",
                details: "Active Consultant, Dept. of ORL-HNS, Makati Medical Center",
                imageUrl: "assets/imgs/speakers/PUNO.jpg",
                docs: [
                    {
                        title: "Overview and Management of OSA",
                        info: "Oct. 24, 2:45 – 3:00 PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P9.1 PUNO.pdf"
                    },
                ]
            },
            {
                lastname: "REMULLA",
                firstname: "Agnes MD",
                details: "President, Philippine Society of Otolaryngology-HNS Clinical Associate Professor, UP-Philippine General Hospital Attending ORL, Asian Hospital & Medical Center and Philippine General 	Hospital ",
                imageUrl: "assets/imgs/speakers/REMULLA.jpg",
                docs: [
                    {
                        title: "Challenges and Advances in Tonsillectomy and Adenoidectomy",
                        info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita A"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "REYES-QUINTOS",
                firstname: "Maria Rina MD",
                details: "Deputy Executive Director, National Institutes of Health Clinical Associate Professor, UP-Philippine General Hospital Consultant Director Hearing and Dizziness Center, The Medical City ",
                imageUrl: "assets/imgs/speakers/REYES-QUINTOS.jpg",
                docs: [
                    {
                        title: "Implantable Devices: Candidacy, Indications and Contraindications ",
                        info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita C",
                        link: "images/assets/pdfs/CE 3.2 QUINTOS.pdf"
                    },
                ]
            },
            {
                lastname: "RICALDE",
                firstname: "Rosario MD",
                details: "Clinical Associate Professor, University of the Philippines Manila, College of Medicine Consultant, Dept. of ORL-HNS, Philippine General Hospital Chair, Dept. of ORL-HNS, Providence Hospital ",
                imageUrl: "assets/imgs/speakers/RICALDE.jpg",
                docs: [
                    {
                        title: "Steroids for Hearing Loss and Vertigo ",
                        info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita A",
                        link: "images/assets/pdfs/CE 11.2 RICALDE.pdf"
                    },
                ]
            },
            {
                lastname: "ROASA",
                firstname: "Francis MD",
                details: "Associate Professor III, UST Faculty of Medicine & Surgery Consultant, Dept. of ORL-HNS, UST Hospital and St. Luke's Medical 	Center-Global City Medical Specialist II, Ospital ng Makati",
                imageUrl: "assets/imgs/speakers/ROASA.jpg",
                docs: [
                    {
                        title: "3D Imaging / Printing and Planning in Maxillofacial Surgery",
                        info: "Oct. 24, 8:00 – 8:15 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P2.1 ROASA.pdf"
                    },
                    {
                        title: "CMF Plating That Gets the Best Results: What an ENT Should Know Otorhinolaryngologist",
                        info: "Oct. 24, 3:00 – 4:00 PM, Sampaguita A",
                        link: "images/assets/pdfs/CE 16.1 ROASA.pdf"
                    },
                ]
            },
            {
                lastname: "RODRIGUEZ",
                firstname: "Edgardo Jr. MD",
                details: "Associate Professor, Pamantasan ng Lungsod ng Maynila Chairman Emeritus, Dept. of ORL-HNS, Ospital ng Maynila Consultant, Medical Center Parañaque and Asian Hospital & Medical	Center",
                imageUrl: "assets/imgs/speakers/RODRIGUEZ.jpg",
                docs: [
                    {
                        title: "Investment",
                        info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon",
                        link: "images/assets/pdfs/CE 15.1 RODRIGUEZ.pdf"
                    },
                ]
            },
            {
                lastname: "ROMUALDEZ",
                firstname: "Joel MD",
                details: "Faculty in Otolaryngology, Faculty of Medicine & Surgery, University of 	Santo Tomas Executive Officer, St. Luke's Medical Center-QC Vice-Chair, Philippine Academy of Neurotology, Otology & Related 	Sciences (PANORS) ",
                imageUrl: "assets/imgs/speakers/ROMUALDEZ.jpg",
                docs: [
                    {
                        title: "Home-Based Vestibular Exercises ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita A",
                        link: "images/assets/pdfs/CE 6.2 ROMUALDEZ.pdf"
                    },
                ]
            },
            {
                lastname: "SANNIKORN",
                firstname: "Phakdee MD",
                details: "",
                imageUrl: "assets/imgs/speakers/SANNIKORN.jpg",
                docs: [
                    {
                        title: "Panel Discussion - Reconstructive Surgery ",
                        info: "Oct. 24, 2:30 – 3:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "SARMIENTO",
                firstname: "Victoria MD",
                details: "Active Consultant, Dept. of ORL-HNS, Makati Medical Center and Manila 	Doctors Hospital",
                imageUrl: "assets/imgs/speakers/SARMIENTO.png",
                docs: [
                    {
                        title: "Challenges of the Aging Physician",
                        info: "Oct. 24, 7:30 – 7:45 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Local Allergic Rhinitis ",
                        info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita B"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "SARTE",
                firstname: "Michael Alexius MD",
                details: "Chairman, Dept. of ORL-HNS, Rizal Medical Center Consultant, Director Sleep Lab., The Medical City ",
                imageUrl: "assets/imgs/speakers/SARTE.jpg",
                docs: [
                    {
                        title: "Office-based Surgery for the Nasal Cavity",
                        info: "Oct. 24, 3:00 – 3:15 PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P9.2 SARTE.pdf"
                    },
                    {
                        title: "Diagnostic Tests for OSA ",
                        info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita C",
                        link: "images/assets/pdfs/CE 13.1 SARTE.pdf"
                    },
                ]
            },
            {
                lastname: "SHAH",
                firstname: "Jatin MD",
                details: "",
                imageUrl: "assets/imgs/speakers/SHAH.jpg",
                docs: [
                    {
                        title: "Keynote Speaker",
                        info: "Oct. 22, 8:45 – 9:00 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Cancer of the Oral Cavity",
                        info: "Oct. 22, 9:15 – 9:45 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Surgery for the Primary",
                        info: "Oct. 22, 10:30 – 11:00 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Stump the Faculty",
                        info: "Oct 23, 3:30-4:30pm, Maynila Ballroom"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "SHAHA",
                firstname: "Ashok MD",
                details: "Oct. 22, 2:30 – 3:00 PM, Fiesta Pavilion",
                imageUrl: "assets/imgs/speakers/SHAHA.jpg",
                docs: [
                    {
                        title: "Panel Discussion - Multidisciplinary Management",
                        info: "Oct. 22, 2:30 – 3:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Surgery for the Neck",
                        info: "Oct. 22, 11:00 – 11:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Salivary Gland Tumors",
                        info: "Oct. 22, 3:45 – 4:15 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "STREBEL",
                firstname: "Heinrick Martin Jude MD",
                details: "",
                imageUrl: "assets/imgs/speakers/STREBEL.jpg",
                docs: [
                    {
                        title: "Panel Discussion - Oropharynx Cancer",
                        info: "Oct. 23, 8:40 – 9:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "TAN-NGO",
                firstname: "Angelo",
                details: "",
                imageUrl: "assets/imgs/speakers/TAN-NGO.jpg",
                docs: [
                    {
                        title: "Level-3 Home Sleep Test - A Convenient Way to Diagnose OSA",
                        info: "Oct. 24, 1:00 – 2:00 PM, Roma Salon"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "PORCEDDU",
                firstname: "Sandro MD",
                details: "",
                imageUrl: "assets/imgs/speakers/PORCEDDU.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Cancer of the Oral Cavity",
                        info: "Oct. 22, 9:45 - 10:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Thyroid Cancer",
                        info: "Oct. 22, 11:30 AM - 12:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Advances in Radiotherapy",
                        info: "Oct. 22, 1:30 – 2:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Radiotherapy in Oropharynx Cancer",
                        info: "Oct. 23, 8:20 – 8:40 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Non-Surgical: Radiation in Larynx Cancer",
                        info: "Oct. 23, 10:40 – 11:00 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Skull Base Tumors ",
                        info: "Oct .23, 1:30 - 2:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Stump the Faculty ",
                        info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "VERMORKEN",
                firstname: "Jan MD",
                details: "",
                imageUrl: "assets/imgs/speakers/VERMORKEN.jpg",
                docs: [
                    {
                        title: "Advances in Systemic Therapy",
                        info: "Oct. 22, 2:00 – 2:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Non-Surgical: Chemotherapy of Larynx Cancer",
                        info: "Oct. 23, 10:20 – 10:40 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Skull Base Tumors",
                        info: "Oct. 23, 1:30 - 2:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Stump the Faculty",
                        info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "TANTOCO",
                firstname: "Ma. Leah MD",
                details: "Senior Lecturer, UP-CAMP Consultant, Dept. of ORL-HNS, Philippine General Hospital",
                imageUrl: "assets/imgs/speakers/TANTOCO.jpg",
                docs: [
                    {
                        title: "Hearing Aids: Updates and New Trends",
                        info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita C",
                        link: "images/assets/pdfs/CE 3.1 TANTOCO.pdf"
                    },
                ]
            },
            {
                lastname: "VELORO",
                firstname: "Lyra MD",
                details: "Section Head, Pediatric ENT, The Medical City Active Consultant, Philippine Children's Medical Center ",
                imageUrl: "assets/imgs/speakers/VELORO.jpg",
                docs: [
                    {
                        title: "Epistaxis in Children: What Can We Do in the Clinic?",
                        info: "Oct. 24, 9:30 – 9:45 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P4.1 VELORO.pdf"
                    },
                ]
            },
            {
                lastname: "VILLAFUERTE",
                firstname: "Cesar Jr. MD",
                details: "President, Philippine Board of Otolaryngology-HNS Associate Professor, Dept. of ORL-HNS, FEU-NRMF and UP-College of Medicine Section Head, Facial Plastic Surgery Section, The Medical City",
                imageUrl: "assets/imgs/speakers/VILLAFUERTE.jpg",
                docs: [
                    {
                        title: "Septorhinoplasty for the Crooked Nose",
                        info: "Oct. 24, 8:00 – 9:00 AM, Roma Salon",
                        link: "images/assets/pdfs/CE 4.1 VILLAFUERTE.pdf"
                    },
                ]
            },
            {
                lastname: "VILLEGAS",
                firstname: "Manuel Jr. MD",
                details: "Chief Medical Officer, Asian Hospital & Medical Cente Professor, ORL-HNS, Emilio Aguinaldo College of Medicin Consultant, Dept. of ORL-HNS, Manila Doctors Hospital and Ospital ng 	Muntinlupa",
                imageUrl: "assets/imgs/speakers/VILLEGAS.jpg",
                docs: [
                    {
                        title: "Symptoms of Eustachian Tube Dysfunction",
                        info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita B"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Practice Pearls in Preventive ORL",
                        info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "WITTERICK",
                firstname: "Ian MD",
                details: "President, Philippine Society of Otolaryngology-HNS Clinical Associate Professor, UP-Philippine General Hospital Attending ORL, Asian Hospital & Medical Center and Philippine General 	Hospital",
                imageUrl: "assets/imgs/speakers/WITTERICK.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Thyroid Cancer",
                        info: "Oct. 22, 11:30 - 12:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Salivary Gland Tumors",
                        info: "Oct. 22, 4:15 - 4:45 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Surgery of Oropharynx Cancer",
                        info: "Oct. 23, 8:00 – 8:20 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Oropharynx Cancer",
                        info: "Oct. 23, 8:40 - 9:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Larynx Cancer",
                        info: "Oct. 23, 11:00 AM - 12:00 NN, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Skull Base Surgery",
                        info: "Oct. 23, 1:00 – 1:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Reconstructive Surgery",
                        info: "Oct. 23, 2:00 – 2:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Stump the Faculty ",
                        info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "YABUT",
                firstname: "Cesar Anthony MD",
                details: "Consultant, Dept. of ORL-HNS, Southern Philippines Med. Ctr. and General 	Santos Doctor's Hosp. Associate Consultant, Hearing Conservation UP-PGH, Philippine National 	Ear Institute ",
                imageUrl: "assets/imgs/speakers/YABUT.png",
                docs: [
                    {
                        title: "Tympanostomy and Nasal Polypectomy using Microdebrider in the Clinic ",
                        info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon",
                        link: "images/assets/pdfs/CE 15.3 YABUT.pdf"
                    },
                ]
            },
            {
                lastname: "YANG",
                firstname: "Nathaniel MD",
                details: "Assistant Professor, Dept. of ORL-HNS, FEU-NRMF Clinical Associate Professor, Dept. of ORL-HNS, UP-Philippine General. Hospital Chief, Section of Otology & Neurotology, Dept. of ORL-HNS, FEU-NRMF and 	The Medical City",
                imageUrl: "assets/imgs/speakers/YANG.jpg",
                docs: [
                    {
                        title: "Cochlear Implant Surgery ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita B",
                        link: "images/assets/pdfs/CE 7.2 YANG.pdf"
                    },
                    {
                        title: "The Evolution of Temporal Bone Imaging",
                        info: "Oct. 24, 9:00 – 9:20 AM, Maynila Ballroom",
                        link: "images/assets/pdfs/S1.1 YANG.pdf"
                    },
                ]
            },
            {
                lastname: "YAP",
                firstname: "Eduardo MD",
                details: "Consultant - FPS, Belo Medical Group. Consultant, Dept. of ORL-HNS, Metropolitan Medical Center. Founding President, Facial Aesthetic Core of ENT Surgeons (FACES). ",
                imageUrl: "assets/imgs/speakers/YAP.jpg",
                docs: [
                    {
                        title: "The Role of Nasal Septum in Structural Rhinoplasty ",
                        info: "Oct. 24, 8:00 – 9:00 AM, Roma Salon",
                        link: "images/assets/pdfs/CE 4.2 YAP.pdf"
                    },
                ]
            },
            {
                lastname: "YEE",
                firstname: "Don Izzy MD",
                details: "",
                imageUrl: "assets/imgs/speakers/YEE.jpg",
                docs: [
                    {
                        title: "Clearvue CME: \"IV Nutrient Supplementation\" ",
                        info: "Oct. 23, 3:00 – 3:30 PM, Roma Salon"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "YUNUS",
                firstname: "Mohd Razif MD",
                details: "",
                imageUrl: "assets/imgs/speakers/YUNUS.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Salivary Gland Tumors",
                        info: "Oct. 22, 4:15 - 4:45 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
        ];
        this.speakerData = [];
        this.speakerData = this.speakers;
    }
    SpeakersPage.prototype.ionViewDidLoad = function () {
    };
    SpeakersPage.prototype.navToSpeakerInfo = function (speaker) {
        console.log('speaker', speaker);
        this.navCtrl.push(SpeakerInfoPage, { speaker: speaker });
    };
    SpeakersPage.prototype.onInput = function (e) {
        var val = e.target.value;
        if (val && val.trim() != '') {
            this.speakerData = this.speakers.filter(function (item) {
                var name = item.firstname + "" + item.lastname;
                return (name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.onCancel(0);
        }
    };
    SpeakersPage.prototype.onCancel = function (e) {
        this.searchInput = "";
        this.speakerData = this.speakers;
    };
    SpeakersPage = __decorate([
        Component({
            selector: 'page-speakers',
            templateUrl: 'speakers.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], SpeakersPage);
    return SpeakersPage;
}());
export { SpeakersPage };
//# sourceMappingURL=speakers.js.map