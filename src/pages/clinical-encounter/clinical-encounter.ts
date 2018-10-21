import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpeakerInfoPage } from '../speaker-info/speaker-info';

@Component({
  selector: 'page-clinical-encounter',
  templateUrl: 'clinical-encounter.html',
})
export class ClinicalEncounterPage {

	timeRange = [
		"8:00 - 9:00 AM"
		, "10:00 - 11:00 AM"
		, "1:00 - 2:00 PM"
		, "3:00 - 4:00 PM"
	]

	schedule = [
		[
			{
					title: "Challenges and Advances in Tonsillectomy and Adenoidectomy"
					, speakers: "Dr. Agnes T. Remulla, Dr. Keith Romeo A. Aguilera"
					, room: "Sampaguita A"
					,link: 
			{
				lastname: "REMULLA"
				, firstname: "Agnes MD"
				, details: "President, Philippine Society of Otolaryngology-HNS Clinical Associate Professor, UP-Philippine General Hospital Attending ORL, Asian Hospital & Medical Center and Philippine General 	Hospital "
				, imageUrl: "assets/imgs/speakers/REMULLA.jpg"
				, docs: [
					{
							title:"Challenges and Advances in Tonsillectomy and Adenoidectomy"
						, info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita A"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					title: "Symptoms of Eustachian Tube Dysfunction "
					, speakers: "Dr. Manuel E. Villegas Jr. "
					, room: "Sampaguita B"
					,link:
			{
				lastname: "VILLEGAS"
				, firstname: "Manuel Jr. MD"
				, details: "Chief Medical Officer, Asian Hospital & Medical Cente Professor, ORL-HNS, Emilio Aguinaldo College of Medicin Consultant, Dept. of ORL-HNS, Manila Doctors Hospital and Ospital ng 	Muntinlupa"
				, imageUrl: "assets/imgs/speakers/VILLEGAS.jpg"
				, docs: [
					{
							title:"Symptoms of Eustachian Tube Dysfunction"
						, info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita B"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Practice Pearls in Preventive ORL"
						, info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					title: "Management of Estachian Tube Dysfunction "
					, speakers: "Dr. Natividad A. Almazan "
					, room: "Sampaguita B"
					, link: 
			{
				lastname: "ALMAZAN"
				, firstname: "Natividad MD"
				, details: "Secretary, Philippine Board of Otolaryngology-HNS Head, Otology Section, East Avenue Medical Center, Manila Central University and Veterans-MMC"
				, imageUrl: "assets/imgs/speakers/ALMAZAN.jpg"
				, docs: [
					{
							title:"Management of Estachian Tube Dysfunction"
						, info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita A"
						, link: "assets/pdfs/CE 2.2 ALMAZAN.pdf"
					},
				]
			}
				},
				{
					title: "Hearing Aids: Updates and New Trends"
					, speakers: "Dr. Ma. Leah C. Tantoco"
					, room: "Sampaguita C"
					, link: 
			{
				lastname: "TANTOCO"
				, firstname: "Ma. Leah MD"
				, details: "Senior Lecturer, UP-CAMP Consultant, Dept. of ORL-HNS, Philippine General Hospital"
				, imageUrl: "assets/imgs/speakers/TANTOCO.jpg"
				, docs: [
					{
							title:"Hearing Aids: Updates and New Trends"
						, info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita C"
						, link: "assets/pdfs/CE 3.1 TANTOCO.pdf"
					},
				]
			}
				},
				{
					title: "Implantable Devices: Candidacy, Indications and Contraindications "
					, speakers: "Dr. Maria Rina T. Reyes-Quintos"
					, room: "Sampaguita C"
					, link: 
			{
				lastname: "REYES-QUINTOS"
				, firstname: "Maria Rina MD"
				, details: "Deputy Executive Director, National Institutes of Health Clinical Associate Professor, UP-Philippine General Hospital Consultant Director Hearing and Dizziness Center, The Medical City "
				, imageUrl: "assets/imgs/speakers/QUINTOS.jpg"
				, docs: [
					{
							title:"Implantable Devices: Candidacy, Indications and Contraindications "
						, info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita C"
						, link: "assets/pdfs/CE 3.2 QUINTOS.pdf"
					},
				]
			}
				},
				{
					title: "Septorhinoplasty  for the Crooked Nose"
					, speakers: "Dr. Cesar V. Villafuerte, Jr."
					, room: "Roma Salon"
					, link: 
			{
				lastname: "VILLAFUERTE"
				, firstname: "Cesar Jr. MD"
				, details: "President, Philippine Board of Otolaryngology-HNS Associate Professor, Dept. of ORL-HNS, FEU-NRMF and UP-College of Medicine Section Head, Facial Plastic Surgery Section, The Medical City"
				, imageUrl: "assets/imgs/speakers/VILLAFUERTE.jpg"
				, docs: [
					{
							title:"Septorhinoplasty for the Crooked Nose"
						, info: "Oct. 24, 8:00 – 9:00 AM, Roma Salon"
						, link: "assets/pdfs/CE 4.1 VILLAFUERTE.pdf"
					},
				]
			}
				},
				{
					title: "The Role of Nasal Septum in Structural Rhinoplasty "
					, speakers: "Dr. Eduardo C. Yap "
					, room: "Roma Salon"
					, link: 
			{
				lastname: "YAP"
				, firstname: "Eduardo MD"
				, details: "Consultant - FPS, Belo Medical Group. Consultant, Dept. of ORL-HNS, Metropolitan Medical Center. Founding President, Facial Aesthetic Core of ENT Surgeons (FACES). "
				, imageUrl: "assets/imgs/speakers/YAP.jpg"
				, docs: [
					{
							title:"The Role of Nasal Septum in Structural Rhinoplasty "
						, info: "Oct. 24, 8:00 – 9:00 AM, Roma Salon"
						, link: "assets/pdfs/CE 4.2 YAP.pdf"
					},
				]
			}
				},
				{
					title: "Flexible Laryngoscopy and Related ENT Procedures "
					, speakers: "Dr. Ryner Jose C. Carrillo "
					, room: "Champagne Salon"
					, link: 
			{
				lastname: "CARRILLO"
				, firstname: "Ryner Jose MD"
				, details: "Associate Professor, Dept. of Anatomy, UP-College of Medicine Clinical Associate Professor, Section of Laryngology 			Bronchoesophagology, Dept. of ORL-HNS, UP-PGH"
				, imageUrl: "assets/imgs/speakers/CARRILLO.jpg"
				, docs: [
					{
							title:"Flexible Laryngoscopy and Related ENT Procedures"
						, info: "Oct. 24, 8:00 – 9:00 AM, Champagne Salon"
						// , link: "assets/pdfs/S2.2 ALFANTA.pdf"
					},
				]
			}
				},
				{
					title: "Videostroboscopy"
					, speakers: "Dr. Fortuna Corazon A. Aberin-Roldan"
					, room: "Champagne Salon"
					, link: 
			{
				lastname: "ABERIN-ROLDAN"
				, firstname: "Fortuna Corazon MD"
				, details: "Chair, Philippine Academy of Laryngologybroncoesophagology & Phoniatrics (PALP) Consultant, The Medical City Ortigas & East Avenue Medical Center"
				, imageUrl: "assets/imgs/speakers/ABERIN-ROLDAN.jpg"
				, docs: [
					{
							title:"Videostroboscopy"
						, info: "Oct. 24, 8:00-9:00 AM, Champagne Salon"
						, link: "assets/pdfs/CE 5.2 ROLDAN.pdf"
					}
				]
			}
				},
		],
		[
			{
					title: "Diagnosis, Differentiation and Management of Different Types of BPPV "
					, speakers: "Dr. Joanne Sebastiana M. De Ramos"
					, room: "Sampaguita A"
					, link: 
			{
				lastname: "DE RAMOS"
				, firstname: "Joanne Sebastiana MD"
				, details: "Professor 1 (former College Secretary & Associate Dean), St. Luke's College 	of Medicine Active Consultant, Section Head Otology, St. Luke's Medical Center QC Medical Specialist !, Part Time, Veterans Memorial Medical Center"
				, imageUrl: "assets/imgs/speakers/DE RAMOS.jpg"
				, docs: [
					{
							title:"Diagnosis, Differentiation and Management of Different Types of BPPV"
						, info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita A"
						, link: "assets/pdfs/CE 6.1 DE RAMOS.pdf"
					},
				]
			}
				},
				{
					title: "Home-Based Vestibular Exercises"
					, speakers: "Dr. Manuel E. Villegas Jr."
					, room: "Sampaguita A"
					, link: 
			{
				lastname: "VILLEGAS"
				, firstname: "Manuel Jr. MD"
				, details: "Chief Medical Officer, Asian Hospital & Medical Cente Professor, ORL-HNS, Emilio Aguinaldo College of Medicin Consultant, Dept. of ORL-HNS, Manila Doctors Hospital and Ospital ng 	Muntinlupa"
				, imageUrl: "assets/imgs/speakers/VILLEGAS.jpg"
				, docs: [
					{
							title:"Symptoms of Eustachian Tube Dysfunction"
						, info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita B"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Practice Pearls in Preventive ORL"
						, info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					title: "Basic VNG for the ENTs"
					, speakers: "Dr. Ernest Roberto H. Manas"
					, room: "Sampaguita A"
					, link: 
			{
				lastname: "MANAS"
				, firstname: "Ernest Roberto MD"
				, details: "Chairman, Dept. of ORL-HNS, Asian Hospital & Medical Center"
				, imageUrl: "assets/imgs/speakers/MANAS.jpg"
				, docs: [
					{
							title:"Basic VNG for the ENT "
						, info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita A"
						, link: "assets/pdfs/CE 6.3 MANAS.pdf"
					},
				]
			}
				},
				{
					title: "Bone-Anchored Hearing Aid"
					, speakers: "Dr. Erasmo Gonzalo DV. Llanes "
					, room: "Sampaguita B"
					, link: 
			{
				lastname: "LLANES"
				, firstname: "Erasmo Gonzalo MD"
				, details: "Treasurer, Philippine Society of Otolaryngology-HNS Clinical Associate Professor/Attending Otorhinolaryngologist, Dept. of 	ORL-HNS, PGH Consultant Staff and Faculty-External Services, Philippine National Ear 	Institute, NIH, UP Manila "
				, imageUrl: "assets/imgs/speakers/LLANES.jpg"
				, docs: [
					{
							title:"Bone-Anchored Hearing Aid "
						, info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita B"
						, link: "assets/pdfs/CE 7.1 LLANES.pdf"
					},
				]
			}
				},
				{
					title: "Cochlear Implant Surgery"
					, speakers: "Dr. Nathaniel W. Yang "
					, room: "Sampaguita B"
					, link: 
			{
				lastname: "YANG"
				, firstname: "Nathaniel MD"
				, details: "Assistant Professor, Dept. of ORL-HNS, FEU-NRMF Clinical Associate Professor, Dept. of ORL-HNS, UP-Philippine General. Hospital Chief, Section of Otology & Neurotology, Dept. of ORL-HNS, FEU-NRMF and 	The Medical City"
				, imageUrl: "assets/imgs/speakers/YANG.jpg"
				, docs: [
					{
							title:"Cochlear Implant Surgery "
						, info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita B"
						, link: "assets/pdfs/CE 7.2 YANG.pdf"
					},
					{
							title:"The Evolution of Temporal Bone Imaging"
						, info: "Oct. 24, 9:00 – 9:20 AM, Maynila Ballroom"
						, link: "assets/pdfs/S1.1 YANG.pdf"
					},
				]
			}
				},
				{
					title: "Surgery of Juvenile Angiofibroma"
					, speakers: "Dr. Josefino G.  Hernandez"
					, room: "Sampaguita C"
					, link: 
			{
				lastname: "HERNANDEZ"
				, firstname: "Josefino MD"
				, details: "Associate Professor & Vice-Chairman, Dept. of ORL-HNS, UP-Philippine 	General Hospital Consultant, Asian Hospital & Medical Center and Rizal Medical Center"
				, imageUrl: "assets/imgs/speakers/HERNANDEZ.jpg"
				, docs: [
					{
							title:"Surgery of Juvenile Angiofibroma "
						, info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita C"
						, link: "assets/pdfs/CE 8.1 HERNANDEZ.pdf"
					},
				]
			}
				},
				{
					title: "Surgery of Inverting Papilloma"
					, speakers: "Dr. Ramon Antonio B. Lopa"
					, room: "Sampaguita C"
					, link: 
			{
				lastname: "LOPA"
				, firstname: "Ramon Antonio MD"
				, details: "Associate Professor, University of the Philippines College of Medicine Attending Consultant, Dept. of ORL-HNS, Makati Medical Center Section Chief, Section of Rhinology, Dept. of ORL-HNS, Makati Medical 	Center "
				, imageUrl: "assets/imgs/speakers/LOPA.jpg"
				, docs: [
					{
							title:"Panel Discussion – Skull Base Tumors "
						, info: "Oct 23, 1:30-2:00PM, Fiesta Pavilion"
						, link: "assets/pdfs/.pdf"
					},
					{
							title:"Surgery of Inverting Papilloma "
						, info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita C"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					title: "Basic Principles & Overview on the Use of the Harmonic Scalpel in ENT "
					, speakers: "Dr. Jaime Anthony A. Arzadon IV "
					, room: "Roma Salon"
					, link: 
			{
				lastname: "ARZADON"
				, firstname: "Jaime Anthony, IV MD"
				, details: "Proprietor & Medical Director, Arzadon Clinic Cosmetic Surgery & Dermatology Head, Section of Facial Plastic Surgery, Department of ORL-HNS, Asian 	Hospital & Med. Ctr."
				, imageUrl: "assets/imgs/speakers/ARZADON.jpg"
				, docs: [
					{
							title:"Basic Principles & Overview on the Use of the Harmonic Scalpel in ENT"
						, info: "Oct. 24, 8:00 – 9:00 AM, Roma Salon"
						// , link: "assets/pdfs/S2.2 ALFANTA.pdf"
					},
					{
							title:"Neuromodulators"
						, info: "Oct. 24, 1:15 – 1:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/S2.2 ALFANTA.pdf"
					},
				]
			}
				},
				{
					title: "The Use of Harmonic Scalpel in ORL-Head and Neck Surgeries"
					, speakers: "Dr. Alfredo Q.Y. Pontejos Jr. "
					, room: "Roma Salon"
					, link: 
			{
				lastname: "PONTEJOS"
				, firstname: "Alfredo Jr. MD"
				, details: "Professor 8, University of Manila-College of Medicine Board of Director, Philippine Board of Otolaryngology-HNS Otorhinolaryngologist, Manila Doctors Hospital and Philippine General 	Hospital"
				, imageUrl: "assets/imgs/speakers/PONTEJOS.jpg"
				, docs: [
					{
							title:"Panel Discussion - Larynx Cancer"
						, info: "Oct. 23, 11:00 AM – 12:00 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"The Use of Harmonic Scalpel in ORL-Head and Neck Surgeries "
						, info: "Oct. 24, 10:00 – 11:00 AM, Roma Salon"
						, link: "assets/pdfs/CE 9.2 PONTEJOS.pdf"
					},
				]
			}
				},
				{
					title: "Overview and Indications of Image-Guided Systems in Sinus and Skull Base Surgery "
					, speakers: "Dr. Antonio H. Chua "
					, room: "Champagne Salon"
					, link: 
			{
				lastname: "CHUA"
				, firstname: "Antonio MD"
				, details: "Oct. 24, 10:00 – 11:00 AM,   Champagne Salon"
				, imageUrl: "assets/imgs/speakers/CHUA.jpg"
				, docs: [
					{
							title:"Overview and Indications of Image-Guided Systems in Sinus and Skull Base Surgery"
						, info: ""
						, link: "assets/pdfs/CE 10.1 CHUA.pdf"
					},
				]
			}
				},
				{
					title: "Image Guided Surgery in the Sinuses and Beyond"
					, speakers: "Dr. Jose Raindrop S. Embate"
					, room: "Champagne Salon"
				},
		],
		[
			{
					title: "Steroids 101"
					, speakers: "Dr. Ruzanne M. Caro"
					, room: "Sampaguita A"
					,link:
			{
				lastname: "CARO"
				, firstname: "Ruzanne MD"
				, details: "Associate Professor, UP-College of Medicine Active Consultant, Capitol Medical Center and UPCM-Philippine General	Hospital"
				, imageUrl: "assets/imgs/speakers/CARO.jpg"
				, docs: [
					{
							title:"Steroids 101 "
						, info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita A"
						, link: "assets/pdfs/CE 11.1 CARO.pdf"
					},
				]
			}
				},
				{
					title: "Steroids for Hearing Loss and Vertigo"
					, speakers: "Dr. Rosario R. Ricalde"
					, room: "Sampaguita A"
					, link: 
			{
				lastname: "RICALDE"
				, firstname: "Rosario MD"
				, details: "Clinical Associate Professor, University of the Philippines Manila, College of Medicine Consultant, Dept. of ORL-HNS, Philippine General Hospital Chair, Dept. of ORL-HNS, Providence Hospital "
				, imageUrl: "assets/imgs/speakers/RICALDE.jpg"
				, docs: [
					{
							title:"Steroids for Hearing Loss and Vertigo "
						, info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita A"
						, link: "assets/pdfs/CE 11.2 RICALDE.pdf"
					},
				]
			}
				},
				{
					title: "Barrier Dysfunction in Allergic Rhinitis"
					, speakers: "Dr. Anne Marie V. Espiritu "
					, room: "Sampaguita B"
					, link: 
			{
				lastname: "ESPIRITU"
				, firstname: "Anne Marie MD"
				, details: "Board of Trustee, Philippine Society of Otolaryngology-HNS Head, Section of Rhinopharyngology & Allergy, Dept. of ORL-HNS, Manila Doctors Hospital Associate Board ExAMiner, Philippine Board of Otolaryngology-HNS"
				, imageUrl: "assets/imgs/speakers/ESPIRITU.jpg"
				, docs: [
					{
							title:"Barrier Dysfunction in Allergic Rhinitis "
						, info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita B"
						, link: "assets/pdfs/CE 12.1 ESPIRITU.pdf"
					},
				]
			}
				},
				{
					title: "Local Allergic Rhinitis"
					, speakers: "Dr. Victoria C. Sarmiento"
					, room: "Sampaguita B"
					, link: 
			{
				lastname: "SARMIENTO"
				, firstname: "Victoria MD"
				, details: "Active Consultant, Dept. of ORL-HNS, Makati Medical Center and Manila 	Doctors Hospital"
				, imageUrl: "assets/imgs/speakers/SARMIENTO.png"
				, docs: [
					{
							title:"Challenges of the Aging Physician"
						, info: "Oct. 24, 7:30 – 7:45 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Local Allergic Rhinitis "
						, info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita B"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					title: "Diagnostic Tests for OSA"
					, speakers: "Dr. Michael Alexius A. Sarte"
					, room: "Sampaguita C"
					, link: 
			{
				lastname: "SARTE"
				, firstname: "Michael Alexius MD"
				, details: "Chairman, Dept. of ORL-HNS, Rizal Medical Center Consultant, Director Sleep Lab., The Medical City "
				, imageUrl: "assets/imgs/speakers/SARTE.png"
				, docs: [
					{
							title:"Office-based Surgery for the Nasal Cavity"
						, info: "Oct. 24, 3:00 – 3:15 PM, Fiesta Pavilion"
						, link: "assets/pdfs/P9.2 SARTE.pdf"
					},
					{
							title:"Diagnostic Tests for OSA "
						, info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita C"
						, link: "assets/pdfs/CE 13.1 SARTE.pdf"
					},
				]
			}
				},
				{
					title: "Upper Airway Evaluation in OSA Surgery"
					, speakers: "Dr. Cesar V. Villafuerte, Jr."
					, room: "Sampaguita C"
					, link: 
			{
				lastname: "VILLAFUERTE"
				, firstname: "Cesar Jr. MD"
				, details: "President, Philippine Board of Otolaryngology-HNS Associate Professor, Dept. of ORL-HNS, FEU-NRMF and UP-College of Medicine Section Head, Facial Plastic Surgery Section, The Medical City"
				, imageUrl: "assets/imgs/speakers/VILLAFUERTE.jpg"
				, docs: [
					{
							title:"Septorhinoplasty for the Crooked Nose"
						, info: "Oct. 24, 8:00 – 9:00 AM, Roma Salon"
						, link: "assets/pdfs/CE 4.1 VILLAFUERTE.pdf"
					},
				]
			}
				},
				{
					title: "Intuitive Landmark Base Endoscopic Sinus Surgery"
					, speakers: "Dr. Benjamin S.A. Campomanes Jr"
					, room: "Roma Salon"
				},
				{
					title: "Quality Sleep CME "
					, speakers: "Cox. Angelo Yu Tan-Ngo, RRT. "
					, room: "Roma Salon"
					, link: 
			{
				lastname: "TAN-NGO"
				, firstname: "Angelo"
				, details: ""
				, imageUrl: "assets/imgs/speakers/TAN-NGO.jpg"
				, docs: [
					{
							title:"Level-3 Home Sleep Test - A Convenient Way to Diagnose OSA"
						, info: "Oct. 24, 1:00 – 2:00 PM, Roma Salon"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					title: "Investment "
					, speakers: "Dr. Edgardo C. Rodriguez, Jr."
					, room: "Champagne Salon"
					, link: 
			{
				lastname: "RODRIGUEZ"
				, firstname: "Edgardo Jr. MD"
				, details: "Associate Professor, Pamantasan ng Lungsod ng Maynila Chairman Emeritus, Dept. of ORL-HNS, Ospital ng Maynila Consultant, Medical Center Parañaque and Asian Hospital & Medical	Center"
				, imageUrl: "assets/imgs/speakers/RODRIGUEZ.jpg"
				, docs: [
					{
							title:"Investment"
						, info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon"
						, link: "assets/pdfs/CE 15.1 RODRIGUEZ.pdf"
					},
				]
			}
				},
				{
					title: "Common ENT-HNS Outpatient Selected Conditions and Situations: How I Managed It  "
					, speakers: "Dr. Rodolfo P. Nonato"
					, room: "Champagne Salon"
					, link: 
			{
				lastname: "NONATO"
				, firstname: "Rodolfo MD"
				, details: "Board of Director, Philippine Board of Otolaryngology-HNS Consultant, Dept. of ORL-HNS, Corazon Locsin Montelibano Memorial Regional Hospital "
				, imageUrl: "assets/imgs/speakers/NONATOx.png"
				, docs: [
					{
							title:"Common ENT-HNS Outpatient Selected Conditions and Situations: How I Managed It "
						, info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon"
						, link: "assets/pdfs/CE 15.2 NONATO.pdf"
					},
				]
			}
				},
				{
					title: "Tympanostomy and Nasal Polypectomy using Microdebrider in the Clinic"
					, speakers: "Dr. Cesar Anthony P. Yabut"
					, room: "Champagne Salon"
					, link: 
			{
				lastname: "YABUT"
				, firstname: "Cesar Anthony MD"
				, details: "Consultant, Dept. of ORL-HNS, Southern Philippines Med. Ctr. and General 	Santos Doctor's Hosp. Associate Consultant, Hearing Conservation UP-PGH, Philippine National 	Ear Institute "
				, imageUrl: "assets/imgs/speakers/YABUT.png"
				, docs: [
					{
							title:"Tympanostomy and Nasal Polypectomy using Microdebrider in the Clinic "
						, info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon"
						, link: "assets/pdfs/CE 15.3 YABUT.pdf"
					},
				]
			}
				},
				{
					title: "My Unconventional Methods in Otolaryngology-Head and Neck Surgery  "
					, speakers: "Dr. Felixberto D. Ayahao"
					, room: "Champagne Salon"
					, link: 
			{
				lastname: "AYAHAO"
				, firstname: "Felixberto MD"
				, details: "MS 3, Baguio General Hospital"
				, imageUrl: "assets/imgs/speakers/AYAHAO.jpg"
				, docs: [
					{
							title:"My Unconventional Methods in Otolaryngology-Head and Neck Surgery"
						, info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon"
						, link: "assets/pdfs/CE 15.4 AYAHAO.pdf"
					},
				]
			}
				},
				{
					title: "1. Practice Pearls in Preventive ORL, The National TB Program and its Implications in ENT Practice "
					, speakers: "Dr. Manuel E. Villegas Jr."
					, room: "Champagne Salon"
					,link: 
			{
				lastname: "VILLEGAS"
				, firstname: "Manuel Jr. MD"
				, details: "Chief Medical Officer, Asian Hospital & Medical Cente Professor, ORL-HNS, Emilio Aguinaldo College of Medicin Consultant, Dept. of ORL-HNS, Manila Doctors Hospital and Ospital ng 	Muntinlupa"
				, imageUrl: "assets/imgs/speakers/VILLEGAS.jpg"
				, docs: [
					{
							title:"Symptoms of Eustachian Tube Dysfunction"
						, info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita B"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Practice Pearls in Preventive ORL"
						, info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
		],
		[
			{
					title: "CMF Plating That Gets the Best Results: What an ENT Should Know "
					, speakers: "Dr. Francis V. Roasa "
					, room: "Sampaguita A"
					, link: 
			{
				lastname: "ROASA"
				, firstname: "Francis MD"
				, details: "Associate Professor III, UST Faculty of Medicine & Surgery Consultant, Dept. of ORL-HNS, UST Hospital and St. Luke's Medical 	Center-Global City Medical Specialist II, Ospital ng Makati"
				, imageUrl: "assets/imgs/speakers/ROASA.jpg"
				, docs: [
					{
							title:"3D Imaging / Printing and Planning in Maxillofacial Surgery"
						, info: "Oct. 24, 8:00 – 8:15 AM, Fiesta Pavilion"
						, link: "assets/pdfs/P2.1 ROASA.pdf"
					},
					{
							title:"CMF Plating That Gets the Best Results: What an ENT Should Know Otorhinolaryngologist"
						, info: "Oct. 24, 3:00 – 4:00 PM, Sampaguita A"
						, link: "assets/pdfs/CE 16.1 ROASA.pdf"
					},
				]
			}
				},
				{
					title: "Condylar Fractures: When and When Not To Plate "
					, speakers: "Dr. Roberto M. Pangan"
					, room: "Sampaguita A"
					, link: 
			{
				lastname: "PANGAN"
				, firstname: "Roberto MD"
				, details: "Associate Clinical Professor, Dept. of ORL-HNS, UP-Philippine General Hospital Consultant, Dept. of ORL-HNS, East Avenue Medical Center and Cebu 	Doctor's Hospital"
				, imageUrl: "assets/imgs/speakers/PANGAN.png"
				, docs: [
					{
							title:"Condylar Fractures: When and When Not To Plate "
						, info: "Oct. 24, 3:00 – 4:00 PM, Sampaguita A"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					title: "Unsedated Office-based Procedure in Laryngology"
					, speakers: "Dr. Ma. Clarissa S. Fortuna"
					, room: "Sampaguita B"
					, link: 
			{
				lastname: "ABERIN-ROLDAN"
				, firstname: "Fortuna Corazon MD"
				, details: "Chair, Philippine Academy of Laryngologybroncoesophagology & Phoniatrics (PALP) Consultant, The Medical City Ortigas & East Avenue Medical Center"
				, imageUrl: "assets/imgs/speakers/ABERIN-ROLDAN.jpg"
				, docs: [
					{
							title:"Videostroboscopy"
						, info: "Oct. 24, 8:00-9:00 AM, Champagne Salon"
						, link: "assets/pdfs/CE 5.2 ROLDAN.pdf"
					}
				]
			}
				},
				{
					title: "Vocal Fold Injection in the Clinic: When, Why, How "
					, speakers: "Dr. Melfred L. Hernandez"
					, room: "Sampaguita B"
					, link: 
			{
				lastname: "HERNANDEZ"
				, firstname: "Josefino MD"
				, details: "Associate Professor & Vice-Chairman, Dept. of ORL-HNS, UP-Philippine 	General Hospital Consultant, Asian Hospital & Medical Center and Rizal Medical Center"
				, imageUrl: "assets/imgs/speakers/HERNANDEZ.jpg"
				, docs: [
					{
							title:"Surgery of Juvenile Angiofibroma "
						, info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita C"
						, link: "assets/pdfs/CE 8.1 HERNANDEZ.pdf"
					},
				]
			}
				},
				{
					title: "Retroauricular incision: A New Surgical Technique on Selected Parotid Gland Cases "
					, speakers: "Dr. Dewan Hassan"
					, room: "Sampaguita C"
					, link: 
			{
				lastname: "HASSAN"
				, firstname: "Dewan MD"
				, details: "Senior Consultant & Head, Otolaryngology & Head and Neck Surgery, Sarkari Karmachari Hospital Life Member, Society of Otolaryngology & Head and Neck Surgeons of Bangladesh "
				, imageUrl: "assets/imgs/speakers/HASSAN.jpg"
				, docs: [
					{
							title:"Retroauricular incision: A New Surgical Technique on Selected Parotid Gland Cases "
						, info: "Oct 24, 3:00-4:00 PM, Sampaguita C"
						, link: "assets/pdfs/CE 18.1 HASSAN.pdf"
					},
				]
			}
				},
				{
					title: "Upper Airway Evaluation in OSA Surgery "
					, speakers: "Dr. Cesar V. Villafuerte, Jr."
					, room: "Sampaguita C"
					, link: 
			{
				lastname: "VILLAFUERTE"
				, firstname: "Cesar Jr. MD"
				, details: "President, Philippine Board of Otolaryngology-HNS Associate Professor, Dept. of ORL-HNS, FEU-NRMF and UP-College of Medicine Section Head, Facial Plastic Surgery Section, The Medical City"
				, imageUrl: "assets/imgs/speakers/VILLAFUERTE.jpg"
				, docs: [
					{
							title:"Septorhinoplasty for the Crooked Nose"
						, info: "Oct. 24, 8:00 – 9:00 AM, Roma Salon"
						, link: "assets/pdfs/CE 4.1 VILLAFUERTE.pdf"
					},
				]
			}
				},
				{
					title: "Facial Shaping with Neuromodulators and Fillers"
					, speakers: "Dr. Joseph Amado C. Galvez"
					, room: "Roma Salon"
					, link: 
			{
				lastname: "GALVEZ"
				, firstname: "Joseph Amado MD"
				, details: "Chairman, Dept. of ORL-HNS, Ospital ng Maynila Associate Professor, Dept. of ORL-HNS, Emilio Aguinaldo College- College of Medicine Instructor, ORL-HNS, PAMantasan ng Lungsod ng Maynila  College of Medicine"
				, imageUrl: "assets/imgs/speakers/GALVEZ.jpg"
				, docs: [
					{
							title:"Soft Tissue Filler Augmentation"
						, info: "Oct. 24, 1:30 – 1:45 PM, Fiesta Pavilion"
						, link: "assets/pdfs/P7.3  GALVEZ.pdf"
					},
					{
							title:"Facial Shaping with Neuromodulators and Fillers"
						, info: "Oct. 24, 3:00 – 4:00 PM, Roma Salon"
						, link: "assets/pdfs/CE 19.1 GALVEZ.pdf"
					},
				]
			}
				},
				{
					title: "Nasal Augmentation using Thread and Fillers in Laryngology Results:"
					, speakers: "Dr. Henry John F. Claravall"
					, room: "Roma Salon"
					, link: 
			{
				lastname: "CLARAVALL"
				, firstname: "Henry John MD"
				, details: "Consultant, Dept. of ORL-HNS, University of Santo Tomas Hospital, St. Luke's Global City and The Medical City"
				, imageUrl: "assets/imgs/speakers/CLARAVALL.jpg"
				, docs: [
					{
							title:"Threadlifts and Fillers for Noselift"
						, info: "Oct. 24, 1:45 – 2:00 PM, Fiesta Pavilion"
						, link: "assets/pdfs/P7.4 CLARAVALL.pdf"
					},
					{
							title:"Nasal Augmentation using Thread and Fillers "
						, info: "Oct. 24, 3:00 – 4:00 PM, Roma Salon"
						, link: "assets/pdfs/P7.4 CLARAVALL.pdf"
					},
				]
			}
				},
				{
					title: "The Value of Ultrasound in the Evaluation of Head and Neck Neoplasms"
					, speakers: "Dr. Daniel M. Alonzo"
					, room: "Champagne Salon"
					, link: 
			{
				lastname: "ALONZO"
				, firstname: "Daniel MD"
				, details: "Director, Cancer Institute, The Medical City"
				, imageUrl: "assets/imgs/speakers/ALONZO.jpg"
				, docs: [
					{
							title:"Panel Discussion: Thyroid Cancer"
						, info: "Oct. 22, 11:30 AM – 12:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/S2.2 ALFANTA.pdf"
					},
					{
							title:"The Value of Ultrasound in the Evaluation of Head and Neck Neoplasms"
						, info: "Oct. 24, 8:00 – 9:00 AM, Champagne Salon"
						, link: "assets/pdfs/CE 20.1 ALONZO.pdf"
					},
				]
			}
				},
				{
					title: '\"No More Blind Biopsies\": Integrating the Use of Ultrasound in Head and Neck Practice'
					, speakers: "Dr. Geraldine L. Luna"
					, room: "Champagne Salon"
					, link: 
			{
				lastname: "LUNA"
				, firstname: "Geraldine MD"
				, details: "Consultant, Dept. of ORL-HNS, Asian Hospital & Medical Center"
				, imageUrl: "assets/imgs/speakers/LUNA.jpg"
				, docs: [
					{
							title:"\"No More Blind Biopsies\": Integrating the Use of Ultrasound in Head and Neck Practice "
						, info: "Oct. 24, 3:00 – 4:00 PM, Champagne Salon"
						, link: "assets/pdfs/CE 20.2 LUNA.pdf"
					},
				]
			}
				},
				{
					title: "Interventional Techniques in Neck Ultrasound "
					, speakers: "Dr. Maria Karen A. Capuz"
					, room: "Champagne Salon"
					, link: 
			{
				lastname: "CAPUZ"
				, firstname: "Maria Karen MD"
				, details: "Clinical Faculty, Ateneo School of Medicine & Public Health Assistant Professor, Manila Central University, College of Medicine Head & Neck Subspecialty Consultant, Dept. of ORL-HNS, UST Hospital"
				, imageUrl: "assets/imgs/speakers/CAPUZ.jpg"
				, docs: [
					{
							title:"Techniques of Office Ultrasonography"
						, info: "Oct. 24, 3:00 – 4:00 PM, Champagne Salon"
						, link: "assets/pdfs/CE 20.3 CAPUZ.pdf"
					},
				]
			}
				},
		],
			
	]
	range = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClinicalEncounterPage');
  }

  left(){
  	console.log("LEFT", this.range)
  	if(this.range <= 0) return;
  		this.range--;
  }

  right(){
  	console.log("Right", this.range)
  	if(this.range > 2) return;
  		this.range++;
  }

  navToSpeakerInfo(speaker){
  	if(!speaker) return ;
  	this.navCtrl.push(SpeakerInfoPage, {speaker:speaker})
  }

}
