import { motion } from 'framer-motion';
import { useState } from 'react';
import { arrayServices } from '../../../data/services.data';
import styles from './ServicesPage.module.scss';

const ServicesPage = ({ animServices }) => {
	const [isMouseEnter, setIsMouseEnter] = useState(false);
	const [isMouseEnterGreen, setIsMouseEnterGreen] = useState(false);

	const handleMouseEnter = id => {
		if (id === 5) {
			setIsMouseEnter(true);
		} else if (id === 8) {
			setIsMouseEnterGreen(true);
		}
	};
	const handleMouseLeave = id => {
		if (id === 5) {
			setIsMouseEnter(false);
		} else if (id === 8) {
			setIsMouseEnterGreen(false);
		}
	};

	const isAnim = (animServices, forAnim) => {
		if (forAnim === 'initial') {
			// if (animServices.off) {
			// 	return { top: 'calc(135/1920*100vw)' };
			// } else {
			// 	return { top: '-100vh' };
			// }
			return { top: '-100vh' };
		} else if (forAnim === 'animate') {
			if (animServices.on) {
				return { top: 'calc(135/1920*100vw)' };
			} else if (animServices.off) {
				return { top: '-100vh' };
			}
		}
	};

	return (
		<motion.div
			className={styles.block__services}
			initial={isAnim(animServices, 'initial')}
			animate={isAnim(animServices, 'animate')}
			transition={{ duration: 2 }}
		>
			{arrayServices.map(service => (
				<div key={service.id} className={styles.service}>
					<div className={styles.block__content}>
						<h2
							onMouseEnter={() => handleMouseEnter(service.id)}
							onMouseLeave={() => handleMouseLeave(service.id)}
							className={styles.title}
							style={
								service.id === 5 && isMouseEnter
									? {
											background:
												'linear-gradient(115deg, rgb(255, 72, 1) 6%, rgb(255, 215, 6) 9%, rgb(0, 0, 0) 13.5%)',
											backgroundClip: 'text',
											color: 'transparent',
									  }
									: service.id === 8 && isMouseEnterGreen
									? {
											background:
												'linear-gradient(135deg, rgb(16, 177, 148) 5%, rgb(55, 250, 38) 15%, rgb(0, 0, 0) 25%)',
											backgroundClip: 'text',
											color: 'transparent',
									  }
									: {}
							}
						>
							{service.title}
						</h2>
						<ul className={styles.menu}>
							{service.lists.map(list => (
								<li
									key={list.id}
									className={styles.list}
									style={
										list.id === 4 ? { marginLeft: 'calc(75/1920*100vw)' } : {}
									}
								>
									<img src='/assets/images/icons/list_menu.svg' alt='list' />
									{list.title}
								</li>
							))}
						</ul>
					</div>
					<div className={styles.block__dotted}></div>
				</div>
			))}
		</motion.div>
	);
};

export default ServicesPage;
