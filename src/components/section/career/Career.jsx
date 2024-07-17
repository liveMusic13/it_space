import { motion } from 'framer-motion';
import { arrayVacancies } from '../../../data/career.data';
import { useCareerAnim } from '../../../hooks/useCareerAnim';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Button from '../../ui/button/Button';
import styles from './Career.module.scss';

const Career = ({ animCareer, viewSection }) => {
	const { width } = useWindowDimensions();
	const { isAnim, isAnim_mobile } = useCareerAnim();

	return (
		<>
			{width <= 767.98 ? (
				<motion.div
					className={styles.block__career}
					initial={isAnim_mobile(animCareer, 'initial')}
					animate={isAnim_mobile(animCareer, 'animate')}
					transition={{ duration: 2 }}
					style={viewSection !== 9 ? { display: 'none' } : {}}
				>
					{arrayVacancies.map(vacancies => (
						<div key={vacancies.id} className={styles.vacancies}>
							<div className={styles.block__one}>
								<h2 className={styles.title}>{vacancies.title}</h2>
								<ul className={styles.menu}>
									{vacancies.conditions.map(list => (
										<li key={list} className={styles.list}>
											<img
												src='/assets/images/icons/list_menu.svg'
												alt='list'
											/>{' '}
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
			) : (
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
											<img
												src='/assets/images/icons/list_menu.svg'
												alt='list'
											/>{' '}
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
			)}
		</>
	);
};

export default Career;

{
	/* <motion.div
			className={styles.block__career}
			initial={
				!(width <= 767.98)
					? isAnim(animCareer, 'initial')
					: isAnim_mobile(animCareer, 'initial')
			}
			animate={
				!(width <= 767.98)
					? isAnim(animCareer, 'animate')
					: isAnim_mobile(animCareer, 'animate')
			}
			// initial={isAnim_mobile(animCareer, 'initial')}
			// animate={isAnim_mobile(animCareer, 'animate')}
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
		</motion.div> */
}
