import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<img
				className={styles.logo}
				src='/assets/images/logo_black.svg'
				alt='logo'
			/>
			<div className={styles.block__mail}>
				<img
					className={styles.list}
					src='/assets/images/icons/list_interface_black.svg'
					alt='list'
				/>
				<p className={styles.mail}>it-space@yandex.ru</p>
				<img
					className={styles.list}
					src='/assets/images/icons/list_interface_black.svg'
					alt='list'
				/>
			</div>
			<div className={styles.text}>
				<p>Пользовательское соглашение</p>
				<p>Политика конфиденциальности</p>
			</div>
		</footer>
	);
};

export default Footer;
