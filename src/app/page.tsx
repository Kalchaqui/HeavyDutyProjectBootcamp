'use client'
import React from "react";
import EventCard from "@/components/event-card";
import { dataTest } from "@/app/utils/event-data";
import WalletInfo from "@/components/wallet-info";
export default function Home() {
  return (
    <div>
      <div>
        <WalletInfo />
      </div>
      { dataTest.length == 0 && (
        <div className="my-16 flex flex-col items-center">
          <h1 className="text-4xl text-center font-bold">¡Lo sentimos! No hay eventos disponibles</h1>
          <h3 className="text-2xl text-center mt-5 mb font-bold">Sé el primero en crear un evento en Solana</h3>
          <button className="bg-indigo-300 w-40 text-black mt-5 font-semibold px-4 py-1 rounded hover:text-white hover:bg-indigo-400" 
                onClick={ () => alert("Próximamente")}>
                Crear Evento
          </button>
        </div>
        )}
         { dataTest.length > 0 && (
        <div className="my-16">
          <h1 className="text-4xl text-center font-bold">¡No te pierdas los últimos eventos!</h1>
          <h3 className="text-2xl text-center mt-5 mb font-bold">Forma parte de la gran comunidad de Solana</h3>
        </div>
        )}
      <div className="grid gap-4 px-10 mb-10 xl:grid-cols-4 sm:grid-cols-2">
        {dataTest.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            ticket_price={event.ticket_price}
            token_price={event.token_price}
          />
        ))}
      </div>
    </div>
  );
}
