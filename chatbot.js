/** *************Close************** */
let close;
function chatInit(selector) {
	if (document.readyState !== "loading") {
		myInit(selector);
	}

	document.addEventListener("DOMContentLoaded", function () {
		myInit();
	});
}

function myInit(selector) {
	if (!window.LIVE_CHAT_UI) {
		const chat = document.querySelector(selector);
		const toggles = document.querySelectorAll(".toggler");
		close = chat.querySelector(".close");

		window.setTimeout(() => {
			chat.classList.add("is-running");
		}, 1000);

		toggles.forEach((toggle) => {
			toggle.addEventListener("click", () => {
				if (chat.classList.contains("is-running")) {
					chat.classList.remove("is-running");
				} else {
					chat.classList.add("is-running");
				}
			});
		});

		close.addEventListener("click", () => {
			chat.classList.remove("is-running");
		});

		document.onkeydown = function (evt) {
			evt = evt || window.event;
			let isEscape = false;
			if ("key" in evt) {
				isEscape = evt.key === "Escape" || evt.key === "Esc";
			} else {
				isEscape = evt.keyCode === 27;
			}
			if (isEscape) {
				chat.classList.remove("is-running");
			}
		};

		window.LIVE_CHAT_UI = true;
	}
}
/***************Close***************/

