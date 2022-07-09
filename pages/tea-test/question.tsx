import Layout from "../../components/layout/Layout";
import QuestionProvider from "../../components/tea-test/QuestionProvider";

const questions = [
  {
    title: "나이",
    choices: ["10대", "20대", "30대", "40대", "50대 이상"]
  },
  { title: "성별", choices: ["남", "여"] },
  {
    title: "나이",
    choices: [
      "10대",
      "20대",
      "30대",
      "40대",
      "50대 이상",
      "50대 이상",
      "50대 이상",
      "50대 이상"
    ]
  },
  {
    title: "",
    choices: []
  },
  {
    title: "",
    choices: []
  },
  {
    title: "",
    choices: []
  },
  {
    title: "",
    choices: []
  },
  {
    title: "",
    choices: []
  }
];

const QuestionPage = () => {
  return (
    <Layout>
      <QuestionProvider questions={questions} />
    </Layout>
  );
};

export default QuestionPage;
