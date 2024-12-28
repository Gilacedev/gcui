import Language from "@/locales/Language";

interface TicketStatusProps {
  status: any; 
}

const TicketStatus = ({ status }: TicketStatusProps) => {
  const ticketStatuses = [
    "ticket_status_closed",
    "ticket_status_open",
    "ticket_status_pending",
    "ticket_status_answered",
    "ticket_status_waiting"
  ];

  return (
    <div>
      {status === 0 && (
        <div className={"text-white bg-slate-400 text-xs p-2 rounded-2xl"}>
          {Language().ticket_status} : {Language()[ticketStatuses[status]]}
        </div>
      )}
      {status === 1 && (
        <div className={"text-white bg-teal-500 text-xs p-2 rounded-2xl"}>
          {Language().ticket_status} : {Language()[ticketStatuses[status]]}
        </div>
      )}
      {status > 1 && (
        <div className={"text-white bg-orange-500 text-xs p-2 rounded-2xl"}>
          {Language().ticket_status} : {Language()[ticketStatuses[status]]}
        </div>
      )}
    </div>
  );
};

export default TicketStatus;
