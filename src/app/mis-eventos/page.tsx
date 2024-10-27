'use client'
import MyEventCard from "@/components/my-event-card";
import { dataTest } from "../utils/my-event-data";

import { redirect } from 'next/navigation'
import { useWallet } from "@solana/wallet-adapter-react";

export default function MyEvents() {
  const { publicKey } = useWallet()
  if(!publicKey){
    redirect('/')
 }

  return (
    <div>
       { dataTest.length == 0 && (
         <div className="my-16 flex flex-col items-center">
            <h1 className="text-4xl text-center font-bold">Aún no tienes eventos en Solana</h1>
            <h3 className="text-2xl text-center mt-5 mb font-bold">¡Crea tu primer evento hoy mismo!</h3>
            <button className="bg-indigo-300 w-40 text-black mt-5 font-semibold px-4 py-1 rounded hover:text-white hover:bg-indigo-400" 
                onClick={ () => alert("Próximamente")}>
                  Crear Evento
              </button>
          </div>
       )}
        { dataTest.length > 0 && (
          <div>
            <div className="my-16 flex flex-col items-center">
              <h1 className="text-4xl text-center font-bold">Tus eventos en Solana</h1>
              <h3 className="text-2xl text-center mt-5 mb font-bold">¿Nuevo plan? ¡Hazlo realidad!</h3>
              <button className="bg-indigo-300 w-40 text-black mt-5 font-semibold px-4 py-1 rounded hover:text-white hover:bg-indigo-400" 
                  onClick={ () => alert("Próximamente")}>
                    Crear Evento
              </button>
          </div>
          <div className="grid gap-4 px-10 mb-10 xl:grid-cols-4 sm:grid-cols-2">
            {dataTest.map((event, index) => (
              <MyEventCard
                key={index}
                title={event.title}
                ticket_price={event.ticket_price}
                tickets_sold={event.tickets_sold}
                gain_vault_total={event.gain_vault_total}
                token_price={event.token_price}
                collaborators={event.collaborators}
                event_vault_total={event.event_vault_total}
                closed={event.closed}
              />
            ))}
          </div>
        </div>
        )}
        
    </div>
  );
}
