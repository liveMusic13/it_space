import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Planet.module.scss';

const Planet = ({ viewSection, animAbout }) => {
	const [isStartPlanet, setIsStartPlanet] = useState(false);

	const isAnimView = (animAbout, forAnim) => {
		if (forAnim === 'initial') {
			return {
				top: '250vh',
				right: 'calc(-700/1920*100vw)',
			};
		} else if (forAnim === 'animate') {
			if (animAbout.on)
				return {
					top: 'calc(-483/1920*100vw)',
					right: 'calc(-700/1920*100vw)',
				};
			if (animAbout.off)
				return {
					top: 'calc(-483/1920*100vw)',
					left: '-100vw',
				};
		} else if (forAnim === 'transition') {
			if (animAbout.off) {
				return { duration: 3.5, ease: 'easeOut' };
			} else {
				return { duration: 2, ease: 'easeOut' };
			}
		}
	};

	const isAnimPlanet = (isStartPlanet, forAnim, forObject) => {
		if (forObject === 'planet') {
			if (forAnim === 'animate')
				return isStartPlanet
					? {
							rotate: -10,
							x: 'calc(-18/1920*100vw)',
					  }
					: {};
			if (forAnim === 'transition')
				return isStartPlanet ? { duration: 10 } : {};
		} else {
			if (forAnim === 'animate')
				return isStartPlanet
					? {
							rotate: 12,
					  }
					: {};
			if (forAnim === 'transition')
				return isStartPlanet ? { duration: 10 } : {};
		}
	};

	useEffect(() => {
		if (animAbout.on) {
			const timeouid = setTimeout(() => {
				setIsStartPlanet(true);
			}, 3000);

			return () => clearTimeout(timeouid);
		} else {
			setIsStartPlanet(false);
		}
	}, [viewSection, animAbout.on]);

	return (
		<motion.div
			className={styles.wrapper_planet}
			initial={isAnimView(animAbout, 'initial')}
			animate={isAnimView(animAbout, 'animate')}
			transition={isAnimView(animAbout, 'transition')}
		>
			<motion.img
				className={styles.planet}
				src='/assets/images/earth/earth_planet.png'
				alt='planet'
				animate={isAnimPlanet(isStartPlanet, 'animate', 'planet')}
				transition={isAnimPlanet(isStartPlanet, 'transition', 'planet')}
			/>
			<motion.img
				className={styles.circle}
				src='/assets/images/earth/circle.png'
				alt='circle'
				animate={isAnimPlanet(isStartPlanet, 'animate', 'circle')}
				transition={isAnimPlanet(isStartPlanet, 'transition', 'circle')}
			/>
			<img
				className={styles.exp}
				src='/assets/images/earth/exp.png'
				alt='exp'
			/>
			<img
				className={styles.projects}
				src='/assets/images/earth/projects.png'
				alt='projects'
			/>
			<img
				className={styles.quality}
				src='/assets/images/earth/quality.png'
				alt='quality'
			/>
		</motion.div>
	);
};

export default Planet;
