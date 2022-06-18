import React from 'react';

import {Panel, PanelHeader, Group, Cell, List} from '@vkontakte/vkui';
import PropTypes from "prop-types";

const Home = ({ id }) => (
	<Panel id={id}>
		<PanelHeader>Локации</PanelHeader>
		<Group>
			<List>
				<Cell>Стройплощадка</Cell>
				<Cell>Метро</Cell>
				<Cell>Стадион</Cell>
				<Cell>Музей</Cell>
				<Cell>Экскурсионный автобус</Cell>
				<Cell>Рок-концерт</Cell>
				<Cell>Шоколадная фабрика</Cell>
				<Cell>Кладбище</Cell>
				<Cell>Джаз-бэнд</Cell>
				<Cell>Виноградник</Cell>
				<Cell>Порт</Cell>
				<Cell>Автогонки</Cell>
				<Cell>Тюрьма</Cell>
				<Cell>Выставка кошек</Cell>
				<Cell>Парламент</Cell>
				<Cell>Дом престарелых</Cell>
				<Cell>Шахта</Cell>
				<Cell>Библиотека</Cell>
			</List>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Home;
