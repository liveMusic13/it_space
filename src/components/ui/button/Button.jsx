import styles from './Button.module.scss';

const Button = ({ hover, setIsVieBackOpacity, children, send }) => {
	return (
		<button
			className={hover ? styles.button_sun : styles.button}
			onClick={() => (hover ? setIsVieBackOpacity(true) : undefined)}
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
