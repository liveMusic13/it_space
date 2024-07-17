import { motion } from 'framer-motion';
import { useSectionsAnim } from '../../../hooks/useSectionsAnim';
import About from '../about/About';
import styles from './AbAndPlanMobile.module.scss';

const AbAndPlanMobile = ({ animAbout, viewSection, isAnimPlanet }) => {
	const { isAnim, isAnim50MobilePlanet } = useSectionsAnim();
	return (
		<motion.div
			className={styles.wrapper_about}
			// initial={isAnim(animAbout, 'initial')}
			// animate={isAnim(animAbout, 'animate')}
			// transition={isAnim(animAbout, 'transition')}
		>
			<motion.div
				className={styles.shadow__about}
				initial={isAnim(animAbout, 'initial')}
				animate={isAnim(animAbout, 'animate')}
				transition={isAnim(animAbout, 'transition')}
			></motion.div>
			<About animAbout={animAbout} isAnim={isAnim} />
			{/* <Planet viewSection={viewSection} animAbout={animAbout} /> */}
			{/* {viewSection === 99 || viewSection === 100 || ( */}
			{/* <motion.img
				className={styles.earth__mobile}
				src='/assets/images/earth/earth_planet__mobile.png'
				alt='earth'
				initial={isAnim50MobilePlanet(isAnimPlanet, 'initial')}
				animate={isAnim50MobilePlanet(isAnimPlanet, 'animate')}
				transition={isAnim50MobilePlanet(isAnimPlanet, 'transition')}
			/> */}
			<motion.img
				className={styles.earth__mobile}
				src='/assets/images/earth/earth_planet__mobile.png'
				alt='earth'
				initial={isAnim50MobilePlanet(viewSection, 'initial')}
				animate={isAnim50MobilePlanet(viewSection, 'animate')}
			/>
			{/* )} */}
			{/* <img
				className={styles.earth__mobile}
				src='/assets/images/earth/earth_planet__mobile.png'
				alt='earth'
				style={viewSection === 1 ? { top: '76.9%' } : { top: '-100vh' }}
				data='dsdsdsd'
			/> */}
		</motion.div>
	);
};

export default AbAndPlanMobile;
