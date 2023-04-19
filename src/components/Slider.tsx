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
	entry: (isBack: boolean) => {
		return {
			x: isBack ? -500 : 500,
			opacity: 0,
			scale: 0,
		};
	},
	center: {
		x: 0,
		opacity: 1,
		scale: 1,
		transition: {duration: 0.5},
	},
	exit: (isBack: boolean) => ({
		x: isBack ? 500 : -500,
		opacity: 0,
		scale: 0,
		transition: {duration: 0.5},
	}),
};
export function Slider() {
	const [visiable, setVisible] = useState(1);
	const [back, setBack] = useState(false);
	const next = () => {
		setBack(false);
		setVisible((curr) => (curr === 6 ? 6 : curr + 1));
	};
	const prev = () => {
		setBack(true);
		setVisible((curr) => (curr === 1 ? 1 : curr - 1));
	};
	return (
		<>
			<AnimatePresence custom={back}>
				<Box
					custom={back}
					variants={boxVariants}
					initial="entry"
					animate="center"
					exit="exit"
					key={visiable}>
					{visiable}
				</Box>
			</AnimatePresence>
			<div>
				<button onClick={prev}>Prev</button>
				<button onClick={next}>Next</button>
			</div>
		</>
	);
}
