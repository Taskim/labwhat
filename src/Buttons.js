import React, { Component } from 'react'
import { Spring, animated } from 'react-spring'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import './App.css'

import { data, logo, silence } from './assets';

class Buttons extends Component {
    constructor(props) {
        super(props)
        this.state = { selected: data[1], loaded: [] }
        this.play = this.play.bind(this)
        this.select = this.select.bind(this)
        this.playIfInQuery = this.playIfInQuery.bind(this)
    }

    componentDidMount() {
        const query = queryString.parse(this.props.location.search)
        if (query.s) {
            this.setState({ selected: data[query.s]});
        }
    }

    playIfInQuery(id) {
        const query = queryString.parse(this.props.location.search)
        if (parseInt(query.s) === id) {
            return true
        }
        return false;
    }

    play(id) {
        const audio = document.querySelector(`audio[data-key="${id}"]`)
        audio.play()
        this.setState({ selected: data[id] })
    }

    select = selected => {
        this.play(selected.id)
        this.props.history.push({
            pathname: '/labwhat',
            search: `?s=${selected.id}`,
        })
    }
    render() {
        const selected = this.state.selected
        return (
            <div className="app">
                <img src={logo} alt="Labwhat" className="logo" />
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
                    {Object.values(data).map(o => (
                        <div
                            key={o.name}
                            onClick={e => this.select(o)}
                            className={selected.name === o.name ? 'active' : ''}
                        >
                            {o.name}
                            <audio
                                autoPlay={this.playIfInQuery(o.id)}
                                data-key={
                                    o.id
                                }
                                src={o.sound}
                            />
                        </div>
                    ))}
                    <iframe src={silence} title="bla" allow="autoplay" id="audio" style={{ display: 'none' }}/>
                </div>
            </div>
        )
    }
}

export default withRouter(Buttons)
