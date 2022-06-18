import React, {useEffect, useReducer, useState} from 'react';

import {Panel, PanelHeader, Group, FormItem, Input, Button, Div, Text} from '@vkontakte/vkui';
import PropTypes from "prop-types";
import bridge from "@vkontakte/vk-bridge";

class Timer extends React.Component {
    constructor (props)
    {
        super(undefined)
        this.id = props.id
        this.timeRemain = (props.players + 1) * 60
        this.ended = false
        this.state = {
            humanReadableTime: `${this.props.players}:00`
        }
    }
    componentDidMount () {
        this.interval = setInterval(() => {
            console.log('timer', this)
            this.timeRemain -= 1
            const minutes = Math.round(this.timeRemain / 60)
            const seconds = this.timeRemain % 60
            this.setState({ humanReadableTime: `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}` })
            if (this.timeRemain <= 0) {
                this.ended = true
                this.setState({ humanReadableTime: 'Игра завершена 🕵️' })
                bridge.send("VKWebAppFlashGetInfo").then(e => {
                    console.log(e)
                    if (e.is_available) {
                        bridge.send("VKWebAppFlashSetLevel", {level: 1}).then(() => {
                            setTimeout(() => {
                                bridge.send("VKWebAppFlashSetLevel", {level: 0})
                            }, 500)
                        })
                    }
                })
            }
        }, 1000)
    }

    goHome () {
        if (this.ended) {
            bridge.send("VKWebAppFlashSetLevel", {level: 0})
            clearInterval(this.interval)
            this.props.go('home')
        }
    }


    render () {
        return (
            <Panel id={this.id} onClick={() => { this.goHome() }}>
                <PanelHeader>Игра началась</PanelHeader>
                <Group>
                    <Text weight="regular">{this.state.humanReadableTime}</Text>
                </Group>
            </Panel>
        )
    }
}

Timer.propTypes = {
    id: PropTypes.string.isRequired,
    players: PropTypes.number.isRequired,
    go: PropTypes.func.isRequired
};

export default Timer;
