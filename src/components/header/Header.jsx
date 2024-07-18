import Button from '../ui/button/Button';
import styles from './Header.module.scss';

const Header = ({
	viewSection,
	setAnimContacts,
	setViewSection,
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
	const srcImage =
		viewSection === 4 ||
		viewSection === 5 ||
		viewSection === 6 ||
		viewSection === 9
			? '/assets/images/logo_black.svg'
			: '/assets/images/logo_white.svg';
	return (
		<header className={styles.header}>
			<img src={srcImage} alt='logo' />
			<Button
				header={true}
				setViewSection={setViewSection}
				setAnimContacts={setAnimContacts}
				setIsAnimGlavn={setIsAnimGlavn}
				setAnimAbout={setAnimAbout}
				setAnimCareer={setAnimCareer}
				setAnimProjects={setAnimProjects}
				setAnimServices={setAnimServices}
				setIsViewContainer={setIsViewContainer}
				setIsViewContact={setIsViewContact}
				setIsViewCareer={setIsViewCareer}
				setIsScale={setIsScale}
				setIsScaleProjects={setIsScaleProjects}
			>
				СВЯЗАТЬСЯ С НАМИ
			</Button>
		</header>
	);
};

export default Header;
