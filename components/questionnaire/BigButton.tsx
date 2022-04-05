interface BigButtonProps {
  onClick(): void;
}

export function BigButton(props: BigButtonProps) {
    return (
      <button
        type="submit"
        className="confirm-button bg-rose-600 px-4 py-2 rounded-md text-white drop-shadow-md" onSubmit={()=>props.onClick()}
      >
        Wyślij odpowiedzi
      </button>
    );
  }
  