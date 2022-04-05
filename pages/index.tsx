import { Form } from "../components/homepage/Form";
import { Header } from "../components/homepage/Header";

function MainPage() {
  return (
    <div className={"min-h-screen w-screen content-box"}>
      <div
        className={"main-box mx-auto h-64 max-w-5xl rounded-md drop-shadow-lg"}
      >
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default MainPage;
