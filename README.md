# Biagio & Steena · 26 giugno 2027

Invito di matrimonio statico, pronto per GitHub Pages. Italiano e inglese, busta animata, paesaggio del Kerala, conto alla rovescia, programma, mappe e calendario scaricabile. Nessuna installazione di dipendenze necessaria.

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

- 21 giugno 2027: Ottukalyanam a Payavoor, orario e luogo esatto da confermare.
- 25 giugno 2027: Chandam Charthu a casa di Biagio, Areekara, orario da confermare.
- 26 giugno 2027: Kalyanam a St. Rocky’s Church (St. Roch’s Knanaya Catholic Church), Areekara, orario da confermare.
- L’indirizzo privato di casa non è stato fornito: la mappa del 25 mostra solo la zona di Areekara.
- Non c’è un modulo RSVP collegato: la sezione informazioni invita a contattare direttamente gli sposi con i contatti già noti agli invitati.

Il calendario salva tre eventi di giornata intera, senza inventare gli orari. Il conto alla rovescia termina all’inizio del 26 giugno nel fuso `Asia/Kolkata` (UTC+05:30), non all’orario della cerimonia.

## Modifiche

I testi iniziali sono in `index.html`; le traduzioni e la logica sono in `app.js`. Quando cambi un testo, aggiorna anche entrambe le traduzioni. Colori, caratteri e animazioni sono in `styles.css`. Il sito supporta tastiera e preferenze di movimento ridotto; senza JavaScript mostra direttamente l’invito.

I caratteri Cormorant Garamond e Jost vengono caricati da Google Fonts, con caratteri di sistema come fallback. Nessuna analitica e nessun servizio per raccogliere dati degli ospiti. La scelta della lingua viene salvata solo nel browser.

Il paesaggio in `assets/kerala-watercolor.png` è un’illustrazione d’atmosfera generata con ImageGen, non una fotografia della chiesa o del luogo degli eventi. Il prompt è documentato in `assets/art-direction.txt`.

Nome della chiesa verificato nella directory dell’Arcieparchia di Kottayam: https://kottayamad.org/uzhavoor-forane/
