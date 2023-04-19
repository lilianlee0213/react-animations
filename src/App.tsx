import React, {useState} from 'react';
import styled from 'styled-components';
import {BasicMotions} from './components/BasicMotions';
import {Slider} from './components/Slider';
import {Layout} from './components/Layout';

const Section = styled.section<{bgColor: string}>`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	background: ${(props) => props.bgColor};
	padding: 100px 0;
	min-height: 700px;
`;

function App() {
	return (
		<>
			<Section bgColor="#1a1a1a">
				<BasicMotions />
			</Section>
			<Section bgColor="white">
				<Slider />
			</Section>
			<Section bgColor="#e325ad">
				<Layout />
			</Section>
		</>
	);
}

export default App;
