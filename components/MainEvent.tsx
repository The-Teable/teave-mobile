import styled from "styled-components";

const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const items = [
  { url: "image/event1.png", href: "/" },
  { url: "image/event2.png", href: "/" },
  { url: "image/event3.png", href: "/" },
];

const MainEvent = () => <Container>items.map()</Container>;
