import Button from '../ui/button/Button';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<img src='/assets/images/logo_white.svg' alt='logo' />
			<Button />
		</header>
	);
};

export default Header;
