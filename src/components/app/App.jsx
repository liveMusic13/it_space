import { useState } from 'react';
import Header from '../header/Header';
import Section from '../section/Section';
import InterfaceMenu from '../ui/interface-menu/InterfaceMenu';
import styles from './App.module.scss';

const App = () => {
	const [viewSection, setViewSection] = useState(0);

	console.log(viewSection);

	const [isAnimGlavn, setIsAnimGlavn] = useState(false);
	const [animAbout, setAnimAbout] = useState({
		on: false,
		off: false,
	});
	const [animProjects, setAnimProjects] = useState({
		on: false,
		off: false,
		size_on: false,
		size_off: false,
	});
	const [animServices, setAnimServices] = useState({
		on: false,
		off: false,
	});
	const [animContacts, setAnimContacts] = useState({
		on: false,
		off: false,
	});
	const [animCareer, setAnimCareer] = useState({
		on: false,
		off: false,
	});

	const [isScale, setIsScale] = useState(false);
	const [isScaleProjects, setIsScaleProjects] = useState(false);

	return (
		<div className={styles.wrapper}>
			<Header viewSection={viewSection} />

			<Section
				viewSection={viewSection}
				setViewSection={setViewSection}
				states={{
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
				}}
			/>

			<InterfaceMenu
				shadow={false}
				setViewSection={setViewSection}
				viewSection={viewSection}
				states={{
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
				}}
			/>
			<InterfaceMenu
				shadow={true}
				setViewSection={setViewSection}
				viewSection={viewSection}
				states={{
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
				}}
			/>
		</div>
	);
};

export default App;
