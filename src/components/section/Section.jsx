import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import About from './about/About';
import Planet from './planet/Planet';
import Projects from './projects/Projects';
import styles from './Section.module.scss';
import ServicesPage from './services-page/ServicesPage';
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
		size_on: false,
		size_off: false,
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
	const [animSpace, setAnimSpace] = useState({
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

	useEffect(() => {
		if (viewSection === 1) {
			setIsAnimGlavn(true);
			setAnimAbout(prev => ({ ...prev, on: true }));
		} else if (viewSection === 2) {
			setAnimAbout({ off: true, on: false });
			setViewSection(prev => prev + 1);
		} else if (viewSection === 3) {
			setAnimProjects(prev => ({ ...prev, on: true }));
		} else if (viewSection === 4) {
			setAnimProjects(prev => ({ ...prev, size_on: true }));
		} else if (viewSection === 5) {
			setAnimProjects(prev => ({ ...prev, size_on: false, size_off: true }));
			// setAnimProjects({ size_on: false, size_off: true });
			setViewSection(prev => prev + 1);
		} else if (viewSection === 6) {
			setAnimServices(prev => ({ ...prev, on: true }));
		} else if (viewSection === 7) {
			setAnimServices({ on: false, off: true });
			setViewSection(prev => prev + 1);
		} else if (viewSection === 8) {
			// setAnimProjects(prev => ({
			// 	on: false,
			// 	off: false,
			// 	size_on: false,
			// 	size_off: false,
			// }));
			// setAnimSpace(prev => ({ ...prev, on: true }));
		}
	}, [viewSection]);

	const moveSection = setViewSection => {
		if (viewSection < 9) {
			setViewSection(prev => prev + 1);
		} else {
			if (viewSection === 10) {
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
			if (animAbout.off) return { top: 0, left: '-100vw' };
		} else if (forAnim === 'transition') {
			if (animAbout.off) {
				return { duration: 3.5, ease: 'easeOut' };
			} else {
				return { duration: 2, ease: 'easeOut' };
			}
		}
	};

	const isAnimContainer = (animProjects, forAnim) => {
		if (forAnim === 'initial') {
			if (animProjects.size_off) {
				return { transform: 'scale(0.77)' };
			} else {
				return { transform: 'scale(1)' };
			}
		} else if (forAnim === 'animate') {
			// if (animSpace.on) {
			// 	return { transform: 'scale(1)' };
			// } else {
			// 	if (animProjects.size_on) {
			// 		return { transform: 'scale(0.77)' };
			// 	} else if (animProjects.size_off) {
			// 		return { top: '-100vh' };
			// 	}
			// }

			if (animProjects.size_on) {
				return { transform: 'scale(0.77)' };
			} else if (animProjects.size_off) {
				return { top: '-100vh' };
			}
		}
	};

	return (
		<section
			className={styles.section}
			onClick={() => moveSection(setViewSection)}
		>
			<motion.div
				className={styles.section__container}
				initial={isAnimContainer(animProjects, 'initial')}
				animate={isAnimContainer(animProjects, 'animate')}
				transition={{ duration: 2 }}
			>
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

				<SpaceGlavn
					viewSection={viewSection}
					isAnimGlavn={isAnimGlavn}
					animProjects={animProjects}
				/>

				<motion.div
					className={styles.shadow__about}
					initial={isAnim(animAbout, 'initial')}
					animate={isAnim(animAbout, 'animate')}
					transition={isAnim(animAbout, 'transition')}
				></motion.div>
				<About animAbout={animAbout} isAnim={isAnim} />
				<Planet viewSection={viewSection} animAbout={animAbout} />

				<Projects animProjects={animProjects} />
			</motion.div>
			<ServicesPage animServices={animServices} />
		</section>
	);
};

export default Section;
