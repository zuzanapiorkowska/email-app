import { Form } from "../components/homepage/Form";

function MainPage() {
  return (
    <div className={"min-h-screen w-screen"}>
      <div
        className={
          "bg-slate-200 mx-auto h-64 max-w-5xl rounded-md drop-shadow-lg"
        }
      >
        <h1 className={"text-4xl font-bold text-center mb-5"}>Witaj!</h1>
        <div className={"text-center"}>
          <p>
            Z racji na ukończenie przez Ciebie naszego planu stażowego,
            chcielibyśmy poprosić Cię o wypełnienie ankiety na jego temat :)
          </p>
          <p>
            Jeśli masz parę wolnych minut i chcesz pomóc nam w staniu się
            jeszcze lepszymi, wypełnij naszą absurdalnie krótką ankietę!
          </p>
          <p>wpisz swój adres email</p>
        </div>
        <Form />
      </div>
    </div>
  )
}

export default MainPage;
