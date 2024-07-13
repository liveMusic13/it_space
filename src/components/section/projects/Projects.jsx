import { motion } from 'framer-motion';
import { arrayProjects } from '../../../data/project.data';
import styles from './Projects.module.scss';

const Projects = ({ animProjects }) => {
	const isAnim = (animProjects, forAnim) => {
		if (forAnim === 'initial') {
			return { top: 0, transform: 'translateX(200vw)' };
		} else if (forAnim === 'animate') {
			if (animProjects.on) {
				return { top: 0, transform: 'translateX(calc(0/1920*100vw))' };
			}
			if (animProjects.off) {
				return { top: 0, transform: 'translateX(200vw)' };
			}
		}
	};

	const isAnimSize = (animProjects, forAnim, forObject) => {
		if (forObject === 'title__image') {
			if (forAnim === 'initial') {
				if (animProjects.size_off) {
					return {
						transform: 'scale(1.28)',
						marginTop: 'calc(-10/1920*100vw)',
					};
				} else {
					return { transform: 'scale(1)', marginTop: 'calc(81/1920*100vw)' };
				}
			} else if (forAnim === 'animate') {
				if (animProjects.size_on) {
					return {
						transform: 'scale(1.28)',
						marginTop: 'calc(-10/1920*100vw)',
					};
				}
			}
		} else {
			if (forAnim === 'initial') {
				if (animProjects.size_off) {
					return { transform: 'scale(1.28)' };
				} else {
					return { transform: 'scale(1)' };
				}
			} else if (forAnim === 'animate') {
				if (animProjects.size_on) {
					return { transform: 'scale(1.28)' };
				}
			}
		}
	};

	return (
		<motion.div
			className={styles.block__projects}
			initial={isAnim(animProjects, 'initial')}
			animate={isAnim(animProjects, 'animate')}
			transition={{ duration: 2 }}
		>
			<motion.img
				className={styles.title__image}
				src='/assets/images/h1/projects.png'
				alt='projects'
				initial={isAnimSize(animProjects, 'initial', 'title__image')}
				animate={isAnimSize(animProjects, 'animate', 'title__image')}
				transition={{ duration: 2 }}
			/>
			<motion.div
				className={styles.block__links}
				initial={isAnimSize(animProjects, 'initial', 'block__links')}
				animate={isAnimSize(animProjects, 'animate', 'block__links')}
				transition={{ duration: 2 }}
			>
				{arrayProjects.map(project => (
					<div
						key={project.id}
						className={styles.block__project}
						style={{
							backgroundImage: `url(${project.background})`,
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
