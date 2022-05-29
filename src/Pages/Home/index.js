// import "./Home.css";
import { React, useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

export default function Home(props) {
	// Um exemplo de Hook, em usuario, na função useState, setamos o estado inicial do usuario.
	// No caso, Guilheme. Essa função retorna um array de dois elementos,
	// o primeiro é o valor do estado,
	//e o segundo é uma função para alterar o valor do estado.
	const [usuario, setUsuario] = useState("");

	// Criamos um State para ativar o erro caso o input retorne vazio.
	const [erro, setErro] = useState(false);

	// useHistory é uma função do React-Router-Dom, que permite navegar entre as páginas.
	// Usamos o Hook useHistory para armazenar a navegação do usuário.
	const history = useHistory();

	// axios é um npm package que serve para fazer promises de APIs.
	//uma promise pode fazer com o retorno 1) then, 2) catch.
	function handlePesquisa() {
		axios
			.get(`https://api.github.com/users/${usuario}/repos`)
			.then((response) => {
				console.log(response.data);
				const repositories = response.data;
				const repositoriesName = [];

				repositories.map((repository) =>
					repositoriesName.push(repository.name)
				);

				// salvando o array da response no localStorage e transformando em String.
				localStorage.setItem("repositories", JSON.stringify(repositoriesName));
				console.log(repositoriesName);
				setErro(false);
				history.push("/repositories");
			})
			.catch((error) => {
				setErro(true);
			});
	}

	return (
		// <> é um fragmento de HTML, ou seja, não renderiza nada, mas sim, apenas o que está dentro dele.
		//  É uma gambiarra para retornar uma div sem dizer que é uma div.
		<S.HomeContainer>
			<h1>
				{props.title || "Olá"}, {props.user || "usuário!"}
			</h1>

			<p>Digite um usuário GitHub para ver os repositórios!</p>

			<p>{usuario}</p>
			{/* em react não precisamos declarar name nem id nas tags */}
			<S.Content>
				<S.Input
					className="usuarioInput"
					placeholder="Usuário"
					value={usuario}
					onChange={(e) => setUsuario(e.target.value)}
				/>
				<S.Button type="button" onClick={handlePesquisa}>
					Pesquisar
				</S.Button>
			</S.Content>
			{erro ? (
				<S.ErrorMsg>Ocorreu um erro, faz de novo seu imbecil!</S.ErrorMsg>
			) : (
				""
			)}
		</S.HomeContainer>
	);
}
