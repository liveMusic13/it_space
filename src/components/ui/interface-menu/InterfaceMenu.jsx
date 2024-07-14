import { motion } from 'framer-motion';
import { arrayInterface } from '../../../data/interface.data';
import { useInterfaceMenuAnim } from '../../../hooks/useInterfaceMenuAnim';
import IconInterface from '../icon_interface/IconInterface';
import styles from './InterfaceMenu.module.scss';

const InterfaceMenu = ({ shadow, setViewSection, viewSection, states }) => {
	const {
		animCareer,
		setAnimCareer,
		animContacts,
		setAnimContacts,
		animServices,
		setAnimServices,
		animProjects,
		setAnimProjects,
		animAbout,
		setAnimAbout,
		isAnimGlavn,
		setIsAnimGlavn,
		isScale,
		setIsScale,
		isScaleProjects,
		setIsScaleProjects,
	} = states;

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

	const { isAnim, isAnimArrow, isAnimText, testAnim } =
		useInterfaceMenuAnim(shadow);

	const onClick = id => () => {
		if (id === 1) {
			setIsAnimGlavn(false);
			setAnimAbout(prev => ({ ...prev, on: false }));
			setAnimCareer(prev => ({ ...prev, on: false }));
			setAnimProjects({
				on: false,
				off: false,
				size_on: false,
				size_off: false,
			});
			setAnimServices({ on: false, off: false });
			setAnimContacts({ on: false, off: false });
			setIsScale(true);
			setViewSection(1);
		} else if (id === 2) {
			setIsAnimGlavn(true);
			setAnimAbout(prev => ({ ...prev, on: false }));
			setAnimCareer(prev => ({ ...prev, on: false }));
			setAnimProjects({
				on: true,
				off: false,
				size_on: false,
				size_off: false,
			});
			setAnimServices({ on: false, off: false });
			setAnimContacts({ on: false, off: false });
			setIsScaleProjects(true);
			setIsScale(true);
			setViewSection(3);
		} else if (id === 3) {
			setViewSection(6);
		} else if (id === 4) {
			setViewSection(8);
		} else if (id === 5) {
			setViewSection(9);
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
			<motion.div
				className={styles.block__arrow}
				initial={isAnimArrow(viewSection, 'initial', 'sun')}
				animate={isAnimArrow(viewSection, 'animate', 'sun')}
				transition={{ duration: 2 }}
			></motion.div>
			<motion.div
				className={styles.block__arrow_two}
				initial={isAnimArrow(viewSection, 'initial', 'moon')}
				animate={isAnimArrow(viewSection, 'animate', 'moon')}
				transition={{ duration: 2 }}
			></motion.div>
			{arrayInterface.map(list => (
				<div key={list.id} style={styleObj.opacity}>
					<motion.li
						className={styles.list}
						// initial={isAnimText(viewSection, 'initial', 'sun', list.id)}
						// animate={isAnimText(viewSection, 'animate', 'sun', list.id)}
						// transition={{ duration: 2 }}
						initial={testAnim(viewSection, 'initial', list.id)}
						animate={testAnim(viewSection, 'animate', list.id)}
						transition={{ duration: 2 }}
						onClick={onClick(list.id)}
					>
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
					</motion.li>
					{/* <motion.li
						className={styles.list_two}
						// initial={isAnimText(viewSection, 'initial', 'moon', list.id)}
						// animate={isAnimText(viewSection, 'animate', 'moon', list.id)}
						// transition={{ duration: 2 }}
					>
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
					</motion.li> */}
				</div>
			))}
		</motion.ul>
	);
};

export default InterfaceMenu;
