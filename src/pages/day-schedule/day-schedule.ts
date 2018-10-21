import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { SpeakerInfoPage } from '../speaker-info/speaker-info';
import { Storage } from '@ionic/storage';

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
				, link: {
					lastname: "SHAH"
					, firstname: "Jatin MD"
					, details: ""
					, imageUrl: "assets/imgs/speakers/SHAH.jpg"
					, docs: [
						{
								title:"Keynote Speaker"
							, info: "Oct. 22, 8:45 – 9:00 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Cancer of the Oral Cavity"
							, info: "Oct. 22, 9:15 – 9:45 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Surgery for the Primary"
							, info: "Oct. 22, 10:30 – 11:00 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Stump the Faculty"
							, info: "Oct 23, 3:30-4:30pm, Maynila Ballroom"
							// , link: "assets/pdfs/.pdf"
						},
					]
				}
			},
			{
				time: "9:45 - 10:30 AM"
				, title: "Panel Discussion – Cancer of the Oral Cavity"
				, speaker: "Dr. Sandro Porceddu, Dr. Chih-Yeh Chien (TW),Dr. Mamer..."
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				, link: {
					lastname: "PORCEDDU"
					, firstname: "Sandro MD"
					, details: ""
					, imageUrl: "assets/imgs/speakers/PORCEDDU.jpg"
					, docs: [
						{
								title:"Panel Discussion: Cancer of the Oral Cavity"
							, info: "Oct. 22, 9:45 - 10:30 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Thyroid Cancer"
							, info: "Oct. 22, 11:30 AM - 12:30 PM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Advances in Radiotherapy"
							, info: "Oct. 22, 1:30 – 2:00 PM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Radiotherapy in Oropharynx Cancer"
							, info: "Oct. 23, 8:20 – 8:40 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Non-Surgical: Radiation in Larynx Cancer"
							, info: "Oct. 23, 10:40 – 11:00 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Skull Base Tumors "
							, info: "Oct .23, 1:30 - 2:00 PM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Stump the Faculty "
							, info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
							// , link: "assets/pdfs/.pdf"
						},
					]
				}
			},
			{
				time: "10:30 - 11:00 AM"
				, title: "Surgery for the Primary"
				, speaker: "Dr. Jatin P. Shah"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				, link: {
					lastname: "SHAH"
					, firstname: "Jatin MD"
					, details: ""
					, imageUrl: "assets/imgs/speakers/SHAH.jpg"
					, docs: [
						{
								title:"Keynote Speaker"
							, info: "Oct. 22, 8:45 – 9:00 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Cancer of the Oral Cavity"
							, info: "Oct. 22, 9:15 – 9:45 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Surgery for the Primary"
							, info: "Oct. 22, 10:30 – 11:00 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Stump the Faculty"
							, info: "Oct 23, 3:30-4:30pm, Maynila Ballroom"
							// , link: "assets/pdfs/.pdf"
						},
					]
				}

			},
			{
				time: "11:00 – 11:30 AM"
				, title: "Surgery for the Neck"
				, speaker: "Dr. Ashok R. Shaha"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				, link : 
					{
						lastname: "SHAHA"
						, firstname: "Ashok MD"
						, details: "Oct. 22, 2:30 – 3:00 PM, Fiesta Pavilion"
						, imageUrl: "assets/imgs/speakers/SHAHA.jpg"
						, docs: [
							{
									title:"Panel Discussion - Multidisciplinary Management"
								, info: "Oct. 22, 2:30 – 3:00 PM, Fiesta Pavilion"
								// , link: "assets/pdfs/.pdf"
							},
							{
									title:"Surgery for the Neck"
								, info: "Oct. 22, 11:00 – 11:30 AM, Fiesta Pavilion"
								// , link: "assets/pdfs/.pdf"
							},
							{
									title:"Salivary Gland Tumors"
								, info: "Oct. 22, 3:45 – 4:15 PM, Fiesta Pavilion"
								// , link: "assets/pdfs/.pdf"
							},
						]
					}
			},
			{
				time: "11:30 – 12:30 PM"
				, title: "Panel Discussion – Thyroid Cancer"
				, speaker: "Dr. Ian Witterick, Dr. Sandro Porceddu, Dr. Choakchai M..."
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				, sponsor: "UAP"
				, link: 
			{
				lastname: "WITTERICK"
				, firstname: "Ian MD"
				, details: "President, Philippine Society of Otolaryngology-HNS Clinical Associate Professor, UP-Philippine General Hospital Attending ORL, Asian Hospital & Medical Center and Philippine General 	Hospital"
				, imageUrl: "assets/imgs/speakers/WITTERICK.jpg"
				, docs: [
					{
							title:"Panel Discussion: Thyroid Cancer"
						, info: "Oct. 22, 11:30 - 12:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Salivary Gland Tumors"
						, info: "Oct. 22, 4:15 - 4:45 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Surgery of Oropharynx Cancer"
						, info: "Oct. 23, 8:00 – 8:20 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Oropharynx Cancer"
						, info: "Oct. 23, 8:40 - 9:30 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Larynx Cancer"
						, info: "Oct. 23, 11:00 AM - 12:00 NN, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Skull Base Surgery"
						, info: "Oct. 23, 1:00 – 1:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Reconstructive Surgery"
						, info: "Oct. 23, 2:00 – 2:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Stump the Faculty "
						, info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
			},
			{
				time: "12:30 – 1:30 PM"
				, title: "LUNCH SYMPOSIUM \r\nAllergic Rhinitis 101: Simple Case Presentation"
				, speaker: "Dr. Generoso T. Abes"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				, link: 
			{
				lastname: "ABES"
				, firstname: "Generoso MD"
				, details: "Professor Emeritus, ORL, University of the Philippines, Manila President Emeritus, Philippine Academy of Neurotology, Otology and	Related Sciences (PANORS) Consultant, Manila Doctors Hospital, Makati Medical Center and Asian 	Hospital & Med. Ctr. "
				, imageUrl: "assets/imgs/speakers/ABES.jpg"
				, docs: [
					{
							title:"Allergic Rhinitis 101: Simple Case Presentation"
						, info: "Oct. 22, 12:30-1:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/CE 12.1 ESPIRITU.pdf"
					},
					{
							title:"Insights of a Seasoned Otorhinolaryngologist"
						, info: "Oct. 24, 7:45 – 8:00 AM, Fiesta Pavilion"
						, link: "assets/pdfs/P1.2 ABES.pdf"
					},
				]
			}
			},
			{
				time: "1:30 – 2:00 PM"
				, title: "Advances in Radiotherapy"
				, speaker: "Dr. Sandro Porceddu"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				, link: {
					lastname: "PORCEDDU"
					, firstname: "Sandro MD"
					, details: ""
					, imageUrl: "assets/imgs/speakers/PORCEDDU.jpg"
					, docs: [
						{
								title:"Panel Discussion: Cancer of the Oral Cavity"
							, info: "Oct. 22, 9:45 - 10:30 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Thyroid Cancer"
							, info: "Oct. 22, 11:30 AM - 12:30 PM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Advances in Radiotherapy"
							, info: "Oct. 22, 1:30 – 2:00 PM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Radiotherapy in Oropharynx Cancer"
							, info: "Oct. 23, 8:20 – 8:40 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Non-Surgical: Radiation in Larynx Cancer"
							, info: "Oct. 23, 10:40 – 11:00 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Skull Base Tumors "
							, info: "Oct .23, 1:30 - 2:00 PM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Stump the Faculty "
							, info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
							// , link: "assets/pdfs/.pdf"
						},
					]
				}
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
				, link: 
			{
				lastname: "SHAHA"
				, firstname: "Ashok MD"
				, details: "Oct. 22, 2:30 – 3:00 PM, Fiesta Pavilion"
				, imageUrl: "assets/imgs/speakers/SHAHA.jpg"
				, docs: [
					{
							title:"Panel Discussion - Multidisciplinary Management"
						, info: "Oct. 22, 2:30 – 3:00 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Surgery for the Neck"
						, info: "Oct. 22, 11:00 – 11:30 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Salivary Gland Tumors"
						, info: "Oct. 22, 3:45 – 4:15 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
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
				, link: 
			{
				lastname: "SHAHA"
				, firstname: "Ashok MD"
				, details: "Oct. 22, 2:30 – 3:00 PM, Fiesta Pavilion"
				, imageUrl: "assets/imgs/speakers/SHAHA.jpg"
				, docs: [
					{
							title:"Panel Discussion - Multidisciplinary Management"
						, info: "Oct. 22, 2:30 – 3:00 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Surgery for the Neck"
						, info: "Oct. 22, 11:00 – 11:30 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Salivary Gland Tumors"
						, info: "Oct. 22, 3:45 – 4:15 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
			},
			{
				time: "4:15 – 4:45 PM"
				, title: "Panel Discussion – Salivary Gland Tumors"
				, speaker: "Dr. Jatin P. Shah, Dr. Ian Witterick, Dr. Mohd Razif Yunus (MAL), Dr. Jacob S. Matubis (PH), Dr. Arturo S. dela Peña (PH)"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				, link: {
					lastname: "SHAH"
					, firstname: "Jatin MD"
					, details: ""
					, imageUrl: "assets/imgs/speakers/SHAH.jpg"
					, docs: [
						{
								title:"Keynote Speaker"
							, info: "Oct. 22, 8:45 – 9:00 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Cancer of the Oral Cavity"
							, info: "Oct. 22, 9:15 – 9:45 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Surgery for the Primary"
							, info: "Oct. 22, 10:30 – 11:00 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Stump the Faculty"
							, info: "Oct 23, 3:30-4:30pm, Maynila Ballroom"
							// , link: "assets/pdfs/.pdf"
						},
					]
				}
			},
			{
				time: "4:45 – 5:45 PM"
				, title: "Video Presentation – How I do It"
				, speaker: "Dr. Jatin P. Shah, Dr. Ashok R. Shaha"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				, link: {
					lastname: "SHAH"
					, firstname: "Jatin MD"
					, details: ""
					, imageUrl: "assets/imgs/speakers/SHAH.jpg"
					, docs: [
						{
								title:"Keynote Speaker"
							, info: "Oct. 22, 8:45 – 9:00 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Cancer of the Oral Cavity"
							, info: "Oct. 22, 9:15 – 9:45 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Surgery for the Primary"
							, info: "Oct. 22, 10:30 – 11:00 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Stump the Faculty"
							, info: "Oct 23, 3:30-4:30pm, Maynila Ballroom"
							// , link: "assets/pdfs/.pdf"
						},
					]
				}
			},
			{
				time: "7:00 – 8:00 PM"
				, title: "DINNER SYMPOSIU \r\nVertigo Management Updates"
				, speaker: "Dr. Teresa Luisa I. Gloria-Cruz"
				, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				, sponsor: "UAP"
				, link: 
			{
				lastname: "GLORIA-CRUZ"
				, firstname: "Teresa Luisa MD"
				, details: ""
				, imageUrl: "assets/imgs/speakers/GLORIAx.jpg"
				, docs: [
					{
							title:"Vertigo: Let’s Review"
						, info: "Oct. 22, 7:00 – 8:00 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
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
					, link: 
			{
				lastname: "WITTERICK"
				, firstname: "Ian MD"
				, details: "President, Philippine Society of Otolaryngology-HNS Clinical Associate Professor, UP-Philippine General Hospital Attending ORL, Asian Hospital & Medical Center and Philippine General 	Hospital"
				, imageUrl: "assets/imgs/speakers/WITTERICK.jpg"
				, docs: [
					{
							title:"Panel Discussion: Thyroid Cancer"
						, info: "Oct. 22, 11:30 - 12:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Salivary Gland Tumors"
						, info: "Oct. 22, 4:15 - 4:45 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Surgery of Oropharynx Cancer"
						, info: "Oct. 23, 8:00 – 8:20 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Oropharynx Cancer"
						, info: "Oct. 23, 8:40 - 9:30 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Larynx Cancer"
						, info: "Oct. 23, 11:00 AM - 12:00 NN, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Skull Base Surgery"
						, info: "Oct. 23, 1:00 – 1:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Reconstructive Surgery"
						, info: "Oct. 23, 2:00 – 2:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Stump the Faculty "
						, info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					time: "8:20 – 8:40 AM"
					, title: "Radiotherapy in Oropharynx Cancer"
					, speaker: "Dr. Sandro Porceddu"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				, link: {
					lastname: "PORCEDDU"
					, firstname: "Sandro MD"
					, details: ""
					, imageUrl: "assets/imgs/speakers/PORCEDDU.jpg"
					, docs: [
						{
								title:"Panel Discussion: Cancer of the Oral Cavity"
							, info: "Oct. 22, 9:45 - 10:30 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Thyroid Cancer"
							, info: "Oct. 22, 11:30 AM - 12:30 PM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Advances in Radiotherapy"
							, info: "Oct. 22, 1:30 – 2:00 PM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Radiotherapy in Oropharynx Cancer"
							, info: "Oct. 23, 8:20 – 8:40 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Non-Surgical: Radiation in Larynx Cancer"
							, info: "Oct. 23, 10:40 – 11:00 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Skull Base Tumors "
							, info: "Oct .23, 1:30 - 2:00 PM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Stump the Faculty "
							, info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
							// , link: "assets/pdfs/.pdf"
						},
					]
				}
				},
				{
					time: "8:40 – 9:30 AM"
					, title: "Panel Discussion – Oropharynx Cancer"
					, speaker: "Dr. Ian Witterick, Dr. Johanna Patricia A. Cañal (PH), Dr. Heinrick Martin Jude Strebel (PH) "
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link:
			{
				lastname: "WITTERICK"
				, firstname: "Ian MD"
				, details: "President, Philippine Society of Otolaryngology-HNS Clinical Associate Professor, UP-Philippine General Hospital Attending ORL, Asian Hospital & Medical Center and Philippine General 	Hospital"
				, imageUrl: "assets/imgs/speakers/WITTERICK.jpg"
				, docs: [
					{
							title:"Panel Discussion: Thyroid Cancer"
						, info: "Oct. 22, 11:30 - 12:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Salivary Gland Tumors"
						, info: "Oct. 22, 4:15 - 4:45 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Surgery of Oropharynx Cancer"
						, info: "Oct. 23, 8:00 – 8:20 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Oropharynx Cancer"
						, info: "Oct. 23, 8:40 - 9:30 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Larynx Cancer"
						, info: "Oct. 23, 11:00 AM - 12:00 NN, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Skull Base Surgery"
						, info: "Oct. 23, 1:00 – 1:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Reconstructive Surgery"
						, info: "Oct. 23, 2:00 – 2:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Stump the Faculty "
						, info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
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
					, link: {
				lastname: "SHAH"
				, firstname: "Jatin MD"
				, details: ""
				, imageUrl: "assets/imgs/speakers/SHAH.jpg"
				, docs: [
					{
							title:"Keynote Speaker"
						, info: "Oct. 22, 8:45 – 9:00 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Cancer of the Oral Cavity"
						, info: "Oct. 22, 9:15 – 9:45 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Surgery for the Primary"
						, info: "Oct. 22, 10:30 – 11:00 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Stump the Faculty"
						, info: "Oct 23, 3:30-4:30pm, Maynila Ballroom"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					time: "10:20 – 10:40 AM"
					, title: "Non-Surgical: Chemotherapy of Larynx Cancer"
					, speaker: "Dr. Jan B. Vermorken"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "VERMORKEN"
				, firstname: "Jan MD"
				, details: ""
				, imageUrl: "assets/imgs/speakers/VERMORKEN.jpg"
				, docs: [
					{
							title:"Advances in Systemic Therapy"
						, info: "Oct. 22, 2:00 – 2:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Non-Surgical: Chemotherapy of Larynx Cancer"
						, info: "Oct. 23, 10:20 – 10:40 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Skull Base Tumors"
						, info: "Oct. 23, 1:30 - 2:00 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Stump the Faculty"
						, info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					time: "10:40 – 11:00 AM"
					, title: "Non-Surgical: Radiation in Larynx Cancer"
					, speaker: "Dr. Sandro Porceddu"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
				, link: {
					lastname: "PORCEDDU"
					, firstname: "Sandro MD"
					, details: ""
					, imageUrl: "assets/imgs/speakers/PORCEDDU.jpg"
					, docs: [
						{
								title:"Panel Discussion: Cancer of the Oral Cavity"
							, info: "Oct. 22, 9:45 - 10:30 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Thyroid Cancer"
							, info: "Oct. 22, 11:30 AM - 12:30 PM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Advances in Radiotherapy"
							, info: "Oct. 22, 1:30 – 2:00 PM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Radiotherapy in Oropharynx Cancer"
							, info: "Oct. 23, 8:20 – 8:40 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Non-Surgical: Radiation in Larynx Cancer"
							, info: "Oct. 23, 10:40 – 11:00 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Skull Base Tumors "
							, info: "Oct .23, 1:30 - 2:00 PM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Stump the Faculty "
							, info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
							// , link: "assets/pdfs/.pdf"
						},
					]
				}
				},
				{
					time: "11:00 – 12:00 NN"
					, title: "Panel Discussion – Larynx Cancer"
					, speaker: "Dr. Ian Witterick, Dr. Alfredo Q.Y. Pontejos, Jr. (PH), Dr. William L. Lim (PH), Dr. Edilberto Joaquin V. Fragante, Jr., (PH)"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "WITTERICK"
				, firstname: "Ian MD"
				, details: "President, Philippine Society of Otolaryngology-HNS Clinical Associate Professor, UP-Philippine General Hospital Attending ORL, Asian Hospital & Medical Center and Philippine General 	Hospital"
				, imageUrl: "assets/imgs/speakers/WITTERICK.jpg"
				, docs: [
					{
							title:"Panel Discussion: Thyroid Cancer"
						, info: "Oct. 22, 11:30 - 12:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Salivary Gland Tumors"
						, info: "Oct. 22, 4:15 - 4:45 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Surgery of Oropharynx Cancer"
						, info: "Oct. 23, 8:00 – 8:20 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Oropharynx Cancer"
						, info: "Oct. 23, 8:40 - 9:30 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Larynx Cancer"
						, info: "Oct. 23, 11:00 AM - 12:00 NN, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Skull Base Surgery"
						, info: "Oct. 23, 1:00 – 1:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Reconstructive Surgery"
						, info: "Oct. 23, 2:00 – 2:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Stump the Faculty "
						, info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					time: "12:00 – 1:00 PM"
					, title: "LUNCH SYMPOSIUM \r\The Unmet Medical Need in AR: European Perspective and Parallels in the Philippines"
					, speaker: "Prof. Jean Bousquet, MD, PhD"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, sponser: "MYLAN"
					, link: 
			{
				lastname: "BOUSQUET"
				, firstname: "Jean MD, PhD"
				, details: "Director, Cancer Institute, The Medical City"
				, imageUrl: "assets/imgs/speakers/BOUSQUET.jpg"
				, docs: [
					{
							title:"The Unmet Medical Need in AR: European Perspective and Parallels in the Philippines"
						, info: "Oct. 23, 12:00 – 1:00 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/S2.2 ALFANTA.pdf"
					},
				]
			}
				},
				{
					time: "1:00 – 1:30 PM"
					, title: "Skull Base Surgery"
					, location: "Fiesta Pavillon (Rigodon, Polkabal, Pandanggo)"
					, speaker: "Dr. Ian Witterick"
					, link: 
			{
				lastname: "WITTERICK"
				, firstname: "Ian MD"
				, details: "President, Philippine Society of Otolaryngology-HNS Clinical Associate Professor, UP-Philippine General Hospital Attending ORL, Asian Hospital & Medical Center and Philippine General 	Hospital"
				, imageUrl: "assets/imgs/speakers/WITTERICK.jpg"
				, docs: [
					{
							title:"Panel Discussion: Thyroid Cancer"
						, info: "Oct. 22, 11:30 - 12:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Salivary Gland Tumors"
						, info: "Oct. 22, 4:15 - 4:45 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Surgery of Oropharynx Cancer"
						, info: "Oct. 23, 8:00 – 8:20 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Oropharynx Cancer"
						, info: "Oct. 23, 8:40 - 9:30 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Larynx Cancer"
						, info: "Oct. 23, 11:00 AM - 12:00 NN, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Skull Base Surgery"
						, info: "Oct. 23, 1:00 – 1:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Reconstructive Surgery"
						, info: "Oct. 23, 2:00 – 2:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Stump the Faculty "
						, info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					time: "1:30 – 2:00 PM"
					, title: "Panel Discussion – Skull Base Tumors"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, speaker: "Dr. Sandro Porceddu, Dr. Jan B. Vermorken, Dr. Sheng-PoHao (TW), Dr. Ramon Antonio B. Lopa (PH) "
				, link: {
					lastname: "PORCEDDU"
					, firstname: "Sandro MD"
					, details: ""
					, imageUrl: "assets/imgs/speakers/PORCEDDU.jpg"
					, docs: [
						{
								title:"Panel Discussion: Cancer of the Oral Cavity"
							, info: "Oct. 22, 9:45 - 10:30 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Thyroid Cancer"
							, info: "Oct. 22, 11:30 AM - 12:30 PM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Advances in Radiotherapy"
							, info: "Oct. 22, 1:30 – 2:00 PM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Radiotherapy in Oropharynx Cancer"
							, info: "Oct. 23, 8:20 – 8:40 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Non-Surgical: Radiation in Larynx Cancer"
							, info: "Oct. 23, 10:40 – 11:00 AM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Skull Base Tumors "
							, info: "Oct .23, 1:30 - 2:00 PM, Fiesta Pavilion"
							// , link: "assets/pdfs/.pdf"
						},
						{
								title:"Panel Discussion: Stump the Faculty "
							, info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
							// , link: "assets/pdfs/.pdf"
						},
					]
				}
				},
				{
					time: "2:00 – 2:30 PM"
					, title: "Reconstructive Surgery"
					, speaker: "Dr. Ian Witterick."
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "WITTERICK"
				, firstname: "Ian MD"
				, details: "President, Philippine Society of Otolaryngology-HNS Clinical Associate Professor, UP-Philippine General Hospital Attending ORL, Asian Hospital & Medical Center and Philippine General 	Hospital"
				, imageUrl: "assets/imgs/speakers/WITTERICK.jpg"
				, docs: [
					{
							title:"Panel Discussion: Thyroid Cancer"
						, info: "Oct. 22, 11:30 - 12:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Salivary Gland Tumors"
						, info: "Oct. 22, 4:15 - 4:45 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Surgery of Oropharynx Cancer"
						, info: "Oct. 23, 8:00 – 8:20 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Oropharynx Cancer"
						, info: "Oct. 23, 8:40 - 9:30 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Larynx Cancer"
						, info: "Oct. 23, 11:00 AM - 12:00 NN, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Skull Base Surgery"
						, info: "Oct. 23, 1:00 – 1:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Reconstructive Surgery"
						, info: "Oct. 23, 2:00 – 2:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Panel Discussion: Stump the Faculty "
						, info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					time: "2:30 – 3:00 PM"
					, title: "Panel Discussion -Reconstructive Surgery"
					, speaker: "Dr. Phakdee Sannikorn (TH), Dr. Samantha S. Castaneda (PH), Dr. Armando M. Chiong, Jr. (PH)"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "SANNIKORN"
				, firstname: "Phakdee MD"
				, details: ""
				, imageUrl: "assets/imgs/speakers/SANNIKORN.jpg"
				, docs: [
					{
							title:"Panel Discussion - Reconstructive Surgery "
						, info: "Oct. 24, 2:30 – 3:00 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
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
					, link: 
			{
				lastname: "YEE"
				, firstname: "Don Izzy MD"
				, details: ""
				, imageUrl: ""
				, docs: [
					{
							title:"Clearvue CME: \"IV Nutrient Supplementation\" "
						, info: "Oct. 23, 3:00 – 3:30 PM, Roma Salon"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
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
					, link: {
						lastname: "PORCEDDU"
						, firstname: "Sandro MD"
						, details: ""
						, imageUrl: "assets/imgs/speakers/PORCEDDU.jpg"
						, docs: [
							{
									title:"Panel Discussion: Cancer of the Oral Cavity"
								, info: "Oct. 22, 9:45 - 10:30 AM, Fiesta Pavilion"
								// , link: "assets/pdfs/.pdf"
							},
							{
									title:"Panel Discussion: Thyroid Cancer"
								, info: "Oct. 22, 11:30 AM - 12:30 PM, Fiesta Pavilion"
								// , link: "assets/pdfs/.pdf"
							},
							{
									title:"Advances in Radiotherapy"
								, info: "Oct. 22, 1:30 – 2:00 PM, Fiesta Pavilion"
								// , link: "assets/pdfs/.pdf"
							},
							{
									title:"Radiotherapy in Oropharynx Cancer"
								, info: "Oct. 23, 8:20 – 8:40 AM, Fiesta Pavilion"
								// , link: "assets/pdfs/.pdf"
							},
							{
									title:"Non-Surgical: Radiation in Larynx Cancer"
								, info: "Oct. 23, 10:40 – 11:00 AM, Fiesta Pavilion"
								// , link: "assets/pdfs/.pdf"
							},
							{
									title:"Panel Discussion: Skull Base Tumors "
								, info: "Oct .23, 1:30 - 2:00 PM, Fiesta Pavilion"
								// , link: "assets/pdfs/.pdf"
							},
							{
									title:"Panel Discussion: Stump the Faculty "
								, info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
								// , link: "assets/pdfs/.pdf"
							},
						]
					}
				},
				{
					time: "4:30 – 6:00 PM"
					, title: "Video Presentations – How I do it"
					, speaker: "Dr. Jatin P. Shah, Dr. Ian Witterick"
					, location: "Maynila Ballroom"
					, link: {
						lastname: "PORCEDDU"
						, firstname: "Sandro MD"
						, details: ""
						, imageUrl: "assets/imgs/speakers/PORCEDDU.jpg"
						, docs: [
							{
									title:"Panel Discussion: Cancer of the Oral Cavity"
								, info: "Oct. 22, 9:45 - 10:30 AM, Fiesta Pavilion"
								// , link: "assets/pdfs/.pdf"
							},
							{
									title:"Panel Discussion: Thyroid Cancer"
								, info: "Oct. 22, 11:30 AM - 12:30 PM, Fiesta Pavilion"
								// , link: "assets/pdfs/.pdf"
							},
							{
									title:"Advances in Radiotherapy"
								, info: "Oct. 22, 1:30 – 2:00 PM, Fiesta Pavilion"
								// , link: "assets/pdfs/.pdf"
							},
							{
									title:"Radiotherapy in Oropharynx Cancer"
								, info: "Oct. 23, 8:20 – 8:40 AM, Fiesta Pavilion"
								// , link: "assets/pdfs/.pdf"
							},
							{
									title:"Non-Surgical: Radiation in Larynx Cancer"
								, info: "Oct. 23, 10:40 – 11:00 AM, Fiesta Pavilion"
								// , link: "assets/pdfs/.pdf"
							},
							{
									title:"Panel Discussion: Skull Base Tumors "
								, info: "Oct .23, 1:30 - 2:00 PM, Fiesta Pavilion"
								// , link: "assets/pdfs/.pdf"
							},
							{
									title:"Panel Discussion: Stump the Faculty "
								, info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
								// , link: "assets/pdfs/.pdf"
							},
						]
					}
				},
				{
					time: "7:00 – 11:00 PM"
					, title: "DINNER SYMPOSIUM \r\nAllergic Rhinoconjunctivitis: Guidelines Update and New Treatment Strategies"
					, speaker: "Prof. Ralph Mosges, MD, PhD, FAAAAI"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, sponsor: "Menarini"
					, link: 
			{
				lastname: "MOSGES"
				, firstname: "Ralph MD PhD, FAAAAI"
				, details: "Associate Professor & Vice-Chairman, Dept. of ORL-HNS, UP-Philippine 	General Hospital Consultant, Asian Hospital & Medical Center and Rizal Medical Center"
				, imageUrl: ""
				, docs: [
					{
							title:"Allergic Rhinoconjunctivitis: Guidelines Update and New Treatment Strategies"
						, info: "Oct. 23, 7:00 – 11:00 AM, Fiesta Pavilion"
						, link: "assets/pdfs/.pdf"
					},
				]
			}
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
					time: "7:45 – 8:00 AM"
					, title: "Insights of a Seasoned Otorhinolaryngologist"
					, speaker: "Dr. Generoso T. Abes"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "ABES"
				, firstname: "Generoso MD"
				, details: "Professor Emeritus, ORL, University of the Philippines, Manila President Emeritus, Philippine Academy of Neurotology, Otology and	Related Sciences (PANORS) Consultant, Manila Doctors Hospital, Makati Medical Center and Asian 	Hospital & Med. Ctr. "
				, imageUrl: "assets/imgs/speakers/ABES.jpg"
				, docs: [
					{
							title:"Allergic Rhinitis 101: Simple Case Presentation"
						, info: "Oct. 22, 12:30-1:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/CE 12.1 ESPIRITU.pdf"
					},
					{
							title:"Insights of a Seasoned Otorhinolaryngologist"
						, info: "Oct. 24, 7:45 – 8:00 AM, Fiesta Pavilion"
						, link: "assets/pdfs/P1.2 ABES.pdf"
					},
				]
			}
				},
				{
					time: "8:00 – 8:15 AM"
					, title: "3D Imaging / Printing and Planning in Maxillofacial Surgery"
					, speaker : "Dr. Francis V. Roasa"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
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
					time: "8:15 – 8:30 AM"
					, title: "Closed Reduction: Nasal Bone Fracture"
					, speaker: "Dr. Jehan Grace B. Maglaya "
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "MAGLAYA"
				, firstname: "Jehan Grace MD"
				, details: "Assistant Professor, UERMMMCI Visiting Consultant, East Avenue Medical Center"
				, imageUrl: "assets/imgs/speakers/MAGLAYA.jpg"
				, docs: [
					{
							title:"Closed Reduction: Nasal Bone Fracture"
						, info: "Oct. 24, 8:15 – 8:30 AM, Fiesta Pavilion"
						, link: "assets/pdfs/P2.2 MAGLAYA.pdf"
					},
				]
			}
				},
				{
					time: "8:30 – 8:45 AM"
					, title: "Prosthesis"
					, speaker: "Dr. Joselito F. David"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "DAVID"
				, firstname: "Joselito MD"
				, details: "Chairman, Dept. of ORL-HNS, Jose R. Reyes Memorial Medical Center Clinical Faculty, Dept. of ORL-HNS, Faculty of Medicine & Surgery, UST Consultant, Santo Tomas University Hospital & Angeles University Foundation Med. Ctr."
				, imageUrl: "assets/imgs/speakers/DAVID.jpg"
				, docs: [
					{
							title:"Prosthesis"
						, info: "Oct. 24, 8:30 – 8:45 AM, Fiesta Pavilion"
						, link: "assets/pdfs/P2.3 DAVID.pdf"
					},
				]
			}
				},
				{
					time: "8:45 – 9:00 AM"
					, title: "Office-based Laryngeal Surgery"
					, speaker: "Dr. William L. Lim"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "LIM"
				, firstname: "WilliAM MD"
				, details: "Associate Professor, UERMMMC Head, Dept. of ORL-HNS, St. Luke's Medical Center-Global City"
				, imageUrl: "assets/imgs/speakers/LIM2.jpg"
				, docs: [
					{
							title:"Panel Discussion - Larynx Cancer"
						, info: "Oct 23, 11:00 AM - 12:00 NN, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Office-based Laryngeal Surgery"
						, info: "Oct. 24, 8:45 – 9:00 AM, Fiesta Pavilion"
						, link: "assets/pdfs/P3.1 LIM.pdf"
					},
					{
							title:"Panel Discussion: Laser Surgery in Laryngology"
						, info: "Oct. 24, 9:00 – 9:30 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					time: "9:00 – 9:30 AM"
					, title: "Panel Discussion – Laser Surgery in Laryngology"
					, speaker: "Dr. William L. Lim, Dr. Ma. Clarissa S. Fortuna, Dr. Melfred L. Hernandez"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "LIM"
				, firstname: "WilliAM MD"
				, details: "Associate Professor, UERMMMC Head, Dept. of ORL-HNS, St. Luke's Medical Center-Global City"
				, imageUrl: "assets/imgs/speakers/LIM2.jpg"
				, docs: [
					{
							title:"Panel Discussion - Larynx Cancer"
						, info: "Oct 23, 11:00 AM - 12:00 NN, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
					{
							title:"Office-based Laryngeal Surgery"
						, info: "Oct. 24, 8:45 – 9:00 AM, Fiesta Pavilion"
						, link: "assets/pdfs/P3.1 LIM.pdf"
					},
					{
							title:"Panel Discussion: Laser Surgery in Laryngology"
						, info: "Oct. 24, 9:00 – 9:30 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					time: "9:00 – 9:20 AM"
					, title: "The Evolution of Temporal Bone Imaging"
					, speaker: "Dr. Nathaniel W. Yang"
					, location: "Maynila Ballroom"
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
					time: "9:20 – 9:40 AM"
					, title: "Basic CT and MRI Imaging for Common Head and Neck Conditions"
					, speaker: "Dr. Johanna A Cañal"
					, location: "Maynila Ballroom"
					, link: 
			{
				lastname: "CAÑAL"
				, firstname: "Johanna MD"
				, details: "Professor 4, University of the Philippines-College of Medicine Chair, Radiology, UP-Philippine General Hospital"
				, imageUrl: "assets/imgs/speakers/CANAL.jpg"
				, docs: [
					{
							title:"Panel Discussion: Oropharynx Cancer"
						, info: "Oct 23, 8:40-9:30 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/S2.2 ALFANTA.pdf"
					},
					{
							title:"Basic CT and MRI Imaging for Common Head and Neck Conditions"
						, info: "Oct. 24, 9:20 – 9:40 AM, Maynila Ballroom"
						, link: "assets/pdfs/S1.2 Cañal.pdf"
					},
				]
			}
				},
				{
					time: "9:30 – 9:45 AM"
					, title: "Epistaxis in Children: What Can We Do in the Clinic?"
					, speaker: "Dr. Lyra V. Veloro"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "VELORO"
				, firstname: "Lyra MD"
				, details: "Section Head, Pediatric ENT, The Medical City Active Consultant, Philippine Children's Medical Center "
				, imageUrl: "assets/imgs/speakers/VELORO.jpg"
				, docs: [
					{
							title:"Epistaxis in Children: What Can We Do in the Clinic?"
						, info: "Oct. 24, 9:30 – 9:45 AM, Fiesta Pavilion"
						, link: "assets/pdfs/P4.1 VELORO.pdf"
					},
				]
			}
				},
				{
					time: "9:45 – 10:00 AM"
					, title: "Ventilation tubes for OME in Cleft Palate: Do We or Do We Not?"
					, speaker: "Dr. Cecilia Gretchen S. Navarro- Locsin"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "NAVARRO-LOCSIN"
				, firstname: "Cecilia Gretchen MD"
				, details: "Assistant Professor II, St. Luke's Medical Center College of Medicine Head, Dept. of ORL-HNS, St. Luke's Medical Center-Quezon City Medical Specialist II, Philippine Children's Medical Center"
				, imageUrl: "assets/imgs/speakers/NAVARRO-LOCSIN.jpg"
				, docs: [
					{
							title:"Ventilation tubes for OME in Cleft Palate: Do We or Do We Not?"
						, info: "Oct. 24, 9:45 – 10:00 AM, Fiesta Pavilion"
						, link: "assets/pdfs/P4.2 LOCSIN.pdf"
					},
				]
			}
				},
				{
					time: "10:00 – 10:15 AM"
					, title: "Office Management of the Pediatric Airway"
					, location: "Maynila Ballroom"
					, speaker: "Dr. Adonis B. Jurado"
					, link: 
			{
				lastname: "JURADO"
				, firstname: "Adonis MD"
				, details: "Chair, Philippine Academy of Paediatric Otolaryngology (PAPO) Head, Section of Paediatric ORL, Philippine Children's Medical Center Consultant, Dept. of ORL-HNS, Philippine Heart Center and The Medical 	City "
				, imageUrl: "assets/imgs/speakers/JURADO.jpg"
				, docs: [
					{
							title:"Office Management of the Pediatric Airway"
						, info: "Oct. 24, 10:00 – 10:15 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					time: "10:25 – 10:50 AM"
					, title: "EMR: Issues and Challenges in the Clinical Practice"
					, location: "Maynila Ballroom"
					, speaker: "Dr. Eduard M. Alfanta"
					, link: 
			{
				lastname: "ALFANTA"
				, firstname: "Eduard MD"
				, details: "Chair, Subcommittee on Research, PSO-HNS Consultant, Dept. of ORL-HNS, East Avenue Medical Center Visiting Consultant, Dept. of ORL-HNS, Manila Doctors Hosp. and Asian 	Hospital & Med. Ctr. "
				, imageUrl: "assets/imgs/speakers/ALFANTA.jpg"
				, docs: [
					{
							title:"EMR: Issues and Challenges in the Clinical Practice"
						, info: "Oct. 24, 10:25 – 10:50 AM, Maynila Ballroom"
						, link: "assets/pdfs/S2.2 ALFANTA.pdf"
					},
				]
			}
				},
				{
					time: "10:15 – 10:30 AM"
					, title: "Fat Myringoplasty"
					, speaker: "Dr. Norberto Martinez "
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link:
			{
				lastname: "MARTINEZ"
				, firstname: "Norberto MD"
				, details: "Professor, Dept. of ENT, Faculty of Medicine, University of Santo Tomas Chair, Dept. of ENT, Faculty of Medicine, University of Santo Tomas Head, Section of Otology, St. Luke's Medical Center-Quezon City Head, Hearing & Balance Lab., St. Luke's Medical Center-Global City "
				, imageUrl: "assets/imgs/speakers/MARTINEZ.jpg"
				, docs: [
					{
							title:"Fat Myringoplasty"
						, info: "Oct. 24, 10:15 – 10:30 AM, Fiesta Pavilion"
						, link: "assets/pdfs/P4.3 MARTINEZ.pdf"
					},
				]
			}
				},
				{
					time: "10:30 – 10:45 AM"
					, title: "Approach for Single-sided Deafness"
					, speaker: "Dr. Charlotte M.Chiong"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link:
			{
				lastname: "CHIONG"
				, firstname: "Charlotte MD"
				, details: "Dean, University of the Philippines-College of Medicine Director, Philippine National Ear Institute Director, Newborn Hearing Screening Reference Center"
				, imageUrl: "assets/imgs/speakers/CHIONG2.jpg"
				, docs: [
					{
							title:"Approach for Single-sided Deafness"
						, info: "Oct. 24, 10:30 – 10:45 AM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					time: "10:45 – 11:00 AM"
					, title: "Shoeboex Audiometry Updates: How the iPad Audiometer Continues to Revolutionize the World of Hearing Health"

					, speaker: "Ms. Natalie Mai"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					,link:
			{
				lastname: "MAI"
				, firstname: "Natalie"
				, details: "Director of Sales of Healthcare and Hearing Services"
				, imageUrl: "assets/imgs/speakers/MAI.jpg"
				, docs: [
					{
							title:"Shoebox Audiometry Update: How the iPad Audiometer Continues to Revolutionize the World of Hearing Health"
						, info: "Oct 24, 10:45-11:00 AM, Fiesta Pavilion"
						, link: "assets/pdfs/P6.1 MAI.pdf"
					},
				]
			}
				},
				{
					time: "11:00 – 11:20 AM"
					, title: "AEP Testing with Patient Follow-up via Pathtrack Tracking Software"
					, speaker: "Mr. Russell Higgs"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link:
			{
				lastname: "HIGGS"
				, firstname: "Russell"
				, details: "International Sales Manager, PATH Medical GmbH (Germany)"
				, imageUrl: ""
				, docs: [
					{
							title:"AEP Testing with Patient Follow-up via Pathtrack Tracking Software"
						, info: "Oct 24, 11:00-11:20 AM, Fiesta Pavilion"
						, link: "assets/pdfs/P6.2 HIGS.pdf"
					},
				]
			}
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
					, link:
			{
				lastname: "PASAYAN"
				, firstname: "Mark Kristoffer MD"
				, details: "Chair, Philippine Academy of Rhinology (PAR) Consultant, Dept. of ORL-HNS, The Medical City & Quirino Memorial 	Medical Center"
				, imageUrl: "assets/imgs/speakers/PASAYAN.jpg"
				, docs: [
					{
							title:"NECK Session (Natrapharm Enhancing Clinical Knowledge in Current Practice): Solving the Mysteries of Cervical Lymphadenopathy"
						, info: "Oct. 24, 11:30 AM – 12:00 NN, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					time: "12:00 – 1:00 PM"
					, title: "LUNCH SYMPOSIUM \r\nVertigo-free:Exploring the Possibilities"
					, speaker: "Dr. Michel Lacour, Phd (France)"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, sponsor: "Abbott  Laboratories"
					, link: 
			{
				lastname: "LACOUR"
				, firstname: "Michel MD"
				, details: ""
				, imageUrl: "assets/imgs/speakers/LACOUR.jpg"
				, docs: [
					{
							title:"Vestibular Compensation"
						, info: "Oct. 24, 12:00 – 1:00 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					time: "1:00 – 1:15 PM"
					, title: "Nerve Blocks/Anesthesia for Office Procedures and Goretex Thread for Rhinoplasty"
					, speaker: "Dr. Homer M. Matias"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "MATIAS"
				, firstname: "Homer MD"
				, details: "Plastic, Reconstructive, Aesthetic Surgeon & Head and Neck Surgeon in General Santos City and Davao City Member, PSO-HNS and Philippine Academy of Aesthetics Surgery (PAAS)"
				, imageUrl: "assets/imgs/speakers/MATIAS.png"
				, docs: [
					{
							title:"Nerve Blocks/Anesthesia for Office Procedures and Goretex Thread for Rhinoplasty"
						, info: "Oct. 24, 1:00 – 1:15 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					time: "1:00 – 1:25 PM"
					, title: "Data Privacy Act"
					, speaker: "Atty. Ivy D. Patdu"
					, location: "Maynila Ballroom"
					, link: 
			{
				lastname: "PATDU"
				, firstname: "Ivy MD, REB, JD"
				, details: "Lecturer in Medical Jurisprudence, UP Manila, College of Medicine. Lecturer in Legal Medicine, San Beda College of Law. Lecturer in Forensic Medicine, Ateneo Law School"
				, imageUrl: "assets/imgs/speakers/PATDU.png"
				, docs: [
					{
							title:"Data Privacy"
						, info: "Oct. 24, 1:00 – 1:25 PM, Maynila Ballroom"
						, link: "assets/pdfs/S3.1 PATDU.pdf"
					},
				]
			}
				},
				{
					time: "1:15 – 1:30 PM"
					, title: "Neuromodulators"
					, speaker: "Dr. Jaime Anthony A. Arzadon, IV"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
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
					time: "1:25 – 1:50 PM"
					, title: "Social Media in the Clinical Practice"
					, speaker: "Dr. Iris Isip-Tan"
					, location: "Maynila Ballroom"
					,link: 
			{
				lastname: "ISIP-TAN"
				, firstname: "Iris MD"
				, details: "Professor 3, Dept. of Medicine, University of the Philippines College of Medicine Attending Physician, Dept. of Medicine, UP-Philippine General Hospital Visiting Consultant, Manila Doctors Hospital "
				, imageUrl: "assets/imgs/speakers/ISIP.jpg"
				, docs: [
					{
							title:"Social Media in the Clinical Practice"
						, info: "Oct. 24, 1:25 – 1:50 PM, Maynila Ballroom"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					time: "1:30 – 1:45 PM"
					, title: "Soft Tissue Filler Augmention"
					, speaker: "Dr.Jospeh Amado C. Galvez"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
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
					time: "1:45 – 2:00 PM"
					, title: "Threadlifts and Fillers for Noselift"
					, speaker: "Dr. Henry John F. Claravall"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
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
					time: "2:00 – 2:15 PM"
					, title: "Evolving Trends in Sinus Surgery"
					, speaker: "Dr. Joman Q.  Laxamana"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "LAXAMANA"
				, firstname: "Joman MD"
				, details: "Rhinology Fellow & Rhinology Section Consultant, Dept. of ORL-HNS, East Avenue Medical Center Visiting/Teaching Consultant, Dept. of ORL-HNS, Jose B. Lingad, Memorial 	Regional Hospital "
				, imageUrl: "assets/imgs/speakers/LAXAMANA.jpg"
				, docs: [
					{
							title:"Evolving Trends in Sinus Surgery"
						, info: "Oct. 24, 2:00 – 2:15 PM, Fiesta Pavilion"
						, link: "assets/pdfs/P8.1 LAXAMANA.pdf"
					},
				]
			}
				},
				{
					time: "2:15 – 2:30 PM"
					, title: "Office Procedures in Managing Chronic Rhinosinusitis and Nasal Polyposis"
					, speaker: "Dr. Ma. Lourdes B. Enecilla"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "ENECILLA"
				, firstname: "Ma. Lourdes MD"
				, details: "Secretary, Philippine Academy of Rhinology (PAR) Active Consultant, St. Luke's Medical Center-Global City  and Asian 	Hospital & Medical Center "
				, imageUrl: "assets/imgs/speakers/ENECILLA.jpg"
				, docs: [
					{
							title:"Office Procedures in Managing Chronic Rhinosinusitis and Nasal Polyposis"
						, info: "Oct. 24, 2:15 – 2:30 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
				},
				{
					time: "2:30 – 2:45 PM"
					, title: "Image-guided Systems in Sinus and Skullbase Surgery"
					, speaker: "Dr. Peter R. Jarin"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "JARIN"
				, firstname: "Peter MD"
				, details: "Chair, Philippine Academy of Rhinology (PAR) Consultant, Dept. of ORL-HNS, The Medical City & Quirino Memorial 	Medical Center"
				, imageUrl: "assets/imgs/speakers/JARIN.jpg"
				, docs: [
					{
							title:"Image-guided Systems in Sinus and Skullbase Surgery"
						, info: "Oct. 24, 2:30 – 2:45 PM, Fiesta Pavilion"
						, link: "assets/pdfs/P8.3 JARIN.pdf"
					},
					{
							title:"Landmark Base Endoscopic Sinus Surgery"
						, info: "Oct. 24, 1:00 – 2:00 PM, Roma Salon"
						, link: "assets/pdfs/CE 14.1 JARIN.pdf"
					},
				]
			}
				},
				{
					time: "2:45 – 3:00 PM"
					, title: "Overview and Management of OSA"
					, speaker: "Dr. Maria Patricia Ann T. Puno"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "PUNO"
				, firstname: "Maria Patricia Ann MD"
				, details: "Active Consultant, Dept. of ORL-HNS, Makati Medical Center"
				, imageUrl: "assets/imgs/speakers/PUNO.jpg"
				, docs: [
					{
							title:"Overview and Management of OSA"
						, info: "Oct. 24, 2:45 – 3:00 PM, Fiesta Pavilion"
						, link: "assets/pdfs/P9.1 PUNO.pdf"
					},
				]
			}
				},
				{
					time: "3:00 – 3:15 PM"
					, title: "Office-based Surgery for the Nasal Cavity"
					, speaker: "Dr. Michael Alexius A. Sarte"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link : 
			{
				lastname: "SARTE"
				, firstname: "Michael Alexius MD"
				, details: "Chairman, Dept. of ORL-HNS, Rizal Medical Center Consultant, Director Sleep Lab., The Medical City "
				, imageUrl: "assets/imgs/speakers/SARTE.jpg"
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
					time: "3:30 – 4:00 PM"
					, title: "Patient Preference Study for Allergic Rhinitis"
					, speaker: "Kay Ignacio, FPCP, FPCCP"
					, location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
					, link: 
			{
				lastname: "KAY-IGNACIO"
				, firstname: "Caroline Bernadette King MD"
				, details: "Doctor of Medicine, Faculty of Medicine and Surgery, University of Santo Tomas, Espana, Manila Residency Training in Internal Medicine, University of Santo Tomas Hospital, Espana Manila Fellowshi"
				, imageUrl: "assets/imgs/speakers/KAY-IGNACIO.jpg"
				, docs: [
					{
							title:"Patient Preference Study for Allergic Rhinitis"
						, info: "Oct. 24, 3:30 – 4:00 PM, Fiesta Pavilion"
						// , link: "assets/pdfs/.pdf"
					},
				]
			}
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
  	, public storage: Storage
  	) {

  	this.daySchedule = this.days[0];

  	this.evt.subscribe("schedule:daySelect", (day)=>{
  		this.daySchedule = this.days[day-1]
  	})

  	this.storage.get('favorites').then(favorites=>{
  		if(!favorites) return;
  		for(let days of this.days){
				for(let day of days ){
	  			let found = favorites.events.find(event=>{
	  				return day.title == event.title
	  			})

	  			if(found)
	  				day['isFavorite'] = true;
	  		}
			}
  	})

  }

  ionViewDidLoad() {
  }

  navToSpeakerInfo(speaker){
  	if(!speaker) return ;
  	console.log('speaker', speaker)
  	this.navCtrl.push(SpeakerInfoPage, {speaker:speaker})
  }

  addToFavorites(daySchedInput){
  	this.storage.get('favorites').then(favorites=>{
  		if(!favorites){
  			favorites = {
  				events: [],
  				speakers: []
  			}
  		}

  		let duplicate = favorites.events.find(event=>{
  			return event.title ==  daySchedInput.title
  		})
  		
  		if(duplicate){
	  		favorites.events = favorites.events.filter(event=>{
	  			return event.title !=  daySchedInput.title
	  		})
	  		daySchedInput.isFavorite = false;
  		} 
  		else{
	  		favorites.events.push(daySchedInput)
	  		daySchedInput.isFavorite = true;
  		}
  		console.log("addTO ", favorites)
  		this.storage.set('favorites',favorites)
  	})
  }


}
