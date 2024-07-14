// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import About from './about/About';
// import Career from './career/Career';
// import Contacts from './contacts/Contacts';
// import Planet from './planet/Planet';
// import Projects from './projects/Projects';
// import styles from './Section.module.scss';
// import ServicesPage from './services-page/ServicesPage';
// import SpaceGlavn from './space-elements/glavn/SpaceGlavn';

// const Section = ({ viewSection, setViewSection }) => {
// 	const [isAnimGlavn, setIsAnimGlavn] = useState(false);
// 	const [animAbout, setAnimAbout] = useState({
// 		on: false,
// 		off: false,
// 	});
// 	const [animProjects, setAnimProjects] = useState({
// 		on: false,
// 		off: false,
// 		size_on: false,
// 		size_off: false,
// 	});
// 	const [animServices, setAnimServices] = useState({
// 		on: false,
// 		off: false,
// 	});
// 	const [animContacts, setAnimContacts] = useState({
// 		on: false,
// 		off: false,
// 	});
// 	const [animCareer, setAnimCareer] = useState({
// 		on: false,
// 		off: false,
// 	});

// 	const styleAnim = viewSection => {
// 		return {
// 			top:
// 				viewSection === 0
// 					? 'calc(-100/1920*100vw)'
// 					: viewSection === 1
// 					? 'calc(0/1920*100vw)'
// 					: undefined,
// 			right: 'calc(-120/1920*100vw)',
// 		};
// 	};

// 	useEffect(() => {
// 		if (viewSection === 1) {
// 			setIsAnimGlavn(true);
// 			setAnimAbout(prev => ({ ...prev, on: true }));
// 		} else if (viewSection === 2) {
// 			setAnimAbout({ off: true, on: false });
// 			setViewSection(prev => prev + 1);
// 		} else if (viewSection === 3) {
// 			setAnimProjects(prev => ({ ...prev, on: true }));
// 		} else if (viewSection === 4) {
// 			setAnimProjects(prev => ({ ...prev, size_on: true }));
// 		} else if (viewSection === 5) {
// 			setAnimProjects(prev => ({ ...prev, size_on: false, size_off: true }));
// 			setViewSection(prev => prev + 1);
// 		} else if (viewSection === 6) {
// 			setAnimServices(prev => ({ ...prev, on: true }));
// 		} else if (viewSection === 7) {
// 			setAnimServices({ on: false, off: true });
// 			setViewSection(prev => prev + 1);
// 		} else if (viewSection === 8) {
// 			setAnimContacts(prev => ({ ...prev, on: true }));
// 		} else if (viewSection === 9) {
// 			setAnimContacts({ on: false, off: true });
// 			setAnimCareer(prev => ({ ...prev, on: true }));
// 		} else if (viewSection === 10) {
// 			setAnimCareer(prev => ({ ...prev, on: false }));
// 			setAnimAbout({ on: false, off: false });
// 			setAnimProjects({
// 				on: false,
// 				off: false,
// 				size_on: false,
// 				size_off: false,
// 			});
// 			setAnimServices({ on: false, off: false });
// 			setAnimContacts({ on: false, off: false });
// 			setIsAnimGlavn(false);
// 			setViewSection(0);
// 		}
// 	}, [viewSection]);

// 	const moveSection = setViewSection => {
// 		if (viewSection < 10) {
// 			setViewSection(prev => prev + 1);
// 		}
// 	};

// 	const isAnim = (animAbout, forAnim) => {
// 		if (forAnim === 'initial') {
// 			return { top: '200vh', left: 0 };
// 		} else if (forAnim === 'animate') {
// 			if (animAbout.on) return { top: 0, left: 0 };
// 			if (animAbout.off) return { top: 0, left: '-100vw' };
// 		} else if (forAnim === 'transition') {
// 			if (animAbout.off) {
// 				return { duration: 3.5, ease: 'easeOut' };
// 			} else {
// 				return { duration: 2, ease: 'easeOut' };
// 			}
// 		}
// 	};

