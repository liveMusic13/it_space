import { useState } from 'react';
import { arrayFormVac } from '../../data/form.data';
import Header from '../header/Header';
import Section from '../section/Section';
import Button from '../ui/button/Button';
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
	const [isViewContainer, setIsViewContainer] = useState(false);
	const [isViewContact, setIsViewContact] = useState(false);
	const [isViewCareer, setIsViewCareer] = useState(false);

	const [isAnimPlanet, setIsAnimPlanet] = useState(false);

	const [isVieBackOpacity, setIsVieBackOpacity] = useState(false);

	return (
		<div className={styles.wrapper}>
			<Header
				viewSection={viewSection}
				setViewSection={setViewSection}
				setAnimContacts={setAnimContacts}
				setIsAnimGlavn={setIsAnimGlavn}
				setAnimAbout={setAnimAbout}
				setAnimCareer={setAnimCareer}
				setAnimProjects={setAnimProjects}
				setAnimServices={setAnimServices}
				setIsViewContainer={setIsViewContainer}
				setIsViewContact={setIsViewContact}
				setIsViewCareer={setIsViewCareer}
				setIsScale={setIsScale}
				setIsScaleProjects={setIsScaleProjects}
			/>
			{isVieBackOpacity && <div className={styles.block__shadow_form}></div>}
			{isVieBackOpacity && (
				<div className={styles.block__form}>
					<div className={styles.form__title}>
						<h2 className={styles.title}>Вакансия «Личный ассистент»</h2>

						<button
							className={styles.button__exit}
							onClick={() => setIsVieBackOpacity(false)}
						>
							<img
								className={styles.socials}
								src='/assets/images/icons/exit.svg'
								alt='socials'
							/>
						</button>
					</div>
					<div className={styles.form}>
						{arrayFormVac.map(element => {
							if (element.id !== 3) {
								return (
									<div key={element.id} className={styles.block__input}>
										<label htmlFor={element.id}>{element.title}</label>
										<input
											type='text'
											id={element.id}
											placeholder={
												element.placeholder ? element.placeholder : ''
											}
										/>
									</div>
								);
							} else {
								return (
									<div key={element.id} className={styles.block__input}>
										<label>{element.title}</label>
										<div className={styles.block__select}>
											<input
												className={styles.add__file}
												type='file'
												placeholder={element.placeholder}
											/>
											<p>{element.placeholder}</p>
											<img
												className={styles.add__file_image}
												src='/assets/images/icons/file.svg'
												alt='arrow'
											/>
										</div>
									</div>
								);
							}
						})}
					</div>
					<div className={styles.block__button}>
						<Button send={true}>ОТПРАВИТЬ </Button>
					</div>
				</div>
			)}

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
					isViewContainer,
					setIsViewContainer,
					isViewContact,
					setIsViewContact,
					isViewCareer,
					setIsViewCareer,
					isAnimPlanet,
					setIsAnimPlanet,
					isVieBackOpacity,
					setIsVieBackOpacity,
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
					isViewContainer,
					setIsViewContainer,
					isViewContact,
					setIsViewContact,
					isViewCareer,
					setIsViewCareer,
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
				}}
			/>
		</div>
	);
};

export default App;
