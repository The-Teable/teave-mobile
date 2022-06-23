import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

interface props {
	title: string;
	items: { url: string; href: string }[];
}

interface itemProps {
	url: string;
}

const Container = styled.section`
max-width: 76.8rem;
  margin: 0 auto;`;

const Title = styled.span``;

const ItemsContainer = styled.div`
display: flex;
  margin: 10px;
  border-radius: 0.5rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }`;

const Item = styled.div<itemProps>`
flex: none;
background: url(${({ url }: itemProps) => url}) no-repeat center/cover;
width: 33%;
height: 13rem;
&:hover {
  cursor: pointer;
}
transform: translate(-${({ move }: itemProps) => move}%);
transition: transform 1s;
`;

const ThemeRecommend = ({ title, items }: props) => {
	const [move, setMove] = useState(0);
	const next = () => move < 500 ? move === -600 ? setMove(100) : setMove(move + 100) : setMove(-600);
	return (<Container>
		<Title>{title}</Title>
		<ItemsContainer onClick={next}>
			{items.map(({ url, href }, i) =>
				(<Link key={i} href={href} passHref><Item url={url} /></Link>)
			)}
		</ItemsContainer>

	</Container>);
}

export default ThemeRecommend;