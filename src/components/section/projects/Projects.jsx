import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { arrayProjects } from '../../../data/project.data';
import { useProjectsAnim } from '../../../hooks/useProjectsAnim';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import styles from './Projects.module.scss';

const Projects = ({
	animProjects,
	viewSection,
	isScaleProjects,
	setIsScaleProjects,
}) => {
	const { isAnim, isAnimSize, isAnimSize_mobile } = useProjectsAnim();
	const { width } = useWindowDimensions();

	useEffect(() => {
		if (viewSection === 3) setIsScaleProjects(true);
	}, [viewSection]);

	return (
		// <motion.div
		// 	className={styles.block__projects}
		// 	initial={isAnim(animProjects, 'initial')}
		// 	animate={isAnim(animProjects, 'animate')}
		// 	transition={viewSection === 0 ? { duration: 0.1 } : { duration: 2 }}
		// >
		// 	<motion.img
		// 		className={styles.title__image}
		// 		src='/assets/images/h1/projects.png'
		// 		alt='projects'
		// 		initial={
		// 			width <= 767.98 //HELP: УСЛОВИЕ ПОЧЕМУ-ТО РАБОТАЕТ ТОЛЬКО ЕСЛИ СДЕЛАТЬ НАОБОРОТ, КАК СЕЙЧАС
		// 				? isAnimSize(animProjects, 'initial', 'title__image')
		// 				: isAnimSize_mobile(animProjects, 'initial', 'title__image')
		// 		}
		// 		animate={
		// 			width <= 767.98
		// 				? isAnimSize(animProjects, 'animate', 'title__image')
		// 				: isAnimSize_mobile(animProjects, 'animate', 'title__image')
		// 		}
		// 		transition={{ duration: 2 }}
		// 		style={isScaleProjects ? { transform: 'scale(1)' } : {}}
		// 	/>
		// 	<motion.div
		// 		className={styles.block__links}
		// 		initial={
		// 			width <= 767.98
		// 				? isAnimSize_mobile(animProjects, 'initial', 'block__links')
		// 				: isAnimSize(animProjects, 'initial', 'block__links')
		// 		}
		// 		animate={
		// 			width <= 767.98
		// 				? isAnimSize_mobile(animProjects, 'animate', 'block__links')
		// 				: isAnimSize(animProjects, 'animate', 'block__links')
		// 		}
		// 		transition={{ duration: 2 }}
		// 		style={isScaleProjects ? { transform: 'scale(1)' } : {}}
		// 	>
		// 		{/* <div className={styles.block__test}> */}
		// 		{arrayProjects.map(project => (
		// 			<div
		// 				key={project.id}
		// 				className={styles.block__project}
		// 				style={{
		// 					backgroundImage:
		// 						width <= 767.98
		// 							? `url(${project.background_mobile})`
		// 							: `url(${project.background})`,
		// 					color: project.color,
		// 				}}
		// 			>
		// 				<img
		// 					className={styles.icon__title}
		// 					src={project.icon}
		// 					alt={project.title}
		// 					style={
		// 						project.id === 3
		// 							? { backgroundColor: 'rgba(255, 255, 255, 0.15)' }
		// 							: {}
		// 					}
		// 				/>
		// 				<div className={styles.arrow}>
		// 					<img
		// 						src='/assets/images/icons/arrow_top_right_mini.svg'
		// 						alt='mini arrow'
		// 					/>
		// 				</div>
		// 				<h2 className={styles.title}>{project.title}</h2>
		// 				<p className={styles.description}>{project.description}</p>
		// 			</div>
		// 		))}
		// 		{/* </div> */}
		// 	</motion.div>
		// </motion.div>

		<motion.div
			className={styles.block__projects}
			initial={isAnim(animProjects, 'initial')}
			animate={isAnim(animProjects, 'animate')}
			transition={viewSection === 0 ? { duration: 0.1 } : { duration: 2 }}
		>
			<motion.img
				className={styles.title__image}
				src='/assets/images/h1/projects.png'
				alt='projects'
				initial={
					width <= 767.98
						? isAnimSize_mobile(animProjects, 'initial', 'title__image')
						: isAnimSize(animProjects, 'initial', 'title__image')
				}
				animate={
					width <= 767.98
						? isAnimSize_mobile(animProjects, 'animate', 'title__image')
						: isAnimSize(animProjects, 'animate', 'title__image')
				}
				transition={{ duration: 2 }}
				style={isScaleProjects ? { transform: 'scale(1)' } : {}}
			/>
			<motion.div
				className={styles.block__links}
				initial={
					width <= 767.98
						? isAnimSize_mobile(animProjects, 'initial', 'block__links')
						: isAnimSize(animProjects, 'initial', 'block__links')
				}
				animate={
					width <= 767.98
						? isAnimSize_mobile(animProjects, 'animate', 'block__links')
						: isAnimSize(animProjects, 'animate', 'block__links')
				}
				transition={{ duration: 2 }}
				style={isScaleProjects ? { transform: 'scale(1)' } : {}}
			>
				{arrayProjects.map(project => (
					<div
						key={project.id}
						className={styles.block__project}
						style={{
							backgroundImage:
								width <= 767.98
									? `url(${project.background_mobile})`
									: `url(${project.background})`,
							color: project.color,
						}}
					>
						<img
							className={styles.icon__title}
							src={project.icon}
							alt={project.title}
							style={
								project.id === 3
									? { backgroundColor: 'rgba(255, 255, 255, 0.15)' }
									: {}
							}
						/>
						<div className={styles.arrow}>
							<img
								src='/assets/images/icons/arrow_top_right_mini.svg'
								alt='mini arrow'
							/>
						</div>
						<h2 className={styles.title}>{project.title}</h2>
						<p className={styles.description}>{project.description}</p>
					</div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Projects;
