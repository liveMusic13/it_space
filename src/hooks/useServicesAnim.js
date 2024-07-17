export const useServicesAnim = () => {
	const isAnim = (animServices, forAnim) => {
		if (forAnim === 'initial') {
			return { top: '-100vh' };
		} else if (forAnim === 'animate') {
			if (animServices.on) {
				return { top: 'calc(135/1920*100vw)' };
			} else if (animServices.off) {
				return { top: '-100vh' };
			}
		}
	};

	const isAnim_mobile = (animServices, forAnim) => {
		if (forAnim === 'initial') {
			return { top: '-100vh' };
		} else if (forAnim === 'animate') {
			if (animServices.on) {
				return { top: 'calc(96/375*100vw)' };
			} else if (animServices.off) {
				return { top: '-100vh' };
			}
		}
	};

	return { isAnim, isAnim_mobile };
};
