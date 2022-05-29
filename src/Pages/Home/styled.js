import styled from "styled-components";

export const Input = styled.input`
	border: 1px solid #ddd;
	height: 1.5rem;
	padding: 0 0.5rem;
	border-radius: 0.5rem 0 0 0.5rem;

	&:focus,
	&:active {
		outline: none;
		box-shadow: none;
	}
`;

export const Button = styled.button`
	height: 1.5rem;
	border: 1px solid #ddd;

	background-color: #fff;
	color: #000;
	border-radius: 0 0.5rem 0.5rem 0;

	&:focus,
	&:active {
		outline: none;
		box-shadow: none;
	}
`;

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const Content = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ErrorMsg = styled.span`
	text-align: center;
	display: block;
	font-size: 0.65rem;
	color: red;
	font-weight: 600;
	margin-top: 2rem;
`;
