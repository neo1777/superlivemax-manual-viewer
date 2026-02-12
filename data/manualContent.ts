import { ManualPage } from '../types';

export const MANUAL_CONTENT: ManualPage[] = [
    {
        "page": 1,
        "blocks": [
            "Manuale utente dell'APP mobile",
            "Ver.2.2"
        ],
        "images": []
    },
    {
        "page": 2,
        "blocks": [
            "Dichiarazione di non responsabilità",
            " Per quanto riguarda il prodotto con accesso a Internet, l'utilizzo del prodotto sarà totalmente autonomo",
            "rischi. La nostra azienda sarà irresponsabile per operazioni anomale, perdita di privacy o altri danni derivanti da attacchi informatici, attacchi di hacker, ispezione di virus o altri rischi per la sicurezza di Internet; tuttavia, la nostra azienda fornirà supporto tecnico tempestivo, se necessario.",
            " Le leggi sulla sorveglianza variano da paese a paese. Controlla tutte le leggi nella tua regione prima di utilizzare",
            "questo prodotto per scopi di sorveglianza. Non ci assumeremo la responsabilità per eventuali conseguenze derivanti da operazioni illegali.  Informazioni sul manuale",
            " In questo manuale potrebbero essere presenti diversi punti tecnicamente errati o errori di stampa. Gli aggiornamenti",
            "verranno aggiunti nella nuova versione di questo manuale. Il contenuto di questo manuale è soggetto a modifiche senza preavviso.",
            " Tutti gli esempi, le schermate, le figure, i grafici e le illustrazioni utilizzati nel manuale sono solo di riferimento",
            "scopo e i prodotti reali potrebbero essere leggermente diversi da questo manuale.",
            " Nel presente manuale, i marchi commerciali, i nomi dei prodotti, i nomi dei servizi, i nomi delle società, i prodotti che",
            "non sono di proprietà della nostra azienda, appartengono ai rispettivi proprietari."
        ],
        "images": []
    },
    {
        "page": 3,
        "blocks": [
            "Indice",
            "1 Login .................................................................................................................................... 1",
            "2 Aggiunta di dispositivi .................................................................................................................... 1",
            "2.1 Configurazione di rete .................................................................................................... 1",
            "2.1.1 Connessione a un dispositivo tramite LAN .................................................................... 1",
            "2.1.2 Connessione a un dispositivo tramite rete mobile/rete Wi-Fi esterna............... 1",
            "2.2 Aggiunta di dispositivi .................................................................................................... 2",
            "3 Dal vivo .................................................................................................................................... 5",
            "3.1 Visualizzazione dal vivo .................................................................................................................... 5",
            "3.2 Conversazione bidirezionale .................................................................................................................... 6",
            "3.3 Controllo PTZ .................................................................................................................... 7",
            "3.4 Gestione posti esterni/campanelli............................................................................................. 8",
            "4 Riproduzione e backup ............................................................................................................ 8",
            "4.1 Riproduzione .................................................................................................................... 8",
            "4.2 Salvataggio .................................................................................................................... 10",
            "5 Ricerca dispositivo .................................................................................................................... 10",
            "6 Impostazioni del dispositivo.................................................................................................. 11",
            "7 Gestione dei gruppi .................................................................................................... 12",
            "8 Notifiche .................................................................................................................... 15",
            "9 Allarme .................................................................................................................................... 20",
            "9.1 Allarme manuale .................................................................................................................... 20",
            "9.2 Allarme acustico................................................................................................................ 20",
            "9.3 Allarme luce.................................................................................................................. 21",
            "9.4 Inserimento/Disinserimento................................................................................................................ 22",
            "10 Assistenza .................................................................................................................................... 23",
            "10.1 Servizio Autorizzazione Dispositivo............................................................................. 23",
            "10.2 Servizio di archiviazione nel cloud ............................................................................................ 24",
            "11 Altri .................................................................................................................................... 25",
            "11.1 Gestione Conto............................................................................................................. 25",
            "11.2 Gestione della condivisione................................................................................................ 26",
            "11.3 Configurazione Wi-Fi del dispositivo................................................................................. 29",
            "11.4 Gestione dei download .................................................................................................... 30"
        ],
        "images": []
    },
    {
        "page": 4,
        "blocks": [
            "11.5 Impostazioni locali .................................................................................................................... 30",
            "11.6 Album .................................................................................................................... 30",
            "11.7 Informazioni .................................................................................................................... 33"
        ],
        "images": []
    },
    {
        "page": 5,
        "blocks": [
            "1 Accedi",
            "Dopo aver installato questa APP, apri l'APP e scorri verso sinistra per visualizzare alcune funzionalità di questa APP. Tocca \"Inizia una nuova esperienza\" per accedere all'interfaccia di accesso.",
            "Se è la prima volta che accedi, registrati. È possibile registrare un account tramite e-mail o numero di telefono. Tocca \"Registrati\", quindi utilizza l'e-mail o il numero di telefono per registrarti. Se la prossima volta dimentichi la password dell'account, tocca \"Password dimenticata\" per reimpostare la password",
            "tramite e-mail o telefono.",
            "Inoltre, puoi anche utilizzare la modalità ospite per accedere secondo necessità.",
            "2 Aggiunta di dispositivi",
            "2.1 Configurazione della rete",
            "2.1.1 Connessione a un dispositivo tramite LAN",
            " Collegare il dispositivo (IPC/DVR/NVR/SMT/Pannello/...) tramite un router wireless o uno switch",
            "connesso a un router Wi-Fi. Quindi controlla DHCP sia nel router che nel dispositivo per ottenere automaticamente l'IP",
            "oppure inserire manualmente l'indirizzo IP. Se è necessario indirizzare staticamente il dispositivo, sarà necessario",
            "per accedere al dispositivo e configurarne le impostazioni di rete.",
            " Utilizzare la funzione WIFI nel telefono cellulare per connettere il router wireless.",
            " Aggiungi l'indirizzo IP e la porta del dispositivo o scansiona il QRCODE del dispositivo per aggiungere il dispositivo",
            "nell'APP.",
            "Nota: assicurati che la rete telefonica e la rete del dispositivo si trovino nello stesso segmento di rete sulla LAN.",
            "2.1.2 Connessione a un dispositivo tramite rete mobile/rete Wi-Fi esterna",
            " Collega il tuo dispositivo (IPC/DVR/NVR/SMT/Pannello/...) a un router o uno switch collegato a"
        ],
        "images": [
            "page_5_img_1.png",
            "page_5_img_2.png"
        ]
    },
    {
        "page": 6,
        "blocks": [
            "un router.",
            " Configurare la rete del dispositivo (IPC/DVR/NVR/SMT/Pannello/…) ottenendo automaticamente un IP",
            "indirizzo dal router o inserendo manualmente l'indirizzo IP. Se è necessario indirizzare staticamente il file",
            "dispositivo, sarà necessario accedere al dispositivo e configurarne le impostazioni di rete.",
            " Quando si tratta di connettere il dispositivo al di fuori della rete locale, è necessario aggiungere la WAN",
            "Indirizzo IP o nome di dominio del dispositivo oppure abilita la funzione NAT/P2P e quindi scansiona il QRCODE",
            "del dispositivo per aggiungere il dispositivo nell'APP. Se intendi connetterti tramite indirizzo IP o DDNS,",
            "potrebbe essere necessario inoltrare l'indirizzo e le porte dei dispositivi a cui ti connetterai. Fai riferimento al tuo",
            "il manuale del router per saperne di più.",
            "2.2 Aggiunta di dispositivi",
            "Dopo aver effettuato l'accesso all'APP, verrà visualizzata l'interfaccia di aggiunta del dispositivo. Tocca \"Aggiungi dispositivo\" o \"+\" in alto a destra nella pagina del dispositivo, come mostrato di seguito.",
            " Aggiunta del dispositivo tramite la scansione del codice QR",
            "Tocca \"Scansione codice\" e utilizza il telefono per scansionare il codice QR del dispositivo che desideri aggiungere. Quindi inserisci il codice di sicurezza per aggiungere il dispositivo. (Per ottenere il codice QR e il codice di sicurezza del DVR/NVR, fare clic su StartImpostazioniRete—NAT; Per ottenere il codice QR e il codice di sicurezza dell'IPC, fare clic su ConfigSistemaInformazioni di base)."
        ],
        "images": [
            "page_6_img_1.png",
            "page_6_img_2.png",
            "page_6_img_3.png",
            "page_6_img_4.png"
        ]
    },
    {
        "page": 7,
        "blocks": [
            "Se il dispositivo è già vincolato da altri, è necessario prima svincolarlo e poi aggiungerlo. Dopo aver aggiunto il dispositivo, è possibile modificare il nome del dispositivo secondo necessità. Se desideri aggiungere campanelli o altri dispositivi Wi-Fi che supportano la configurazione WiFi e l'aggiunta tramite scansione del codice QR, devi prima configurare il Wi-Fi e il dispositivo verrà aggiunto direttamente. Per la configurazione Wi-Fi, vedere Configurazione Wi-Fi del dispositivo.   Aggiungere manualmente",
            "Inserisci manualmente il numero di serie, il codice di sicurezza o il nome utente e la password da aggiungere. (Per ottenere il numero di serie del DVR/NVR, fare clic su StartImpostazioniRete—NAT; Per ottenere il numero di serie dell'IPC, fare clic su ConfigSistemaInformazioni di base). Nota: se il dispositivo viene aggiunto utilizzando il numero di serie, la funzione NAT/P2P di questo dispositivo deve essere abilitata.  Aggiunta del dispositivo tramite nome di dominio o indirizzo IP",
            "① Tocca \"Aggiungi manualmente\". ② Selezionare \"Aggiungi tramite IP/Dominio\". ③ Immettere l'indirizzo IP/nome dominio, porta HTTP, utente e password. ④ Tocca \"Aggiungi\" per aggiungere il dispositivo. Utente e password: l'utente di accesso e la password del dispositivo.   Aggiunta di dispositivi online",
            "Tocca \"Dispositivo online\" e verranno elencati i dispositivi nella stessa rete locale."
        ],
        "images": [
            "page_7_img_1.png",
            "page_7_img_2.png",
            "page_7_img_3.png"
        ]
    },
    {
        "page": 8,
        "blocks": [
            "Tocca \"Verifica\" per verificare la password del dispositivo. Dopo che è stato verificato con successo, puoi",
            "visualizzare o riprodurre il video. Tocca",
            "per eseguire più operazioni, come “Modifica IP”, “Modifica password dispositivo”, ecc. Toccare “Fine” e selezionare i dispositivi da aggiungere all'account.",
            "Dopo aver aggiunto il dispositivo, è possibile visualizzare le immagini del canale del dispositivo. Tocca",
            "per cambiare",
            "modalità di visualizzazione dell'elenco dei dispositivi."
        ],
        "images": [
            "page_8_img_1.png",
            "page_8_img_2.png",
            "page_8_img_3.png",
            "page_8_img_4.png",
            "page_8_img_5.png",
            "page_8_img_6.png"
        ]
    },
    {
        "page": 9,
        "blocks": [
            "3 Dal vivo",
            "3.1 Visualizzazione dal vivo",
            "Nella pagina del dispositivo, tocca",
            "per visualizzare i video in diretta. Descrizioni delle icone nell'interfaccia della visualizzazione live",
            ": Istantanea. Scegli il canale e toccalo per catturare l'immagine del canale.",
            ": Abilita/disabilita la registrazione locale.",
            ": toccare per passare alla modalità PTZ. È possibile controllare il PTZ facendo scorrere lo schermo.",
            ": attiva/disattiva la conversazione bidirezionale.",
            ": Abilita/disabilita l'allarme audio.",
            ": Abilita/disabilita l'allarme luminoso.",
            ": Abilita/disabilita il tergicristallo.",
            ": Abilita/disabilita l'uscita allarme.",
            ": Ingrandisci (puoi anche scorrere per ingrandire l'immagine corrente con due dita, fino a 8x) *Puoi anche girare fisicamente il telefono per visualizzare l'immagine a schermo intero.",
            ": Seleziona la modalità di illuminazione.    Regolazione dell'ordine di visualizzazione delle icone: tenere premuta l'area delle icone sopra menzionate per visualizzare la seguente finestra."
        ],
        "images": [
            "page_9_img_1.png",
            "page_9_img_2.png",
            "page_9_img_3.png",
            "page_9_img_4.png",
            "page_9_img_5.png",
            "page_9_img_6.png",
            "page_9_img_7.png",
            "page_9_img_8.png",
            "page_9_img_9.png",
            "page_9_img_10.png",
            "page_9_img_11.png",
            "page_9_img_12.png",
            "page_9_img_13.png",
            "page_9_img_14.png"
        ]
    },
    {
        "page": 10,
        "blocks": [
            "Trascinane uno per modificarne la posizione secondo necessità. Successivamente, tocca \"Completa\" per salvare.   Anteprima canale singolo: quando si tocca lo schermo, verranno visualizzate le icone.",
            "N. Descrizione N. Descrizione",
            "1 Pausa 4 Toccare per selezionare la modalità di visualizzazione dello schermo",
            "2 Toccare per riprodurre l'audio 5 Toccare per girare le pagine avanti o indietro",
            "3 Toccare per selezionare la risoluzione video 6 Visualizzazione orizzontale",
            "Tocca un elemento dell'elenco eventi per visualizzare il video dell'allarme registrato.",
            "3.2 Conversazione bidirezionale",
            "Tocca",
            "nell'interfaccia live per accedere alla pagina di conversazione bidirezionale."
        ],
        "images": [
            "page_10_img_1.png",
            "page_10_img_2.png",
            "page_10_img_3.png",
            "page_10_img_4.png",
            "page_10_img_5.png",
            "page_10_img_6.png"
        ]
    },
    {
        "page": 11,
        "blocks": [
            "Tieni premuto",
            "parlare. Rilascia per interrompere l'invio dell'audio. Tocca",
            "per uscire dall'interfaccia di conversazione bidirezionale. Nota: solo alcuni dispositivi supportano la funzione di conversazione bidirezionale. Se il dispositivo che aggiungi non supporta la conversazione bidirezionale, questa funzione nell'APP non avrà effetto.",
            "3.3 Controllo PTZ",
            "Il dispositivo aggiunto deve supportare la funzione PTZ, altrimenti la modalità PTZ non può essere abilitata. Tocca il canale",
            "finestra e quindi toccare",
            "per vedere l'immagine seguente.",
            "Controlla il PTZ toccando i pulsanti di direzione. Tocca le icone corrispondenti sopra per impostare zoom, messa a fuoco, zoom o richiamare preimpostazione e crociera."
        ],
        "images": [
            "page_11_img_1.png",
            "page_11_img_2.png",
            "page_11_img_3.png",
            "page_11_img_4.png",
            "page_11_img_5.png",
            "page_11_img_6.png",
            "page_11_img_7.png",
            "page_11_img_8.png"
        ]
    },
    {
        "page": 12,
        "blocks": [
            "3.4 Gestione posto esterno/campanello",
            "Puoi configurare il Wi-Fi e aggiungere un posto esterno/campanello eseguendo la scansione del codice QR. Dopo averli aggiunti, puoi ricevere/rifiutare una chiamata da un posto esterno/campanello o aprire la porta da remoto secondo necessità.",
            "Nell'interfaccia di visualizzazione live di un videocitofono/campanello, è possibile eseguire una conversazione bidirezionale tra l'APP e il dispositivo oppure aprire la porta 1/2 toccando Blocca 1/2 e scorrendo verso destra. Inoltre, puoi ricevere/rifiutare una chiamata secondo necessità. Andare su NotificheChiama per visualizzare i record delle chiamate in entrata, in uscita o perse. Nota: è necessario prima abilitare \"Notifiche di chiamata\" altrimenti non sarà possibile ricevere le notifiche di chiamata. (Vai su “Io” “Impostazioni di notifica” per abilitare)",
            "4 Riproduzione e backup",
            "4.1 Riproduzione",
            "Nell'interfaccia del dispositivo toccare",
            "per accedere alla pagina di riproduzione. Nella pagina di riproduzione, toccare",
            "per impostare la data, l'ora e i canali di riproduzione. Successivamente, tocca \"OK\" per riprodurre i video in base alle tue impostazioni."
        ],
        "images": [
            "page_12_img_1.png",
            "page_12_img_2.png",
            "page_12_img_3.png",
            "page_12_img_4.png",
            "page_12_img_5.png",
            "page_12_img_6.png"
        ]
    },
    {
        "page": 13,
        "blocks": [
            "Nell'interfaccia di anteprima della fotocamera, puoi anche toccare \"Riproduzione\" per andare alla pagina di riproduzione.",
            "Sorgente di riproduzione: è possibile scegliere di riprodurre il video registrato dall'HDD/scheda SD del dispositivo",
            "(tocca",
            ") o dal server di archiviazione cloud (tocca",
            "). Solo quando acquisti la funzione di archiviazione nel cloud per i dispositivi o le fotocamere, puoi ottenere i video di archiviazione nel cloud.",
            "Controlla la riproduzione utilizzando i pulsanti indicati di seguito. Utilizzare due dita per ingrandire o rimpicciolire la scala temporale oppure toccare +/- a destra per ingrandire o ridurre la scala temporale. Ruota il telefono per visualizzarlo in modalità orizzontale. Tocca \"Oggi\" per scegliere i dati di riproduzione; Tocca",
            "per selezionare la tipologia di evento; toccare",
            "per selezionare la telecamera desiderata.",
            "：Istantanea",
            "：Abilita/disabilita la registrazione locale."
        ],
        "images": [
            "page_13_img_1.png",
            "page_13_img_2.png",
            "page_13_img_3.png",
            "page_13_img_4.png",
            "page_13_img_5.png",
            "page_13_img_6.png",
            "page_13_img_7.png",
            "page_13_img_8.png",
            "page_13_img_9.png",
            "page_13_img_10.png",
            "page_13_img_11.png"
        ]
    },
    {
        "page": 14,
        "blocks": [
            ": Velocità di riproduzione",
            "：Riavvolgi 10s",
            "：Avanzamento veloce di 10 secondi",
            ": Ingrandisci (puoi anche scorrere per ingrandire l'immagine corrente con due dita, fino a 8x)",
            ": Scarica i file registrati. Nota: è anche possibile visualizzare i video registrati tramite la ricerca di persone/veicoli (supportato solo dall'NVR V1.4.13).",
            "4.2 Salvataggio",
            "Nella pagina di riproduzione, toccare",
            "nell'area della barra degli strumenti di riproduzione, quindi toccare",
            "per andare al backup",
            "modalità. Sposta",
            "per selezionare l'ora di inizio e l'ora di fine del backup. Successivamente, tocca",
            "“Download” per salvare il video nell'album dell'APP.",
            "5 Ricerca dispositivo",
            "Nella pagina del dispositivo, tocca",
            "e seleziona \"Ricerca dispositivo\" per andare alla pagina di ricerca del dispositivo. Puoi",
            "cercare gli eventi corrispondenti per tipo di evento, telecamera e ora."
        ],
        "images": [
            "page_14_img_1.png",
            "page_14_img_2.png",
            "page_14_img_3.png",
            "page_14_img_4.png",
            "page_14_img_5.png",
            "page_14_img_6.png",
            "page_14_img_7.png",
            "page_14_img_8.png",
            "page_14_img_9.png",
            "page_14_img_10.png"
        ]
    },
    {
        "page": 15,
        "blocks": [
            "Nota: solo l'NVR V1.4.13/1.4.14 supporta la ricerca di persone/veicoli. Tocca l'evento cercato per visualizzarne i dettagli.",
            "Tocca \"",
            "\" e seleziona \"Scarica video\" per scaricare il video nell'album dell'APP.",
            "Tocca",
            "per accedere rapidamente alla pagina di visualizzazione live; toccare",
            "per accedere rapidamente alla pagina di riproduzione.",
            "6 Impostazioni del dispositivo",
            "Nella pagina del dispositivo, toccare \"",
            "\" e selezionare \"Impostazioni\" per accedere alla pagina delle impostazioni del dispositivo come mostrato di seguito. Nota: verranno visualizzate informazioni diverse a seconda che il dispositivo sia un DVR/NVR o un IP"
        ],
        "images": [
            "page_15_img_1.png",
            "page_15_img_2.png",
            "page_15_img_3.png",
            "page_15_img_4.png",
            "page_15_img_5.png",
            "page_15_img_6.png",
            "page_15_img_7.png",
            "page_15_img_8.png",
            "page_15_img_9.png"
        ]
    },
    {
        "page": 16,
        "blocks": [
            "Telecamera. Le seguenti immagini sono solo di riferimento.",
            "Tocca il nome del dispositivo per modificarne l'alias. Tocca \"Informazioni di base\" per visualizzare le informazioni di base del dispositivo,",
            "come alias, ID dispositivo, versione hardware, versione kernel, versione firmware, data di build, ecc.",
            "Tocca \"Rimuovi dispositivo\" per scollegare il dispositivo dall'account corrente.",
            "7 Gestione del gruppo",
            "Puoi aggiungere diversi dispositivi o canali a diversi gruppi in base alle tue abitudini di utilizzo.",
            " Creare un gruppo",
            "Nella pagina del dispositivo, tocca",
            "e seleziona \"Gestione gruppi\". Nella pagina di gestione del gruppo, tocca",
            "“Crea gruppo” per creare un gruppo."
        ],
        "images": [
            "page_16_img_1.png",
            "page_16_img_2.png",
            "page_16_img_3.png",
            "page_16_img_4.png",
            "page_16_img_5.png"
        ]
    },
    {
        "page": 17,
        "blocks": [
            " Modificare l'ordine del gruppo o eliminare un gruppo",
            "Nella pagina di gestione del gruppo sopra (al centro), tocca \"",
            "\" per andare alla pagina di edizione del gruppo.",
            "Premere e trascinare il nome di un gruppo per modificarne l'ordine. Tocca \"",
            "\" per eliminare il nome del gruppo.",
            " Modificare il nome del gruppo e dei canali",
            "Nella pagina di gestione del dispositivo, tocca il nome di un gruppo per andare alla pagina dei dettagli del gruppo. Tocca il gruppo",
            "casella del nome per modificarne il nome. Tocca \"Aggiungi\" per aggiungere nuovi dispositivi o canali. Tocca \"Modifica\" per regolare",
            "visualizzare l'ordine di visualizzazione dei canali o eliminare i canali secondo necessità."
        ],
        "images": [
            "page_17_img_1.png",
            "page_17_img_2.png",
            "page_17_img_3.png",
            "page_17_img_4.png",
            "page_17_img_5.png",
            "page_17_img_6.png",
            "page_17_img_7.png"
        ]
    },
    {
        "page": 18,
        "blocks": [
            "Nella pagina del dispositivo, tocca",
            "sotto un dispositivo, seleziona \"Aggiungi al gruppo\" e quindi aggiungi un nuovo gruppo o",
            "selezionare un gruppo creato per aggiungere tutti i canali del dispositivo al gruppo.",
            "Inoltre, puoi selezionare dispositivi o canali per aggiungerli. Nell'angolo in alto a destra del dispositivo",
            "pagina, toccare \"+\", selezionare \"Crea gruppo\". Seleziona i dispositivi o i canali desiderati per aggiungerli a un gruppo.",
            "Puoi scegliere un gruppo creato o toccare \"Crea\" per creare un nuovo gruppo."
        ],
        "images": [
            "page_18_img_1.png",
            "page_18_img_2.png",
            "page_18_img_3.png",
            "page_18_img_4.png",
            "page_18_img_5.png",
            "page_18_img_6.png"
        ]
    },
    {
        "page": 19,
        "blocks": [
            "Successivamente, puoi visualizzare diversi nomi di gruppi come mostrato di seguito:",
            "Tocca \"I miei dispositivi\" per visualizzare tutti i dispositivi e i relativi canali. Tocca il nome del gruppo per visualizzare i canali",
            "nel gruppo. Puoi anche toccare",
            "e scegli un gruppo per visualizzare i canali del gruppo.",
            "8 Notifiche",
            "Nella pagina “Notifiche” è possibile visualizzare le notifiche di allarmi, chiamate e servizi. Prima di ricevere le notifiche, assicurati che la notifica dei messaggi del dispositivo sia abilitata. Inoltre, puoi abilitare/disabilitare le notifiche fuori dall'APP e le notifiche in-APP (tocca \"Io\"  \"Impostazioni messaggio\"). Dopo aver abilitato la notifica del dispositivo, è possibile inviare il messaggio del dispositivo."
        ],
        "images": [
            "page_19_img_1.png",
            "page_19_img_2.png",
            "page_19_img_3.png",
            "page_19_img_4.png",
            "page_19_img_5.png",
            "page_19_img_6.png"
        ]
    },
    {
        "page": 20,
        "blocks": [
            "Nella pagina \"Messaggi\", tocca",
            "e seleziona \"Impostazioni di notifica\" per abilitare o disabilitare la notifica degli eventi del dispositivo pertinente e la notifica delle operazioni del fornitore di servizi.",
            "Notifica operativa del fornitore di servizi: dopo che i dispositivi dell'utente finale sono stati gestiti dall'installatore, l'utente finale riceverà le notifiche operative pertinenti dell'installatore, come le informazioni sulla condivisione del canale, la consegna del sito e la richiesta di gestione del dispositivo, l'annullamento della richiesta di gestione del sito, ecc.  Notifiche di allarme",
            "Quando si verifica un evento di allarme, le informazioni sull'allarme verranno visualizzate come mostrato di seguito."
        ],
        "images": [
            "page_20_img_1.png",
            "page_20_img_2.png",
            "page_20_img_3.png",
            "page_20_img_4.png",
            "page_20_img_5.png",
            "page_20_img_6.png",
            "page_20_img_7.png"
        ]
    },
    {
        "page": 21,
        "blocks": [
            "Inoltre, puoi anche toccare le informazioni sull'allarme nella pagina \"Notifiche\" per visualizzarne i dettagli. Tocca \"Video\" per riprodurre il video registrato. Nella pagina del video, tocca",
            "per scaricare il video nell'album dell'APP. Inoltre, puoi anche impostare il tempo di riproduzione secondo necessità.",
            "Tocca",
            "per accedere all'interfaccia di visualizzazione live.",
            "Tocca",
            "per riprodurre il video. Nella pagina \"Notifiche\", scorri verso sinistra su una notifica per visualizzare un pulsante di eliminazione. Tocca questo pulsante per eliminare la notifica. Tocca",
            "e seleziona \"Segna come tutte lette\" per contrassegnare tutte le notifiche come lette. Inoltre, puoi anche eliminare la notifica o contrassegnare la notifica selezionata come letta in batch toccando \"Modifica\". Tocca \"",
            "\" per visualizzare le notifiche per data e dispositivo.",
            " Informazioni sulla chiamata",
            "Dopo aver aggiunto un posto esterno/campanello, è possibile visualizzare i record delle chiamate ricevute/effettuate/perse nella pagina successiva."
        ],
        "images": [
            "page_21_img_1.png",
            "page_21_img_2.png",
            "page_21_img_3.png",
            "page_21_img_4.png",
            "page_21_img_5.png",
            "page_21_img_6.png",
            "page_21_img_7.png",
            "page_21_img_8.png",
            "page_21_img_9.png",
            "page_21_img_10.png",
            "page_21_img_11.png"
        ]
    },
    {
        "page": 22,
        "blocks": [
            " Informazioni sul servizio",
            "Nella pagina del servizio, è possibile visualizzare le informazioni di condivisione del canale, la richiesta di consegna del sito e di gestione del dispositivo, annullare la richiesta di gestione del sito, ecc. Toccare le informazioni corrispondenti e accettare o rifiutare le richieste secondo necessità.",
            " Blocca/Sblocca notifiche",
            "Blocca notifiche:",
            "1. Scorri verso sinistra sulla notifica che desideri bloccare, quindi tocca",
            "\".",
            "2. Nella casella di notifica del blocco, fare clic su \"Continua\" per confermare. Successivamente non riceverai più messaggi",
            "di questo tipo di evento."
        ],
        "images": [
            "page_22_img_1.png",
            "page_22_img_2.png",
            "page_22_img_3.png",
            "page_22_img_4.png",
            "page_22_img_5.png"
        ]
    },
    {
        "page": 23,
        "blocks": [
            "Sblocca notifiche:",
            "1. Nella pagina delle notifiche, tocca \"",
            "\" e seleziona \"Impostazioni di notifica\".",
            "2. Nella pagina delle impostazioni di notifica, toccare \"Gestione notifiche dispositivo\" e selezionare il",
            "desiderato dispositivo.",
            "3. Tocca \"Blocco notifiche\".",
            "4. Trova il tipo di notifica bloccato e il canale e tocca \"Cancella\".  Tocca \"Modifica\", seleziona",
            "tipi e canali di notifica bloccati e toccare \"Cancella\" per sbloccare le notifiche in batch."
        ],
        "images": [
            "page_23_img_1.png",
            "page_23_img_2.png",
            "page_23_img_3.png",
            "page_23_img_4.png",
            "page_23_img_5.png"
        ]
    },
    {
        "page": 24,
        "blocks": [
            "9 Allarme",
            "9.1 Allarme manuale",
            "Nota: se il tuo dispositivo non supporta la funzione di uscita dell'allarme, salta le istruzioni.",
            "Toccare \"",
            "\" per andare alla pagina degli allarmi manuali.",
            "Tocca il nome dell'uscita allarme per attivare immediatamente l'allarme; toccare \"",
            "\" per interrompere la sveglia; toccare \"Eliminazione con un clic\" per cancellare tutte le uscite di allarme.",
            "9.2 Allarme acustico",
            "Per DVR/NVR/Telecamere di allarme, selezionare il canale e toccare",
            "per abilitare l'allarme audio."
        ],
        "images": [
            "page_24_img_1.png",
            "page_24_img_2.png",
            "page_24_img_3.png",
            "page_24_img_4.png",
            "page_24_img_5.png"
        ]
    },
    {
        "page": 25,
        "blocks": [
            "Nota: solo alcune telecamere supportano l'allarme audio.",
            "9.3 Allarme luminoso",
            "Per DVR/NVR/Telecamere di allarme, selezionare il canale e toccare",
            "per abilitare l'allarme luminoso.",
            "Nota: solo alcune telecamere supportano l'allarme luminoso."
        ],
        "images": [
            "page_25_img_1.png",
            "page_25_img_2.png",
            "page_25_img_3.png",
            "page_25_img_4.png"
        ]
    },
    {
        "page": 26,
        "blocks": [
            "9.4 Inserimento/Disinserimento",
            "Nella pagina del dispositivo, tocca",
            "per inserire o disinserire le telecamere specificate.",
            "È possibile impostare tre modalità.",
            "Modalità assente: i collegamenti di allarme delle telecamere del gruppo verranno attivati ​​normalmente secondo",
            "le impostazioni degli allarmi delle telecamere.",
            "Modalità Parziale: se è abilitato “Esclusione Inserimento Parziale” per le telecamere del gruppo, il disinserimento selezionato",
            "gli elementi di collegamento (attualmente solo allarme luminoso e acustico) non verranno attivati ​​quando viene rilevato un",
            "evento/allarme, ma per le telecamere del gruppo si disabilita “Stay Arm Bypass”, i collegamenti allarme",
            "verrà normalmente attivato quando viene rilevato un evento/allarme.",
            "Modalità di disinserimento (disinserimento con un clic): gli elementi di collegamento di disinserimento selezionati (attualmente solo luce e",
            "allarme audio) delle telecamere del gruppo non verranno attivati ​​quando viene rilevato un evento/allarme.",
            "I passaggi di impostazione sono i seguenti:",
            "1. Nella pagina di attivazione/disattivazione, toccare \"Aggiungi\" o \"+\" per accedere alla pagina di aggiunta.",
            "2. Toccare il nome per aggiungere il nome del gruppo di attivazione/disattivazione.",
            "3. Nella pagina di aggiunta, controllare le telecamere/sensori desiderati.",
            "4. Toccare il nome della telecamera/sensore e impostare gli elementi di collegamento per la disattivazione. Quindi abilitare/disabilitare “Inserimento Parziale",
            "Bypass” secondo necessità."
        ],
        "images": [
            "page_26_img_1.png",
            "page_26_img_2.png",
            "page_26_img_3.png",
            "page_26_img_4.png",
            "page_26_img_5.png"
        ]
    },
    {
        "page": 27,
        "blocks": [
            "5. Tocca il nome del gruppo per passare dalla modalità assente a quella di disinserimento. Oppure puoi toccare la scorciatoia",
            "pulsanti in basso per impostare rapidamente tutti i gruppi sulla stessa modalità. Se vuoi impostare il gruppo su",
            "\"Modalità Resta\", puoi solo toccare",
            "impostare.",
            "10 Servizio",
            "10.1 Servizio di autorizzazione del dispositivo",
            "Tocca \"Servizio\" per andare alla pagina del servizio. In questa pagina puoi autorizzare l'installatore a gestire il tuo",
            "dispositivo. I passaggi di impostazione sono i seguenti.",
            "1. Tocca \"Autorizza ora\" e inserisci l'e-mail dell'installatore che desideri autorizzare. Successivamente, tocca",
            "“Passaggio successivo”.",
            "2. Selezionare il dispositivo e impostare le autorizzazioni e la durata toccando “",
            "”."
        ],
        "images": [
            "page_27_img_1.png",
            "page_27_img_2.png",
            "page_27_img_3.png",
            "page_27_img_4.png"
        ]
    },
    {
        "page": 28,
        "blocks": [
            "3. Tocca \"Conferma\" per completare la richiesta di autorizzazione.",
            "4. Nell'APP del partner, toccare \"Notifiche\" per visualizzare le informazioni sulla richiesta di gestione del dispositivo e",
            "toccare \"Accetto\" per accettare l'autorizzazione.",
            " Annulla l'autorizzazione del sito/dispositivo",
            "1. Nella pagina del servizio, tocca \"Visualizza dettagli\".",
            "2. Toccare",
            "accanto al nome del sito.",
            "3. Selezionare \"Annulla gestione sito\" e toccare \"Continua\" per annullare.",
            "10.2 Servizio di archiviazione nel cloud",
            "Tocca \"Servizio\" per andare alla pagina del servizio. In questa pagina è possibile visualizzare il servizio cloud acquistato da",
            "l'installatore per tuo conto, nonché i corrispondenti record di acquisto.",
            "Dopo aver acquistato il servizio di archiviazione cloud, i video registrati dei canali interessati possono essere",
            "archiviati nel cloud. È possibile riprodurre i video registrati nell'interfaccia di riproduzione.",
            "1. Nell'interfaccia dei dispositivi, seleziona il canale in cui hai acquistato il servizio di archiviazione cloud.",
            "2. Toccare",
            "per accedere all'interfaccia di riproduzione.",
            "3. Impostare il tempo di riproduzione e toccare",
            "per riprodurre il video archiviato nel cloud."
        ],
        "images": [
            "page_28_img_1.png",
            "page_28_img_2.png",
            "page_28_img_3.png",
            "page_28_img_4.png",
            "page_28_img_5.png"
        ]
    },
    {
        "page": 29,
        "blocks": [
            "11 Altri",
            "11.1 Gestione del conto",
            "Vai alla pagina \"Io\". Tocca il nome dell'account per accedere all'interfaccia di gestione dell'account come mostrato di seguito.",
            "Avatar: tocca per modificare una nuova immagine secondo necessità.",
            "Nickname: toccare per modificare il nome dell'account.",
            "Il mio codice QR: questo codice QR può essere condiviso con altri utenti dell'APP. Scansionando questo codice QR, un altro",
            "L'utente dell'APP può ottenere rapidamente le informazioni del tuo account. Ad esempio, se A vuole condividere il file",
            "dispositivo dell'account con B, le informazioni sull'account di B devono essere inserite e quindi A può scansionarle"
        ],
        "images": [
            "page_29_img_1.png",
            "page_29_img_2.png",
            "page_29_img_3.png",
            "page_29_img_4.png",
            "page_29_img_5.png"
        ]
    },
    {
        "page": 30,
        "blocks": [
            "Codice QR di B per inserire velocemente le informazioni utente.",
            "Centro sicurezza: toccare per eliminare l'account corrente o associare numero di telefono o e-mail.",
            "Esci: esci dall'account corrente e torna all'interfaccia di accesso.",
            "11.2 Gestione della condivisione",
            "Dopo aver associato un dispositivo al tuo account, puoi condividere il dispositivo con altri. Ci sono molti modi",
            "per condividere i tuoi dispositivi con altri.",
            "UN. Nella pagina del dispositivo, tocca \"+\" nell'angolo in alto a destra e seleziona \"Condividi\" (immagine a sinistra).",
            "B. Nella pagina del dispositivo, tocca \"",
            "\" sotto un dispositivo e seleziona \"Condividi\" (immagine a destra).",
            "C. Nella pagina \"Io\", tocca \"Gestione condivisione\"  \"Avvia condivisione\".",
            "Qui prendiamo la condivisione dei dispositivi tramite il menu \"Gestione condivisione\" come esempio da introdurre.",
            "1. Nella pagina \"Io\", tocca \"Gestione condivisione\".",
            "2. Nella pagina \"Gestione condivisione\", tocca \"Avvia condivisione\" o tocca \"+\" nella pagina \"Dispositivo\" e",
            "seleziona \"Condivisione dispositivo\".",
            "3. Inserisci l'e-mail o il numero di telefono o scansiona il codice QR dell'account dell'altra parte. Tocca \"Prossimo",
            "Passaggio\"."
        ],
        "images": [
            "page_30_img_1.png",
            "page_30_img_2.png",
            "page_30_img_3.png",
            "page_30_img_4.png"
        ]
    },
    {
        "page": 31,
        "blocks": [
            "4. Seleziona il dispositivo che desideri condividere e tocca \"Passaggio successivo\".",
            "5. Scegli le funzioni che desideri condividere toccando “",
            "”.",
            "6. Dopo aver confermato le impostazioni di cui sopra, toccare \"Completa\" per terminare la condivisione.",
            "Nota: un dispositivo può essere condiviso con un massimo di 10 amici.",
            "7. Dopo che l'account dell'altra parte ha ricevuto il messaggio di condivisione, vai all'interfaccia \"Condiviso da altri\".",
            "Tocca \"Accetta\"."
        ],
        "images": [
            "page_31_img_1.png",
            "page_31_img_2.png",
            "page_31_img_3.png",
            "page_31_img_4.png",
            "page_31_img_5.png",
            "page_31_img_6.png"
        ]
    },
    {
        "page": 32,
        "blocks": [
            "Se ci sono più dispositivi da accettare, puoi toccare \"Accetta tutti\". Se non accetti la condivisione",
            "per 24 ore, la condivisione verrà annullata automaticamente.",
            " Annulla condivisione",
            "1. Nella pagina \"Gestione condivisione\", tocca la scheda \"Il mio dispositivo\" e seleziona l'account che possiedi",
            "condiviso con per andare alla pagina dei dettagli della condivisione.",
            "2. Toccare",
            "per selezionare il canale/dispositivo di cui desideri annullare la condivisione.",
            "3. Tocca \"Annulla condivisione\"."
        ],
        "images": [
            "page_32_img_1.png",
            "page_32_img_2.png",
            "page_32_img_3.png",
            "page_32_img_4.png",
            "page_32_img_5.png",
            "page_32_img_6.png"
        ]
    },
    {
        "page": 33,
        "blocks": [
            "I dispositivi accettati possono essere visualizzati nella pagina dei dispositivi. Toccare “",
            "” “Impostazioni””Elimina",
            "Dispositivo” per annullare la condivisione.",
            "11.3 Configurazione Wi-Fi del dispositivo",
            "Per alcuni dispositivi (ad esempio: posto esterno, campanello) è possibile configurare il Wi-Fi scansionando il loro",
            "Codici QR. Vai alla pagina “Io” e seleziona “Configurazione Wi-Fi dispositivo” per configurare una rete Wi-Fi",
            "rete. Qui prendiamo ad esempio la configurazione del Wi-Fi di un campanello da introdurre.",
            "1. Abilita la rete Wi-Fi del tuo telefono.",
            "2. Accendi il campanello. Dopo che la luce blu del dispositivo si è accesa, toccare \"Io\"  \"Dispositivo Wi-Fi",
            "Configurazione\" per scansionare il codice QR del dispositivo.",
            "3. Selezionare \"L'indicatore luminoso blu......\" e toccare \"Passaggio successivo\".",
            "4. Tocca \"Seleziona Wi-Fi\" per scegliere il Wi-Fi a cui è connesso il tuo telefono. Successivamente, inserisci",
            "password e toccare \"Passaggio successivo\".",
            "5. Tocca \"CONNETTI\" e attendi. Una volta connessa correttamente la rete Wi-Fi, il sistema",
            "esci automaticamente dalla pagina di configurazione Wi-Fi e viene visualizzato un suggerimento per la connessione riuscita.",
            "Nota: il dispositivo non verrà aggiunto all'APP dopo aver collegato il Wi-Fi qui. Se vuoi aggiungi il",
            "dispositivo, devi toccare \"+\" nella pagina del dispositivo e scegliere \"Scansiona codice QR\" da aggiungere dopo che il Wi-Fi è",
            "configurato. Oppure puoi scansionare direttamente il codice QR del dispositivo nella pagina del dispositivo per configurarlo"
        ],
        "images": [
            "page_33_img_1.png",
            "page_33_img_2.png",
            "page_33_img_3.png",
            "page_33_img_4.png",
            "page_33_img_5.png"
        ]
    },
    {
        "page": 34,
        "blocks": [
            "Wi-Fi e aggiungi il dispositivo.",
            "11.4 Gestione download",
            "Toccare Il mioDownload per visualizzare l'elenco dei download; una volta completato il download,",
            "salvare automaticamente nell'album dell'APP.",
            "11.5 Impostazioni locali",
            "Vai alla pagina \"Impostazioni locali\" come mostrato di seguito. Puoi aggiungere l'audio locale o importare dispositivi di",
            "l'account di Superlive plus sull'APP Superlive Max secondo necessità.",
            "11.6Album",
            " Album locale",
            "Vai all'interfaccia dell'album come mostrato di seguito."
        ],
        "images": [
            "page_34_img_1.png",
            "page_34_img_2.png"
        ]
    },
    {
        "page": 35,
        "blocks": [
            "Descrizioni dei pulsanti",
            "：Ritorna all'interfaccia precedente",
            ": Seleziona. Tocca",
            "per selezionare un file; toccare",
            "per eliminare il file selezionato; toccare",
            "per salvare i file in",
            "il telefono.",
            "Anteprima immagine:",
            "Seleziona un'immagine e tocca per passare alla modalità di anteprima dell'immagine.",
            ": toccare per salvare l'immagine sul telefono.",
            "：Toccare per condividere l'immagine."
        ],
        "images": [
            "page_35_img_1.png",
            "page_35_img_2.png",
            "page_35_img_3.png",
            "page_35_img_4.png",
            "page_35_img_5.png",
            "page_35_img_6.png",
            "page_35_img_7.png",
            "page_35_img_8.png",
            "page_35_img_9.png",
            "page_35_img_10.png",
            "page_35_img_11.png"
        ]
    },
    {
        "page": 36,
        "blocks": [
            ": toccare per accedere alla modalità orizzontale.",
            ": toccare per eliminare l'immagine.",
            "Anteprima video:",
            "Nell'interfaccia dell'album è possibile cercare i video registrati in locale. Tocca il pulsante di riproduzione al centro",
            "dell'immagine per riprodurre il video registrato in locale.",
            " Album su Cloud Drive",
            "Dopo aver acquistato il servizio di archiviazione cloud, puoi ottenere spazio su disco cloud gratuito. Dettagli del",
            "lo spazio libero su disco del cloud (ad es. capacità disponibile, periodo di validità) può essere visualizzato nella pagina dei servizi.",
            "Le immagini o i video scaricati possono essere archiviati automaticamente nell'album del cloud drive. Puoi",
            "visualizzarli toccando IoAlbum Cloud Drive. Seleziona un video o un'immagine e tocca per visualizzarne l'anteprima.",
            "Puoi eliminarli o condividerli secondo necessità. Nella pagina dell'album del cloud drive, tocca",
            "per abilitare/disabilitare",
            "archiviazione automatica di video e immagini scaricati nell'album del cloud drive."
        ],
        "images": [
            "page_36_img_1.png",
            "page_36_img_2.png",
            "page_36_img_3.png",
            "page_36_img_4.png",
            "page_36_img_5.png"
        ]
    },
    {
        "page": 37,
        "blocks": [
            "Nella pagina dell'album del cloud drive, tocca \"Il mio album\" per andare alla pagina dell'album locale.",
            "11.7 Informazioni su",
            "In questa interfaccia è possibile verificare le informazioni sulla versione del software APP.",
            "Inoltre, in questa interfaccia è possibile leggere l'informativa sulla privacy e i termini del servizio.",
            "Segnalazione di bug: questo programma ti permetterà di generare una segnalazione di bug nel caso in cui si verifichi un errore",
            "durante l’utilizzo dell’APP. La modalità di analisi può essere abilitata toccando",
            "in alto a destra del bug",
            "interfaccia di segnalazione. Riproduci i problemi che hai riscontrato. Torna all'interfaccia della segnalazione di bug e tocca \"Invia",
            "Segnalazione di bug\". Le segnalazioni di bug generate possono essere inviate alla nostra azienda per ulteriori approfondimenti",
            "Risoluzione dei problemi."
        ],
        "images": [
            "page_37_img_1.png",
            "page_37_img_2.png",
            "page_37_img_3.png",
            "page_37_img_4.png",
            "page_37_img_5.png"
        ]
    }
];