const chat = {
	1: {
		text: "👋 Dobrý deň, pomôžem Vám zorientovať sa v ponuke a vybrať Vašu vysnívanú dovolenku na Slovensku.",
		next: 2,
	},
	2: {
		text: "☝🏻 Vedeli ste, že keď si rezervujete ubytovanie cez Gopass, získate v cene pobytu skipas alebo vstup do vodného parku?",
		options: [
			{
				text: "Chcem pokračovať.",
				next: 4,
			},
			{
				text: "Nie ďakujem, nemám záujem o pobyt.",
			},
		],
	},
	4: {
		text: "Akú lokalitu chcete navštíviť?",
		options: [
			{
				text: "VYSOKÉ TATRY",
				next: 5,
			},
			{
				text: "JASNÁ",
				next: 6,
			},
			{
				text: "LIPTOV - VODNÉ PARKY",
				next: 7,
			},
		],
	},

	5: {
		text: "Aké máte plány?",
		options: [
			{
				text: "Rozmaznávať sa 4* službami.",
				next: 8,
			},
			{
				text: "Lyžovačka s ubytovaním v lyžiarskom stredisku.",
				next: 9,
			},
			{
				text: "Zimné výlety zakončené vo wellness.",
				next: 10,
			},
		],
	},
	6: {
		text: "Čo Vás najviac láka?",
		options: [
			{
				text: "Z izby rovno na lyžiarsky svah.",
				next: 20,
			},
			{
				text: "Romantická dovolenka vo dvojici.",
				next: 21,
			},
			{
				text: "Rodinná lyžovačka so špeciálnymi benefitmi.",
				next: 22,
			},
		],
	},
	7: {
		text: "Aké máte plány?",
		options: [
			{
				text: "Užiť si rodinnú dovolenku s Kids Friendly službami.",
				next: 38,
			},
			{
				text: "Zrelaxovať telo aj myseľ vo dvojici v luxusnom hoteli.",
				next: 39,
			},
			{
				text: "Stráviť čas s rodinou v súkromí s pestrými aktivitami.",
				next: 40,
			},
		],
	},
	8: {
		text: "Vybrali sme hotely, kde sa o Vás postarajú.",
		next: 13,
	},
	9: {
		text: "Skvelá voľba! Určite si svoju zimnú dovolenku s TOP službami užijete. Aké ubytovanie preferujete?",
		options: [
			{
				text: "Súkromný apartmán s nadštandardným vybavením",
				next: 14,
			},
			{
				text: "V hoteli s TOP službami pre maximálny komfort",
				next: 15,
			},
			{
				text: "Ubytovanie za rozumnú cenu",
				next: 16,
			},
		],
	},
	10: {
		text: "Máme pre Vás miesta, kde si prídete na svoje.",
		next: 11,
	},
	11: {
		text: '<div class="hotels-wrapper"><section class="hotels"><div class="hotel hotel-left"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/78c6e442-3b2e-11ed-8df3-3edc7054d2b9" alt="Grandhotel Smokovec" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Grandhotel Starý Smokovec</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Starý Smokovec</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Grandhotel_Smokovec/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div><div class="hotel"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/75fccee8-3b2e-11ed-8f16-82e5956f3839" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Hotel FIS</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Štrbské Pleso</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Hotel_Fis/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div></section></div>',
	},
	13: {
		text: '<div class="hotels-wrapper"><section class="hotels"><div class="hotel hotel-left"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/78c6e442-3b2e-11ed-8df3-3edc7054d2b9" alt="Grandhotel Smokovec" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Grandhotel Starý Smokovec</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Starý Smokovec</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Grandhotel_Smokovec/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div><div class="hotel hotel-right"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/784066ce-3b2e-11ed-948b-3edc7054d2b9" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Grandhotel Praha</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Tatranská Lomnica</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Grandhotel_Praha/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div></section></div>',
	},
	14: {
		text: "Vybrali sme pre Vás ideálnu zimnú dovolenku.",
		next: 17,
	},
	15: {
		text: "Vybrali sme pre Vás ideálnu zimnú dovolenku.",
		next: 18,
	},
	16: {
		text: "Vybrali sme pre Vás ideálnu zimnú dovolenku pre nenáročných hostí.",
		next: 19,
	},
	17: {
		text: '<div class="hotels-wrapper"><section class="hotels"><div class="hotel"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/6fbbe74e-3b2e-11ed-88a6-82f74264fce6" alt="Horec" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Apartmány Horec</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Tatranská Lomnica</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Horec/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div></section></div>',
	},
	18: {
		text: '<div class="hotels-wrapper"><section class="hotels"><div class="hotel hotel-left"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/75fccee8-3b2e-11ed-8f16-82e5956f3839" alt="FIS" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Hotel FIS</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Štrbské Pleso</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Hotel_Fis/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div><div class="hotel hotel-right"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/784066ce-3b2e-11ed-948b-3edc7054d2b9" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Grandhotel Praha</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Tatranská Lomnica</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Grandhotel_Praha/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div></section></div>',
	},
	19: {
		text: '<div class="hotels-wrapper"><section class="hotels"><div class="hotel"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/744280b6-3b2e-11ed-8fce-3edc7054d2b9" alt="Bungalovy FIS" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Bungalovy FIS Economy</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Štrbské Pleso</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Bungalovy_Fis/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div></section></div>',
	},
	20: {
		text: "Aký ste typ lyžiara?",
		options: [
			{
				text: "Som začiatočník a potrebujem sa zlepšiť v lyžovaní.",
				next: 23,
			},
			{
				text: "Pokročilý lyžiar. Náročné kopce mi nerobia problém.",
				next: 24,
			},
		],
	},
	21: {
		text: "Vybrali sme hotely, kde sa o Vás postarajú.",
		next: 33,
	},
	22: {
		text: "Skvelý výber! Určite si svoju zimnú dovolenku s deťmi užijete. Čo Vás najviac láka?",
		options: [
			{
				text: "Súkromná horská chata obklopená prírodou.",
				next: 34,
			},
			{
				text: "Hotel s TOP službami.",
				next: 35,
			},
		],
	},
	23: {
		text: "V Jasnej nájdete mnoho nenáročných svahov a k tomu lyžiarsku školu. Aké ubytovanie preferujete?",
		options: [
			{
				text: "Súkromnú horskú chatu obklopenú prírodou.",
				next: 25,
			},
			{
				text: "V hoteli s TOP službami pre maximálny komfort.",
				next: 26,
			},
		],
	},
	24: {
		text: "V Jasnej si to užijete! Čo sa Vám páči viac?",
		options: [
			{
				text: "Dovolenka za rozumnú cenu.",
				next: 29,
			},
			{
				text: "Dovolenka plná zážitkov.",
				next: 30,
			},
		],
	},
	25: {
		text: "Vybrali sme pre Vás horský chalet s ideálnym svahom pre Vás.",
		next: 27,
	},
	26: {
		text: "Vybrali sme pre Vás zimnú dovolenku v hoteli s ideálnym svahom pre Vás.",
		next: 28,
	},
	27: {
		text: '<div class="hotels-wrapper"><section class="hotels"><div class="hotel"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/74ce91be-3b2e-11ed-99b0-82e5956f3839" alt="Jasná Apartments Centrum" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Chalets Jasná Apartments Centrum</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Jasná Centrum</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Chalets_Jasna_Collection/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div></section></div>',
	},
	28: {
		text: '<div class="hotels-wrapper"><section class="hotels"><div class="hotel hotel-left"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/77c30fa8-3b2e-11ed-a0f9-82f74264fce6" alt="Hotel Grand Jasná " class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Hotel Grand Jasná</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Jasná Centrum</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Grand_Jasna/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div><div class="hotel hotel-left"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/7061922a-3b2e-11ed-99fb-fe74d9805e2f" alt="Hotel Pošta" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Hotel Pošta</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Jasná Centrum</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Hotel_Posta/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div></section></div>',
	},
	29: {
		text: "Vybrali sme pre Vás zimnú dovolenku, kde sa perfektne vylyžujete.",
		next: 31,
	},
	30: {
		text: "Vybrali sme pre Vás zimnú dovolenku, kde sa perfektne vylyžujete.",
		next: 32,
	},
	31: {
		text: '<div class="hotels-wrapper"><section class="hotels"><div class="hotel"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/7185e584-3b2e-11ed-b08e-82e5956f3839" alt="Hotel SKI" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Hotel SKI</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Jasná Záhradky</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Hotel_Ski/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div></section></div>',
	},
	32: {
		text: '<div class="hotels-wrapper"><section class="hotels"><div class="hotel hotel-left"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/722380f0-3b2e-11ed-9d23-96bafcf4116d" alt="Hotel Srdiečko" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Hotel Srdiečko</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Jasná Juh</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Hotel_Srdiecko/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div><div class="hotel hotel-left"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/7560ac7a-3b2e-11ed-99c0-3edc7054d2b9" alt="Chalets Jasná Záhradky" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Chalets Jasná Záhradky</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Jasná Sever</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Chalets_Jasna/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div></section></div>',
	},
	33: {
		text: '<div class="hotels-wrapper"><section class="hotels"><div class="hotel hotel-left"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/72a689f0-3b2e-11ed-91f6-3edc7054d2b9" alt="Hotel Tri Studničky" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Hotel Tri Studničky</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Demänovská dolina</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Tri_Studnicky/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div><div class="hotel hotel-left"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/7061922a-3b2e-11ed-99fb-fe74d9805e2f" alt="Hotel Pošta" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Hotel Pošta</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Jasná Centrum</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Hotel_Posta/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div></section></div>',
	},
	34: {
		text: "Vybrali sme chalet, kde sa o Vás postarajú.",
		next: 36,
	},
	35: {
		text: "Vybrali sme pre Vás zimnú dovolenku s benefitmi pre deti.",
		next: 37,
	},
	36: {
		text: '<div class="hotels-wrapper"><section class="hotels"><div class="hotel"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/74ce91be-3b2e-11ed-99b0-82e5956f3839" alt="Chalets Jasná Centrum" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Chalets Jasná Centrum</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Jasná Centrum</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Chalets_Jasna_Centrum/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div></section></div>',
	},
	37: {
		text: '<div class="hotels-wrapper"><section class="hotels"><div class="hotel hotel-left"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/77c30fa8-3b2e-11ed-a0f9-82f74264fce6" alt="Hotel Grand Jasná " class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Hotel Grand Jasná</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Jasná Centrum</h4> </div><div class="text-desc hotel__desc"> <p class="">Skipas alebo vstup do vodného parku v cene!</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Grand_Jasna/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div></section></div>',
	},
	38: {
		text: "Čo by sa Vám viac páčilo?",
		options: [
			{
				text: "Ubytovanie priamo v areáli vodného parku.",
				next: 41,
			},
			{
				text: "Nový 4* hotel s nádherným výhľadom na Liptov.",
				next: 42,
			},
		],
	},
	39: {
		text: "Vybrali sme Vám 4* hotel s privátnymi bazénmi.",
		next: 48,
	},
	40: {
		text: "Vybrali sme Vám ubytovanie v chatovom rezorte.",
		next: 49,
	},
	41: {
		text: "Vybrali sme pre Vás ubytovanie, kde si svoju dovolenku s deťmi skutočne užijete.",
		next: 46,
	},
	42: {
		text: "Vybrali sme pre Vás ubytovanie, kde veríme že sa Vám bude páčiť.",
		next: 47,
	},
	46: {
		text: '<div class="hotels-wrapper"><section class="hotels"><div class="hotel hotel-left"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/70ecf1bc-3b2e-11ed-adb4-82e5956f3839" alt="Holiday Village Tatralandia" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Holiday Village Tatralandia</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Liptovský Mikuláš</h4> </div><div class="text-desc hotel__desc"> <p class="">Vstup do vodného parku v cene.</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Holiday_Village_Tatralandia/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div><div class="hotel hotel-left"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/19997a70-6194-11ed-92a0-6e21fb3f129e" alt="Hotel Bešeňová" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Hotel Bešeňová</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Bešeňová</h4> </div><div class="text-desc hotel__desc"> <p class="">Vstup do vodného parku v cene.</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Hotel_Besenova/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div></section></div>',
	},
	47: {
		text: '<div class="hotels-wrapper"><section class="hotels"><div class="hotel"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/73219136-3b2e-11ed-9c61-96bafcf4116d" alt="Hotel Akvamarín" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Hotel Akvamarín</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Bešeňová</h4> </div><div class="text-desc hotel__desc"> <p class="">Vstup do vodného parku v cene.</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Akvamarin/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div></section></div>',
	},
	48: {
		text: '<div class="hotels-wrapper"><section class="hotels"><div class="hotel"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/76a7d14e-3b2e-11ed-a08f-3edc7054d2b9" alt="Hotel Galeria Thermal" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Hotel Galeria Thermal</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Bešeňová</h4> </div><div class="text-desc hotel__desc"> <p class="">Vstup do vodného parku v cene.</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Galeria_Thermal/sk#chatbot_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div></section></div>',
	},
	49: {
		text: '<div class="hotels-wrapper"><section class="hotels"><div class="hotel hotel-left"><div class="hotel__img"> <img src="https://storage.googleapis.com/exp-app-storage/751beaac-9fae-11ec-bccb-0eef684a3553/media/original/70ecf1bc-3b2e-11ed-adb4-82e5956f3839" alt="Holiday Village Tatralandia" class=""> </div><div class="hotel__name _tc"> <h3 class="heading-primary" style="margin-top: .25rem;margin-bottom: .25rem;">Holiday Village Tatralandia</h3> <h4 class="heading-secondary" style="margin-top: .25rem;margin-bottom: .25rem;">Liptovský Mikuláš</h4> </div><div class="text-desc hotel__desc"> <p class="">Vstup do vodného parku v cene.</p></div><div class="hotel__bottom-content"><a href="https://booking.tmrhotels.com/Holiday_Village_Tatralandia/sk#chatbot_tmr_hotels_tmr_hotels" type="submit" class="bttn bttn-fly bttn--green bttn--animated ripple">Pozrieť ponuku</a></div></div></section></div>',
	},
};

