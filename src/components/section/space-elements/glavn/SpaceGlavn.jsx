import { motion } from 'framer-motion';
import { useGlavnAnim } from '../../../../hooks/useGlavnAnim';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import styles from './SpaceGlavn.module.scss';

const SpaceGlavn = ({ isAnimGlavn, animProjects, viewSection }) => {
	const { width } = useWindowDimensions();
	const { isAnim, isAnimMiniComet, isAnim_mobile, isAnimMiniComet_mobile } =
		useGlavnAnim();

	// console.log(width <= 767.98);
	return (
		<>
			<motion.img
				className={`${styles.planet_img} ${styles.left}`}
				src='/assets/images/space/left_planet.png'
				alt='planet'
				// initial={isAnim(isAnimGlavn, 'initial', 'left')}
				// animate={isAnim(isAnimGlavn, 'animate', 'left')}
				initial={
					width <= 767.98
						? isAnim_mobile(isAnimGlavn, 'initial', 'left')
						: isAnim(isAnimGlavn, 'initial', 'left')
				}
				animate={
					width <= 767.98
						? isAnim_mobile(isAnimGlavn, 'animate', 'left')
						: isAnim(isAnimGlavn, 'animate', 'left')
				}
				transition={{ duration: 2 }}
			/>
			<motion.img
				className={`${styles.planet_img} ${styles.right}`}
				src='/assets/images/space/right_planet.png'
				alt='planet'
				// initial={isAnim(isAnimGlavn, 'initial', 'right', animProjects)}
				// animate={isAnim(isAnimGlavn, 'animate', 'right', animProjects)}
				initial={
					width <= 767.98
						? isAnim_mobile(isAnimGlavn, 'initial', 'right', animProjects)
						: isAnim(isAnimGlavn, 'initial', 'right', animProjects)
				}
				animate={
					width <= 767.98
						? isAnim_mobile(isAnimGlavn, 'animate', 'right', animProjects)
						: isAnim(isAnimGlavn, 'animate', 'right', animProjects)
				}
				// initial={choiceAnim(isAnimGlavn, 'initial', 'right', animProjects)}
				// animate={choiceAnim(isAnimGlavn, 'animate', 'right', animProjects)}
				transition={{ duration: 2 }}
				style={
					(viewSection === 1 && width <= 767.98) ||
					(viewSection === 99 && width <= 767.98) ||
					(viewSection === 100 && width) <= 767.98
						? { display: 'none' }
						: {}
				}
			/>
			<motion.img
				className={styles.comet}
				src={
					width <= 767.98
						? '/assets/images/space/comet__mobile.png'
						: '/assets/images/space/comet.png'
				}
				alt='comet'
				// initial={{ top: 0, left: 0 }}
				animate={isAnim(isAnimGlavn, 'animate', 'comet')}
				transition={{ duration: 2 }}
			/>
			<motion.img
				className={styles.mini_comet_blue}
				src='/assets/images/space/mini_comet_blue.png'
				alt='mini_comet_blue'
				initial={
					width <= 767.98
						? isAnimMiniComet_mobile(animProjects, 'initial', 'mini_comet_blue')
						: isAnimMiniComet(animProjects, 'initial', 'mini_comet_blue')
				}
				animate={
					width <= 767.98
						? isAnimMiniComet_mobile(animProjects, 'animate', 'mini_comet_blue')
						: isAnimMiniComet(animProjects, 'animate', 'mini_comet_blue')
				}
				transition={{ duration: 2 }}
			/>
			<motion.img
				className={styles.mini_comet_red}
				src='/assets/images/space/mini_comet_red.png'
				alt='mini_comet_red'
				initial={
					width <= 767.98
						? isAnimMiniComet_mobile(animProjects, 'initial', 'mini_comet_red')
						: isAnimMiniComet(animProjects, 'initial', 'mini_comet_red')
				}
				animate={
					width <= 767.98
						? isAnimMiniComet_mobile(animProjects, 'animate', 'mini_comet_red')
						: isAnimMiniComet(animProjects, 'animate', 'mini_comet_red')
				}
				transition={{ duration: 2 }}
			/>
			<motion.div
				className={styles.block__title}
				initial={
					width <= 767.98
						? isAnim_mobile(isAnimGlavn, 'initial', 'block__title')
						: isAnim(isAnimGlavn, 'initial', 'block__title')
				}
				animate={
					width <= 767.98
						? isAnim_mobile(isAnimGlavn, 'animate', 'block__title')
						: isAnim(isAnimGlavn, 'animate', 'block__title')
				}
				transition={{ duration: 4 }}
			></motion.div>
			<motion.img
				className={styles.title__image}
				src='/assets/images/h1/glavn.png'
				alt='glavn'
				initial={
					width <= 767.98
						? isAnim_mobile(isAnimGlavn, 'initial', 'title__image')
						: isAnim(isAnimGlavn, 'initial', 'title__image')
				}
				animate={
					width <= 767.98
						? isAnim_mobile(isAnimGlavn, 'animate', 'title__image')
						: isAnim(isAnimGlavn, 'animate', 'title__image')
				}
				transition={{ duration: 4 }}
			/>
			<motion.div
				className={styles.block__paragraph}
				initial={
					width <= 767.98
						? isAnim_mobile(isAnimGlavn, 'initial', 'block__paragraph')
						: isAnim(isAnimGlavn, 'initial', 'block__paragraph')
				}
				animate={
					width <= 767.98
						? isAnim_mobile(isAnimGlavn, 'animate', 'block__paragraph')
						: isAnim(isAnimGlavn, 'animate', 'block__paragraph')
				}
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
