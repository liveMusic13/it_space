// import { motion } from 'framer-motion';
// import About from './about/About';
// import Planet from './planet/Planet';
// import styles from './Section.module.scss';
// import SpaceGlavn from './space-elements/glavn/SpaceGlavn';

// const Section = ({ title, section, viewSection, setViewSection }) => {
// 	const styleAnim = {
// 		top:
// 			title === 'glavn'
// 				? 'calc(-100/1920*100vw)'
// 				: title === 'about'
// 				? 'calc(0/1920*100vw)'
// 				: undefined,
// 		right: 'calc(-120/1920*100vw)',
// 	};

// 	const moveSection = setViewSection => {
// 		if (viewSection < 5) {
// 			setViewSection(prev => prev + 1);
// 		} else {
// 			setViewSection(0);
// 		}
// 	};

// 	const isAnim = viewSection !== section.id;

// 	return (
// 		<section
// 			className={styles.section}
// 			onClick={() => moveSection(setViewSection)}
// 		>
// 			{(section.title === 'glavn' || section.title === 'about') && (
// 				<>
// 					<div className={styles.stars}></div>
// 					<motion.img
// 						className={styles.star_dust}
// 						src='/assets/images/space/star_dust.png'
// 						alt='dust'
// 						initial={{
// 							right: styleAnim.right,
// 							top: styleAnim.top,
// 						}}
// 						animate={{
// 							right: 'calc(0/1920*100vw)',
// 							top: 'calc(0/1920*100vw)',
// 						}}
// 						transition={{ duration: 10, repeat: Infinity }}
// 					/>
// 				</>
// 			)}

// 			{section.title === 'glavn' && <SpaceGlavn isAnim={isAnim} />}
// 			{section.title === 'about' && (
// 				<>
// 					<motion.div
// 						className={styles.shadow__about}
// 						initial={{ top: '-100vh', left: 0 }}
// 						animate={isAnim ? { top: 0, left: 0 } : { top: '-100vh', left: 0 }}
// 						transition={{ duration: 2 }}
// 					></motion.div>
// 					<About isAnim={isAnim} />
// 					<Planet isAnim={isAnim} />
// 				</>
// 			)}

// 			{/* <InterfaceMenu shadow={false} />
// 			<InterfaceMenu shadow={true} /> */}
// 			{/* <div className={styles.psevdo__interface}></div> */}
// 		</section>
// 	);
// };

// export default Section;

import { motion } from 'framer-motion';
import { useState } from 'react';
import About from './about/About';
import Planet from './planet/Planet';
import styles from './Section.module.scss';
import SpaceGlavn from './space-elements/glavn/SpaceGlavn';

const Section = ({ viewSection, setViewSection }) => {
	const [isAnimGlavn, setIsAnimGlavn] = useState(false);
	const [animAbout, setAnimAbout] = useState({
		on: false,
		off: false,
	});
	const [animProjects, setAnimProjects] = useState({
		on: false,
		off: false,
	});
	const [animServices, setAnimServices] = useState({
		on: false,
		off: false,
	});
	const [animContacts, setAnimContacts] = useState({
		on: false,
		off: false,
	});
	const [animCareer, setAnimCareer] = useState({
		on: false,
		off: false,
	});

	const styleAnim = viewSection => {
		return {
			top:
				viewSection === 0
					? 'calc(-100/1920*100vw)'
					: viewSection === 1
					? 'calc(0/1920*100vw)'
					: undefined,
			right: 'calc(-120/1920*100vw)',
		};
	};

	const moveSection = setViewSection => {
		if (viewSection === 0) {
			setIsAnimGlavn(true);
			setAnimAbout(prev => ({ ...prev, on: true }));
		} else if (viewSection === 1) {
			setAnimAbout({ off: true, on: false });
		}
		if (viewSection < 5) {
			setViewSection(prev => prev + 1);
		} else {
			if (viewSection === 5) {
				setIsAnimGlavn(false);
			}
			setViewSection(0);
		}
	};

	const isAnim = (animAbout, forAnim) => {
		if (forAnim === 'initial') {
			return { top: '200vh', left: 0 };
		} else if (forAnim === 'animate') {
			if (animAbout.on) return { top: 0, left: 0 };
			if (animAbout.off) return { top: '200vh', left: 0 };
		}
	};

	return (
		<section
			className={styles.section}
			onClick={() => moveSection(setViewSection)}
		>
			{/* {(viewSection === 0 || viewSection === 1) && (
				<> */}
			<div className={styles.stars}></div>
			<motion.img
				className={styles.star_dust}
				src='/assets/images/space/star_dust.png'
				alt='dust'
				initial={{
					right: styleAnim(viewSection).right,
					top: styleAnim(viewSection).top,
				}}
				animate={{
					right: 'calc(0/1920*100vw)',
					top: 'calc(0/1920*100vw)',
				}}
				transition={{ duration: 10, repeat: Infinity }}
			/>
			{/* </>
			)} */}

			<SpaceGlavn viewSection={viewSection} isAnimGlavn={isAnimGlavn} />

			<motion.div
				className={styles.shadow__about}
				initial={isAnim(animAbout, 'initial')}
				animate={isAnim(animAbout, 'animate')}
				transition={{ duration: 2, ease: 'easeOut' }}
			></motion.div>
			<About animAbout={animAbout} isAnim={isAnim} />
			<Planet viewSection={viewSection} animAbout={animAbout} />
		</section>
	);
};

export default Section;
