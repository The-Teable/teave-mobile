import Layout from "../../components/layout/Layout";
import QuestionProvider from "../../components/tea-test/QuestionProvider";
import questions from "../api/teaTestQuestions.json";

const QuestionPage = () => {
  return (
    <Layout>
      <QuestionProvider questions={questions} />
    </Layout>
  );
};

export default QuestionPage;
