import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

interface IBox {
	gradient?: string;
}
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 100vw;
	height: 100vh;
`;
const Area = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
`;
const Container = styled.div<IBox>`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	gap: 20px;
	padding: 20px;
	width: 300px;
	height: 300px;
	border-radius: 10px;
	background: ${(props) => props.gradient};
`;
const Box = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 100px;
	height: 100px;
	background-color: white;
	border-radius: 25px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1) 0 10px 20px rgba(0, 0, 0, 0.96);
	&.box2 {
		background-color: rgba(255, 255, 255, 0.2);
		padding: 8px;
	}
`;
const Circle = styled(motion.div)`
	place-self: center;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1) 0 10px 20px rgba(0, 0, 0, 0.96);
	background-color: white;
`;

const Title = styled.h1`
	width: 100%;
	text-align: left;
	font-size: 20px;
	font-weight: 500;
	color: white;
`;
// Variants
const boxVariants = {
	start: {opacity: 0, scale: 0.5},
	end: {
		opacity: 1,
		scale: 1,
		transition: {
			type: 'spring',
			duration: 0.5,
			bounce: 0.3,
			delayChildren: 0.5,
			staggerChildren: 0.25,
		},
	},
};
const circleVariants = {
	start: {opacity: 0, y: 10},
	end: {
		opacity: 1,
		y: 0,
	},
};
// Gestures
const gestures = {
	hover: {scale: 1.2, rotateZ: 90},
	click: {scale: 1, borderRadius: '50%'},
};
// Drag
// Scroll
// Path
function App() {
	return (
		<Wrapper>
			<Area>
				<Container gradient="linear-gradient(135deg,#e09,#d0e)">
					<Box
						transition={{type: 'spring', bounce: 0.05, delay: 0.5}}
						initial={{scale: 0}}
						animate={{scale: 1, rotateZ: 360}}
					/>
					<Title>Animation</Title>
				</Container>
				<Container gradient="linear-gradient(180deg, #d0e, #91f)">
					<Box
						variants={boxVariants}
						initial="start"
						animate="end"
						className="box2">
						<Circle variants={circleVariants} />
						<Circle variants={circleVariants} />
						<Circle variants={circleVariants} />
						<Circle variants={circleVariants} />
					</Box>
					<Title>Variants</Title>
				</Container>
				<Container gradient="linear-gradient(180deg, #91f, #70f)">
					<Box variants={gestures} whileHover="hover" whileTap="click" />
					<Title>Gestures</Title>
				</Container>
				<Container gradient="linear-gradient(180deg, #70f, #40f)">
					<Box />
					<Title>Drag</Title>
				</Container>
				<Container gradient="linear-gradient(180deg, #40f, #05f)">
					<Box />
					<Title>Scroll</Title>
				</Container>
				<Container gradient="linear-gradient(180deg, #05f, #09f)">
					<Box />
					<Title>Path</Title>
				</Container>
			</Area>
		</Wrapper>
	);
}

export default App;
