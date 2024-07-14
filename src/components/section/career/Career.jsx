import { motion } from 'framer-motion';
import { arrayVacancies } from '../../../data/career.data';
import Button from '../../ui/button/Button';
import styles from './Career.module.scss';

const Career = () => {
	return (
		<motion.div className={styles.block__career}>
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
