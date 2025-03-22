import { useState } from "react"
import "./Lottery.css"
import Ticket from "./Ticket.jsx"
import { genTicket, sum } from "./helper";
import Button from "./Button.jsx";

export default function Lottery({n=3,winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    let isWinning = winCondition(ticket);
    return (
        <div>
            <h1>Try Your Luck!</h1>
            <Ticket arr={ticket}/>
            <br />
            {isWinning && <h3>CONGRATULATIONS! You Won The Lottery.</h3>}
            <br /><hr />
            <Button action={buyTicket}/>
        </div>
    )
}