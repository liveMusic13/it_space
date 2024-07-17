import { motion } from 'framer-motion';
import { arrayInterface } from '../../../data/interface.data';
import { useInterfaceMenuAnim } from '../../../hooks/useInterfaceMenuAnim';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
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
		isViewContainer,
		setIsViewContainer,
		isViewContact,
		setIsViewContact,
		isViewCareer,
		setIsViewCareer,
	} = states;

	const { width } = useWindowDimensions();

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

	const {
		isAnim,
		isAnimArrow,
		isAnimText,
		testAnim,
		isAnimArrow_mobile,
		isAnimText_mobile,
	} = useInterfaceMenuAnim(shadow);

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
			setIsScaleProjects(false);
			setIsViewContainer(false);
			setIsViewContact(false);
			setIsViewCareer(false);

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
			setIsViewContainer(false);
			setIsViewContact(false);
			setIsViewCareer(false);
			setIsScale(true);

			setViewSection(3);
		} else if (id === 3) {
			setIsAnimGlavn(true);
			setAnimAbout(prev => ({ ...prev, on: false }));
			setAnimCareer(prev => ({ ...prev, on: false }));
			setAnimProjects({
				on: false,
				off: false,
				size_on: false,
				size_off: false,
			});
			setAnimServices({ on: true, off: false });
			setAnimContacts({ on: false, off: false });

			setIsScale(false);
			setIsViewContainer(true);
			setIsViewContact(false);
			setIsViewCareer(false);
			setIsScaleProjects(false);

			setViewSection(6);
		} else if (id === 4) {
			setIsAnimGlavn(true);
			setAnimAbout(prev => ({ ...prev, on: false }));
			setAnimCareer(prev => ({ ...prev, on: false }));
			setAnimProjects({
				on: false,
				off: false,
				size_on: false,
				size_off: false,
			});
			setAnimServices({ on: false, off: false });
			setAnimContacts({ on: true, off: false });

			setIsViewContainer(true);
			setIsViewContact(true);
			setIsViewCareer(false);
			setIsScale(false);
			setIsScaleProjects(false);

			setViewSection(8);
		} else if (id === 5) {
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
			setIsAnimGlavn(true);

			setIsViewCareer(true);
			setIsScale(false);
			setIsViewContact(false);
			setIsViewContainer(false);
			setIsScaleProjects(false);

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
				initial={
					width <= 767.98
						? isAnimArrow_mobile(viewSection, 'initial', 'sun')
						: isAnimArrow(viewSection, 'initial', 'sun')
				}
				animate={
					width <= 767.98
						? isAnimArrow_mobile(viewSection, 'animate', 'sun')
						: isAnimArrow(viewSection, 'animate', 'sun')
				}
				transition={{ duration: 2 }}
			></motion.div>
			<motion.div
				className={styles.block__arrow_two}
				initial={
					width <= 767.98
						? isAnimArrow_mobile(viewSection, 'initial', 'moon')
						: isAnimArrow(viewSection, 'initial', 'moon')
				}
				animate={
					width <= 767.98
						? isAnimArrow_mobile(viewSection, 'animate', 'moon')
						: isAnimArrow(viewSection, 'animate', 'moon')
				}
				transition={{ duration: 2 }}
			></motion.div>
			{!(width <= 767.98) ? (
				<>
					{arrayInterface.map(list => (
						<div key={list.id} style={styleObj.opacity}>
							<motion.li
								// className={styles.list}
								className={`${styles.list} ${
									viewSection === 4 ? styles.disabled : ''
								}`}
								// initial={isAnimText(viewSection, 'initial', 'sun', list.id)}
								// animate={isAnimText(viewSection, 'animate', 'sun', list.id)}
								// transition={{ duration: 2 }}
								initial={testAnim(viewSection, 'initial', list.id)}
								animate={testAnim(viewSection, 'animate', list.id)}
								transition={{ duration: 2 }}
								onClick={onClick(list.id)}
							>
								<span className={styles.number} style={styleObj.opacity}>
									0{list.id}.{' '}
								</span>{' '}
								<span
									className={styles.text}
									style={styleObj.opacity}
									onClick={() =>
										!shadow ? setViewSection(list.id) : undefined
									}
								>
									\{list.title}
								</span>
								{list.id !== arrayInterface.length && (
									<IconInterface
										styleObj={styleObj}
										viewSection={viewSection}
									/>
								)}
							</motion.li>
						</div>
					))}
				</>
			) : (
				<motion.div
					className={styles.test}
					initial={isAnimText_mobile(viewSection, 'initial')}
					animate={isAnimText_mobile(viewSection, 'animate')}
					transition={{ duration: 2 }}
				>
					{arrayInterface.map(list => (
						<div key={list.id} style={styleObj.opacity}>
							<motion.li
								// className={styles.list}
								className={`${styles.list} ${
									viewSection === 4 ? styles.disabled : ''
								}`}
								// initial={isAnimText(viewSection, 'initial', 'sun', list.id)}
								// animate={isAnimText(viewSection, 'animate', 'sun', list.id)}
								// transition={{ duration: 2 }}
								initial={testAnim(viewSection, 'initial', list.id)}
								animate={testAnim(viewSection, 'animate', list.id)}
								transition={{ duration: 2 }}
								onClick={onClick(list.id)}
							>
								<span className={styles.number} style={styleObj.opacity}>
									0{list.id}.{' '}
								</span>{' '}
								<span
									className={styles.text}
									style={styleObj.opacity}
									onClick={() =>
										!shadow ? setViewSection(list.id) : undefined
									}
								>
									\{list.title}
								</span>
								{list.id !== arrayInterface.length && (
									<IconInterface
										styleObj={styleObj}
										viewSection={viewSection}
									/>
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
				</motion.div>
			)}
		</motion.ul>
	);
};

export default InterfaceMenu;