const bot = function () {
	const container = document.getElementById("hotel-chatbot-container");
	const inner = document.getElementById("hotel-chatbot-inner");
	const chatbot = document.getElementById("hotel-chatbot");
	let restartButton = null;
	const sleep = function (ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	const scrollContainer = function () {
		inner.scrollTop = inner.scrollHeight;
	};

	const insertNewChatItem = function (elem) {
		chatbot.appendChild(elem);
		scrollContainer();
		// debugger;
		elem.classList.add("activated");
	};

	const printResponse = async function (step) {
		const response = document.createElement("div");
		response.classList.add("chat-response");
		response.innerHTML = step.text;
		insertNewChatItem(response);

		await sleep(1500);

		// ak existuju options pre dany step > zobraz ich || zobraz dalsi krok
		if (step.options) {
			const choices = document.createElement("div");
			choices.classList.add("choices");
			step.options.forEach((option) => {
				const button = document.createElement(option.url ? "a" : "button");
				button.classList.add("choice");
				button.innerHTML = option.text;
				if (option.url) {
					button.href = option.url;
				} else {
					button.dataset.next = option.next;
				}
				choices.appendChild(button);
			});
			insertNewChatItem(choices);
		} else if (step.next) {
			printResponse(chat[step.next]);
		}

		// track clicking on custom <a> in the final item selection
		var customlinks = banner.querySelectorAll("a.bttn");
		for (var i = 0; i < customlinks.length; i++) {
			trackLink(customlinks[i], "click", true);
		}

		// track clicking on custom <button> in the banner
		var custombtns = banner.querySelectorAll("button.choice");
		console.log("ahoj");
		for (var i = 0; i < custombtns.length; i++) {
			trackButton(custombtns[i], "click", true);
		}
	};

	const printChoice = function (choice) {
		const choiceElem = document.createElement("div");
		choiceElem.classList.add("chat-ask");
		choiceElem.innerHTML = choice.innerHTML;
		insertNewChatItem(choiceElem);
	};

	const disableAllChoices = function () {
		const choices = document.querySelectorAll(".choice");
		choices.forEach((choice) => {
			choice.disabled = "disabled";
		});
	};

	const handleChoice = async function (e) {
		if (!e.target.classList.contains("choice") || e.target.tagName === "A") {
			// Target isn't a button, but could be a child of a button.
			const button = e.target.closest("#hotel-chatbot-container .choice");

			if (button !== null) {
				button.click();
			}

			return;
		}

		e.preventDefault();
		const choice = e.target;

		disableAllChoices();

		printChoice(choice);

		if (choice.outerText === "Nie ďakujem, nemám záujem o pobyt.")
			return close.click();
		scrollContainer();

		await sleep(1500);

		if (choice.dataset.next) {
			printResponse(chat[choice.dataset.next]);
		}
		// Need to disable buttons here to prevent multiple choices
	};

	const handleRestart = function () {
		startConversation();
	};

	const startConversation = function () {
		printResponse(chat[1]);
	};

	const init = function () {
		container.addEventListener("click", handleChoice);

		restartButton = document.createElement("button");
		restartButton.innerText = "Spustiť znova";
		restartButton.classList.add("restart");
		restartButton.addEventListener("click", handleRestart);

		const submitButtonState = () => {
			restartButton.disabled = true;
			setTimeout(() => {
				restartButton.disabled = false;
			}, 5000);
		};
		restartButton.addEventListener("click", () => submitButtonState());

		container.appendChild(restartButton);

		startConversation();
	};

	init();
};

/* alert("test5"); */

// Upravit Restart fuknciu ak sa da cele vymazat a init/load

// Ak sa da tak prihodit dynamicky load tych konecnych ponuk hotelov

/**
 * Universal parameters
 */
var PARAM_showAfter = parseInt(
	"[[ {name: 'showAfter', tooltip: 'Time in milliseconds', category: 'Triggering', isJsonParam: true} : number | 0 ]]",
	10
);
var PARAM_removeAfter = parseInt(
	"[[ {name: 'removeAfter', tooltip: 'Time in milliseconds', category: 'Triggering', isJsonParam: true} : number | 0 ]]",
	10
);
var PARAM_trigger =
	"[[ {name: 'trigger', tooltip: 'Triggering options. Be aware On exit option is not supported on mobile devices', category: 'Triggering', isJsonParam: true} : enum(On entry,On exit,On scroll) | On entry ]]";
var PARAM_parentElement =
	"[[ {name: 'parentElement', tooltip: 'CSS selector of an element to which the banner will be added', category: 'Position', isJsonParam: true} : string | body ]]";
var PARAM_positionVertical =
	"[[ {name: 'positionVertical', tooltip: '', category: 'Position', isJsonParam: true} : enum(Top,Center,Bottom) | Bottom ]]";
var PARAM_positionHorizontal =
	"[[ {name: 'positionHorizontal', tooltip: '', category: 'Position', isJsonParam: true} : enum(Left,Center,Right) | Right ]]";
var PARAM_enterAnimation =
	"[[ {name: 'enterAnimation', tooltip: '', category: 'Position', isJsonParam: true} : enum(None,Fade in,Slide in) | None ]]";

/**
 * Template specific parameters
 */

/**
 * Initialization
 */
var self = this;

// Helper Id used to identify the banner on the website, not actual ID of the banner
var bannerSemiId = Math.random().toString(36).substring(5);

// Used in onExit banners to mark if the banner was triggered already
window["__exp_triggered-" + bannerSemiId] = false;

// Resetting some of the parameters while previewing the banner in the app to easily see its appearance
if (self.inPreview) {
	// reset the show delay while editing the banner in editor
	PARAM_showAfter = 0;

	// always append the banner to the body itself
	PARAM_parentElement = "body";

	// always show the banner right away
	PARAM_trigger = "On entry";
}

/**
 * Basic functions
 */

/**
 * Function used to register listener for the trigger that will display the banner
 */
function registerStartTrigger() {
	if (PARAM_trigger === "On exit") {
		document.body.addEventListener("mouseout", onExitMouseOutHandler);
	} else if (PARAM_trigger === "On scroll") {
		window.addEventListener("scroll", scheduleShowBanner);
	} else {
		// If 'On entry' or anything unknown start the banner right away
		scheduleShowBanner();
	}
}

/**
 * This function starts the showAfter timer and then displays the banner
 */
function scheduleShowBanner() {
	window.removeEventListener("scroll", scheduleShowBanner);

	setTimeout(function () {
		// Track show event after timer expired
		trackEvent("show", false);

		// Create and display the banner
		requestAnimationFrame(createBanner);

		// If removeAfter is provided start the removal timer
		if (PARAM_removeAfter > 0) {
			setTimeout(function () {
				removeBanner();
			}, PARAM_removeAfter);
		}
	}, PARAM_showAfter);
}

/**
 * Function used to insert the banner contents into the HTML and adding basic functionality
 */
function createBanner() {
	var placeholder = document.querySelector("body");
	placeholder.insertAdjacentHTML("afterbegin", self.html);

	// get the banner reference
	var banner = placeholder.firstElementChild;

	// add close functionality to the close button
	banner.querySelector(".close").onclick = handleCloseButtonClick;

	// add classes specifying banner position and animation
	banner.className += " " + getPositionAndAnimationClasses();

	// insert banner CSS into the website
	banner.insertAdjacentHTML("afterbegin", "<style>" + self.style + "</style>");

	attachBannerToDom(banner);
	chatInit("#chat-app");
	bot();
}

/**
 * Function used to insert the banner HTML to the DOM
 * @param banner - html content of the banner
 */
function attachBannerToDom(banner) {
	var parentElement = document.querySelector(PARAM_parentElement);

	// use shadow DOM if browser suports it
	/*if (parentElement.attachShadow) {
        createBannerInShadowDom(banner, parentElement);
    }*/
	parentElement.insertAdjacentElement("afterbegin", banner);
	self.banner = banner;
}

/**
 * Creates banner in shadow dom
 * @param parentElement
 */
function createBannerInShadowDom(banner, parentElement) {
	var shadowHost = document.createElement("div");
	shadowHost.innerHTML = getFontsImport();

	var shadowRoot = shadowHost.attachShadow({ mode: "open" });
	shadowRoot.appendChild(banner);
	parentElement.insertAdjacentElement("afterbegin", shadowHost);
	self.banner = shadowHost;
}

/**
 * Function used to add fonts imports and font faces to element
 * The font import does not work inside shadow DOM, it has to be declared outside
 * @returns string - style tag with fonts import
 */
function getFontsImport() {
	var importsResult = self.style.match(/@import url\(["'].+?['"]\)/g);
	var fontFacesResult = self.style.match(/@font-face( |\n)*{(.|\s)+?}/g);

	var imports =
		importsResult && importsResult.length ? importsResult.join(";") : "";
	var fontFaces =
		fontFacesResult && fontFacesResult.length ? fontFacesResult.join("") : "";
	var fonts = (imports ? imports + ";" : "") + fontFaces;

	return imports || fontFaces ? "<style>" + fonts + "</style>" : "";
}

/**
 * Function used to remove the banner from the website
 */
function removeBanner() {
	if (self.banner && self.banner.parentNode) {
		self.banner.parentNode.removeChild(self.banner);
	}
}

/**
 * Function triggered when the closing button is clicked
 * @param event - browser click Event
 * @returns {boolean}
 */
function handleCloseButtonClick(event) {
	removeBanner();
	trackEvent("close", true);

	// Stop the click event propagation onto parent HTML elements
	event.preventDefault();
	if (event.stopPropagation) {
		event.stopPropagation();
	} else {
		event.cancelBubble = true;
	}

	return false;
}

/**
 * Function used to track single action
 * @param action - string
 * @param interactive - boolean
 */
function trackEvent(action, interactive) {
	self.sdk.track("banner", getEventProperties(action, interactive));
}

/**
 * Function used to add action tracking to element
 * @param link - element
 * @param action - string
 * @param interactive - boolean
 */
function trackLink(link, action, interactive) {
	var eventData = getEventProperties(action, interactive);
	eventData.link = link.href;
	self.sdk.trackLink(link, "banner", eventData);
}
/**
 * Function used to add action tracking to element
 * @param button - element
 * @param action - string
 * @param interactive - boolean
 */
function trackButton(button, action, interactive) {
	var eventData = getEventProperties(action, interactive);
	eventData.button = button.data - next;
	self.sdk.trackButton(button, "banner", eventData);
}

/**
 * Default attributes tracked with every banner event
 * @param action - string
 * @param interactive - boolean
 * @returns object - object to be tracked
 */
function getEventProperties(action, interactive) {
	return {
		action: action,
		banner_id: self.data.banner_id,
		banner_name: self.data.banner_name,
		banner_type: self.data.banner_type,
		variant_id: self.data.variant_id,
		variant_name: self.data.variant_name,
		variant_origin:
			self.data.contextual_personalization != null
				? "contextual personalisation"
				: "ABtest",
		interaction: interactive !== false,
	};
}

/**
 * Function used to start banners with onExit trigger
 * @param event - browser mouse event
 */
function onExitMouseOutHandler(event) {
	event = event ? event : window.event;
	var vpWidth = Math.max(
		document.documentElement.clientWidth,
		window.innerWidth || 0
	);
	if (event.clientX >= vpWidth) {
		return;
	}
	if (event.clientY >= 50) {
		return;
	}
	var from = event.relatedTarget || event.toElement;

	if (!from && !window["__exp_triggered-" + bannerSemiId]) {
		window["__exp_triggered-" + bannerSemiId] = true;
		scheduleShowBanner();
	}
}

/**
 * Function that returns correct class
 */
function getPositionAndAnimationClasses() {
	var verticalClass =
		{
			Top: "vertical-top",
			Center: "vertical-center",
			Bottom: "vertical-bottom",
		}[PARAM_positionVertical] || "";

	var horizontalClass =
		{
			Left: "horizontal-left",
			Center: "horizontal-center",
			Right: "horizontal-right",
		}[PARAM_positionHorizontal] || "";

	var enterAnimationClass =
		{
			"Fade in": "enter-fade",
			"Slide in": {
				Top: {
					Left: "enter-slide-left",
					Center: "enter-slide-up",
					Right: "enter-slide-right",
				}[PARAM_positionHorizontal],
				Center: {
					Left: "enter-slide-left",
					Center: "enter-slide-up",
					Right: "enter-slide-right",
				}[PARAM_positionHorizontal],
				Bottom: {
					Left: "enter-slide-left",
					Center: "enter-slide-down",
					Right: "enter-slide-right",
				}[PARAM_positionHorizontal],
			}[PARAM_positionVertical],
		}[PARAM_enterAnimation] || "";

	return verticalClass + " " + horizontalClass + " " + enterAnimationClass;
}

/**
 * Template specific functions
 */

registerStartTrigger();
return {
	remove: removeBanner,
};
