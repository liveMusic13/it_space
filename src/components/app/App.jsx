import { useState } from 'react';
import Header from '../header/Header';
import Section from '../section/Section';
import InterfaceMenu from '../ui/interface-menu/InterfaceMenu';
import styles from './App.module.scss';

const App = () => {
	const [viewSection, setViewSection] = useState(0);

	console.log(viewSection);

	return (
		<div className={styles.wrapper}>
			<Header viewSection={viewSection} />
			{/* {arraySection.map(section => {

				if (section.id === 0 || section.id === 1 || section.id === 2) {
				return (
					<Section
					key={section.id}
					title={section.title}
					section={section}
					viewSection={viewSection}
					setViewSection={setViewSection}
					/>
				)
			}
			}
			)} */}

			<Section viewSection={viewSection} setViewSection={setViewSection} />

			<InterfaceMenu
				shadow={false}
				setViewSection={setViewSection}
				viewSection={viewSection}
			/>
			<InterfaceMenu
				shadow={true}
				setViewSection={setViewSection}
				viewSection={viewSection}
			/>
		</div>
	);
};

export default App;
