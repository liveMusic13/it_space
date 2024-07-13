import { motion } from 'framer-motion';
import { useEffect } from 'react';
import styles from './SpaceGlavn.module.scss';

const SpaceGlavn = ({ isAnimGlavn, animProjects }) => {
	useEffect(() => {
		console.log(animProjects);
	}, [animProjects.size_on]);

	const isAnim = (isAnimGlavn, forAnim, forObject, animProjects) => {
		if (forObject === 'left') {
			if (forAnim === 'initial') {
				return { top: 0, left: 0 };
			} else if (forAnim === 'animate') {
				return isAnimGlavn ? { top: '-100vh', left: 0 } : {};
			}
		} else if (forObject === 'right') {
			if (forAnim === 'initial') {
				return {
					bottom: '24.4%',
					right: '1%',
					transform: animProjects.size_on ? 'scale(1.28)' : 'scale(1)',
				};
			} else if (forAnim === 'animate') {
				return animProjects.size_on
					? {
							top: '-5.5%',
							right: '-12%',
							transform: animProjects.size_on ? 'scale(1.28)' : 'scale(1)',
					  }
					: isAnimGlavn
					? {
							top: '5.5%',
							right: '1%',
							transform: animProjects.size_on ? 'scale(1.28)' : 'scale(1)',
					  }
					: {};
			}
		} else if (forObject === 'comet') {
			if (forAnim === 'initial') {
				return {};
			} else if (forAnim === 'animate') {
				return isAnimGlavn ? { top: '-100vh', left: 0 } : {};
			}
		} else if (forObject === 'block__title') {
			if (forAnim === 'initial') {
				return { top: '26.5%', left: 0 };
			} else if (forAnim === 'animate') {
				return isAnimGlavn ? { top: '-100vh', left: 0 } : {};
			}
		} else if (forObject === 'title__image') {
			if (forAnim === 'initial') {
				return { top: '27%', left: '16.5%' };
			} else if (forAnim === 'animate') {
				return isAnimGlavn ? { top: '-100vh', left: '16.5%' } : {};
			}
		} else if (forObject === 'block__paragraph') {
			if (forAnim === 'initial') {
				return { top: '65%', left: '27.5%' };
			} else if (forAnim === 'animate') {
				return isAnimGlavn ? { top: '-100vh', left: '27.5%' } : {};
			}
		}
	};

	const isAnimMiniComet = (animProjects, forAnim, forObject) => {
		if (forObject === 'mini_comet_blue') {
			if (forAnim === 'initial') {
				return {
					transform: 'scale(1)',
					right: 'calc(0/1920*100vw)',
					bottom: 'calc(80/1920*100vw)',
				};
			} else if (forAnim === 'animate') {
				return animProjects.size_on
					? {
							transform: 'scale(1.28)',
							right: 'calc(-200/1920*100vw)',
							bottom: 'calc(0/1920*100vw)',
					  }
					: {};
			}
		} else if (forObject === 'mini_comet_red') {
			if (forAnim === 'initial') {
				return {
					transform: 'scale(1)',
					right: 'calc(0/1920*100vw)',
					bottom: 'calc(80/1920*100vw)',
				};
			} else if (forAnim === 'animate') {
				return animProjects.size_on
					? {
							transform: 'scale(1.28)',
							right: 'calc(-170/1920*100vw)',
							bottom: 'calc(-45/1920*100vw)',
					  }
					: {};
			}
		}
	};

	return (
		<>
			<motion.img
				className={`${styles.planet_img} ${styles.left}`}
				src='/assets/images/space/left_planet.png'
				alt='planet'
				initial={isAnim(isAnimGlavn, 'initial', 'left')}
				animate={isAnim(isAnimGlavn, 'animate', 'left')}
				transition={{ duration: 2 }}
			/>
			<motion.img
				className={`${styles.planet_img} ${styles.right}`}
				src='/assets/images/space/right_planet.png'
				alt='planet'
				initial={isAnim(isAnimGlavn, 'initial', 'right', animProjects)}
				animate={isAnim(isAnimGlavn, 'animate', 'right', animProjects)}
				transition={{ duration: 2 }}
			/>
			<motion.img
				className={styles.comet}
				src='/assets/images/space/comet.png'
				alt='comet'
				// initial={{ top: 0, left: 0 }}
				animate={isAnim(isAnimGlavn, 'animate', 'comet')}
				transition={{ duration: 2 }}
			/>
			<motion.img
				className={styles.mini_comet_blue}
				src='/assets/images/space/mini_comet_blue.png'
				alt='mini_comet_blue'
				initial={isAnimMiniComet(animProjects, 'initial', 'mini_comet_blue')}
				animate={isAnimMiniComet(animProjects, 'animate', 'mini_comet_blue')}
				transition={{ duration: 2 }}
			/>
			<motion.img
				className={styles.mini_comet_red}
				src='/assets/images/space/mini_comet_red.png'
				alt='mini_comet_red'
				initial={isAnimMiniComet(animProjects, 'initial', 'mini_comet_red')}
				animate={isAnimMiniComet(animProjects, 'animate', 'mini_comet_red')}
				transition={{ duration: 2 }}
			/>
			<motion.div
				className={styles.block__title}
				initial={isAnim(isAnimGlavn, 'initial', 'block__title')}
				animate={isAnim(isAnimGlavn, 'animate', 'block__title')}
				transition={{ duration: 4 }}
			></motion.div>
			<motion.img
				className={styles.title__image}
				src='/assets/images/h1/glavn.png'
				alt='glavn'
				initial={isAnim(isAnimGlavn, 'initial', 'title__image')}
				animate={isAnim(isAnimGlavn, 'animate', 'title__image')}
				transition={{ duration: 4 }}
			/>
			<motion.div
				className={styles.block__paragraph}
				initial={isAnim(isAnimGlavn, 'initial', 'block__paragraph')}
				animate={isAnim(isAnimGlavn, 'animate', 'block__paragraph')}
				transition={{ duration: 6 }}
			>
				<p className={styles.paragraph}>Design</p>
				<img
					className={styles.image__list}
					src='/assets/images/icons/list_menu_white.svg'
					alt='list'
				/>
				<p className={styles.paragraph}>Development</p>
				<img
					className={styles.image__list}
					src='/assets/images/icons/list_menu_white.svg'
					alt='list'
				/>
				<p className={styles.paragraph}>Branding</p>
			</motion.div>
		</>
	);
};

export default SpaceGlavn;
