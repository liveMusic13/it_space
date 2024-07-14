import { motion } from 'framer-motion';
import { arrayInterface } from '../../../data/interface.data';
import IconInterface from '../icon_interface/IconInterface';
import styles from './InterfaceMenu.module.scss';

const InterfaceMenu = ({ shadow, setViewSection, viewSection }) => {
	console.log(viewSection);
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

	const isAnim = (viewSection, forAnim) => {
		if (forAnim === 'initial') {
			return {};
		} else if (forAnim === 'animate') {
			if (viewSection === 4 || viewSection === 5 || viewSection === 9) {
				return {
					backgroundColor: 'rgba(0, 0, 0, 0.1)',
					color: '#000',
				};
			}
		}
	};

	return (
		<motion.ul
			className={styles.block__interface}
			style={styleObj.backdropFilter}
			initial={isAnim(viewSection, 'initial')}
			animate={isAnim(viewSection, 'animate')}
			transition={{ duration: 2 }}
		>
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
						<IconInterface styleObj={styleObj} viewSection={viewSection} />
					)}
				</li>
			))}
		</motion.ul>
	);
};

export default InterfaceMenu;
