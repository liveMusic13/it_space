import { motion } from 'framer-motion';
import { arrayVacancies } from '../../../data/career.data';
import Button from '../../ui/button/Button';
import styles from './Career.module.scss';

const Career = ({ animCareer }) => {
	const isAnim = (animCareer, forAnim) => {
		if (forAnim === 'initial') {
			return { top: '-100vh', left: 0 };
		} else if (forAnim === 'animate') {
			if (animCareer.on) return { top: '13%', left: 'calc(70/1920*100vw)' };
			// if (animContacts.off) return { top: 0, left: '-100vw' };
		}
	};

	return (
		<motion.div
			className={styles.block__career}
			initial={isAnim(animCareer, 'initial')}
			animate={isAnim(animCareer, 'animate')}
			transition={{ duration: 2 }}
		>
			{arrayVacancies.map(vacancies => (
				<div key={vacancies.id} className={styles.vacancies}>
					<div className={styles.block__one}>
						<h2 className={styles.title}>{vacancies.title}</h2>
						<ul className={styles.menu}>
							{vacancies.conditions.map(list => (
								<li key={list} className={styles.list}>
									<img src='/assets/images/icons/list_menu.svg' alt='list' />{' '}
									{list}
								</li>
							))}
						</ul>
					</div>
					<div className={styles.block__two}>
						<h3 className={styles.price}>{vacancies.price}</h3>
						<p className={styles.description}>{vacancies.description}</p>
					</div>
					<Button hover={true} />
					<div className={styles.block__dotted}></div>
				</div>
			))}
		</motion.div>
	);
};

export default Career;
