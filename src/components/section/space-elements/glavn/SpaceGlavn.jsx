import { motion } from 'framer-motion';
import styles from './SpaceGlavn.module.scss';

const SpaceGlavn = ({ viewSection, isAnimGlavn }) => {
	// const isAnim = isAnimGlavn;

	// console.log(isAnim);

	const isAnim = (isAnimGlavn, forAnim, forObject) => {
		if (forObject === 'left') {
			if (forAnim === 'initial') {
				return { top: 0, left: 0 };
			} else if (forAnim === 'animate') {
				return isAnimGlavn ? { top: '-100vh', left: 0 } : {};
			}
		} else if (forObject === 'right') {
			if (forAnim === 'initial') {
				return { bottom: '24.4%', right: '1%' };
			} else if (forAnim === 'animate') {
				return isAnimGlavn ? { top: '5.5%', right: '1%' } : {};
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
				initial={isAnim(isAnimGlavn, 'initial', 'right')}
				animate={isAnim(isAnimGlavn, 'animate', 'right')}
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
			<img
				className={styles.mini_comet_blue}
				src='/assets/images/space/mini_comet_blue.png'
				alt='mini_comet_blue'
			/>
			<img
				className={styles.mini_comet_red}
				src='/assets/images/space/mini_comet_red.png'
				alt='mini_comet_red'
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
