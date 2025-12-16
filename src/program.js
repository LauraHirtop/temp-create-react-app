import React from "react";
import Activitate from "./activitate";

const Program = (props) => {
	const { activitati, sterge, editeaza } = props;

	const lista = activitati.map((activitate) => (
		<Activitate
			ora={activitate.ora}
			descriere={activitate.descriere}
			titlu={activitate.titlu}
			loc={activitate.loc}
			id={activitate.id}
			key={activitate.id}
			sterge={sterge}
			editeaza={editeaza}
		/>
	));
	return (
		<>
			<h2 className="text-center mt-4">Agenda</h2>
			<hr />
			<div>{lista}</div>
		</>
	);
};
export default Program;
