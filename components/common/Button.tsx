import styled from "styled-components";

const Button = ({ text }) => {
	return <S.Button>{text}</S.Button>
}

const S: any = {}

S.Button = styled.button``;

export default Button;