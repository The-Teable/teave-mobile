import Layout from "../../components/layout/Layout"
import styled from "styled-components";
import CenteredBox from "../../components/common/CenteredBox";
import Button from "../../components/common/Button";
import Link from "next/link";

const Test = () => {
	return (
		<Layout>
			<S.Container>
				<S.Text>
					내 취향에 꼭 맞는 티와 함께 조금 더<br />
					여유있는 하루를 보내고 싶지 않으신가요?<br /><br />
					간단한 테스트를 통해 여러분의 취향에 <br />
					딱맞는 티를 찾아드릴게요!
				</S.Text>
				<Link href={"/test/go"} passHref>
					<S.Text>나를 위한 티 찾으러 가기</S.Text>
				</Link>
			</S.Container>
		</Layout>
	)
}

export default Test;

const S: any = {};

S.Container = styled(CenteredBox).attrs({ as: "section" })``

// temp style
S.Text = styled.p`
	font-size: 20px;
	margin-top: 50px;
`

S.Button = styled(Button)``;