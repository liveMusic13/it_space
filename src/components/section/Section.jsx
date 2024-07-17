import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useSectionsAnim } from '../../hooks/useSectionsAnim';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import AbAndPlanMobile from './ab-and-plan-mobile/AbAndPlanMobile';
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
		isViewContainer,
		setIsViewContainer,
		isViewContact,
		setIsViewContact,
		isViewCareer,
		setIsViewCareer,
		isAnimPlanet,
		setIsAnimPlanet,
		isVieBackOpacity,
		setIsVieBackOpacity,
	} = states;

	const { width } = useWindowDimensions();

	const {
		styleAnim,
		isAnim,
		test,
		isAnimContainer,
		isAnimBG,
		styleAnim__mobile,
	} = useSectionsAnim();

	useEffect(() => {
		if (viewSection === 99 && width <= 767.98) {
			// setIsAnimGlavn(true);
			setIsAnimPlanet(true);
			// setViewSection(prev => prev + 1);
			setAnimAbout({ off: true, on: false });
		} else if (viewSection === 100 && width <= 767.98) {
			// setIsAnimGlavn(true);
			setIsAnimPlanet(false);
			setViewSection(2); //HELP: СОСТОЯНИЕ ДОЛЖНО БЫТЬ 2
		} else if (viewSection === 1) {
			setIsAnimGlavn(true);
			setAnimAbout(prev => ({ ...prev, on: true }));
		} else if (viewSection === 2) {
			if (width > 767.98) setAnimAbout({ off: true, on: false });
			setViewSection(prev => prev + 1);
		} else if (viewSection === 3) {
			if (width <= 767.98) setIsScaleProjects(true);
			// setIsScaleProjects(true);
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

			setIsViewCareer(false);
			setIsViewContact(false);
			setIsViewContainer(false);
			setIsScaleProjects(false);
			// if (width <= 767.98) setIsScaleProjects(true);
			setIsScale(false);

			if (width <= 767.98) setIsAnimPlanet(false);

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

		if (width <= 767.98 && e.deltaY > 0 && viewSection === 99) {
			setViewSection(100);
		}

		if (width <= 767.98 && viewSection === 1 && e.deltaY > 0) {
			//TODO: ДЛЯ МОБИЛЬНОЙ ВЕРСИИ, ГДЕ НУЖЕН ЕЩЁ ШАГ ДЛЯ ПЛАНЕТЫ

			if (e.deltaY > 0 && viewSection === 1) {
				setViewSection(99);
			}
		} else {
			if (e.deltaY > 0 && viewSection < 10) {
				setViewSection(prev => prev + 1);
			}
		}
	};

	///
	const handleSwipeLeft = () => {
		if (width <= 767.98) {
			if (viewSection === 99) {
				setViewSection(100);
			} else if (viewSection === 1) {
				setViewSection(99);
			} else if (viewSection < 10) {
				setViewSection(prev => prev + 1);
			}
		}
	};

	const swipeHandlers = useSwipeable({
		onSwipedLeft: handleSwipeLeft,
		preventDefaultTouchmoveEvent: true,
		trackMouse: true, // Чтобы отслеживать движения мыши для тестирования на десктопе
	});
	///

	// console.log(isViewContact, isScale, isViewContainer, isViewCareer);
	return (
		<section
			className={styles.section}
			// onClick={() => moveSection(setViewSection)}
			onWheel={width <= 767.98 ? undefined : handleWheel}
			{...swipeHandlers}
		>
			<motion.div
				className={styles.bg_for_contacts}
				initial={isAnimBG(animContacts, 'initial')}
				animate={isAnimBG(animContacts, 'animate')}
				transition={{ duration: 2 }}
				style={
					viewSection === 6
						? { display: 'none' }
						: isViewContact
						? { zIndex: '3' }
						: {}
				}
			></motion.div>

			<motion.div
				className={styles.section__container}
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
				style={
					isScale
						? {
								transform: 'scale(1)',
								overflowY:
									width <= 767.98 && viewSection === 3 ? 'scroll' : 'hidden',
						  }
						: isViewContainer || isViewCareer
						? {
								top: '-100vh',
								overflowY:
									width <= 767.98 && viewSection === 3 ? 'scroll' : 'hidden',
						  }
						: {
								overflowY:
									width <= 767.98 && viewSection === 3 ? 'scroll' : 'hidden',
						  }
				}
			>
				<div className={styles.stars}></div>
				{width <= 767.98 ? (
					<motion.img
						className={styles.star_dust_mobile}
						src='/assets/images/space/star_dust__mobile.png'
						alt='dust'
						initial={{
							right: styleAnim__mobile(viewSection).right,
							top: styleAnim__mobile(viewSection).top,
						}}
						animate={{
							right: '0%',
							top: '0%',
						}}
						transition={{ duration: 10, repeat: Infinity }}
					/>
				) : (
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
				)}

				<SpaceGlavn
					viewSection={viewSection}
					isAnimGlavn={isAnimGlavn}
					animProjects={animProjects}
				/>

				{width <= 767.98 ? (
					<AbAndPlanMobile
						viewSection={viewSection}
						animAbout={animAbout}
						isAnimPlanet={isAnimPlanet}
					/>
				) : (
					<>
						<motion.div
							className={styles.shadow__about}
							initial={isAnim(animAbout, 'initial')}
							animate={isAnim(animAbout, 'animate')}
							transition={isAnim(animAbout, 'transition')}
						></motion.div>
						<About animAbout={animAbout} isAnim={isAnim} />
						<Planet viewSection={viewSection} animAbout={animAbout} />
					</>
				)}
				{/* <About animAbout={animAbout} isAnim={isAnim} />
				<Planet viewSection={viewSection} animAbout={animAbout} /> */}

				<Projects
					animProjects={animProjects}
					viewSection={viewSection}
					isScaleProjects={isScaleProjects}
					setIsScaleProjects={setIsScaleProjects}
				/>
			</motion.div>

			<ServicesPage animServices={animServices} />
			<Contacts animContacts={animContacts} />
			<Career
				animCareer={animCareer}
				viewSection={viewSection}
				isVieBackOpacity={isVieBackOpacity}
				setIsVieBackOpacity={setIsVieBackOpacity}
			/>
		</section>
	);
};

export default Section;
