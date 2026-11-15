const TALLY_EMBEDS = {
  ca: "https://tally.so/embed/aO58Eq?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
  es: "https://tally.so/embed/kbeV51?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
};

const UC_DATA = {
  ca: {
    metaTitle: "Unió Ciutadana (UC) Sabadell — Projecte en consulta",
    topBarText: "SABADELL · PROJECTE CIUTADÀ EN FASE DE CONSULTA",
    topBarBadge: "Esborrany obert (sense registre jurídic previ)",
    navHome: "Inici",
    navProgram: "Programa (7 Eixos)",
    navDistricts: "7 Districtes",
    navEconomy: "Memòria Econòmica",
    navEthics: "Compromís Ètic",
    navFeedback: "Opina",

    heroEyebrow: "UNIÓ CIUTADANA (UC) SABADELL · CONSULTA VEÏNAL",
    heroTitle: "Sabadell per a qui la treballa. Governar obeint el poble.",
    heroLead: "Unió Ciutadana (UC) és una iniciativa ciutadana per retornar l'Ajuntament a la seva majoria treballadora. Presentem un esborrany de programa municipalista, finançat línia a línia sobre el Pressupost Municipal (303,3 M€), per acabar amb la «Sabadell a dues velocitats».",
    transparencyTitle: "Avís de transparència (fase de consulta):",
    transparencyText: "Aquesta web és un esborrany obert i participatiu sense registre jurídic ni candidatura formalitzada encara. El nostre objectiu és escoltar el veïnat de Sabadell per saber si aquesta proposta té suport abans de fer cap pas formal.",
    heroBtnProgram: "Explorar els 7 Eixos",
    heroBtnFeedback: "Donar la meva opinió",

    notaryEyebrow: "PROPOSTA DE COMPROMÍS ÈTIC · A SIGNAR DAVANT DE NOTARI",
    notaryPerMonth: "nets al mes",
    notaryDesc: "Sou màxim proposat per a l'alcalde i regidors en cas de governar, a signar davant de notari i aprovar al primer Ple. Venim a servir Sabadell, no a enriquir-nos amb la política.",
    notaryCompare: "Segons decret de la Diputació (2024), l'actual alcaldessa percep 7.295,75 € bruts/mes en 14 pagues (>102.000 €/any).",

    metricReassigned: "Reassignats i generats anualment (5,7% del pressupost)",
    metricHousing: "Habitatges assequibles mobilitzats (≈ 64 M€ amb crèdit ICO/BEI)",
    metricTaxes: "Pujada d'impostos a famílies treballadores i petit comerç",
    metricRule: "Regla d'inversió: 80% fora del Centre",

    principle1Tag: "COMPETÈNCIA MUNICIPAL",
    principle1Text: "En allò que l'Ajuntament pot fer per si mateix ens comprometem a fer, amb la xifra, la font i el calendari a la vista.",
    principle2Tag: "EXIGÈNCIA INSTITUCIONAL",
    principle2Text: "En allò que depèn de la Generalitat o l'Estat (R4, C-58, residències, centres de dia, Parc Taulí) ens comprometem a exigir-ho.",
    principle3Tag: "RIGOR PRESSUPOSTARI",
    principle3Text: "Zero estalvis ficticis per remunicipalització abans del 2030 i cap mesura finançada amb deute per a despesa corrent.",

    programEyebrow: "PROGRAMA ELECTORAL 2027–2031",
    programTitle: "Els 7 Eixos per transformar Sabadell",
    programSubtitle: "Selecciona cada eix per consultar les mesures concretes, el seu cost anual i com es financen.",

    axes: [
      {
        id: 1,
        shortTitle: "Ètica política i reconversió tècnica",
        title: "Eix 1. Ètica política, fi de privilegis i reconversió tècnica municipal",
        budget: "Allibera 2,4 M€/any (9,6 M€ al mandat)",
        intro: "Gobernar una gran ciutat exigeix màxim rigor tècnic, no destinar prop d'1,8 M€ anuals a personal eventual i Gabinet d'Alcaldia ni malgastar en consultores externes.",
        measures: [
          { title: "Limitació salarial immediata", desc: "Retribucions de l'alcalde i regidors amb dedicació exclusiva topades a 2.000 € nets al mes, signades davant de notari i aprovades al primer Ple." },
          { title: "Personal de confiança al mínim i experts per concurs", desc: "Reducció al mínim legal dels llocs eventuals d'assessoria, propaganda i xarxes. Perfils tècnics (arquitectes, juristes d'habitatge, economistes) per convocatòria pública de mèrits." },
          { title: "Empoderament dels més de 1.500 tècnics municipals", desc: "Retallada del 50% en consultories externes aprofitant el talent d'enginyers, arquitectes, interventors i treballadors socials propis." },
          { title: "Consell Assessor del Territori de Sabadell (cost 0 €)", desc: "Òrgan consultiu permanent amb investigadors de la UAB, col·legis professionals, la FAVS i el teixit veïnal." },
          { title: "Publicitat institucional sense autobombo", desc: "Retallada del 75% del pressupost de propaganda política en mitjans." }
        ]
      },
      {
        id: 2,
        shortTitle: "Habitatge públic: Pla 600 Habitatges",
        title: "Eix 2. Habitatge públic: Pla «600 Habitatges Assequibles» i fi de l'especulació",
        budget: "6,0 M€/any a VIMUSA (≈ 64 M€ amb crèdit ICO/BEI) + 0,8 M€/any Ascensors",
        intro: "Sabadell no pot convertir-se en una ciutat dormitori amb lloguers que superen els 950 € a Gràcia, La Creu Alta o La Creu de Barberà. Aportarem 5,0 M€ de capital i 1,0 M€ corrent anuals a VIMUSA.",
        measures: [
          { title: "150 habitatges d'obra nova pública en solars municipals", desc: "Edificació via VIMUSA amb lloguers limitats al 25% dels ingressos familiars (350 € – 450 €/mes). Licitació el primer any i lliuraments entre els anys 3 i 4." },
          { title: "250 habitatges per tanteig i retracte i compra a grans tenidors", desc: "Compra de pisos i blocs a Ca n'Oriac, Les Termes, Can Rull, Espronceda i Can Puiggener per adjudicar-los sense esperar terminis d'obra nova." },
          { title: "200 habitatges a la «Borsa Municipal de Lloguer Segur»", desc: "Per a petits propietaris amb pisos tancats (600 € – 650 €). L'Ajuntament avala i paga puntualment el dia 5, contracta assegurança multirrisc gratuïta i aplica bonificació d'IBI de fins al 95%." },
          { title: "Recàrrec progressiu antiespeculació de l'IBI", desc: "Només a titulars amb 4 o més immobles i pisos desocupats sense causa justificada: 50% a partir de 2 anys, 100% a 3 anys i fins al 150%. Cap família amb 1, 2 o 3 habitatges pagarà recàrrec." },
          { title: "Pla «Ascensors per a Tothom» (0,8 M€/any)", desc: "Subvencions de fins al 80% del cost (uns 30 ascensors/any, 25.000 € de mitjana) en blocs obrers antics de Torre-romeu, Can Puiggener, Campoamor i Ca n'Oriac." }
        ]
      },
      {
        id: 3,
        shortTitle: "Neteja pública i Pla Barris Dignes",
        title: "Eix 3. Neteja pública i Pla «Barris Dignes»",
        budget: "2,35 M€/any (0,7 M€ neteja + 1,65 M€ brigada)",
        intro: "El contracte amb SMATSA va ser prorrogat fins al 2030. Partim d'aquest fet amb transparència, reforçant ja els barris perifèrics i preparant la gestió pública futura.",
        measures: [
          { title: "Auditoria i preparació de la municipalització (SMATSA)", desc: "El 2027-2028 farem una auditoria de costos i memòria justificativa de gestió directa per quan venci la concessió el 2030, amb subrogació garantida de la plantilla." },
          { title: "Reforç de neteja en districtes perifèrics (0,7 M€/any)", desc: "15 operaris addicionals assignats de forma fixa als Districtes 2 a 7, amb recollida reforçada de mobles i control de punts negres." },
          { title: "Brigada Municipal d'Intervenció Ràpida 72 h (1,65 M€/any)", desc: "25 paletes, pavimentadors, jardiners i electricistes en plantilla municipal per reparar en 72 hores voreres trencades i desperfectes urgents." },
          { title: "Regla d'Inversió Territorial 80/20", desc: "El 80% del pressupost de manteniment urbà i obra pública s'executarà fora del Districte 1 (Centre), prioritzant El Pont de la Salut, Can Puiggener, Torre-romeu, Les Termes i La Concòrdia." }
        ]
      },
      {
        id: 4,
        shortTitle: "Mobilitat obrera i rebaixa de la TUS",
        title: "Eix 4. Mobilitat obrera, rebaixa realista de la TUS i ZBE justa",
        budget: "4,5 M€/any («Guixeta de Mobilitat»)",
        intro: "Protegim el medi ambient sense castigar el treballador que necessita el seu vehicle per anar al polígon ni arruïnar la cooperativa TUS amb promeses irreals.",
        measures: [
          { title: "Rebaixa tarifària sostenible (2,4 M€/any de compensació)", desc: "T-10 a 7,00 € (-30%), T-Mensual a 15,00 €, T-Jove a 10,00 € i ampliació del Carnet Gratuït Social (0,00 €) fins al 100% de l'SMI, validat amb la TUS i l'ATM." },
          { title: "10 autobusos nous i 14 conductors (1,4 M€/any)", desc: "6 busos de renovació ecològica i 4 d'ampliació per crear 1 Línia Exprés Transversal que connecti els barris amb el Taulí i el Centre." },
          { title: "Bus Nit Jove i energia solar (0,5 M€/any)", desc: "3 línies circulars nocturnes de 23:30 a 06:00 (divendres, dissabtes i vigílies) sense sobrecost en T-Jove i T-10, més pèrgoles solars en cotxeres i prioritat semafòrica." },
          { title: "ZBE justa i rebuig a la Ronda Nord (B-40)", desc: "Ampliació d'exempcions i moratòries socials a la ZBE per a residents, autònoms i vehicles de treball amb rendes inferiors a 2x SMI. Oposició a la B-40 per protegir el rodal agrícola i exigència del soterrament de la R4 i gratuïtat de la C-58." }
        ]
      },
      {
        id: 5,
        shortTitle: "Seguretat comunitària i Escut Social",
        title: "Eix 5. Seguretat comunitària, convivència legal i Escut Social",
        budget: "1,6 M€/any (Seguretat i Comunitats 0,55 M€ + Escut Social 1,05 M€)",
        intro: "La inseguretat castiga els barris humils que no es poden pagar alarmes privades. Actuem amb rigor dins del marc competencial municipal.",
        measures: [
          { title: "100 agents de Policia Municipal de Barri a peu (0,3 M€/any)", desc: "Reorganització de la plantilla actual per desplegar patrulles fixes a peu a Ca n'Oriac, La Creu de Barberà, Can Puiggener, Els Merinals, Can Rull i Centre." },
          { title: "Oficina de Defensa de Comunitats Veïnals (0,25 M€/any)", desc: "Assessoria gratuïta i conveni amb el Col·legi d'Advocats de Sabadell per presentar demandes civils de cessació en nom de les comunitats, protegint els presidents d'escala." },
          { title: "Mà dura legal contra màfies i narcopisos", desc: "Actuació en 24 hores davant allotjaments flagrants amb Mossos, operatius setmanals contra enganxaments elèctrics il·legals i expedients d'insalubritat. Realotjament social a VIMUSA per a famílies vulnerables." },
          { title: "Escut Social de Cures i Persones Majors (1,05 M€/any)", desc: "Canguratge públic gratuït a 4 centres cívics pilot de 07:30 a 20:00 (0,65 M€), 3 menjadors socials i cuines comunitàries (0,4 M€), cessió de sòl per a la 2a Residència Pública i 3 centres de dia, i pressió pel Parc Taulí i els CAP." }
        ]
      },
      {
        id: 6,
        shortTitle: "Oci jove: «Sabadell no s'apaga»",
        title: "Eix 6. Pla integral de lleure jove i nocturn: «Sabadell no s'apaga»",
        budget: "1,15 M€/any (Vapor Jove 0,7 M€ + Nit ÉS Jove 0,45 M€)",
        intro: "Més de 40.000 joves de 16 a 30 anys s'han quedat sense oci nocturn a Sabadell. Retornem el dret al lleure segur, assequible i compatible amb el descans veïnal.",
        measures: [
          { title: "Dos Pols d'Oci Nocturn Segur en polígons aïllats", desc: "Llicències àgils i bonificació del 50% de la taxa d'obertura a l'extrem no residencial del Polígon Sud-Oest / Sant Pau de Riu-sec. Preus populars, aigua gratuïta, Punts Lila fixos i protocol contra violència o discriminació." },
          { title: "Vapor Jove Nocturn (0,7 M€/any)", desc: "Rehabilitació i insonorització d'un antic vapor municipal al Nord, obert divendres i dissabtes fins a les 03:00 h amb entrada gratuïta, sales d'assaig i barres d'entitats juvenils." },
          { title: "Bus Nit Jove cada 20 minuts", desc: "3 línies circulars nocturnes connectant les zones d'oci i estacions d'FGC amb els barris." },
          { title: "La Nit ÉS Jove (0,45 M€/any)", desc: "3 poliesportius (Nord, Centre i Sud) oberts divendres i dissabtes de 21:00 a 01:30 gratuïtament per a joves de 14 a 25 anys, i cicle mensual de concerts a l'Amfiteatre del Parc Catalunya." }
        ]
      },
      {
        id: 7,
        shortTitle: "Reforma fiscal i taxa de residus",
        title: "Eix 7. Reforma fiscal justa i bonificació de la taxa de residus",
        budget: "0,8 M€/any reservats per a la congelació de l'IBI",
        intro: "Fi de la taxa de residus lineal i injusta. Qui més té i qui més genera paga més; premiem qui recicla i blindem les llars treballadores.",
        measures: [
          { title: "Taxa de Residus Progressiva i Social (fins al -75%)", desc: "Indexada a la renda real de la llar i membres (Llei 7/2022). Bonificacions de fins al 75% per a pensionistes amb ingressos baixos, aturats de llarga durada i famílies vulnerables, finançades per grans generadors." },
          { title: "«Bono Reciclatge» (fins al -50% per punts)", desc: "Targetes intel·ligents i punts verds als contenidors i deixalleries: qui separa correctament suma punts que descompten fins al 50% en la taxa de l'any següent." },
          { title: "Congelació de l'IBI residencial (0 € de pujada)", desc: "Moratòria absoluta de pujades al tipus general de l'IBI per a primeres residències i petit comerç de barri durant tot el mandat." }
        ]
      }
    ],

    tusEyebrow: "TRANSPORT PÚBLIC PER A TOTHOM",
    tusTitle: "Rebaixa realista i sostenible de la TUS",
    tusSubtitle: "La «Guixeta de 4,5 milions» compensa la TUS perquè no perdi ni un euro i suma 10 busos nous i 14 conductors.",
    tusColTitle: "Títol TUS",
    tusColCurrent: "Preu Actual",
    tusColUC: "Tarifa UC",
    tusColImpact: "Impacte",
    tusRows: [
      { title: "T-10 TUS (bono treballador i veïnal)", current: "10,10 €", uc: "7,00 € (-30%)", impact: "0,70 € per viatge" },
      { title: "T-Mensual General (viatges il·limitats)", current: "20,60 €/mes", uc: "15,00 €/mes", impact: "0,50 € al dia" },
      { title: "T-Mensual Jove (menors de 30 anys)", current: "14,35 €/mes", uc: "10,00 €/mes", impact: "Preu popular per a joves" },
      { title: "Carnet Gratuït Social (jubilats pensió baixa, aturats)", current: "Restringit", uc: "0,00 €", impact: "Llindar ampliat fins al 100% de l'SMI" },
      { title: "Bitllet senzill (esporàdic / no resident)", current: "1,80 €", uc: "1,80 €", impact: "Sense canvi" }
    ],

    taxEyebrow: "JUSTÍCIA TRIBUTÀRIA LOCAL",
    taxTitle: "Reforma fiscal i taxa de residus",
    taxSubtitle: "Paga qui més té, premiem qui recicla i blindem l'economia familiar.",
    taxCards: [
      { val: "75%", tag: "BONIFICACIÓ TAXA BROSSA", title: "Taxa progressiva per renda", desc: "Reducció directa de fins al 75% per a pensionistes amb ingressos baixos i famílies amb menys recursos." },
      { val: "50%", tag: "BONO RECICLATGE", title: "Fins al 50% per punts", desc: "Qui més separa i utilitza les deixalleries municipals menys paga a l'any." },
      { val: "0 €", tag: "CONGELACIÓ DE L'IBI", title: "Blindatge residencial", desc: "Ni un euro d'augment a l'IBI de primeres residències i del petit comerç de proximitat." }
    ],
    scaleLeft: "Pensionistes (-75%)",
    scaleMid: "Rendes mitjanes (Congelació)",
    scaleRight: "Grans tenidors (+Recàrrec)",

    districtsEyebrow: "PLA DE XOC TERRITORIAL",
    districtsTitle: "Compromisos prioritaris als 7 Districtes",
    districtsSubtitle: "Acabem amb l'abandó de la perifèria amb la Regla d'Inversió 80/20: el 80% del manteniment urbà i l'obra pública s'executa fora del Centre.",
    districts: [
      { id: 1, name: "Districte 1", barris: "Centre, Hostafrancs, Cobertera", text: "Control estricte del soroll nocturn (lleure de matinada a polígons aïllats), ZBE amb exempcions socials, aparcaments dissuasius i millora de carrers secundaris." },
      { id: 2, name: "Districte 2", barris: "La Creu Alta, Can Puiggener", text: "Pla de rescat urbà i social a Can Puiggener (façanes, voreres, il·luminació, centre comunitari) i borsa de lloguer jove a la Creu Alta." },
      { id: 3, name: "Districte 3", barris: "Ca n'Oriac, Torreguitart, Torrent del Capellà, Sant Julià", text: "Ascensors subvencionats al 80%, reactivació de locals buits a l'Av. de Matadepera, Vapor Jove Nocturn (fase 1), policia a peu i defensa del rodal." },
      { id: 4, name: "Districte 4", barris: "La Concòrdia, Can Rull, Cifuentes, Via Alexandra", text: "Renovació de places i arbratge, reforç de neteja i recollida de mobles, poliesportiu nocturn fins a la 01:30 i Línia Exprés al Taulí." },
      { id: 5, name: "Districte 5", barris: "Gràcia, Can Feu, Els Merinals, Serra d'en Cameró", text: "Solució pública als habitatges amb patologies estructurals dels Merinals, finalització del passeig verd sobre les vies de FGC i rehabilitació del Castell de Can Feu." },
      { id: 6, name: "Districte 6", barris: "La Creu de Barberà, Les Termes, Campoamor, Espronceda", text: "Oficina de defensa de comunitats, policia de barri, compra pública de pisos a grans tenidors i connexió amb el Bus Nit Jove." },
      { id: 7, name: "Districte 7", barris: "El Poblenou, Torre-romeu, El Pont de la Salut", text: "Urbanització de voreres al Pont de la Salut, Línia Exprés al Taulí i al Centre, Bus Nit Jove i caixers de barri." }
    ],

    economyEyebrow: "RIGOR I TRANSPARÈNCIA PRESSUPOSTÀRIA",
    economyTitle: "Memòria Econòmica Anual: Comptes Clars",
    economySubtitle: "Sobre el pressupost municipal de Sabadell (303,3 M€), reassignem i mobilitzem 17,2 M€ anuals (68,8 M€ en el mandat de 4 anys) sense pujar impostos a les famílies ni al petit comerç.",
    resourcesTitle: "Recursos (Ingressos i Estalvis)",
    investmentTitle: "Inversió Social i Urbana",
    resourcesRows: [
      { label: "1. Austeritat política: topall salarial, càrrecs de confiança al mínim, -50% consultories i -75% propaganda", val: "2,4 M€" },
      { label: "2. Recàrrec progressiu de l'IBI a pisos buits de grans tenidors (0 € a famílies d'1 a 3 pisos)", val: "0,8 M€" },
      { label: "3. IBI diferenciat a immobles no residencials de més valor i ajustaments de l'IAE", val: "3,0 M€" },
      { label: "4. Pla d'eficiència i revisió de la despesa corrent (≈1% del pressupost)", val: "3,0 M€" },
      { label: "5. Reassignació d'inversions previstes (≈26% dels 31 M€ d'inversió del pressupost 2027)", val: "8,0 M€" }
    ],
    investmentRows: [
      { label: "1. VIMUSA: Pla 600 Habitatges (5,0 M€ capital + 1,0 M€ corrents)", val: "6,0 M€" },
      { label: "2. Barris Dignes: brigada de 25 operaris i reforç de neteja perifèrica", val: "2,35 M€" },
      { label: "3. Mobilitat TUS: rebaixa de tarifes, 10 busos, 14 conductors, Bus Nit i plaques solars", val: "4,5 M€" },
      { label: "4. Escut Social, seguretat comunitària i lleure jove (inclou Vapor Jove Nocturn)", val: "2,75 M€" },
      { label: "5. Ascensors per a Tothom", val: "0,8 M€" },
      { label: "6. Reserva per congelació de l'IBI residencial", val: "0,8 M€" }
    ],

    balanceTitle: "Equilibri per tipus de despesa",
    balanceText: "Les partides de capital sumen 8,0 M€ (VIMUSA 5,0 + ascensors 0,8 + Vapor Jove 0,7 + autobusos 0,7 + materials brigada 0,5 + plaques solars 0,3) i es financen amb la reassignació d'inversions (8,0 M€). Les partides corrents sumen 9,2 M€ i es financen amb els recursos 1 a 4.",
    prudenceTitle: "Clàusula de prudència",
    prudenceText: "Si algun ingrés queda per sota del previst, es mantindran per aquest ordre habitatge, neteja i barris, tarifes de la TUS i escut social, i s'endarrerirà la resta del calendari. No es finançarà cap mesura amb deute per a despesa corrent.",
    notPromisedTitle: "Allò que aquest programa no promet",
    notPromisedText: "No computem estalvis per remunicipalització abans del 2030, i les mesures que depenen de la Generalitat o de l'Estat (Ronda Nord, R4, C-58, residències, centres de dia, Taulí) es plantegen com a exigències, no com a partides pròpies.",

    annexToggle: "Annex Tècnic: Hipòtesis i dades a contrastar (10 partides)",
    annexIntro: "Totes les xifres d'aquest annex són estimacions de la candidatura. Abans de la presentació definitiva es contrastaran amb la Intervenció municipal, el Portal de Transparència i les entitats afectades.",
    annexItems: [
      { k: "Pressupost", v: "303,3 M€ per a 2027 i uns 31 M€ d'inversió prevista. La reassignació de 8,0 M€ és el 26% d'aquesta inversió." },
      { k: "Austeritat (2,4 M€)", v: "Parteix que el personal eventual i el Gabinet costen prop d'1,8 M€/any. Cal contrastar aquesta dada i la despesa real en consultories i publicitat." },
      { k: "Recàrrec IBI (0,8 M€)", v: "Equival a uns 1.600 habitatges desocupats de titulars amb 4 o més immobles, amb IBI mitjà de 500 € i recàrrec mitjà del 100%." },
      { k: "IBI diferenciat i IAE (3,0 M€)", v: "Només s'aplica a immobles no residencials de major valor cadastral, no a empreses com a tals. A validar per Hisenda municipal." },
      { k: "Eficiència (3,0 M€)", v: "Objectiu de revisió de la despesa corrent (≈1% del pressupost) a concretar amb Intervenció." },
      { k: "Habitatge", v: "Cost mitjà de 190.000 € obra nova i 140.000 € compra; crèdit de 44 M€ a 30 anys al 3,5% (quota ≈2,4 M€); lloguers mitjans de 400 € (≈1,5 M€ nets)." },
      { k: "TUS", v: "Compensació de 2,4 M€ per rebaixa; leasing de 10 busos per 5,5 M€ a 10 anys (3,5%); 3,5 conductors per bus exprés; Bus Nit a 75 €/h; estalvi solar 0,2 M€/any." },
      { k: "Personal", v: "Cost mitjà d'empresa de 46.000 € per operari." },
      { k: "Congelació IBI (0,8 M€)", v: "Actualització del 2,5% prevista menys creixement natural de bases (≈1%), sobre un IBI residencial d'uns 55 M€." },
      { k: "Neteja viària", v: "El contracte amb SMATSA va ser prorrogat fins a 2030; no es computa cap estalvi en aquesta memòria." }
    ],

    feedbackEyebrow: "CONSULTA VEÏNAL OBERTA",
    feedbackTitle: "Què et sembla aquesta proposta? Volem escoltar-te",
    feedbackSubtitle: "Abans de registrar res ni formalitzar cap candidatura, volem saber si aquest programa respon a les necessitats reals de Sabadell. Respon l'enquesta en 1 minut o escriu-nos directament.",
    tallyBadge: "ENQUESTA RÀPIDA · 1 MINUT",
    tallyTitle: "Participa a l'enquesta ciutadana (Tally.so)",
    tallyDesc: "Explica'ns des de quin barri ens llegeixes, quins eixos veus més urgents i què milloraries o afegiries al programa.",
    tallyBtn: "Respondre l'enquesta a Tally.so",
    tallyPending: "Estem preparant la versió en català de l'enquesta. Mentrestant, pots enviar-nos la teva opinió en català a uniociutadana@proton.me o respondre la versió en castellà.",
    tallySwitchToEs: "Veure l'enquesta en castellà",
    contactBadge: "CONTACTE DIRECTE",
    contactTitle: "Escriu-nos per correu electrònic",
    contactDesc: "Si formes part d'una entitat veïnal, tens propostes concretes per al teu barri o vols col·laborar en aquesta fase inicial, escriu-nos a:",

    ctaEyebrow: "PROJECTE CIUTADÀ EN FASE DE CONSULTA · SABADELL",
    ctaTitle: "T'INTERESSARIA AQUEST PARTIT PER A SABADELL?",
    ctaSubtitle: "Escriu-nos per correu electrònic per dir-nos si t'interessaria aquest projecte, si li donaries suport o si tens alguna proposta més per a la ciutat.",
    ctaBtn: "Escriure a uniociutadana@proton.me",
    ctaMailSubject: "Opinió, suport o propostes - Unió Ciutadana Sabadell",
    footerTagline: "© 2026 Unió Ciutadana (UC) Sabadell · Projecte ciutadà en fase de consulta (sense registre jurídic)"
  },

  es: {
    metaTitle: "Unió Ciutadana (UC) Sabadell — Proyecto en consulta",
    topBarText: "SABADELL · PROYECTO CIUDADANO EN FASE DE CONSULTA",
    topBarBadge: "Borrador abierto (sin registro jurídico previo)",
    navHome: "Inicio",
    navProgram: "Programa (7 Ejes)",
    navDistricts: "7 Distritos",
    navEconomy: "Memoria Económica",
    navEthics: "Compromiso Ético",
    navFeedback: "Opina",

    heroEyebrow: "UNIÓ CIUTADANA (UC) SABADELL · CONSULTA VECINAL",
    heroTitle: "Sabadell para quien la trabaja. Gobernar obedeciendo al pueblo.",
    heroLead: "Unió Ciutadana (UC) es una iniciativa ciudadana para devolver el Ayuntamiento a su mayoría trabajadora. Presentamos un borrador de programa municipalista, financiado línea a línea sobre el Presupuesto Municipal (303,3 M€), para acabar con el «Sabadell a dos velocidades».",
    transparencyTitle: "Aviso de transparencia (fase de consulta):",
    transparencyText: "Esta web es un borrador abierto y participativo sin registro jurídico ni candidatura formalizada todavía. Nuestro objetivo es escuchar al vecindario de Sabadell para saber si esta propuesta tiene apoyo antes de dar ningún paso formal.",
    heroBtnProgram: "Explorar los 7 Ejes",
    heroBtnFeedback: "Dar mi opinión",

    notaryEyebrow: "PROPUESTA DE COMPROMISO ÉTICO · A FIRMAR ANTE NOTARIO",
    notaryPerMonth: "netos al mes",
    notaryDesc: "Sueldo máximo propuesto para el alcalde y concejales en caso de gobernar, a firmar ante notario y aprobar en el primer Pleno. Venimos a servir a Sabadell, no a enriquecernos con la política.",
    notaryCompare: "Según decreto de la Diputación (2024), la actual alcaldesa percibe 7.295,75 € brutos/mes en 14 pagas (>102.000 €/año).",

    metricReassigned: "Reasignados y generados anualmente (5,7% del presupuesto)",
    metricHousing: "Viviendas asequibles movilizadas (≈ 64 M€ con crédito ICO/BEI)",
    metricTaxes: "Subida de impuestos a familias trabajadoras y pequeño comercio",
    metricRule: "Regla de inversión: 80% fuera del Centro",

    principle1Tag: "COMPETENCIA MUNICIPAL",
    principle1Text: "En lo que el Ayuntamiento puede hacer por sí mismo nos comprometemos a hacer, con cifra, fuente y calendario a la vista.",
    principle2Tag: "EXIGENCIA INSTITUCIONAL",
    principle2Text: "En lo que depende de la Generalitat o el Estado (R4, C-58, residencias, centros de día, Parc Taulí) nos comprometemos a exigirlo sin tregua.",
    principle3Tag: "RIGOR PRESUPUESTARIO",
    principle3Text: "Cero ahorros ficticios por remunicipalización antes de 2030 y ninguna medida financiada con deuda para gasto corriente.",

    programEyebrow: "PROGRAMA ELECTORAL 2027–2031",
    programTitle: "Los 7 Ejes para transformar Sabadell",
    programSubtitle: "Selecciona cada eje para consultar las medidas concretas, su coste anual y cómo se financian.",

    axes: [
      {
        id: 1,
        shortTitle: "Ética política y reconversión técnica",
        title: "Eje 1. Ética política, fin de privilegios y reconversión técnica municipal",
        budget: "Libera 2,4 M€/año (9,6 M€ en el mandato)",
        intro: "Gobernar una gran ciudad exige el máximo rigor técnico, no destinar cerca de 1,8 M€ anuales a personal eventual y Gabinete de Alcaldía ni despilfarrar en consultoras externas.",
        measures: [
          { title: "Limitación salarial inmediata", desc: "Retribuciones del alcalde y concejales con dedicación exclusiva topadas a 2.000 € netos al mes, firmadas ante notario y aprobadas en el primer Pleno." },
          { title: "Personal de confianza al mínimo y expertos por concurso", desc: "Reducción al mínimo legal de los puestos eventuales de asesoría, propaganda y redes. Perfiles técnicos (arquitectos, juristas de vivienda, economistas) por convocatoria pública de méritos." },
          { title: "Empoderamiento de los más de 1.500 técnicos municipales", desc: "Recorte del 50% en consultorías externas aprovechando el talento de ingenieros, arquitectos, interventores y trabajadores sociales propios." },
          { title: "Consejo Asesor del Territorio de Sabadell (coste 0 €)", desc: "Órgano consultivo permanente con investigadores de la UAB, colegios profesionales, la FAVS y el tejido vecinal." },
          { title: "Publicidad institucional sin autobombo", desc: "Recorte del 75% del presupuesto de propaganda política en medios." }
        ]
      },
      {
        id: 2,
        shortTitle: "Vivienda pública: Plan 600 Viviendas",
        title: "Eje 2. Vivienda pública: Plan «600 Viviendas Asequibles» y fin de la especulación",
        budget: "6,0 M€/año a VIMUSA (≈ 64 M€ con crédito ICO/BEI) + 0,8 M€/año Ascensores",
        intro: "Sabadell no puede convertirse en una ciudad dormitorio con alquileres que superan los 950 € en Gràcia, La Creu Alta o La Creu de Barberà. Aportaremos 5,0 M€ de capital y 1,0 M€ corriente anuales a VIMUSA.",
        measures: [
          { title: "150 viviendas de obra nueva pública en solares municipales", desc: "Edificación vía VIMUSA con alquileres limitados al 25% de los ingresos familiares (350 € – 450 €/mes). Licitación el primer año y entregas entre los años 3 y 4." },
          { title: "250 viviendas por tanteo y retracto y compra a grandes tenedores", desc: "Compra de pisos y bloques en Ca n'Oriac, Les Termes, Can Rull, Espronceda y Can Puiggener para adjudicarlos sin esperar plazos de obra nueva." },
          { title: "200 viviendas en la «Bolsa Municipal de Alquiler Seguro»", desc: "Para pequeños propietarios con pisos cerrados (600 € – 650 €). El Ayuntamiento avala y paga puntualmente el día 5, contrata seguro multirriesgo gratuito y aplica bonificación del IBI de hasta el 95%." },
          { title: "Recargo progresivo antiespeculación del IBI", desc: "Solo a titulares con 4 o más inmuebles y pisos desocupados sin causa justificada: 50% a partir de 2 años, 100% a 3 años y hasta el 150%. Ninguna familia con 1, 2 o 3 viviendas pagará recargo." },
          { title: "Plan «Ascensores para Todos» (0,8 M€/año)", desc: "Subvenciones de hasta el 80% del coste (unos 30 ascensores/año, 25.000 € de media) en bloques obreros antiguos de Torre-romeu, Can Puiggener, Campoamor y Ca n'Oriac." }
        ]
      },
      {
        id: 3,
        shortTitle: "Limpieza pública y Plan Barrios Dignos",
        title: "Eje 3. Limpieza pública y Plan «Barrios Dignos»",
        budget: "2,35 M€/año (0,7 M€ limpieza + 1,65 M€ brigada)",
        intro: "El contrato con SMATSA fue prorrogado hasta 2030. Partimos de este hecho con transparencia, reforzando ya los barrios periféricos y preparando la gestión pública futura.",
        measures: [
          { title: "Auditoría y preparación de la municipalización (SMATSA)", desc: "En 2027-2028 haremos una auditoría de costes y memoria justificativa de gestión directa para cuando venza la concesión en 2030, con subrogación garantizada de la plantilla." },
          { title: "Refuerzo de limpieza en distritos periféricos (0,7 M€/año)", desc: "15 operarios adicionales asignados de forma fija a los Distritos 2 a 7, con recogida reforzada de muebles y control de puntos negros." },
          { title: "Brigada Municipal de Intervención Rápida 72 h (1,65 M€/año)", desc: "25 albañiles, pavimentadores, jardineros y electricistas en plantilla municipal para reparar en 72 horas aceras rotas y desperfectos urgentes." },
          { title: "Regla de Inversión Territorial 80/20", desc: "El 80% del presupuesto de mantenimiento urbano y obra pública se ejecutará fuera del Distrito 1 (Centro), priorizando El Pont de la Salut, Can Puiggener, Torre-romeu, Les Termes y La Concòrdia." }
        ]
      },
      {
        id: 4,
        shortTitle: "Movilidad obrera y rebaja de la TUS",
        title: "Eje 4. Movilidad obrera, rebaja realista de la TUS y ZBE justa",
        budget: "4,5 M€/año («Hucha de Movilidad»)",
        intro: "Protegemos el medio ambiente sin castigar al trabajador que necesita su vehículo para ir al polígono ni arruinar la cooperativa TUS con promesas irreales.",
        measures: [
          { title: "Rebaja tarifaria sostenible (2,4 M€/año de compensación)", desc: "T-10 a 7,00 € (-30%), T-Mensual a 15,00 €, T-Jove a 10,00 € y ampliación del Carnet Gratuito Social (0,00 €) hasta el 100% del SMI, validado con la TUS y la ATM." },
          { title: "10 autobuses nuevos y 14 conductores (1,4 M€/año)", desc: "6 buses de renovación ecológica y 4 de ampliación para crear 1 Línea Exprés Transversal que conecte los barrios con el Taulí y el Centro." },
          { title: "Bus Nit Jove y energía solar (0,5 M€/año)", desc: "3 líneas circulares nocturnas de 23:30 a 06:00 (viernes, sábados y vísperas) sin sobrecoste en T-Jove y T-10, más pérgolas solares en cocheras y prioridad semafórica." },
          { title: "ZBE justa y rechazo a la Ronda Nord (B-40)", desc: "Ampliación de exenciones y moratorias sociales en la ZBE para residentes, autónomos y vehículos de trabajo con rentas inferiores a 2x SMI. Oposición a la B-40 para proteger el rodal agrícola y exigencia del soterramiento de la R4 y gratuidad de la C-58." }
        ]
      },
      {
        id: 5,
        shortTitle: "Seguridad comunitaria y Escudo Social",
        title: "Eje 5. Seguridad comunitaria, convivencia legal y Escudo Social",
        budget: "1,6 M€/año (Seguridad y Comunidades 0,55 M€ + Escudo Social 1,05 M€)",
        intro: "La inseguridad castiga a los barrios humildes que no pueden pagarse alarmas privadas. Actuamos con rigor dentro del marco competencial municipal.",
        measures: [
          { title: "100 agentes de Policía Municipal de Barrio a pie (0,3 M€/año)", desc: "Reorganización de la plantilla actual para desplegar patrullas fijas a pie en Ca n'Oriac, La Creu de Barberà, Can Puiggener, Els Merinals, Can Rull y Centro." },
          { title: "Oficina de Defensa de Comunidades Vecinales (0,25 M€/año)", desc: "Asesoría gratuita y convenio con el Colegio de Abogados de Sabadell para presentar demandas civiles de cesación en nombre de las comunidades, protegiendo a los presidentes de escalera." },
          { title: "Mano dura legal contra mafias y narcopisos", desc: "Actuación en 24 horas ante ocupaciones flagrantes con Mossos, operativos semanales contra enganches eléctricos ilegales y expedientes de insalubridad. Realojo social en VIMUSA para familias vulnerables." },
          { title: "Escudo Social de Cuidados y Personas Mayores (1,05 M€/año)", desc: "Canguro público gratuito en 4 centros cívicos piloto de 07:30 a 20:00 (0,65 M€), 3 comedores sociales y cocinas comunitarias (0,4 M€), cesión de suelo para la 2ª Residencia Pública y 3 centros de día, y presión por el Parc Taulí y los CAP." }
        ]
      },
      {
        id: 6,
        shortTitle: "Ocio joven: «Sabadell no s'apaga»",
        title: "Eje 6. Plan integral de ocio joven y nocturno: «Sabadell no s'apaga»",
        budget: "1,15 M€/año (Vapor Jove 0,7 M€ + Nit ÉS Jove 0,45 M€)",
        intro: "Más de 40.000 jóvenes de 16 a 30 años se han quedado sin ocio nocturno en Sabadell. Devolvemos el derecho al ocio seguro, asequible y compatible con el descanso vecinal.",
        measures: [
          { title: "Dos Polos de Ocio Nocturno Seguro en polígonos aislados", desc: "Licencias ágiles y bonificación del 50% de la tasa de apertura en el extremo no residencial del Polígono Sud-Oest / Sant Pau de Riu-sec. Precios populares, agua gratuita, Puntos Lila fijos y protocolo contra violencia o discriminación." },
          { title: "Vapor Jove Nocturn (0,7 M€/año)", desc: "Rehabilitación e insonorización de un antiguo vapor municipal en el Norte, abierto viernes y sábados hasta las 03:00 h con entrada gratuita, salas de ensayo y barras de entidades juveniles." },
          { title: "Bus Nit Jove cada 20 minutos", desc: "3 líneas circulares nocturnas conectando las zonas de ocio y estaciones de FGC con los barrios." },
          { title: "La Nit ÉS Jove (0,45 M€/año)", desc: "3 polideportivos (Norte, Centro y Sur) abiertos viernes y sábados de 21:00 a 01:30 gratuitamente para jóvenes de 14 a 25 años, y ciclo mensual de conciertos en el Anfiteatro del Parc Catalunya." }
        ]
      },
      {
        id: 7,
        shortTitle: "Reforma fiscal y tasa de residuos",
        title: "Eje 7. Reforma fiscal justa y bonificación de la tasa de residuos",
        budget: "0,8 M€/año reservados para la congelación del IBI",
        intro: "Fin de la tasa de residuos lineal e injusta. Quien más tiene y quien más genera paga más; premiamos a quien recicla y blindamos los hogares trabajadores.",
        measures: [
          { title: "Tasa de Residuos Progresiva y Social (hasta -75%)", desc: "Indexada a la renta real del hogar y miembros (Ley 7/2022). Bonificaciones de hasta el 75% para pensionistas con ingresos bajos, parados de larga duración y familias vulnerables, financiadas por grandes generadores." },
          { title: "«Bono Reciclaje» (hasta -50% por puntos)", desc: "Tarjetas inteligentes y puntos verdes en los contenedores y puntos limpios: quien separa correctamente suma puntos que descuentan hasta el 50% en la tasa del año siguiente." },
          { title: "Congelación del IBI residencial (0 € de subida)", desc: "Moratoria absoluta de subidas en el tipo general del IBI para primeras residencias y pequeño comercio de barrio durante todo el mandato." }
        ]
      }
    ],

    tusEyebrow: "TRANSPORTE PÚBLICO PARA TODOS",
    tusTitle: "Rebaja realista y sostenible de la TUS",
    tusSubtitle: "La «Hucha de 4,5 millones» compensa a la TUS para que no pierda ni un euro y suma 10 buses nuevos y 14 conductores.",
    tusColTitle: "Título TUS",
    tusColCurrent: "Precio Actual",
    tusColUC: "Tarifa UC",
    tusColImpact: "Impacto",
    tusRows: [
      { title: "T-10 TUS (bono trabajador y vecinal)", current: "10,10 €", uc: "7,00 € (-30%)", impact: "0,70 € por viaje" },
      { title: "T-Mensual General (viajes ilimitados)", current: "20,60 €/mes", uc: "15,00 €/mes", impact: "0,50 € al día" },
      { title: "T-Mensual Jove (menores de 30 años)", current: "14,35 €/mes", uc: "10,00 €/mes", impact: "Precio popular para jóvenes" },
      { title: "Carnet Gratuito Social (jubilados pensión baja, parados)", current: "Restringido", uc: "0,00 €", impact: "Umbral ampliado hasta el 100% del SMI" },
      { title: "Billete sencillo (esporádico / no residente)", current: "1,80 €", uc: "1,80 €", impact: "Sin cambio" }
    ],

    taxEyebrow: "JUSTICIA TRIBUTARIA LOCAL",
    taxTitle: "Reforma fiscal y tasa de residuos",
    taxSubtitle: "Paga quien más tiene, premiamos a quien recicla y blindamos la economía familiar.",
    taxCards: [
      { val: "75%", tag: "BONIFICACIÓN TASA BASURA", title: "Tasa progresiva por renta", desc: "Reducción directa de hasta el 75% para pensionistas con ingresos bajos y familias con menos recursos." },
      { val: "50%", tag: "BONO RECICLAJE", title: "Hasta el 50% por puntos", desc: "Quien más separa y utiliza los puntos limpios municipales menos paga al año." },
      { val: "0 €", tag: "CONGELACIÓN DEL IBI", title: "Blindaje residencial", desc: "Ni un euro de aumento en el IBI de primeras residencias y del pequeño comercio de proximidad." }
    ],
    scaleLeft: "Pensionistas (-75%)",
    scaleMid: "Rentas medias (Congelación)",
    scaleRight: "Grandes tenedores (+Recargo)",

    districtsEyebrow: "PLAN DE CHOQUE TERRITORIAL",
    districtsTitle: "Compromisos prioritarios en los 7 Distritos",
    districtsSubtitle: "Acabamos con el abandono de la periferia con la Regla de Inversión 80/20: el 80% del mantenimiento urbano y la obra pública se ejecuta fuera del Centro.",
    districts: [
      { id: 1, name: "Distrito 1", barris: "Centre, Hostafrancs, Cobertera", text: "Control estricto del ruido nocturno (ocio de madrugada en polígonos aislados), ZBE con exenciones sociales, aparcamientos disuasorios y mejora de calles secundarias." },
      { id: 2, name: "Distrito 2", barris: "La Creu Alta, Can Puiggener", text: "Plan de rescate urbano y social en Can Puiggener (fachadas, aceras, iluminación, centro comunitario) y bolsa de alquiler joven en la Creu Alta." },
      { id: 3, name: "Distrito 3", barris: "Ca n'Oriac, Torreguitart, Torrent del Capellà, Sant Julià", text: "Ascensores subvencionados al 80%, reactivación de locales vacíos en la Av. de Matadepera, Vapor Jove Nocturn (fase 1), policía a pie y defensa del rodal." },
      { id: 4, name: "Distrito 4", barris: "La Concòrdia, Can Rull, Cifuentes, Via Alexandra", text: "Renovación de plazas y arbolado, refuerzo de limpieza y recogida de muebles, polideportivo nocturno hasta la 01:30 y Línea Exprés al Taulí." },
      { id: 5, name: "Distrito 5", barris: "Gràcia, Can Feu, Els Merinals, Serra d'en Cameró", text: "Solución pública a las viviendas con patologías estructurales de Els Merinals, finalización del paseo verde sobre las vías de FGC y rehabilitación del Castell de Can Feu." },
      { id: 6, name: "Distrito 6", barris: "La Creu de Barberà, Les Termes, Campoamor, Espronceda", text: "Oficina de defensa de comunidades, policía de barrio, compra pública de pisos a grandes tenedores y conexión con el Bus Nit Jove." },
      { id: 7, name: "Distrito 7", barris: "El Poblenou, Torre-romeu, El Pont de la Salut", text: "Urbanización de aceras en el Pont de la Salut, Línea Exprés al Taulí y al Centro, Bus Nit Jove y cajeros de barrio." }
    ],

    economyEyebrow: "RIGOR Y TRANSPARENCIA PRESUPUESTARIA",
    economyTitle: "Memoria Económica Anual: Cuentas Claras",
    economySubtitle: "Sobre el presupuesto municipal de Sabadell (303,3 M€), reasignamos y movilizamos 17,2 M€ anuales (68,8 M€ en el mandato de 4 años) sin subir impuestos a las familias ni al pequeño comercio.",
    resourcesTitle: "Recursos (Ingresos y Ahorros)",
    investmentTitle: "Inversión Social y Urbana",
    resourcesRows: [
      { label: "1. Austeridad política: tope salarial, cargos de confianza al mínimo, -50% consultorías y -75% propaganda", val: "2,4 M€" },
      { label: "2. Recargo progresivo del IBI a pisos vacíos de grandes tenedores (0 € a familias de 1 a 3 pisos)", val: "0,8 M€" },
      { label: "3. IBI diferenciado a inmuebles no residenciales de mayor valor y ajustes del IAE", val: "3,0 M€" },
      { label: "4. Plan de eficiencia y revisión del gasto corriente (≈1% del presupuesto)", val: "3,0 M€" },
      { label: "5. Reasignación de inversiones previstas (≈26% de los 31 M€ de inversión del presupuesto 2027)", val: "8,0 M€" }
    ],
    investmentRows: [
      { label: "1. VIMUSA: Plan 600 Viviendas (5,0 M€ capital + 1,0 M€ corrientes)", val: "6,0 M€" },
      { label: "2. Barrios Dignos: brigada de 25 operarios y refuerzo de limpieza periférica", val: "2,35 M€" },
      { label: "3. Movilidad TUS: rebaja de tarifas, 10 buses, 14 conductores, Bus Nit y placas solares", val: "4,5 M€" },
      { label: "4. Escudo Social, seguridad comunitaria y ocio joven (incluye Vapor Jove Nocturn)", val: "2,75 M€" },
      { label: "5. Ascensores para Todos", val: "0,8 M€" },
      { label: "6. Reserva por congelación del IBI residencial", val: "0,8 M€" }
    ],

    balanceTitle: "Equilibrio por tipo de gasto",
    balanceText: "Las partidas de capital suman 8,0 M€ (VIMUSA 5,0 + ascensores 0,8 + Vapor Jove 0,7 + autobuses 0,7 + materiales brigada 0,5 + placas solares 0,3) y se financian con la reasignación de inversiones (8,0 M€). Las partidas corrientes suman 9,2 M€ y se financian con los recursos 1 a 4.",
    prudenceTitle: "Cláusula de prudencia",
    prudenceText: "Si algún ingreso queda por debajo de lo previsto, se mantendrán por este orden vivienda, limpieza y barrios, tarifas de la TUS y escudo social, y se retrasará el resto del calendario. No se financiará ninguna medida con deuda para gasto corriente.",
    notPromisedTitle: "Lo que este programa no promete",
    notPromisedText: "No computamos ahorros por remunicipalización antes de 2030, y las medidas que dependen de la Generalitat o del Estado (Ronda Nord, R4, C-58, residencias, centros de día, Taulí) se plantean como exigencias, no como partidas propias.",

    annexToggle: "Anexo Técnico: Hipótesis y datos a contrastar (10 partidas)",
    annexIntro: "Todas las cifras de este anexo son estimaciones de la candidatura. Antes de la presentación definitiva se contrastarán con la Intervención municipal, el Portal de Transparencia y las entidades afectadas.",
    annexItems: [
      { k: "Presupuesto", v: "303,3 M€ para 2027 y unos 31 M€ de inversión prevista. La reasignación de 8,0 M€ es el 26% de esa inversión." },
      { k: "Austeridad (2,4 M€)", v: "Parte de que el personal eventual y el Gabinete cuestan cerca de 1,8 M€/año. Hay que contrastar este dato y el gasto real en consultorías y publicidad." },
      { k: "Recargo IBI (0,8 M€)", v: "Equivale a unas 1.600 viviendas desocupadas de titulares con 4 o más inmuebles, con IBI medio de 500 € y recargo medio del 100%." },
      { k: "IBI diferenciado e IAE (3,0 M€)", v: "Solo se aplica a inmuebles no residenciales de mayor valor catastral, no a empresas como tales. A validar por Hacienda municipal." },
      { k: "Eficiencia (3,0 M€)", v: "Objetivo de revisión del gasto corriente (≈1% del presupuesto) a concretar con Intervención." },
      { k: "Vivienda", v: "Coste medio de 190.000 € obra nueva y 140.000 € compra; crédito de 44 M€ a 30 años al 3,5% (cuota ≈2,4 M€); alquileres medios de 400 € (≈1,5 M€ netos)." },
      { k: "TUS", v: "Compensación de 2,4 M€ por rebaja; leasing de 10 buses por 5,5 M€ a 10 años (3,5%); 3,5 conductores por bus exprés; Bus Nit a 75 €/h; ahorro solar 0,2 M€/año." },
      { k: "Personal", v: "Coste medio de empresa de 46.000 € por operario." },
      { k: "Congelación IBI (0,8 M€)", v: "Actualización del 2,5% prevista menos crecimiento natural de bases (≈1%), sobre un IBI residencial de unos 55 M€." },
      { k: "Limpieza viaria", v: "El contrato con SMATSA fue prorrogado hasta 2030; no se computa ningún ahorro en esta memoria." }
    ],

    feedbackEyebrow: "CONSULTA VECINAL ABIERTA",
    feedbackTitle: "¿Qué te parece esta propuesta? Queremos escucharte",
    feedbackSubtitle: "Antes de registrar nada ni formalizar ninguna candidatura, queremos saber si este programa responde a las necesidades reales de Sabadell. Responde la encuesta en 1 minuto o escríbenos directamente.",
    tallyBadge: "ENCUESTA RÁPIDA · 1 MINUTO",
    tallyTitle: "Participa en la encuesta ciudadana (Tally.so)",
    tallyDesc: "Cuéntanos desde qué barrio nos lees, qué ejes ves más urgentes y qué mejorarías o añadirías al programa.",
    tallyBtn: "Responder la encuesta en Tally.so",
    tallyPending: "Encuesta en preparación. Mientras tanto, envíanos tu opinión directamente por correo electrónico a uniociutadana@proton.me.",
    contactBadge: "CONTACTO DIRECTO",
    contactTitle: "Escríbenos por correo electrónico",
    contactDesc: "Si formas parte de una entidad vecinal, tienes propuestas concretas para tu barrio o quieres colaborar en esta fase inicial, escríbenos a:",

    ctaEyebrow: "PROYECTO CIUDADANO EN FASE DE CONSULTA · SABADELL",
    ctaTitle: "¿TE INTERESARÍA ESTE PARTIDO PARA SABADELL?",
    ctaSubtitle: "Escríbenos por correo electrónico para decirnos si te interesaría este proyecto, si lo apoyarías o si tienes alguna propuesta más para la ciudad.",
    ctaBtn: "Escribir a uniociutadana@proton.me",
    ctaMailSubject: "Opinión, apoyo o propuestas - Unió Ciutadana Sabadell",
    footerTagline: "© 2026 Unió Ciutadana (UC) Sabadell · Proyecto ciudadano en fase de consulta (sin registro jurídico)"
  }
};
