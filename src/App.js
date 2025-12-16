import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Program from "./program";
import Formular from "./formular";
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
import Lipsa from "./lipsa";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
	const [lista, setLista] = useState([]);
	const [obiectPentruFormular, setObiectPentruFormular] = useState({
		id: 0,
		ora: "",
		titlu: "",
		loc: "",
		descriere: "",
	});

	const navigate = useNavigate();

	const stergActiv = (id) => {
		const listaNoua = lista.filter((activitate) => {
			if (activitate.id !== parseInt(id, 10)) {
				return true;
			} else {
				return false;
			}
		});
		setLista([...listaNoua]);
	};

	const adaugaActiv = (act) => {
		act.id = lista.length + 1;
		setLista([...lista, act]);
		navigate("/");
	};

	const editeazaActiv = (id) => {
		const obiect = lista.find((item) => parseInt(item.id) === parseInt(id));
		if (obiect) {
			setObiectPentruFormular({
				id: obiect.id,
				ora: obiect.ora,
				titlu: obiect.titlu,
				loc: obiect.loc,
				descriere: obiect.descriere,
			});
			navigate("/formular");
		}
	};

	const editActivitateDinLista = (activitateNoua) => {
		const listaNoua = lista.map((activitate) => {
			if (parseInt(activitate.id) === parseInt(activitateNoua.id)) {
				return activitateNoua;
			} else {
				return activitate;
			}
		});
		setLista(listaNoua);
		navigate("/");
	};
	
	const resetareFormular = () => {
		setObiectPentruFormular({
			id: 0,
			ora: "",
			titlu: "",
			loc: "",
			descriere: "",
		});
	};

	return (
		<Container style={{ maxWidth: "750px" }}>
			<Navbar bg="primary" variant="dark" expand="sm" className="p-2">
				<Navbar.Brand>Aplicatia Agenda</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? "link-warning p-2" : "link-light p-2")}
						>
							Program
						</NavLink>
						<NavLink
							to="/formular"
							className={({ isActive }) => (isActive ? "link-warning p-2" : "link-light p-2")}
						>
							Formular
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Routes>
				<Route path="/" element={<Program activitati={lista} sterge={stergActiv} editeaza={editeazaActiv} />} />
				<Route
					path="/formular"
					element={
						<Formular
							transmit={adaugaActiv}
							obedit={obiectPentruFormular}
							editez={editActivitateDinLista}
							reset={resetareFormular}
						/>
					}
				/>
				<Route path="*" element={<Lipsa />} />
			</Routes>
		</Container>
	);
}
export default App;
