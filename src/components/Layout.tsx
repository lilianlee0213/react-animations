import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useState} from 'react';

const Box = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	width: 300px;
	height: 300px;
	border-radius: 25px;
	background-color: white;
`;
const Circle = styled(motion.div)`
	width: 80px;
	height: 80px;

	background-color: #00a5ff;
`;
export function Layout() {
	const [clicked, setClicked] = useState(false);
	const toggleClicked = () => {
		setClicked((prev) => !prev);
	};
	return (
		<motion.div onClick={toggleClicked} style={{display: 'flex', gap: 400}}>
			<Box>
				{!clicked ? (
					<Circle layoutId="circle" style={{borderRadius: '50%'}} />
				) : null}
			</Box>
			<Box>
				{!clicked ? null : (
					<Circle layoutId="circle" style={{borderRadius: 0, scale: 2}} />
				)}
			</Box>
		</motion.div>
	);
}
