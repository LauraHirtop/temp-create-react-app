import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

const Activitate = (props) => {
	const { id, ora, titlu, loc, descriere, sterge, editeaza } = props;
	return (
		<Row className="mt-3 border-bottom">
			<Col xs={9}>
				<h4>
					{ora} - {titlu}
				</h4>
				<h6>Loc: {loc}</h6>
				<p>Descriere: {descriere}</p>
			</Col>
			<Col
				xs={3}
				className="d-flex align-items-center
justify-content-end"
			>
				<Button variant="link" onClick={() => editeaza(id)} id={id}>
					<BsPencilSquare className="pe-none" />
				</Button>
				<Button variant="link" onClick={() => sterge(id)} id={id}>
					<BsTrashFill className="pe-none" />
				</Button>
			</Col>
		</Row>
	);
};
export default Activitate;
