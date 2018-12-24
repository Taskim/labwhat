import {
    sncf,
    arreteLaDrogue,
    surprise,
    cartman,
    denis,
    snoop,
    couilles,
    souffrir,
    pedobear,
    jojobernard,
    kaaris,
    issou,
} from './data'
import sncfSound from './jingle-sncf-hq.mp3'
import surpriseSound from './surprise.mp3'
import arreteLaDrogueSound from './arrete-la-drogue.mp3'
import smokeSound from './Smoke Weed Everyday.mp3'
import ahSound from './ah.mp3'
import cartmanSound from './je-vous-emmerde-et-je-rentre-a-ma-maison.mp3'
import onSenBatLesCouillesSound from './on-sen-bat-les-couilles.mp3'
import JeSuisPasVenueIciPourSoufrrirSound from './je-suis-pas-venue-ici-pour-souffrir-ok-cest-mon-choix.mp3'
import coucouTuVeuxVoirMaBiteSound from './coucou-tu-veux-voir-ma-bite-gollum.mp3'
import maisPutainTGSound from './mais-putain-ta-gueule.mp3'
import jaiDitPuteuhSound from './oh-puteuh-jai-dit-puteuh.mp3'
import issouSound from './issou.mp3'

export {default as logo } from './logo.png'
export {default as silence } from './silence.mp3';

export const data = {
    1: { id: 1, name: 'SNCF', image: sncf, sound: sncfSound },
    2: {
        id: 2,
        name: 'ARRETE LA DROGUE',
        image: arreteLaDrogue,
        sound: arreteLaDrogueSound,
    },
    3: {
        id: 3,
        name: 'SURPRISE MOTHERFUCKER',
        image: surprise,
        sound: surpriseSound,
    },
    4: {
        id: 4,
        name: 'JE VOUS EMMERDE ET JE RENTRE A MA MAISON',
        image: cartman,
        sound: cartmanSound,
    },
    5: { id: 5, name: 'AH !', image: denis, sound: ahSound },
    6: { id: 6, name: 'SMOKE WEED EVERYDAY', image: snoop, sound: smokeSound },
    7: {
        id: 7,
        name: "ON S'EN BAT LES COUILLES",
        image: couilles,
        sound: onSenBatLesCouillesSound,
    },
    8: {
        id: 8,
        name: 'JE SUIS PAS VENUE ICI POUR SOUFFIR',
        image: souffrir,
        sound: JeSuisPasVenueIciPourSoufrrirSound,
    },
    9: {
        id: 9,
        name: 'COUCOU TU VEUX VOIR MA BITE ?',
        image: pedobear,
        sound: coucouTuVeuxVoirMaBiteSound,
    },
    10: {
        id: 10,
        name: 'MAIS PUTAIN TA GUEULE',
        image: jojobernard,
        sound: maisPutainTGSound,
    },
    11: {
        id: 11,
        name: "J'AI DIT PUTEUH",
        image: kaaris,
        sound: jaiDitPuteuhSound,
    },
    12: { id: 12, name: 'ISSOU', image: issou, sound: issouSound },
}
