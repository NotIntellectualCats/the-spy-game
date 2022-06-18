import React, {useState} from 'react';

import {Panel, PanelHeader, Group, Text, Div, Cell} from '@vkontakte/vkui';
import PropTypes from "prop-types";

const Generate = ({ id, players, go }) => {
    const [wasPlayers, setWasPlayers] = useState(0)
    const [isRoleShowing, showRole] = useState(true)
    const [wasSpy, setWasSpy] = useState(false)
    const generateRole = () => {
        const roles = [
            <Cell>Стройплощадка</Cell>,
            <Cell>Метро</Cell>,
            <Cell>Стадион</Cell>,
            <Cell>Музей</Cell>,
            <Cell>Экскурсионный автобус</Cell>,
            <Cell>Рок-концерт</Cell>,
            <Cell>Шоколадная фабрика</Cell>,
            <Cell>Кладбище</Cell>,
            <Cell>Джаз-бэнд</Cell>,
            <Cell>Виноградник</Cell>,
            <Cell>Порт</Cell>,
            <Cell>Автогонки</Cell>,
            <Cell>Тюрьма</Cell>,
            <Cell>Выставка кошек</Cell>,
            <Cell>Парламент</Cell>,
            <Cell>Дом престарелых</Cell>,
            <Cell>Шахта</Cell>,
            <Cell>Библиотека</Cell>,
            <Cell>Шпион</Cell>
        ];
        let role_id = Math.floor(Math.random() * roles.length)
        if (role_id === roles.length - 1) {
            setWasSpy(true)
        }
        let role = roles[role_id]
        setWasPlayers(wasPlayers + 1)
        console.log(wasSpy, wasPlayers)
        if (!wasSpy && wasPlayers === players) {
            role = roles[roles.length - 1]
        }

        if (wasPlayers > players) {
            go('home')
        }
        return role
    }

    const [nowRole, setNowRole] = useState(generateRole)

    return (<Panel id={id} onClick={() => {
                showRole(!isRoleShowing)
                if (isRoleShowing) {
                    setNowRole(generateRole())
                }
            }}>
            <PanelHeader>Ваша роль</PanelHeader>
            <Group>
                <Div>
                    { isRoleShowing ? nowRole : <Text weight="regular">Передайте телефон дальше</Text> }
                </Div>
            </Group>
        </Panel>)
}

Generate.propTypes = {
    id: PropTypes.string.isRequired,
    players: PropTypes.number.isRequired,
    go: PropTypes.string.isRequired
};

export default Generate;