// 	const test = (viewSection, forAnim) => {
// 		console.log('test');
// 		if (viewSection === 10) {
// 			if (forAnim === 'initial') {
// 				return { transform: 'scale(1)', top: '-100vh' };
// 			} else if (forAnim === 'animate') {
// 				return { transform: 'scale(1)', top: 0 };
// 			}
// 		}
// 	};

// 	const isAnimContainer = (animProjects, forAnim) => {
// 		if (forAnim === 'initial') {
// 			if (animProjects.size_off) {
// 				return { transform: 'scale(0.77)' };
// 			} else {
// 				return { transform: 'scale(1)' };
// 			}
// 		} else if (forAnim === 'animate') {
// 			if (animProjects.size_on) {
// 				return { transform: 'scale(0.77)' };
// 			} else if (animProjects.size_off) {
// 				return { top: '-100vh' };
// 			}
// 		}
// 	};

// 	const isAnimBG = (animContacts, forAnim) => {
// 		if (forAnim === 'initial') {
// 			if (animContacts.off) {
// 				return {
// 					opacity: 1,
// 				};
// 			} else {
// 				return {
// 					opacity: 0,
// 				};
// 			}
// 		} else if (forAnim === 'animate') {
// 			if (animContacts.on) {
// 				return {
// 					opacity: 1,
// 				};
// 			}
// 			if (animContacts.off) {
// 				return {
// 					opacity: 0,
// 				};
// 			}
// 		}
// 	};

// 	return (
// 		<section
// 			className={styles.section}
// 			onClick={() => moveSection(setViewSection)}
// 		>
// 			<motion.div
// 				className={styles.bg_for_contacts}
// 				initial={isAnimBG(animContacts, 'initial')}
// 				animate={isAnimBG(animContacts, 'animate')}
// 				transition={{ duration: 2 }}
// 				style={viewSection === 6 ? { display: 'none' } : {}}
// 			></motion.div>
// 			<motion.div
// 				className={styles.section__container}
// 				initial={
// 					viewSection === 10
// 						? test(viewSection, 'initial')
// 						: isAnimContainer(animProjects, 'initial')
// 				}
// 				animate={
// 					viewSection === 10
// 						? test(viewSection, 'animate')
// 						: isAnimContainer(animProjects, 'animate')
// 				}
// 				transition={{ duration: 2 }}
// 			>
// 				<div className={styles.stars}></div>
// 				<motion.img
// 					className={styles.star_dust}
// 					src='/assets/images/space/star_dust.png'
// 					alt='dust'
// 					initial={{
// 						right: styleAnim(viewSection).right,
// 						top: styleAnim(viewSection).top,
// 					}}
// 					animate={{
// 						right: 'calc(0/1920*100vw)',
// 						top: 'calc(0/1920*100vw)',
// 					}}
// 					transition={{ duration: 10, repeat: Infinity }}
// 				/>

// 				<SpaceGlavn
// 					viewSection={viewSection}
// 					isAnimGlavn={isAnimGlavn}
// 					animProjects={animProjects}
// 				/>

// 				<motion.div
// 					className={styles.shadow__about}
// 					initial={isAnim(animAbout, 'initial')}
// 					animate={isAnim(animAbout, 'animate')}
// 					transition={isAnim(animAbout, 'transition')}
// 				></motion.div>
// 				<About animAbout={animAbout} isAnim={isAnim} />
// 				<Planet viewSection={viewSection} animAbout={animAbout} />

// 				<Projects animProjects={animProjects} viewSection={viewSection} />
// 			</motion.div>
// 			<ServicesPage animServices={animServices} />
// 			<Contacts animContacts={animContacts} />
// 			<Career animCareer={animCareer} />
// 		</section>
// 	);
// };

// export default Section;

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import About from './about/About';
import Career from './career/Career';
import Contacts from './contacts/Contacts';
import Planet from './planet/Planet';
import Projects from './projects/Projects';
import styles from './Section.module.scss';
import ServicesPage from './services-page/ServicesPage';
import SpaceGlavn from './space-elements/glavn/SpaceGlavn';

