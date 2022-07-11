import Layout from "../../components/layout/Layout";
import QuestionProvider from "../../components/tea-test/QuestionProvider";
import questions from "../api/teaTestQuestions.json";
import { HeaderIndex } from "../../components/layout/Header";

const QuestionPage = () => {
  return (
    <Layout headerIndex={HeaderIndex.TEST}>
      <QuestionProvider questions={questions} />
    </Layout>
  );
};

export default QuestionPage;
