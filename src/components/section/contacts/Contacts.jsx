import { motion } from 'framer-motion';
import { useState } from 'react';
import { arrayContacts } from '../../../data/contacts.data';
import { arrayForm } from '../../../data/form.data';
import Footer from '../../footer/Footer';
import Button from '../../ui/button/Button';
import styles from './Contacts.module.scss';

const Contacts = ({ animContacts }) => {
	const [stateOption, setStateOption] = useState(
		arrayForm[arrayForm.length - 1].options[0]
	);
	const [isViewOptions, setIsViewOptions] = useState(false);

	const isAnim = (animContacts, forAnim) => {
		if (forAnim === 'initial') {
			return { top: '-100vh', left: 0 };
		} else if (forAnim === 'animate') {
			if (animContacts.on) return { top: 0, left: 0 };
			// if (animContacts.off) return { top: 0, left: '-100vw' };
		}
	};

	return (
		<motion.div
			className={styles.wrapper_contact}
			initial={isAnim(animContacts, 'initial')}
			animate={isAnim(animContacts, 'animate')}
			transition={{ duration: 2 }}
		>
			<img
				className={styles.comet}
				src='/assets/images/space/comet1080.png'
				alt='comet'
			/>
			<img
				className={styles.title__image}
				src='/assets/images/h1/contacts.png'
				alt='contacts'
			/>
			<div className={styles.block__content}>
				<div className={styles.block__map}>
					<div className={styles.block__contacts}>
						{arrayContacts.map(contact => (
							<div key={contact.id} className={styles.contact}>
								<div className={styles.block__title}>
									<img src='/assets/images/icons/list_menu.svg' alt='list' />
									<h2 className={styles.title}>{contact.title}</h2>
								</div>
								<p className={styles.description}>{contact.description}</p>
							</div>
						))}
					</div>
				</div>
				<div className={styles.block__form}>
					<div className={styles.form__title}>
						<h2 className={styles.title}>Обратная связь</h2>
						<img
							className={styles.socials}
							src='/assets/images/icons/socials.svg'
							alt='socials'
						/>
					</div>
					<div className={styles.form}>
						{arrayForm.map(element => {
							if (element.id !== 3) {
								return (
									<div key={element.id} className={styles.block__input}>
										<label htmlFor={element.id}>{element.title}</label>
										<input
											type='text'
											id={element.id}
											placeholder={
												element.placeholder ? element.placeholder : ''
											}
										/>
									</div>
								);
							} else {
								return (
									<div key={element.id} className={styles.block__input}>
										<label>{element.title}</label>
										<div className={styles.block__select}>
											<p className={styles.target__option}>{stateOption}</p>
											<button
												className={styles.button__option}
												onClick={() => setIsViewOptions(!isViewOptions)}
											>
												<img
													src='/assets/images/icons/arrow_bottom.svg'
													alt='arrow'
												/>
											</button>
										</div>
										{isViewOptions && (
											<ul className={styles.list__option}>
												{element.options.map(option => (
													<p
														key={option}
														className={styles.option}
														onClick={() => {
															setStateOption(option);
															setIsViewOptions(false);
														}}
													>
														{option}
													</p>
												))}
											</ul>
										)}
									</div>
								);
							}
						})}
					</div>
					<div className={styles.block__button}>
						<p className={styles.text}>
							нажимая на кнопку вы соглашаетесь на обработку{' '}
							<span>персональных данных</span>
						</p>
						<Button />
					</div>
				</div>
			</div>
			<Footer />
		</motion.div>
	);
};

export default Contacts;
