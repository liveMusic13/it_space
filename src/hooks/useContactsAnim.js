export const useContactsAnim = () => {
	const isAnim = (animContacts, forAnim) => {
		if (forAnim === 'initial') {
			return { top: '-100vh', left: 0 };
		} else if (forAnim === 'animate') {
			if (animContacts.on) return { top: 0, left: 0 };
		}
	};

	return { isAnim };
};
