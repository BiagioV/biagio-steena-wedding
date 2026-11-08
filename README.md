# Biagio & Steena · 26 giugno 2027

Invito di matrimonio statico, pronto per GitHub Pages. Inglese, italiano e malayalam, busta animata, paesaggio del Kerala, conto alla rovescia, programma, mappe e calendario scaricabile. Ogni apertura parte in inglese; la lingua si cambia sia sulla busta sia dentro il sito. Nessuna installazione di dipendenze necessaria.

Palette burgundy, rosa e oro, con fiori tropicali e bordi ispirati ai tessuti kasavu del Kerala. La busta occupa tutto lo schermo: cliccando il sigillo, i lembi si aprono e rivelano il sito sottostante. Anche le sezioni dell’invito si sviluppano a tutta larghezza e almeno a tutta altezza dello schermo, con scorrimento naturale per i contenuti più lunghi.

Sulla busta, i tre pulsanti “Inglese”, “Italiano” e “Malayalam” scelgono la lingua e avviano immediatamente l’apertura animata e la musica. Il sigillo continua ad aprire l’invito nella lingua corrente, inizialmente inglese. Dentro il sito resta disponibile il selettore delle lingue.

La musica fornita dagli sposi è in `assets/song-wedding.mp3`. Parte al clic sul sigillo (o su “Entra senza animazione”), viene ripetuta in loop e ha un pulsante fisso per pausa/ripresa. Il volume iniziale è impostato al 32% sui browser che consentono di regolarlo; sugli altri dispositivi si usa il volume di sistema. Il file non viene precaricato prima dell’apertura dell’invito. Riaprire la busta non riavvia la canzone e rispetta un’eventuale pausa.

Sito: https://biagiov.github.io/biagio-steena-wedding/

Repository: https://github.com/BiagioV/biagio-steena-wedding

## Anteprima

Apri `index.html` nel browser oppure, con Node.js 18 o successivo, esegui `npm run dev` e visita http://127.0.0.1:4173.

## Pubblicazione su GitHub Pages

1. Crea un repository pubblico su GitHub, per esempio `biagio-steena-wedding`.
2. Carica i file mantenendo la struttura: `index.html`, `styles.css`, `app.js`, `.nojekyll` e la cartella `assets` devono essere alla radice del repository. Gli altri file servono allo sviluppo, ma possono essere caricati anch’essi.
3. Nel repository vai su **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Scegli il branch che contiene i file (di solito `main`, oppure `master`) e la cartella **/(root)**. Premi **Save**.
5. GitHub mostrerà il link pubblico, di norma `https://USERNAME.github.io/biagio-steena-wedding/`.

Non occorrono password o token nel codice. Documentazione: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Contenuti da completare

- 21 giugno 2027: Ottukalyanam alla St. Sebastian’s Knanaya Catholic Church, Kandakassery, Payavoor. Orario da confermare. Mappa fornita dagli sposi: https://maps.app.goo.gl/EQBtCZyqDwaWbgtK8
- 25 giugno 2027: Chandam Charthu a casa di Biagio, Areekara, orario da confermare.
- 26 giugno 2027: Kalyanam a St. Rocky’s Church (St. Roch’s Knanaya Catholic Church), Areekara, orario da confermare.
- La mappa del 25 apre il punto di casa fornito dagli sposi: https://maps.app.goo.gl/1ND9wtggy1r7PzQy7
- Non c’è un modulo RSVP collegato: la sezione informazioni invita a contattare direttamente gli sposi con i contatti già noti agli invitati.

Il calendario salva tre eventi di giornata intera, senza inventare gli orari, con i collegamenti Maps forniti per il 21 e il 25. Il conto alla rovescia termina all’inizio del 26 giugno nel fuso `Asia/Kolkata` (UTC+05:30), non all’orario della cerimonia.

## Modifiche

I testi iniziali in inglese sono in `index.html`; le tre traduzioni e la logica sono in `app.js`. Quando cambi un testo, aggiorna tutte e tre le lingue. Colori, caratteri e animazioni sono in `styles.css`. Le icone sono SVG per evitare le emoji su telefono. Il sito supporta tastiera e preferenze di movimento ridotto; senza JavaScript mostra direttamente l’invito in inglese.

I caratteri Cormorant Garamond, Jost, Noto Sans Malayalam e Noto Serif Malayalam vengono caricati da Google Fonts, con caratteri di sistema come fallback. Nessuna analitica e nessun servizio per raccogliere dati degli ospiti. La scelta della lingua vale per la visita corrente; ricaricando si torna all’inglese.

I paesaggi in `assets/kerala-burgundy.png` (desktop) e `assets/kerala-burgundy-mobile.png` (telefono) sono illustrazioni d’atmosfera generate con ImageGen, non fotografie della chiesa o del luogo degli eventi. I prompt sono documentati in `assets/art-direction-burgundy.txt`; l’illustrazione originale `assets/kerala-watercolor.png` è conservata con il suo prompt.

Nome della chiesa verificato nella directory dell’Arcieparchia di Kottayam: https://kottayamad.org/uzhavoor-forane/
