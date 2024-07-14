import Button from '../ui/button/Button';
import styles from './Header.module.scss';

const Header = ({ viewSection }) => {
	const srcImage =
		viewSection === 5 || viewSection === 9
			? '/assets/images/logo_black.svg'
			: '/assets/images/logo_white.svg';
	return (
		<header className={styles.header}>
			<img src={srcImage} alt='logo' />
			<Button />
		</header>
	);
};

export default Header;
