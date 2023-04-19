import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useState} from 'react';

const Box = styled(motion.div)`
	display: flex;
	padding: 10px;
	width: 300px;
	height: 300px;
	border-radius: 25px;
	background-color: rgba(255, 255, 255, 1);
`;
const Circle = styled(motion.div)`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-color: #00a5ff;
`;
export function Layout() {
	const [clicked, setClicked] = useState(false);
	const toggleClicked = () => {
		setClicked((prev) => !prev);
	};
	return (
		<motion.div onClick={toggleClicked}>
			<Box
				style={{
					justifyContent: clicked ? 'center' : 'flex-start',
					alignItems: clicked ? 'center' : 'flex-start',
				}}>
				<Circle layout />
			</Box>
		</motion.div>
	);
}
