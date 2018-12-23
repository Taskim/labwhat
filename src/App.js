import React, { Component } from 'react'
import './App.css'
import { Spring, animated } from 'react-spring'
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
} from './assets/data'
import sncfSound from './assets/jingle-sncf-hq.mp3'
import surpriseSound from './assets/surprise.mp3'
import arreteLaDrogueSound from './assets/arrete-la-drogue.mp3'
import smokeSound from './assets/Smoke Weed Everyday.mp3'
import ahSound from './assets/ah.mp3'
import cartmanSound from './assets/je-vous-emmerde-et-je-rentre-a-ma-maison.mp3'
import onSenBatLesCouillesSound from './assets/on-sen-bat-les-couilles.mp3'
import JeSuisPasVenueIciPourSoufrrirSound from './assets/je-suis-pas-venue-ici-pour-souffrir-ok-cest-mon-choix.mp3'
import coucouTuVeuxVoirMaBiteSound from './assets/coucou-tu-veux-voir-ma-bite-gollum.mp3'
import maisPutainTGSound from './assets/mais-putain-ta-gueule.mp3'
import jaiDitPuteuhSound from './assets/oh-puteuh-jai-dit-puteuh.mp3'
import issouSound from './assets/issou.mp3'

const data = [
    { name: 'SNCF', image: sncf, sound: sncfSound },
    {
        name: 'ARRETE LA DROGUE',
        image: arreteLaDrogue,
        sound: arreteLaDrogueSound,
    },
    { name: 'SURPRISE MOTHERFUCKER', image: surprise, sound: surpriseSound },
    {
        name: 'JE VOUS EMMERDE ET JE RENTRE A MA MAISON',
        image: cartman,
        sound: cartmanSound,
    },
    { name: 'AH !', image: denis, sound: ahSound },
    { name: 'SMOKE WEED EVERYDAY', image: snoop, sound: smokeSound },
    {
        name: "ON S'EN BAT LES COUILLES",
        image: couilles,
        sound: onSenBatLesCouillesSound,
    },
    {
        name: 'JE SUIS PAS VENUE ICI POUR SOUFFIR',
        image: souffrir,
        sound: JeSuisPasVenueIciPourSoufrrirSound,
    },
    {
        name: 'COUCOU TU VEUX VOIR MA BITE ?',
        image: pedobear,
        sound: coucouTuVeuxVoirMaBiteSound,
    },
    { name: 'MAIS PUTAIN TA GUEULE', image: jojobernard, sound: maisPutainTGSound },
    { name: "J'AI DIT PUTEUH", image: kaaris, sound: jaiDitPuteuhSound },
    { name: 'ISSOU', image: issou, sound: issouSound },
]

class App extends Component {
    state = { selected: data[0] }
    select = selected => {
        document.querySelector(`audio[data-key="${selected.name}"`).play()
        this.setState({ selected })
    }
    render() {
        const selected = this.state.selected
        return (
            <div className="app">
                <svg className="detail" viewBox="0 0 170 256">
                    {selected.image.map((p, i) => (
                        <Spring key={i} native to={p}>
                            {styles => (
                                <animated.path
                                    d={styles.d}
                                    fill={styles.fill}
                                />
                            )}
                        </Spring>
                    ))}
                </svg>
                <div className="master">
                    {data.map(o => (
                        <div
                            key={o.name}
                            onClick={e => this.select(o)}
                            className={selected.name === o.name ? 'active' : ''}
                        >
                            {o.name}
                            <audio data-key={o.name} src={o.sound} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default App
