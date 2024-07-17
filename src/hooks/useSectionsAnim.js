export const useSectionsAnim = () => {
	const styleAnim = viewSection => {
		return {
			top:
				viewSection === 0
					? 'calc(-100/1920*100vw)'
					: viewSection === 1
					? 'calc(0/1920*100vw)'
					: undefined,
			right: 'calc(-120/1920*100vw)',
		};
	};

	const styleAnim__mobile = viewSection => {
		return {
			top: viewSection === 0 ? '-10%' : viewSection === 1 ? '0%' : undefined,
			right: '-12%',
		};
	};

	const isAnim = (animAbout, forAnim) => {
		if (forAnim === 'initial') {
			return { top: '200vh', left: 0 };
		} else if (forAnim === 'animate') {
			if (animAbout.on) return { top: 0, left: 0 };
			if (animAbout.off) return { top: 0, left: '-100vw' };
		} else if (forAnim === 'transition') {
			if (animAbout.off) {
				return { duration: 3.5, ease: 'easeOut' };
			} else {
				return { duration: 2, ease: 'easeOut' };
			}
		}
	};

	// const isAnim50MobilePlanet = (isAnimPlanet, forAnim) => {
	// 	// console.log('isAnimPlanet', isAnimPlanet);
	// 	if (forAnim === 'initial') {
	// 		// return { top: '400vh', left: 0 };
	// 		return { top: '200vh' };
	// 	} else if (forAnim === 'animate') {
	// 		if (isAnimPlanet) {
	// 			return { top: '0%', left: 0 };
	// 		} else {
	// 			return { top: '76.9%', left: '0' };
	// 		}
	// 	} else if (forAnim === 'transition') {
	// 		return { duration: 2, ease: 'easeOut' };
	// 	}
	// };
	// const isAnim50MobilePlanet = (isAnimPlanet, forAnim) => {
	// 	if (forAnim === 'initial') {
	// 		return { top: '200vh' };
	// 	} else if (forAnim === 'animate') {
	// 		if (isAnimPlanet) {
	// 			return {
	// 				top: ['200vh', '76.9%', '0%', '-100vh'],
	// 				transition: {
	// 					duration: 6, // общая длительность всей анимации
	// 					times: [0, 0.33, 0.66, 1], // точки ключевых кадров
	// 					ease: 'easeOut',
	// 				},
	// 			};
	// 		} else {
	// 			return { top: '76.9%', left: '0' };
	// 		}
	// 	} else if (forAnim === 'transition') {
	// 		return { duration: 2, ease: 'easeOut' };
	// 	}
	// };

	const isAnim50MobilePlanet = (viewSection, forAnim) => {
		if (forAnim === 'initial') {
			if (viewSection === 100) {
				return { top: '-100vh', transition: { duration: 3, ease: 'easeOut' } }; // Уходит вверх экрана
			} else {
				return { top: '200vh' };
			}
		} else if (forAnim === 'animate') {
			if (viewSection === 1) {
				return { top: '76.9%', transition: { duration: 2, ease: 'easeOut' } };
			} else if (viewSection === 99) {
				return { top: '0%', transition: { duration: 2, ease: 'easeOut' } };
			}
			// else if (viewSection === 100) {
			// 	return { top: '-100vh', transition: { duration: 2, ease: 'easeOut' } }; // Уходит вверх экрана
			// }
		} else if (forAnim === 'transition') {
			return { duration: 2, ease: 'easeOut' };
		}
	};

	const test = (viewSection, forAnim) => {
		console.log('test');
		if (viewSection === 10) {
			if (forAnim === 'initial') {
				return { transform: 'scale(1)', top: '-100vh' };
			} else if (forAnim === 'animate') {
				return { transform: 'scale(1)', top: 0 };
			}
		}
	};

	const isAnimContainer = (animProjects, forAnim) => {
		if (forAnim === 'initial') {
			if (animProjects.size_off) {
				return { transform: 'scale(0.77)' };
			} else {
				return { transform: 'scale(1)' };
			}
		} else if (forAnim === 'animate') {
			if (animProjects.size_on) {
				return { transform: 'scale(0.77)' };
			} else if (animProjects.size_off) {
				return { top: '-100vh' };
			}
		}
	};

	const isAnimBG = (animContacts, forAnim) => {
		if (forAnim === 'initial') {
			if (animContacts.off) {
				return {
					opacity: 1,
				};
			} else {
				return {
					opacity: 0,
				};
			}
		} else if (forAnim === 'animate') {
			if (animContacts.on) {
				return {
					opacity: 1,
				};
			}
			if (animContacts.off) {
				return {
					opacity: 0,
				};
			}
		}
	};

	return {
		styleAnim,
		isAnim,
		test,
		isAnimContainer,
		isAnimBG,
		styleAnim__mobile,
		isAnim50MobilePlanet,
	};
};
