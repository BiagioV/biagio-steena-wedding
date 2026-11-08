(() => {
  'use strict';
  const translations = {
    it: {
      gateEyebrow:'UNA PROMESSA. UN NUOVO INIZIO.',gateTitle:'C’è un invito per te.',openLabel:'Apri l’invito di Biagio e Steena',envelopeAddress:'Per te, con amore',openHint:'TOCCA IL SIGILLO PER APRIRE',skipIntro:'Entra senza animazione',june2027:'GIUGNO 2027',june:'GIUGNO',navPromise:'La promessa',navCelebrations:'I festeggiamenti',navPlace:'Il luogo',heroEyebrow:'CON LE NOSTRE FAMIGLIE, VI INVITIAMO AL NOSTRO MATRIMONIO',heroSubtitle:'Il nostro per sempre comincia qui.',discover:'Scopri il nostro invito',scroll:'SCORRI, LA STORIA COMINCIA',scrollLabel:'Scopri la nostra promessa',promiseEyebrow:'DUE CUORI, UNA PROMESSA',promiseTitle:'Un sì. Una vita.<br>Con voi.',promiseBody:'Tra il verde del Kerala e l’abbraccio delle nostre famiglie, iniziamo il capitolo più bello della nostra vita. Vi aspettiamo per condividere la gioia di questi giorni, la nostra fede e le tradizioni knanaya che ci accompagnano.',countdownCaption:'CONTIAMO I GIORNI AL NOSTRO SÌ',countdownNote:'Fino al 26 giugno, nel fuso orario del Kerala.',days:'GIORNI',hours:'ORE',minutes:'MINUTI',seconds:'SECONDI',celebrationsEyebrow:'IL NOSTRO MATRIMONIO, IN TRE CAPITOLI',celebrationsTitle:'Tre giorni da ricordare.',celebrationsIntro:'Le nostre radici. Le nostre famiglie. La nostra festa.',day21:'LUNEDÌ · GIUGNO 2027',day25:'VENERDÌ · GIUGNO 2027',day26:'SABATO · GIUGNO 2027',engagement:'La promessa di matrimonio',tradition:'La bellezza delle tradizioni',wedding:'Il nostro matrimonio',event21Description:'Il primo passo verso il nostro sì, insieme alle persone che amiamo.',event25Description:'Una giornata di famiglia e tradizione, nell’attesa del nostro matrimonio.',event26Description:'Davanti a Dio e insieme a voi, ci promettiamo di camminare fianco a fianco.',event21Details:'Orario e luogo esatto da confermare',event25Location:'Casa di Biagio · Areekara',timePending:'Orario da confermare',viewArea:'Vedi la zona',churchMap:'Vedi la chiesa',saveDates:'Salva le tre date',calendarNote:'Un piccolo promemoria per un grande momento.',locationEyebrow:'IL LUOGO DEL NOSTRO SÌ',locationTitle:'Nel cuore<br>del Kerala.',locationBody:'Ad Areekara, circondati dal verde e dalle nostre persone del cuore, celebreremo il nostro matrimonio cristiano knanaya.',openMaps:'Apri in Google Maps',guestEyebrow:'PER ESSERCI, CON IL CUORE LEGGERO',guestTitle:'Qualche dettaglio per voi.',faq1Title:'A che ora iniziano gli eventi?',faq1Body:'Le date sono confermate: 21, 25 e 26 giugno 2027. Aggiorneremo questo invito con gli orari e i dettagli dei festeggiamenti appena saranno definiti.',faq2Title:'Dove ci ritroviamo?',faq2Body:'Il 21 giugno saremo a Payavoor. Il 25 ci ritroveremo a casa di Biagio, ad Areekara. Il 26 celebreremo il matrimonio a St. Rocky’s Church, ad Areekara. L’indirizzo di casa e il luogo esatto del 21 saranno condivisi con gli invitati.',faq3Title:'Come posso confermare la mia presenza?',faq3Body:'Per il momento puoi comunicarlo direttamente a Biagio o Steena, attraverso i contatti che usi già per sentirci. Saremo felici di sapere che ci sarai!',closingEyebrow:'IL REGALO PIÙ BELLO',closingTitle:'Avervi con noi.',closingBody:'Ci sono momenti che diventano speciali<br>solo quando li condividiamo.',footerText:'FATTO CON AMORE · CI VEDIAMO IN KERALA',replay:'Riapri l’invito',downloadNotice:'Calendario scaricato. Apri il file per aggiungere le tre date.',today:'OGGI CI SPOSIAMO!',married:'IL NOSTRO PER SEMPRE È COMINCIATO',calendarDescription:'Biagio e Steena. Orario da confermare. Evento salvato per l’intera giornata: aggiorneremo l’invito con gli orari.'
    },
    en: {
      gateEyebrow:'ONE PROMISE. A NEW BEGINNING.',gateTitle:'A little invitation for you.',openLabel:'Open Biagio and Steena’s invitation',envelopeAddress:'For you, with love',openHint:'TOUCH THE SEAL TO OPEN',skipIntro:'Enter without animation',june2027:'JUNE 2027',june:'JUNE',navPromise:'Our promise',navCelebrations:'The celebrations',navPlace:'The place',heroEyebrow:'TOGETHER WITH OUR FAMILIES, WE INVITE YOU TO OUR WEDDING',heroSubtitle:'Our forever begins here.',discover:'Discover our invitation',scroll:'SCROLL, OUR STORY BEGINS',scrollLabel:'Discover our promise',promiseEyebrow:'TWO HEARTS, ONE PROMISE',promiseTitle:'One love. One lifetime.<br>With you.',promiseBody:'Surrounded by the green of Kerala and the love of our families, we begin the most beautiful chapter of our lives. Join us to share these joyful days, our faith, and the Knanaya traditions we hold close.',countdownCaption:'COUNTING THE DAYS UNTIL WE SAY “I DO”',countdownNote:'Until June 26, in Kerala’s time zone.',days:'DAYS',hours:'HOURS',minutes:'MINUTES',seconds:'SECONDS',celebrationsEyebrow:'OUR WEDDING, IN THREE CHAPTERS',celebrationsTitle:'Three days to remember.',celebrationsIntro:'Our roots. Our families. Our celebration.',day21:'MONDAY · JUNE 2027',day25:'FRIDAY · JUNE 2027',day26:'SATURDAY · JUNE 2027',engagement:'The promise of marriage',tradition:'The beauty of tradition',wedding:'Our wedding day',event21Description:'The first step towards our forever, with the people we love.',event25Description:'A day of family and tradition, as we look forward to our wedding.',event26Description:'Before God and with you beside us, we promise to walk through life together.',event21Details:'Time and exact venue to be confirmed',event25Location:'Biagio’s home · Areekara',timePending:'Time to be confirmed',viewArea:'Explore the area',churchMap:'Find the church',saveDates:'Save all three dates',calendarNote:'A little reminder for a beautiful moment.',locationEyebrow:'WHERE WE SAY “I DO”',locationTitle:'In the heart<br>of Kerala.',locationBody:'In Areekara, surrounded by greenery and our favourite people, we will celebrate our Knanaya Christian wedding.',openMaps:'Open in Google Maps',guestEyebrow:'A FEW THINGS BEFORE YOU JOIN US',guestTitle:'A little helpful detail.',faq1Title:'What time do the events begin?',faq1Body:'The dates are confirmed: June 21, 25 and 26, 2027. We will update this invitation with times and celebration details as soon as they are finalised.',faq2Title:'Where are we celebrating?',faq2Body:'On June 21, we will be in Payavoor. On June 25, we will gather at Biagio’s home in Areekara. On June 26, our wedding will take place at St. Rocky’s Church in Areekara. The home address and exact venue for June 21 will be shared with our guests.',faq3Title:'How can I confirm I’m coming?',faq3Body:'For now, please let Biagio or Steena know directly, using the contact details you already have for us. We would love to hear that you can join us!',closingEyebrow:'THE MOST BEAUTIFUL GIFT',closingTitle:'Having you with us.',closingBody:'Some moments are only truly special<br>when we share them.',footerText:'MADE WITH LOVE · SEE YOU IN KERALA',replay:'Open the invitation again',downloadNotice:'Calendar downloaded. Open the file to add all three dates.',today:'TODAY WE SAY “I DO”!',married:'OUR FOREVER HAS BEGUN',calendarDescription:'Biagio and Steena. Time to be confirmed. Saved as an all-day event; we will update the invitation with the times.'
    }
  };
  const gate = document.getElementById('invitation-gate');
  const site = document.getElementById('wedding-site');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const music = document.getElementById('wedding-music');
  const musicToggle = document.getElementById('music-toggle');
  const musicLabel = document.getElementById('music-label');
  const musicStatus = document.getElementById('music-status');
  let language = 'it';
  let opening = false;
  let toastTimeout;
  let musicAttempted = false;
  music.volume = 0.32;
  musicToggle.hidden = false;

  function updateMusicControl() {
    const playing = !music.paused && !music.ended && !music.error;
    musicToggle.setAttribute('aria-pressed',String(playing));
    musicToggle.setAttribute('aria-label',language === 'it'
      ? playing ? 'Metti in pausa la musica' : 'Attiva la musica'
      : playing ? 'Pause the music' : 'Play the music');
    musicLabel.textContent = language === 'it' ? 'Musica' : 'Music';
    musicStatus.textContent = language === 'it'
      ? playing ? 'Musica in riproduzione' : 'Musica in pausa'
      : playing ? 'Music playing' : 'Music paused';
  }

  function playMusic() {
    // Called directly from a click/keyboard gesture, before the envelope timers.
    // A rejected playback request never prevents the invitation from opening.
    music.play().catch(() => {
      updateMusicControl();
      musicStatus.textContent = language === 'it'
        ? 'Tocca il pulsante Musica per riprovare la riproduzione.'
        : 'Tap the Music button to try playing again.';
    });
  }
  music.addEventListener('playing',updateMusicControl);
  music.addEventListener('pause',updateMusicControl);
  music.addEventListener('error',() => {
    updateMusicControl();
    musicStatus.textContent = language === 'it'
      ? 'La musica non è disponibile in questo momento.'
      : 'Music is currently unavailable.';
  });
  musicToggle.addEventListener('click',() => {
    if (music.paused) {
      if (music.error) music.load();
      playMusic();
    } else music.pause();
  });
  document.documentElement.classList.add('js');
  document.body.classList.add('gated');
  site.inert = true;

  function openInvitation(skip = false) {
    if (opening) return;
    opening = true;
    if (!musicAttempted) {
      musicAttempted = true;
      playMusic();
    }
    if (!skip && !reducedMotion.matches) gate.classList.add('opening');
    const wait = skip || reducedMotion.matches ? 0 : 1350;
    window.setTimeout(() => {
      gate.classList.add('leaving');
      site.inert = false;
      document.body.classList.remove('gated');
      window.setTimeout(() => {
        gate.hidden = true;
        document.getElementById('couple-names').focus({preventScroll:true});
        opening = false;
      }, reducedMotion.matches || skip ? 0 : 750);
    }, wait);
  }
  document.getElementById('open-invitation').addEventListener('click', () => openInvitation());
  document.getElementById('skip-intro').addEventListener('click', () => openInvitation(true));
  gate.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const controls = [...gate.querySelectorAll('button')];
    const first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  document.getElementById('replay').addEventListener('click', () => {
    window.scrollTo({top:0,behavior:'instant'});
    gate.hidden = false;
    gate.classList.remove('leaving','opening');
    site.inert = true;
    document.body.classList.add('gated');
    document.getElementById('open-invitation').focus({preventScroll:true});
  });

  function setLanguage(next) {
    if (!translations[next]) return;
    language = next;
    document.documentElement.lang = next;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      // All translations are fixed local strings, never user-supplied HTML.
      element.innerHTML = translations[next][element.dataset.i18n];
    });
    document.querySelectorAll('[data-i18n-label]').forEach(element => element.setAttribute('aria-label',translations[next][element.dataset.i18nLabel]));
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.lang === next)));
    document.querySelector('.closing .signature').firstChild.textContent = next === 'it' ? 'Con amore, ' : 'With love, ';
    document.querySelector('.site-header nav').setAttribute('aria-label',next === 'it' ? 'Navigazione principale' : 'Main navigation');
    document.querySelectorAll('.language-switch').forEach(element => element.setAttribute('aria-label',next === 'it' ? 'Lingua' : 'Language'));
    document.querySelector('.site-header .monogram').setAttribute('aria-label',next === 'it' ? 'Biagio e Steena, inizio' : 'Biagio and Steena, home');
    document.querySelector('footer .monogram').setAttribute('aria-label',next === 'it' ? 'Torna all’inizio' : 'Back to the top');
    document.title = next === 'it' ? 'Biagio & Steena — Ci sposiamo · 26.06.2027' : 'Biagio & Steena — We’re getting married · 26.06.2027';
    document.querySelector('.countdown').setAttribute('aria-label',next === 'it' ? 'Conto alla rovescia al 26 giugno 2027, ora del Kerala' : 'Countdown to June 26, 2027, in Kerala time');
    document.querySelector('.location-art').setAttribute('aria-label',next === 'it' ? 'Illustrazione ad acquerello del paesaggio del Kerala' : 'Watercolor illustration of the Kerala landscape');
    try { localStorage.setItem('biagio-steena-language',next); } catch { /* Local storage can be unavailable in private mode. */ }
    updateCountdown();
    updateMusicControl();
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click',() => setLanguage(button.dataset.lang)));

  const weddingDate = new Date('2027-06-26T00:00:00+05:30').getTime();
  function updateCountdown() {
    const now = Date.now();
    const remaining = Math.max(0,Math.floor((weddingDate-now)/1000));
    const values = {days:Math.floor(remaining/86400),hours:Math.floor(remaining%86400/3600),minutes:Math.floor(remaining%3600/60),seconds:remaining%60};
    Object.entries(values).forEach(([id,value]) => {document.getElementById(id).textContent = String(value).padStart(2,'0');});
    document.getElementById('countdown-caption').textContent = translations[language][now < weddingDate ? 'countdownCaption' : now < weddingDate+86400000 ? 'today' : 'married'];
  }
  updateCountdown();
  window.setInterval(updateCountdown,1000);
  try {setLanguage(localStorage.getItem('biagio-steena-language') || 'it');} catch {setLanguage('it');}

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {entry.target.classList.add('visible');observer.unobserve(entry.target);}
    }),{threshold:0.12});
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  } else document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));

  function icsEscape(value) {return value.replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/;/g,'\\;').replace(/,/g,'\\,');}
  function foldLine(value) {
    // RFC 5545: fold at 75 UTF-8 octets without splitting a code point.
    const encoder = new TextEncoder();
    let folded = '', line = '', size = 0;
    for (const character of value) {
      const bytes = encoder.encode(character).length;
      if (size + bytes > 75) {folded += line + '\r\n';line = ' ';size = 1;}
      line += character;size += bytes;
    }
    return folded + line;
  }
  document.getElementById('save-dates').addEventListener('click', () => {
    const events = [
      {day:'21',end:'22',name:'Ottukalyanam',location:'Payavoor, Kerala, India'},
      {day:'25',end:'26',name:'Chandam Charthu',location:language === 'it' ? 'Casa di Biagio, Areekara, Kerala, India' : 'Biagio’s home, Areekara, Kerala, India'},
      {day:'26',end:'27',name:'Kalyanam',location:'St. Rocky’s (St. Roch’s) Knanaya Catholic Church, Areekara, Kerala, India'}
    ];
    const stamp = new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
    const lines = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Biagio and Steena//Wedding 2027//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH'];
    events.forEach(event => lines.push('BEGIN:VEVENT',`UID:202706${event.day}-biagio-steena@wedding-invitation`,`DTSTAMP:${stamp}`,`DTSTART;VALUE=DATE:202706${event.day}`,`DTEND;VALUE=DATE:202706${event.end}`,`SUMMARY:${icsEscape('Biagio & Steena · '+event.name)}`,`LOCATION:${icsEscape(event.location)}`,`DESCRIPTION:${icsEscape(translations[language].calendarDescription)}`,'TRANSP:TRANSPARENT','END:VEVENT'));
    lines.push('END:VCALENDAR');
    const blob = new Blob([lines.map(foldLine).join('\r\n')+'\r\n'],{type:'text/calendar;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');link.href = url;link.download = 'Biagio-e-Steena-giugno-2027.ics';document.body.appendChild(link);link.click();link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url),30000);
    const toast = document.getElementById('toast');toast.textContent = translations[language].downloadNotice;toast.classList.add('visible');
    clearTimeout(toastTimeout);toastTimeout = window.setTimeout(() => toast.classList.remove('visible'),5000);
  });
})();
