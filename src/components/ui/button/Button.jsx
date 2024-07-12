import styles from './Button.module.scss';

const Button = () => {
	return (
		<button className={styles.button}>
			СВЗЯТЬСЯ С НАМИ{' '}
			<img src='/assets/images/icons/arrow_right.svg' alt='arrow' />
		</button>
	);
};

export default Button;