const Section = ({ viewSection, setViewSection, states }) => {
	const {
		animCareer,
		setAnimCareer,
		animContacts,
		setAnimContacts,
		animServices,
		setAnimServices,
		animProjects,
		setAnimProjects,
		animAbout,
		setAnimAbout,
		isAnimGlavn,
		setIsAnimGlavn,
		isScale,
		setIsScale,
		isScaleProjects,
		setIsScaleProjects,
	} = states;

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
			setViewSection(prev => prev + 1);
		} else if (viewSection === 6) {
			setAnimServices(prev => ({ ...prev, on: true }));
		} else if (viewSection === 7) {
			setAnimServices({ on: false, off: true });
			setViewSection(prev => prev + 1);
		} else if (viewSection === 8) {
			setAnimContacts(prev => ({ ...prev, on: true }));
		} else if (viewSection === 9) {
			setAnimContacts({ on: false, off: true });
			setAnimCareer(prev => ({ ...prev, on: true }));
		} else if (viewSection === 10) {
			setAnimCareer(prev => ({ ...prev, on: false }));
			setAnimAbout({ on: false, off: false });
			setAnimProjects({
				on: false,
				off: false,
				size_on: false,
				size_off: false,
			});
			setAnimServices({ on: false, off: false });
			setAnimContacts({ on: false, off: false });
			setIsAnimGlavn(false);
			setViewSection(0);
		}
	}, [viewSection]);

	// const moveSection = setViewSection => {
	// 	if (viewSection < 10) {
	// 		setViewSection(prev => prev + 1);
	// 	}
	// };
	const handleWheel = e => {
		e.preventDefault();
		if (e.deltaY > 0 && viewSection < 10) {
			setViewSection(prev => prev + 1);
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

	const test = (viewSection, forAnim) => {
		console.log('test');
		if (viewSection === 10) {
			if (forAnim === 'initial') {
				return { transform: 'scale(1)', top: '-100vh' };
			} else if (forAnim === 'animate') {
				return { transform: 'scale(1)', top: 0 };
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
			if (animProjects.size_on) {
				return { transform: 'scale(0.77)' };
			} else if (animProjects.size_off) {
				return { top: '-100vh' };
			}
		}
	};

	const isAnimBG = (animContacts, forAnim) => {
		if (forAnim === 'initial') {
			if (animContacts.off) {
				return {
					opacity: 1,
				};
			} else {
				return {
					opacity: 0,
				};
			}
		} else if (forAnim === 'animate') {
			if (animContacts.on) {
				return {
					opacity: 1,
				};
			}
			if (animContacts.off) {
				return {
					opacity: 0,
				};
			}
		}
	};

	return (
		<section
			className={styles.section}
			// onClick={() => moveSection(setViewSection)}
			onWheel={handleWheel}
		>
			<motion.div
				className={styles.bg_for_contacts}
				initial={isAnimBG(animContacts, 'initial')}
				animate={isAnimBG(animContacts, 'animate')}
				transition={{ duration: 2 }}
				style={viewSection === 6 ? { display: 'none' } : {}}
			></motion.div>
			<motion.div
				className={styles.section__container}
				style={isScale ? { transform: 'scale(1)' } : {}}
				initial={
					viewSection === 10
						? test(viewSection, 'initial')
						: isAnimContainer(animProjects, 'initial')
				}
				animate={
					viewSection === 10
						? test(viewSection, 'animate')
						: isAnimContainer(animProjects, 'animate')
				}
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

				<Projects
					animProjects={animProjects}
					viewSection={viewSection}
					isScaleProjects={isScaleProjects}
					setIsScaleProjects={setIsScaleProjects}
				/>
			</motion.div>
			<ServicesPage animServices={animServices} />
			<Contacts animContacts={animContacts} />
			<Career animCareer={animCareer} />
		</section>
	);
};

export default Section;
