import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Formular = (props) => {
	const [id, setId] = useState(0);
	const [ora, setOra] = useState("");
	const [titlu, setTitlu] = useState("");
	const [loc, setLoc] = useState("");
	const [descriere, setDescriere] = useState("");
	const { obedit, transmit, editez, reset } = props;

	useEffect(() => {
		setId(obedit.id);
		setOra(obedit.ora);
		setTitlu(obedit.titlu);
		setLoc(obedit.loc);
		setDescriere(obedit.descriere);
	}, [obedit]);

	const tratezSubmit = (evt) => {
		evt.preventDefault();
		const activitate = { ora, titlu, loc, descriere };
		if (id === 0) {
			transmit(activitate);
		} else {
			activitate.id = id;
			editez(activitate);
		}
	};
	
	return (
		<>
			<h2 className="text-center mt-4">{id === 0 ? "Activitate nouă" : "Editează activitate"}</h2>
			<hr />
			<Form onSubmit={tratezSubmit}>
				<Form.Group>
					<Form.Label>Ora:</Form.Label>
					<Form.Control type="text" value={ora} onChange={(e) => setOra(e.target.value)} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Titlu:</Form.Label>
					<Form.Control type="text" value={titlu} onChange={(e) => setTitlu(e.target.value)} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Loc:</Form.Label>
					<Form.Control type="text" value={loc} onChange={(e) => setLoc(e.target.value)} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Descriere:</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						value={descriere}
						onChange={(e) => setDescriere(e.target.value)}
					/>
				</Form.Group>
				<Button variant="primary" type="submit" className="m-2 ms-0">
					Submit
				</Button>
				<Button variant="secondary" type="button" className="m-2" onClick={reset}>
					Reset
				</Button>
			</Form>
		</>
	);
};
export default Formular;
