import { useContext } from "react";
import CenteredContainer from "../../components/layout/CenteredContainer";
import AuthContext from "../../context/AuthContext";

const SignupPage = () => {
  const [user, logoutUser] = useContext(AuthContext);
  return (
    <>
      <CenteredContainer></CenteredContainer>
    </>
  );
};

export default SignupPage;
