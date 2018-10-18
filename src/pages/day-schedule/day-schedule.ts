import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'page-day-schedule',
  templateUrl: 'day-schedule.html',
})
export class DaySchedulePage {
	days = [
		[
			{
				time: "8:00 - 8:45 AM"
				, title: "Opening Ceremonies"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
			},
			{
				time: "8:45 - 9:00 AM"
				, title: "Keynote Speaker (Jatin P. Shah)"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
			},
			{
				time: "9:00 - 9:15 AM"
				, title: "Coffee Break"
			},
			{
				time: "9:15 - 9:45 AM"
				, title: "Cancer of the Oral Cavity"
				, speaker: "Dr. Jatin P. Shah"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
			},
			{
				time: "9:45 - 10:30 AM"
				, title: "Panel Discussion – Cancer of the Oral Cavity"
				, speaker: "Dr. Sandro Porceddu, Dr. Chih-Yeh Chien (TW),Dr. Mamer..."
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
			},
			{
				time: "10:30 – 11:00 AM"
				, title: "Surgery for the Primary"
				, speaker: "Dr. Jatin P. Shah"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
			},
			{
				time: "10:30 – 11:00 AM"
				, title: "Surgery for the Neck"
				, speaker: "Dr. Ashok R. Shaha"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
			},
			{
				time: "11:30 – 12:30 PM"
				, title: "Panel Discussion – Thyroid Cancer"
				, speaker: "Dr. Ian Witterick, Dr. Sandro Porceddu, Dr. Choakchai M..."
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				, sponsor: "UAP"
			},
			{
				time: "12:30 – 1:30 PM"
				, title: "LUNCH SYMPOSIUM \r\nAllergic Rhinitis 101: Simple Case Presentation"
				, speaker: "Dr. Generoso T. Abes"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
			},
			{
				time: "1:30 – 2:00 PM"
				, title: "Advances in Radiotherapy"
				, speaker: "Dr. Sandro Porceddu"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
			},
			{
				time: "2:00 – 4:00 PM"
				, title: "Descriptive Research Contest"
				, location: "Maynila Ballroom"
				, coords: "Dr. Eduard M. Alfanta/ Dr. Erasmo Gonzalo D.V. LLanes"
			},
			{
				time: "2:00 – 2:30 PM"
				, title: "Advances in Systemic Therapy"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
			},
			{
				time: "2:30 – 3:30 PM"
				, title: "Panel Discussion – Multidisciplinary Panel"
				, speaker: "Dr. Ashok R. Shaha, Dr. Marlinda Adham (INDO), Dr. Jorge G. Ignacio (PH), Dr. Michael B. Mejia (PH)"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
			},
			{
				time: "3:30 – 3:45 PM"
				, title: "Coffee Break"
			},
			{
				time: "3:45 – 4:15 PM"
				, title: "Salivary Gland Tumors"
				, speaker: "Dr. Ashok R. Shaha"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
			},
			{
				time: "4:15 – 4:45 PM"
				, title: "Panel Discussion – Salivary Gland Tumors"
				, speaker: "Dr. Jatin P. Shah, Dr. Ian Witterick, Dr. Mohd Razif Yunus (MAL), Dr. Jacob S. Matubis (PH), Dr. Arturo S. dela Peña (PH)"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
			},
			{
				time: "4:45 – 5:45 PM"
				, title: "Video Presentation – How I do It"
				, speaker: "Dr. Jatin P. Shah, Dr. Ashok R. Shaha"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
			},
			{
				time: "7:00 – 8:00 PM"
				, title: "DINNER SYMPOSIU \r\nVertigo Management Updates"
				, speaker: "Dr. Teresa Luisa I. Gloria-Cruz"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				, sponsor: "UAP"
			},
			{
				time: "8:00 – 10:00 PM"
				, title: "GALA NIGHT (A tribute to Dr. Mariano and Dr. Armando Chiong Sr.)"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
			},
		]

		,
		// day 2
			[
				{
					time: "7:00 – 9:00 AM"
					, title: "Free Paper Presentation"
					, location: "Maynila Ballroom"
					, coords: "Dr. Christopher Ed C. Gloria"
				},
				{
					time: "8:00 – 8:20 AM"
					, title: "Surgery of Oropharynx Cancer"
					, speaker : "Dr. Ian Witterick"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "8:20 – 8:40 AM"
					, title: "Radiotherapy in Oropharynx Cancer"
					, speaker: "Dr. Sandro Porceddu"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "8:40 – 9:30 AM"
					, title: "Panel Discussion – Oropharynx Cancer"
					, speaker: "Dr. Ian Witterick, Dr. Johanna Patricia A. Cañal (PH), Dr. Heinrick Martin Jude Strebel (PH) "
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "9:30 – 10:00 AM"
					, title: "Coffee Break"
				},
				{
					time: "10:00 – 10:20 AM"
					, title: "Surgery of Larynx Cancer"
					, speaker: "Dr. Jatin P. Shah"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "10:20 – 10:40 AM"
					, title: "Non-Surgical: Chemotherapy of Larynx Cancer"
					, speaker: "Dr. Jan B. Vermorken"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "10:40 – 11:00 AM"
					, title: "Non-Surgical: Radiation in Larynx Cancer"
					, speaker: "Dr. Sandro Porceddu"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "11:00 – 12:00 NN"
					, title: "Panel Discussion – Larynx Cancer"
					, speaker: "Dr. Ian Witterick, Dr. Alfredo Q.Y. Pontejos, Jr. (PH), Dr. William L. Lim (PH), Dr. Edilberto Joaquin V. Fragante, Jr., (PH)"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "12:00 – 1:00 PM"
					, title: "LUNCH SYMPOSIUM \r\The Unmet Medical Need in AR: European Perspective and Parallels in the Philippines"
					, speaker: "Prof. Jean Bousquet, MD, PhD"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, sponser: "MYLAN"
				},
				{
					time: "1:00 – 1:30 PM"
					, title: "Skull Base Surgery"
					, location: "Fiesta Pavillon (Rigodon, Polkabal, Pandanggo)"
					, speaker: "Dr. Ian Witterick"
				},
				{
					time: "1:30 – 2:00 PM"
					, title: "Panel Discussion – Skull Base Tumors"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, speaker: "Dr. Sandro Porceddu, Dr. Jan B. Vermorken, Dr. Sheng-PoHao (TW), Dr. Ramon Antonio B. Lopa (PH) "
				},
				{
					time: "2:00 – 2:30 PM"
					, title: "Reconstructive Surgery"
					, speaker: "Dr. Ian Witterick."
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "2:30 – 3:00 PM"
					, title: "Panel Discussion -Reconstructive Surgery"
					, speaker: "Dr. Phakdee Sannikorn (TH), Dr. Samantha S. Castaneda (PH), Dr. Armando M. Chiong, Jr. (PH)"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "3:00 – 3:30 PM"
					, title: "Coffee Break"
				},
				{
					time: "3:00 – 3:30 PM"
					, title: "Clearvue CME"
					, speaker: "Dr. Don Izzy Yee"
					, location: "Roma Salon"
				},
				{
					time: "3:30 – 5:00 PM"
					, title: "Analytical Research Contest"
					, speaker: "Roma Salon"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, coords: "Dr. Eduard M. Alfanta/ Dr. Erasmo Gonzalo D.V. LLanes"
				},
				{
					time: "3:30 – 4:30 PM"
					, title: "Panel Discussion"
					, speaker: "Dr. Jatin P. Shah, Dr. Ian Witterick, Dr. Sandro Porceddu, Dr. Jan B. Vermorken"
					, location: "Maynila Ballroom"
					, sponsor: "UAP"
				},
				{
					time: "4:30 – 6:00 PM"
					, title: "Video Presentations – How I do it"
					, speaker: "Dr. Jatin P. Shah, Dr. Ian Witterick"
					, location: "Maynila Ballroom"
				},
				{
					time: "7:00 – 11:00 PM"
					, title: "DINNER SYMPOSIUM \r\nAllergic Rhinoconjunctivitis: Guidelines Update and New Treatment Strategies"
					, speaker: "Prof. Ralph Mosges, MD, PhD, FAAAAI"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, sponsor: "Menarini"
				},
				{
					time: "7:00 – 11:00 PM"
					, title: "Fellowship Night"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
			]
			,


			// day 3

			[
				{
					time: "7:00 – 9:00 AM"
					, title: "Paper Presentation"
					, location: "Maynila Ballroom"
					, coords: "Dr. Eduard M. Alfanta/ Dr. Erasmo Gonzalo D.V. LLanes"
				},
				{
					time: "7:30 – 7:45 AM"
					, title: "Challenges of the Aging Physician"
					, speaker: "Dr. Victoria C. Sarmiento"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "7:45 – 8:00 AM"
					, title: "Insights of a Seasoned Otorhinolaryngologist"
					, speaker: "Dr. Generoso T. Abes"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "8:00 – 8:15 AM"
					, title: "3D Imaging / Printing and Planning in Maxillofacial Surgery"
					, speaker : "Dr. Francis V. Roasa"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "8:15 – 8:30 AM"
					, title: "Closed Reduction: Nasal Bone Fracture"
					, speaker: "Dr. Jehan Grace B. Maglaya "
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "8:30 – 8:45 AM"
					, title: "Prosthesis"
					, speaker: "Dr. Joselito F. David"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "8:45 – 9:00 AM"
					, title: "Office-based Laryngeal Surgery"
					, speaker: "Dr. William L. Lim"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "9:00 – 9:30 AM"
					, title: "Panel Discussion – Laser Surgery in Laryngology"
					, speaker: "Dr. William L. Lim, Dr. Ma. Clarissa S. Fortuna, Dr. Melfred L. Hernandez"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "9:00 – 9:20 AM"
					, title: "The Evolution of Temporal Bone Imaging"
					, speaker: "Dr. Nathaniel W. Yang"
					, location: "Maynila Ballroom"
				},
				{
					time: "9:20 – 9:40 AM"
					, title: "Basic CT and MRI Imaging for Common Head and Neck Conditions"
					, speaker: "Dr. Johanna A Cañal"
					, location: "Maynila Ballroom"
				},
				{
					time: "9:30 – 9:45 AM"
					, title: "Epistaxis in Children: What Can We Do in the Clinic?"
					, speaker: "Dr. Lyra V. Veloro"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "9:45 – 10:00 AM"
					, title: "Ventilation tubes for OME in Cleft Palate: Do We or Do We Not?"
					, speaker: "Dr. Cecilia Gretchen S. Navarro- Locsin"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "10:00 – 10:15 AM"
					, title: "Office Management of the Pediatric Airway"
					, location: "Maynila Ballroom"
					, speaker: "Dr. Adonis B. Jurado"
				},
				{
					time: "10:25 – 10:50 AM"
					, title: "EMR: Issues and Challenges in the Clinical Practice"
					, location: "Maynila Ballroom"
					, speaker: "Dr. Eduard M. Alfanta"
				},
				{
					time: "10:15 – 10:30 AM"
					, title: "Fat Myringoplasty"
					, speaker: "Dr. Norberto Martinez "
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "10:30 – 10:45 AM"
					, title: "Approach for Single-sided Deafness"
					, speaker: "Dr. Charlotte M.Chiong"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "10:45 – 11:00 AM"
					, title: "Shoeboex Audiometry Updates: How the iPad Audiometer Continues to Revolutionize the World of Hearing Health"

					, speaker: "Ms. Natalie Mai"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "11:00 – 11:20 AM"
					, title: "AEP Testing with Patient Follow-up via Pathtrack Tracking Software"
					, speaker: "Mr. Russell Higgs"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "11:00 – 12:00 NN"
					, title: "Poster Session Contest on Surgical Innovation & instrumentation"
					, location: "Maynila Ballroom"
					, coords: "Dr. Eduard M. Alfanta/ Dr. Erasmo Gonzalo D.V. LLanes"
				},
				{
					time: "11:30 – 12:00 NN"
					, title: "PRE-LUNCH SYMPOSIUM \r\nNECK Session (Natrapharm Enhancing Clinical Knowledge in Current Practice): Solving the Mysteries of Cervical Lymphaenopath)y"
					, speaker: "Dr. Mark Kristoffer U. Pasayan"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, sponsor: "Natrapharm"
				},
				{
					time: "12:00 – 1:00 PM"
					, title: "LUNCH SYMPOSIUM \r\nVertigo-free:Exploring the Possibilities"
					, speaker: "Dr. Michel Lacour, Phd (France)"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, sponsor: "Abbott  Laboratories"
				},
				{
					time: "1:00 – 1:15 PM"
					, title: "Nerve Blocks/Anesthesia for Office Procedures and Goretex Thread for Rhinoplasty"
					, speaker: "Dr. Homer M. Matias"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "1:00 – 1:25 PM"
					, title: "Data Privacy Act"
					, speaker: "Atty. Ivy D. Patdu"
					, location: "Maynila Ballroom"
				},
				{
					time: "1:15 – 1:30 PM"
					, title: "Neuromodulators"
					, speaker: "Dr. Jaime Anthony A. Arzadon, IV"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "1:25 – 1:50 PM"
					, title: "Social Media in the Clinical Practice"
					, speaker: "Dr. Iris Isip-Tan"
					, location: "Maynila Ballroom"
				},
				{
					time: "1:30 – 1:45 PM"
					, title: "Soft Tissue Filler Augmention"
					, speaker: "Dr.Jospeh Amado C. Galvez"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "1:45 – 2:00 PM"
					, title: "Threadlifts and Fillers for Noselift"
					, speaker: "Dr. Henry John F. Claravall"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "2:00 – 2:15 PM"
					, title: "Evolving Trends in Sinus Surgery"
					, speaker: "Dr. Joman Q.  Laxamana"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "2:15 – 2:30 PM"
					, title: "Office Procedures in Managing Chronic Rhinosinusitis and Nasal Polyposis"
					, speaker: "Dr. Ma. Lourdes B. Enecilla"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "2:30 – 2:45 PM"
					, title: "Image-guided Systems in Sinus and Skullbase Surgery"
					, speaker: "Dr. Peter R. Jarin"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "2:45 – 3:00 PM"
					, title: "Overview and Management of OSA"
					, speaker: "Dr. Maria Patricia Ann T. Puno"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "3:00 – 3:15 PM"
					, title: "Office-based Surgery for the Nasal Cavity"
					, speaker: "Dr. Michael Alexius A. Sarte"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "3:30 – 4:00 PM"
					, title: "Patient Preference Study for Allergic Rhinitis"
					, speaker: "Dr. Edwin Ilagan Villasanta, FPCP, FPCCP"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "4:00 – 6:00 PM"
					, title: "SPECIAL GENERAL MEMBERSHIP MEETING"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				},
				{
					time: "6:00 – 10:00 PM"
					, title: "ALUMNI NIGHT"
				},
			]
	]

	daySchedule = [];

  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
  	, public evt: Events
  	) {

  	this.daySchedule = this.days[0];

  	this.evt.subscribe("schedule:daySelect", (day)=>{
  		this.daySchedule = this.days[day-1]
  	})

  }

  ionViewDidLoad() {
  }

}
