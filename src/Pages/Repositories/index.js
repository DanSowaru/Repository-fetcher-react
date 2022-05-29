import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

// useEffect monitora uma variavel e dispara uma mudança caso a variável seja alterada.
// useEffect(() => {método}, [variavel monitorada]);
// Se deixar o campo vazio, ele ativa no ato da renderização do componente.
// Ele monitora os ciclos de vida do componente.

export default function Repositories() {
	const history = useHistory();
	const [repositories, setRepositores] = useState([]);

	useEffect(() => {
		let repositoriesName = localStorage.getItem("repositories");

		// Para redirecionar o usuario de volta à Home caso a "repoisitoriesName" esteja vazia:
		if (repositoriesName != null) {
			repositoriesName = JSON.parse(repositoriesName);
			setRepositores(repositoriesName);
			localStorage.clear();
		} else {
			history.push("/");
		}
	}, []);

	return (
		<S.Container>
			<S.Title>Repositories</S.Title>
			<S.List>
				{repositories.map((repository) => {
					return <S.ListItem key={repository}>{repository}</S.ListItem>;
				})}
			</S.List>
			<S.LinkHome to="/">Voltar</S.LinkHome>
		</S.Container>
	);
}
