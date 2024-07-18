import styles from './Button.module.scss';

const Button = ({
	hover,
	setIsVieBackOpacity,
	children,
	send,
	header,

	setViewSection,
	setAnimContacts,
	setIsAnimGlavn,
	setAnimAbout,
	setAnimCareer,
	setAnimProjects,
	setAnimServices,
	setIsViewContainer,
	setIsViewContact,
	setIsViewCareer,
	setIsScale,
	setIsScaleProjects,
}) => {
	const onClick = () => {
		if (header) {
			setIsAnimGlavn(true);
			setAnimAbout(prev => ({ ...prev, on: false }));
			setAnimCareer(prev => ({ ...prev, on: false }));
			setAnimProjects({
				on: false,
				off: false,
				size_on: false,
				size_off: false,
			});
			setAnimServices({ on: false, off: false });
			setAnimContacts({ on: true, off: false });

			setIsViewContainer(true);
			setIsViewContact(true);
			setIsViewCareer(false);
			setIsScale(false);
			setIsScaleProjects(false);

			setViewSection(8);
		}
		if (hover) {
			setIsVieBackOpacity(true);
		}
	};

	return (
		<button
			className={hover ? styles.button_sun : styles.button}
			onClick={onClick}
			style={send ? { width: '100%' } : {}}
		>
			{/* {vacancies ? 'Отправить' : 'СВЯЗАТЬСЯ С НАМИ'} */}
			{children}
			<img
				src={
					hover
						? '/assets/images/icons/arrow_right_black.svg'
						: '/assets/images/icons/arrow_right.svg'
				}
				alt='arrow'
			/>
		</button>
	);
};

export default Button;
