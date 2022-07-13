import HomeLayout from "../../components/layout/HomeLayout";
import QuestionProvider from "../../components/tea-test/QuestionProvider";
import questions from "../api/teaTestQuestions.json";
import { HeaderIndex } from "../../components/layout/Header";

const QuestionPage = () => {
  return (
    <HomeLayout headerIndex={HeaderIndex.TEST}>
      <QuestionProvider questions={questions} />
    </HomeLayout>
  );
};

export default QuestionPage;
