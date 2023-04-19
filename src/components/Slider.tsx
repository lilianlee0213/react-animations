import {motion, AnimatePresence} from 'framer-motion';
import {useState} from 'react';
import styled from 'styled-components';

const Box = styled(motion.div)`
	top: 100px;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
	width: 400px;
	height: 200px;
	border-radius: 25px;
	font-size: 20px;
	font-weight: 600;
	background: linear-gradient(135deg, rgb(0, 255, 51), rgb(0, 187, 255));
`;
const boxVariants = {
	invisible: {
		x: 500,
		opacity: 0,
		scale: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		scale: 1,
		transition: {duration: 0.5},
	},
	exit: {
		x: -500,
		opacity: 0,
		scale: 0,
		transition: {duration: 0.5},
	},
};
export function Slider() {
	const [visiable, setVisible] = useState(1);
	const next = () => {
		setVisible((prev) => (prev === 6 ? 6 : prev + 1));
	};
	return (
		<>
			<AnimatePresence>
				{[1, 2, 3, 4, 5, 6].map((i) =>
					i === visiable ? (
						<Box
							key={i}
							variants={boxVariants}
							initial="invisible"
							animate="visible"
							exit="exit">
							{i}
						</Box>
					) : null
				)}
			</AnimatePresence>
			<button onClick={next}>Next</button>
		</>
	);
}
