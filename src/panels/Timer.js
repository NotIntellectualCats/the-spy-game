import React, {useEffect, useReducer, useState} from 'react';

import {Panel, PanelHeader, Group, FormItem, Input, Button, Div, Text} from '@vkontakte/vkui';
import PropTypes from "prop-types";

class Timer extends React.Component {
    constructor (props)
    {
        super(undefined)
        this.id = props.id
        this.timeRemain = (props.players + 1) * 10
        this.state = {
            humanReadableTime: ''
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
                this.setState({ humanReadableTime: 'Игра завершена 🕵️' })
            }
        }, 1000)
    }


    render() {
        return (
            <Panel id={this.id}>
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
