export const useCareerAnim = () => {
	const isAnim = (animCareer, forAnim) => {
		if (forAnim === 'initial') {
			return { top: '-100vh', left: 0 };
		} else if (forAnim === 'animate') {
			if (animCareer.on) return { top: '13%', left: 'calc(70/1920*100vw)' };
		}
	};

	const isAnim_mobile = (animCareer, forAnim) => {
		if (forAnim === 'initial') {
			return { top: '-300vh', left: 0 };
		} else if (forAnim === 'animate') {
			if (animCareer.on) return { top: '13%', left: 'calc(70/1920*100vw)' };
		}
	};

	return { isAnim, isAnim_mobile };
};
