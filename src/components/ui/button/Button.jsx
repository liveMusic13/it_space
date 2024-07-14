import styles from './Button.module.scss';

const Button = ({ hover }) => {
	return (
		<button className={hover ? styles.button_sun : styles.button}>
			СВЗЯТЬСЯ С НАМИ{' '}
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
