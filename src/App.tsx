import React, {useRef} from 'react';
import styled from 'styled-components';
import {BasicMotions} from './components/BasicMotions';
import {motion, AnimatePresence} from 'framer-motion';

const Section = styled.section<{bgColor: string}>`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	background: ${(props) => props.bgColor};
	padding: 80px 0;
`;

function App() {
	return (
		<>
			<Section bgColor="#1a1a1a">
				<BasicMotions />
			</Section>
			<Section bgColor="linear-gradient(135deg, #fb7bbf, #298eed)"></Section>
		</>
	);
}

export default App;
