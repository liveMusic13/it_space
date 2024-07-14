export const useInterfaceMenuAnim = ({ shadow }) => {
	const isAnim = (viewSection, forAnim) => {
		if (forAnim === 'initial') {
			return {};
		} else if (forAnim === 'animate') {
			if (
				viewSection === 4 ||
				viewSection === 5 ||
				viewSection === 6 ||
				viewSection === 9
			) {
				return {
					backgroundColor: 'rgba(0, 0, 0, 0.1)',
					color: '#000',
				};
			}
		}
	};

	const testAnim = (viewSection, forAnim, idObject) => {
		if (forAnim === 'initial') {
			return {};
		} else if (forAnim === 'animate') {
			if (viewSection === 1 && idObject === 1) {
				return {
					background:
						'linear-gradient(90deg,rgb(255, 215, 6) 24%,rgb(255, 72, 1) 47%,rgb(255, 215, 6))',
					backgroundClip: 'text',
					color: 'transparent',
				};
			} else if (viewSection === 3 && idObject === 2) {
				return {
					background:
						'linear-gradient(90deg,rgb(255, 215, 6) 24%,rgb(255, 72, 1) 47%,rgb(255, 215, 6))',
					backgroundClip: 'text',
					color: 'transparent',
				};
			} else if (viewSection === 6 && idObject === 3) {
				return {
					background:
						'linear-gradient(90deg,rgb(0, 0, 0) 22%,rgb(36, 122, 252) 87%,rgb(143, 255, 235))',
					backgroundClip: 'text',
					color: 'transparent',
				};
			} else if (viewSection === 8 && idObject === 4) {
				return {
					background:
						'linear-gradient(90deg,rgb(255, 215, 6) 24%,rgb(255, 72, 1) 47%,rgb(255, 215, 6))',
					backgroundClip: 'text',
					color: 'transparent',
				};
			} else if (viewSection === 9 && idObject === 5) {
				return {
					background:
						'linear-gradient(90deg,rgb(0, 0, 0) 22%,rgb(36, 122, 252) 87%,rgb(143, 255, 235))',
					backgroundClip: 'text',
					color: 'transparent',
				};
			} else {
				if (
					viewSection === 4 ||
					viewSection === 5 ||
					viewSection === 6 ||
					viewSection === 9
				) {
					return {
						color: '#000',
					};
				}
			}
		}
	};

	const isAnimArrow = (viewSection, forAnim, forObject) => {
		if (forObject === 'sun') {
			if (viewSection === 1) {
				if (forAnim === 'initial') {
					return { opacity: 0 };
				} else if (forAnim === 'animate') {
					return { opacity: 1 };
				}
			} else if (viewSection === 3) {
				if (forAnim === 'initial') {
					return { left: 0 };
				} else if (forAnim === 'animate') {
					return { left: '26%', opacity: 1 };
				}
			} else if (viewSection === 4) {
				if (forAnim === 'initial') {
					return { left: '26%', opacity: 1 };
				} else if (forAnim === 'animate') {
					return { left: '26%', opacity: 0 };
				}
			} else if (viewSection === 6) {
				if (forAnim === 'initial') {
					return { left: '26%', opacity: 0 };
				} else if (forAnim === 'animate') {
					return { left: '45.5%', opacity: 0 };
				}
			} else if (viewSection === 8) {
				if (forAnim === 'initial') {
					return { left: '45.5%', opacity: 0 };
				} else if (forAnim === 'animate') {
					return { left: '66%', opacity: 1 };
				}
			} else if (viewSection === 9) {
				if (forAnim === 'initial') {
					return { left: '66%', opacity: 1 };
				} else if (forAnim === 'animate') {
					return { left: '87%', opacity: 0 };
				}
			}
		} else if (forObject === 'moon') {
			if (viewSection === 3) {
				if (forAnim === 'initial') {
					return { left: 0 };
				} else if (forAnim === 'animate') {
					return { left: '26%' };
				}
			} else if (viewSection === 4) {
				if (forAnim === 'initial') {
					return { left: '26%', opacity: 0 };
				} else if (forAnim === 'animate') {
					return { left: '26%', opacity: 1 };
				}
			} else if (viewSection === 6) {
				if (forAnim === 'initial') {
					return { left: '26%', opacity: 1 };
				} else if (forAnim === 'animate') {
					return { left: '45.5%', opacity: 1 };
				}
			} else if (viewSection === 8) {
				if (forAnim === 'initial') {
					return { left: '45.5%', opacity: 1 };
				} else if (forAnim === 'animate') {
					return { left: '66%', opacity: 0 };
				}
			} else if (viewSection === 9) {
				if (forAnim === 'initial') {
					return { left: '66%', opacity: 0 };
				} else if (forAnim === 'animate') {
					return { left: '87%', opacity: 1 };
				}
			}
		}

		if (forAnim === 'initial') {
			return {};
		} else if (forAnim === 'animate') {
			return {};
		}
	};

	// const isAnimText = (viewSection, forAnim, forObject, idObject) => {
	// 	if (!shadow) {
	// 		if (forObject === 'sun') {
	// 			if (viewSection === 1 && idObject === 1) {
	// 				if (forAnim === 'initial') {
	// 					return { opacity: 0 };
	// 				} else if (forAnim === 'animate') {
	// 					return {
	// 						opacity: 1,
	// 						background:
	// 							'linear-gradient(90deg,rgb(255, 215, 6) 24%,rgb(255, 72, 1) 47%,rgb(255, 215, 6))',
	// 						backgroundClip: 'text',
	// 						color: 'transparent',
	// 					};
	// 				}
	// 			} else if (viewSection === 3 && idObject === 2) {
	// 				if (forAnim === 'initial') {
	// 					return {
	// 						opacity: 1,
	// 						background:
	// 							'linear-gradient(90deg,rgb(255, 215, 6) 24%,rgb(255, 72, 1) 47%,rgb(255, 215, 6))',
	// 						backgroundClip: 'text',
	// 						color: 'transparent',
	// 					};
	// 				} else if (forAnim === 'animate') {
	// 					return {
	// 						opacity: 1,
	// 						background:
	// 							'linear-gradient(90deg,rgb(255, 215, 6) 24%,rgb(255, 72, 1) 47%,rgb(255, 215, 6))',
	// 						backgroundClip: 'text',
	// 						color: 'transparent',
	// 					};
	// 				}
	// 			} else if (viewSection === 4 && idObject === 2) {
	// 				if (forAnim === 'initial') {
	// 					return { opacity: 1 };
	// 				} else if (forAnim === 'animate') {
	// 					return { opacity: 0 };
	// 				}
	// 			} else if (viewSection === 6 && idObject === 3) {
	// 				if (forAnim === 'initial') {
	// 					return { opacity: 0 };
	// 				} else if (forAnim === 'animate') {
	// 					return { opacity: 0 };
	// 				}
	// 			} else if (viewSection === 8 && idObject === 4) {
	// 				if (forAnim === 'initial') {
	// 					return { opacity: 0 };
	// 				} else if (forAnim === 'animate') {
	// 					return {
	// 						opacity: 1,
	// 						background:
	// 							'linear-gradient(90deg,rgb(255, 215, 6) 24%,rgb(255, 72, 1) 47%,rgb(255, 215, 6))',
	// 						backgroundClip: 'text',
	// 						color: 'transparent',
	// 					};
	// 				}
	// 			} else if (viewSection === 9 && idObject === 5) {
	// 				if (forAnim === 'initial') {
	// 					return { opacity: 1 };
	// 				} else if (forAnim === 'animate') {
	// 					return { opacity: 0 };
	// 				}
	// 			}
	// 		} else if (forObject === 'moon') {
	// 			if (viewSection === 0) {
	// 				return { opacity: 0 };
	// 			} else if (viewSection === 4 && idObject === 2) {
	// 				if (forAnim === 'initial') {
	// 					return { opacity: 0 };
	// 				} else if (forAnim === 'animate') {
	// 					return {
	// 						opacity: 1,
	// 						background:
	// 							'linear-gradient(90deg,rgb(0, 0, 0) 22%,rgb(36, 122, 252) 87%,rgb(143, 255, 235))',
	// 						backgroundClip: 'text',
	// 						color: 'transparent',
	// 					};
	// 				}
	// 			} else if (viewSection === 6 && idObject === 3) {
	// 				if (forAnim === 'initial') {
	// 					return {
	// 						opacity: 1,
	// 						background:
	// 							'linear-gradient(90deg,rgb(0, 0, 0) 22%,rgb(36, 122, 252) 87%,rgb(143, 255, 235))',
	// 						backgroundClip: 'text',
	// 						color: 'transparent',
	// 					};
	// 				} else if (forAnim === 'animate') {
	// 					return {
	// 						opacity: 1,
	// 						background:
	// 							'linear-gradient(90deg,rgb(0, 0, 0) 22%,rgb(36, 122, 252) 87%,rgb(143, 255, 235))',
	// 						backgroundClip: 'text',
	// 						color: 'transparent',
	// 					};
	// 				}
	// 			} else if (viewSection === 8 && idObject === 4) {
	// 				if (forAnim === 'initial') {
	// 					return {
	// 						opacity: 1,
	// 					};
	// 				} else if (forAnim === 'animate') {
	// 					return { opacity: 0 };
	// 				}
	// 			} else if (viewSection === 9 && idObject === 5) {
	// 				if (forAnim === 'initial') {
	// 					return { opacity: 0 };
	// 				} else if (forAnim === 'animate') {
	// 					return {
	// 						opacity: 1,
	// 						background:
	// 							'linear-gradient(90deg,rgb(0, 0, 0) 22%,rgb(36, 122, 252) 87%,rgb(143, 255, 235))',
	// 						backgroundClip: 'text',
	// 						color: 'transparent',
	// 					};
	// 				}
	// 			}
	// 		}

	// 		if (forAnim === 'initial') {
	// 			return {};
	// 		} else if (forAnim === 'animate') {
	// 			return {};
	// 		}
	// 	}
	// };

	return {
		isAnim,
		isAnimArrow,
		// isAnimText,
		testAnim,
	};
};
