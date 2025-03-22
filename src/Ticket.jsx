import TicketNum from "./TicketNum";
import "./Ticket.css"

export default function Ticket({ arr }) {
    return <div className="Ticket">
        {arr.map((num,idx) => <TicketNum num={num} key={idx}/>)}
    </div>
}