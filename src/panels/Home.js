import React from 'react';

import {Panel, PanelHeader, Group, FormItem, Input, Button} from '@vkontakte/vkui';
import PropTypes from "prop-types";

const Home = ({ id, changePlayers, go }) => (
	<Panel id={id}>
		<PanelHeader>Новая игра</PanelHeader>
		<Group>
				<FormItem top="Сколько игроков учавствуют?">
				<Input type="number`" autoFocus={true} onChange={e => { changePlayers(parseInt(e.target.value) - 1) }} />
				<br />
				<Button
					stretched={true}
					mode="secondary"
					onClick={() => {
						go('generate')
					}}
				>
					Создать
				</Button>
			</FormItem>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	changePlayers: PropTypes.func.isRequired,
	go: PropTypes.func.isRequired
};

export default Home;
