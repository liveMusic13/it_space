import { arrayInterface } from '../../../data/interface.data';
import styles from './InterfaceMenu.module.scss';

const InterfaceMenu = ({ shadow, setViewSection }) => {
	const styleObj = {
		opacity: shadow ? { opacity: '0' } : undefined,
		backdropFilter: shadow
			? {
					backdropFilter: 'blur(5px)',
					zIndex: '6',
					backgroundColor: 'transparent',
			  }
			: undefined,
	};

	return (
		<ul className={styles.block__interface} style={styleObj.backdropFilter}>
			{arrayInterface.map(list => (
				<li key={list.id} className={styles.list} style={styleObj.opacity}>
					<span className={styles.number} style={styleObj.opacity}>
						0{list.id}.
					</span>{' '}
					<span
						className={styles.text}
						style={styleObj.opacity}
						onClick={() => (!shadow ? setViewSection(list.id) : undefined)}
					>
						\{list.title}
					</span>
					{list.id !== arrayInterface.length && (
						<img
							className={styles.image}
							src='/assets/images/icons/list_interface_white.svg'
							alt='list'
							style={styleObj.opacity}
						/>
					)}
				</li>
			))}
		</ul>
	);
};

export default InterfaceMenu;
