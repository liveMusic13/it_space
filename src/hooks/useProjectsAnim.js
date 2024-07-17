export const useProjectsAnim = () => {
	const isAnim = (animProjects, forAnim) => {
		if (forAnim === 'initial') {
			return { top: 0, transform: 'translateX(200vw)' };
		} else if (forAnim === 'animate') {
			if (animProjects.on) {
				return { top: 0, transform: 'translateX(calc(0/1920*100vw))' };
			}
			if (animProjects.off) {
				return { top: 0, transform: 'translateX(200vw)' };
			}
		}
	};

	// const isAnimSize = (animProjects, forAnim, forObject) => {
	// 	// console.log('pk');

	// 	if (forObject === 'title__image') {
	// 		if (forAnim === 'initial') {
	// 			if (animProjects.size_off) {
	// 				return {
	// 					transform: 'scale(1.28)',
	// 					marginTop: 'calc(-10/1920*100vw)',
	// 				};
	// 			} else {
	// 				return { transform: 'scale(1)', marginTop: 'calc(81/1920*100vw)' };
	// 			}
	// 		} else if (forAnim === 'animate') {
	// 			if (animProjects.size_on) {
	// 				return {
	// 					transform: 'scale(1.28)',
	// 					marginTop: 'calc(-10/1920*100vw)',
	// 				};
	// 			}
	// 		}
	// 	} else {
	// 		if (forAnim === 'initial') {
	// 			if (animProjects.size_off) {
	// 				return { transform: 'scale(1.28)' };
	// 			} else {
	// 				return { transform: 'scale(1)' };
	// 			}
	// 		} else if (forAnim === 'animate') {
	// 			if (animProjects.size_on) {
	// 				return { transform: 'scale(1.28)' };
	// 			}
	// 		}
	// 	}
	// };

	// const isAnimSize_mobile = (animProjects, forAnim, forObject) => {
	// 	// console.log('mob');

	// 	if (forObject === 'title__image') {
	// 		if (forAnim === 'initial') {
	// 			if (animProjects.size_off) {
	// 				return {
	// 					transform: 'scale(1.28)',
	// 					marginTop: 'calc(-10/375*100vw)',
	// 				};
	// 			} else {
	// 				return { transform: 'scale(1)', marginTop: 'calc(85/375*100vw)' };
	// 			}
	// 		} else if (forAnim === 'animate') {
	// 			if (animProjects.size_on) {
	// 				return {
	// 					transform: 'scale(1.28)',
	// 					marginTop: 'calc(-10/375*100vw)',
	// 				};
	// 			}
	// 		}
	// 	} else {
	// 		if (forAnim === 'initial') {
	// 			if (animProjects.size_off) {
	// 				return { transform: 'scale(1.28)' };
	// 			} else {
	// 				return { transform: 'scale(1)' };
	// 			}
	// 		} else if (forAnim === 'animate') {
	// 			if (animProjects.size_on) {
	// 				return { transform: 'scale(1.28)' };
	// 			}
	// 		}
	// 	}
	// };

	const isAnimSize = (animProjects, forAnim, forObject) => {
		if (forObject === 'title__image') {
			if (forAnim === 'initial') {
				if (animProjects.size_off) {
					return {
						transform: 'scale(1.28)',
						marginTop: 'calc(-10/1920*100vw)',
					};
				} else {
					return { transform: 'scale(1)', marginTop: 'calc(81/1920*100vw)' };
				}
			} else if (forAnim === 'animate') {
				if (animProjects.size_on) {
					return {
						transform: 'scale(1.28)',
						marginTop: 'calc(-10/1920*100vw)',
					};
				} else {
					return { transform: 'scale(1)', marginTop: 'calc(81/1920*100vw)' }; // Сброс состояния
				}
			}
		} else {
			if (forAnim === 'initial') {
				if (animProjects.size_off) {
					return { transform: 'scale(1.28)' };
				} else {
					return { transform: 'scale(1)' };
				}
			} else if (forAnim === 'animate') {
				if (animProjects.size_on) {
					return { transform: 'scale(1.28)' };
				} else {
					return { transform: 'scale(1)' }; // Сброс состояния
				}
			}
		}
	};

	const isAnimSize_mobile = (animProjects, forAnim, forObject) => {
		if (forObject === 'title__image') {
			if (forAnim === 'initial') {
				if (animProjects.size_off) {
					return {
						transform: 'scale(1.28)',
						marginTop: 'calc(-10/375*100vw)',
					};
				} else {
					return { transform: 'scale(1)', marginTop: 'calc(85/375*100vw)' };
				}
			} else if (forAnim === 'animate') {
				if (animProjects.size_on) {
					return {
						transform: 'scale(1.28)',
						marginTop: 'calc(-10/375*100vw)',
					};
				} else {
					return { transform: 'scale(1)', marginTop: 'calc(85/375*100vw)' }; // Сброс состояния
				}
			}
		} else {
			if (forAnim === 'initial') {
				if (animProjects.size_off) {
					return { transform: 'scale(1.28)' };
				} else {
					return { transform: 'scale(1)' };
				}
			} else if (forAnim === 'animate') {
				if (animProjects.size_on) {
					return { transform: 'scale(1.28)' };
				} else {
					return { transform: 'scale(1)' }; // Сброс состояния
				}
			}
		}
	};

	return {
		isAnim,
		isAnimSize,
		isAnimSize_mobile,
	};
};
