import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { EmailAnswer } from "../interfaces/email";
import { sendEmailAdress } from "./services/sendEmailAdress";

interface InputProps {
    value: string;
}

export function Form(props: InputProps) {
    const [inputValue, setInputValue] = useState<string>("");
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      const value = e.target.value;
      setInputValue(value);
    }

    function handleOnClick() {
       sendEmailAdress(inputValue);
    }
    return <div>
        <Input value={inputValue} onChange={(e)=>handleChange(e)}/>
        <Button onClick={()=>{handleOnClick()}}/>
        </div>
}
