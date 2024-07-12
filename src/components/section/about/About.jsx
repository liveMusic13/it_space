import { motion } from 'framer-motion';
import { arrayPeople } from '../../../data/about.data';
import styles from './About.module.scss';

const About = ({ isAnim, animAbout }) => {
	const zIndex = people => {
		return people.id === 0
			? { zIndex: '11', left: 'calc(5/1920*100vw)' }
			: people.id === 1
			? { zIndex: '10', left: 'calc(75/1920*100vw)' }
			: people.id === 2
			? { zIndex: '9', left: 'calc(150/1920*100vw)' }
			: people.id === 3
			? { zIndex: '8', left: 'calc(225/1920*100vw)' }
			: people.id === 4
			? { zIndex: '9', left: 'calc(300/1920*100vw)' }
			: { zIndex: '8', left: 'calc(375/1920*100vw)' };
	};

	return (
		<motion.div
			className={styles.block__about}
			initial={isAnim(animAbout, 'initial')}
			animate={isAnim(animAbout, 'animate')}
			transition={{ duration: 2, ease: 'easeOut' }}
		>
			<div className={styles.block__border}></div>
			<div className={styles.block__content}>
				<div className={styles.block__title}>
					<img
						className={styles.title}
						src='/assets/images/h1/about.png'
						alt='about'
					/>
					<div className={styles.block__peoples}>
						{arrayPeople.map(people => (
							<img
								className={styles.people__image}
								key={people.id}
								src={people.src}
								alt='image people'
								style={zIndex(people)}
							/>
						))}
						<div className={styles.block__counts}>
							<p className={styles.count}>{'>'}20</p>
							<p className={styles.description}>специалистов в команде</p>
						</div>
						<div className={styles.block__seo}>
							<div className={styles.block__description}>
								<h3>CEO Компании</h3>
								<p>Евгений Закройский</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.block__mission}>
					<img
						className={styles.image__list}
						src='/assets/images/icons/list_menu_white.svg'
						alt='list'
					/>
					<div className={styles.block__description}>
						<h2>Мисиия</h2>
						<p>
							Повседневная практика{' '}
							<span>показывает, что постоянный количественный</span> рост и
							сфера нашей активности представляет собой интересный{' '}
							<span>эксперимент проверки</span>
						</p>
					</div>
				</div>
				<div className={styles.block__history}>
					<img
						className={styles.image__list}
						src='/assets/images/icons/list_menu_white.svg'
						alt='list'
					/>
					<div className={styles.block__description}>
						<h2>История</h2>
						<p>
							Повседневная практика{' '}
							<span>показывает, что постоянный количественный</span> рост и
							сфера нашей активности представляет собой интересный{' '}
							<span>эксперимент проверки</span>
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
