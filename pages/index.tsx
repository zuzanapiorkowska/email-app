import { Form } from "../components/Form";
import { Input } from "../components/Input";

function MainPage() {
  return (
    <div>
      <h1>Witaj!</h1>
      <p>
        Z racji na ukończenie przez Ciebie naszego planu stażowego, chcielibyśmy
        poprosić Cię o wypełnienie ankiety na jego temat :)
      </p>
      <p>
        Jeśli masz parę wolnych minut i chcesz pomóc nam w ulepszaniu się....
      </p>
      <p>wpisz swój adres email</p>
      <Form />
    </div>
  )
}

export default MainPage;
