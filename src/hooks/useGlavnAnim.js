export const useGlavnAnim = () => {
	const isAnim = (isAnimGlavn, forAnim, forObject, animProjects) => {
		if (forObject === 'left') {
			if (forAnim === 'initial') {
				return { top: 0, left: 0 };
			} else if (forAnim === 'animate') {
				return isAnimGlavn ? { top: '-100vh', left: 0 } : {};
			}
		} else if (forObject === 'right') {
			if (forAnim === 'initial') {
				return {
					bottom: '24.4%',
					right: '1%',
					transform: animProjects.size_on ? 'scale(1.28)' : 'scale(1)',
				};
			} else if (forAnim === 'animate') {
				return animProjects.size_on
					? {
							top: '-5.5%',
							right: '-12%',
							transform: animProjects.size_on ? 'scale(1.28)' : 'scale(1)',
					  }
					: isAnimGlavn
					? {
							top: '5.5%',
							right: '1%',
							transform: animProjects.size_on ? 'scale(1.28)' : 'scale(1)',
					  }
					: {};
			}
		} else if (forObject === 'comet') {
			if (forAnim === 'initial') {
				return {};
			} else if (forAnim === 'animate') {
				return isAnimGlavn ? { top: '-100vh', left: 0 } : {};
			}
		} else if (forObject === 'block__title') {
			if (forAnim === 'initial') {
				return { top: '26.5%', left: 0 };
			} else if (forAnim === 'animate') {
				return isAnimGlavn ? { top: '-100vh', left: 0 } : {};
			}
		} else if (forObject === 'title__image') {
			if (forAnim === 'initial') {
				return { top: '27%', left: '16.5%' };
			} else if (forAnim === 'animate') {
				return isAnimGlavn ? { top: '-100vh', left: '16.5%' } : {};
			}
		} else if (forObject === 'block__paragraph') {
			if (forAnim === 'initial') {
				return { top: '65%', left: '27.5%' };
			} else if (forAnim === 'animate') {
				return isAnimGlavn ? { top: '-100vh', left: '27.5%' } : {};
			}
		}
	};

	const isAnim_mobile = (isAnimGlavn, forAnim, forObject, animProjects) => {
		if (forObject === 'left') {
			if (forAnim === 'initial') {
				return { top: 0, left: '1%' };
			} else if (forAnim === 'animate') {
				return isAnimGlavn
					? { top: '-100vh', left: '1%' }
					: { top: 0, left: '1%' };
			}
		} else if (forObject === 'right') {
			if (forAnim === 'initial') {
				return {
					// bottom: '24.4%',
					// right: '1%',
					bottom: '5%',
					right: '-25%',
					transform: animProjects.size_on ? 'scale(1.28)' : 'scale(1)',
				};
			} else if (forAnim === 'animate') {
				return animProjects.size_on
					? {
							top: '-100vh',
							right: '-25%',
							transform: animProjects.size_on ? 'scale(1.28)' : 'scale(1)',
					  }
					: isAnimGlavn
					? {
							bottom: '5%',
							right: '-25%',
							transform: animProjects.size_on ? 'scale(1.28)' : 'scale(1)',
					  }
					: {
							bottom: '5%',
							right: '-25%',
							transform: animProjects.size_on ? 'scale(1.28)' : 'scale(1)',
					  };
			}
		} else if (forObject === 'comet') {
			if (forAnim === 'initial') {
				return {};
			} else if (forAnim === 'animate') {
				return isAnimGlavn ? { top: '-100vh', left: 0 } : {};
			}
		} else if (forObject === 'block__title') {
			if (forAnim === 'initial') {
				return { top: '36.5%', left: 0 };
			} else if (forAnim === 'animate') {
				return isAnimGlavn
					? { top: '-100vh', left: 0 }
					: { top: '36.5%', left: 0 };
			}
		} else if (forObject === 'title__image') {
			if (forAnim === 'initial') {
				return { top: '44%', left: '4%' };
			} else if (forAnim === 'animate') {
				return isAnimGlavn
					? { top: '-100vh', left: '4%' }
					: { top: '44%', left: '4%' };
			}
		} else if (forObject === 'block__paragraph') {
			if (forAnim === 'initial') {
				return { top: '64%', left: '7.5%' };
			} else if (forAnim === 'animate') {
				return isAnimGlavn
					? { top: '-100vh', left: '27.5%' }
					: { top: '64%', left: '7.5%' };
			}
		}
	};

	const isAnimMiniComet = (animProjects, forAnim, forObject) => {
		if (forObject === 'mini_comet_blue') {
			if (forAnim === 'initial') {
				return {
					transform: 'scale(1)',
					right: 'calc(0/1920*100vw)',
					bottom: 'calc(80/1920*100vw)',
				};
			} else if (forAnim === 'animate') {
				return animProjects.size_on
					? {
							transform: 'scale(1.28)',
							right: 'calc(-200/1920*100vw)',
							bottom: 'calc(0/1920*100vw)',
					  }
					: {};
			}
		} else if (forObject === 'mini_comet_red') {
			if (forAnim === 'initial') {
				return {
					transform: 'scale(1)',
					right: 'calc(0/1920*100vw)',
					bottom: 'calc(80/1920*100vw)',
				};
			} else if (forAnim === 'animate') {
				return animProjects.size_on
					? {
							transform: 'scale(1.28)',
							right: 'calc(-170/1920*100vw)',
							bottom: 'calc(-45/1920*100vw)',
					  }
					: {};
			}
		}
	};

	const isAnimMiniComet_mobile = (animProjects, forAnim, forObject) => {
		if (forObject === 'mini_comet_blue') {
			if (forAnim === 'initial') {
				return {
					transform: 'scale(1)',
					right: 'calc(-200/1920*100vw)',
					bottom: 'calc(-850/1920*100vw)',
				};
			} else if (forAnim === 'animate') {
				return animProjects.size_on
					? {
							transform: 'scale(1.28)',
							right: 'calc(-200/1920*100vw)',
							bottom: 'calc(0/1920*100vw)',
					  }
					: {
							transform: 'scale(1)',
							right: 'calc(-200/1920*100vw)',
							bottom: 'calc(-850/1920*100vw)',
					  };
			}
		} else if (forObject === 'mini_comet_red') {
			if (forAnim === 'initial') {
				return {
					transform: 'scale(1)',
					right: 'calc(-780/1920*100vw)',
					bottom: 'calc(-450/1920*100vw)',
				};
			} else if (forAnim === 'animate') {
				return animProjects.size_on
					? {
							transform: 'scale(1.28)',
							right: 'calc(-170/1920*100vw)',
							bottom: 'calc(-45/1920*100vw)',
					  }
					: {
							transform: 'scale(1)',
							right: 'calc(-820/1920*100vw)',
							bottom: 'calc(-430/1920*100vw)',
					  };
			}
		}
	};

	return {
		isAnim,
		isAnimMiniComet,
		isAnim_mobile,
		isAnimMiniComet_mobile,
	};
};
