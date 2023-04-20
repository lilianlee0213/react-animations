import {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styled from 'styled-components';

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin: 0 auto;
	gap: 20px;
	width: 50vw;
	div:first-child,
	div:last-child {
		grid-column: span 2;
	}
`;
const Box = styled(motion.div)`
	height: 200px;
	border-radius: 30px;
	background-color: rgba(255, 255, 255, 1);
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
`;
const Overlay = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
`;
export function Cards() {
	const [id, setId] = useState<null | string>(null);
	return (
		<>
			<Grid>
				{['1', '2', '3', '4'].map((n) => (
					<Box onClick={() => setId(n)} key={n} layoutId={n} />
				))}
			</Grid>
			<AnimatePresence>
				{id ? (
					<Overlay
						onClick={() => setId(null)}
						initial={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
						animate={{backgroundColor: 'rgba(0, 0, 0, .5)'}}
						exit={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
						<Box style={{width: 400, height: 200}} layoutId={id} />
					</Overlay>
				) : null}
			</AnimatePresence>
		</>
	);
}
