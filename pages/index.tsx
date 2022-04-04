import { Form } from "../components/Form";

function MainPage() {
  return (
    <div>
      <h1>Witaj!</h1>
      <p>
        Z racji na ukończenie przez Ciebie naszego planu stażowego, chcielibyśmy
        poprosić Cię o wypełnienie ankiety na jego temat :)
      </p>
      <p>
        Jeśli masz parę wolnych minut i chcesz pomóc nam w staniu się jeszcze lepszymi, wypełnij naszą absurdalnie krótką ankietę!
      </p>
      <p>wpisz swój adres email</p>
      <Form />
    </div>
  )
}

export default MainPage;
