export interface MyEventData {
    title: string;
    token_price: number;
    collaborators: number;
    event_vault_total: number;
    ticket_price: number;
    tickets_sold: number;
    gain_vault_total: number;
    closed: boolean;
  }
  
  export const dataTest: MyEventData[] = [
    {
        title: "Mi primer evento en Solana",
        token_price: 0.1,
        collaborators: 12,
        event_vault_total: 1.2,
        ticket_price: 0.01,
        tickets_sold: 140,
        gain_vault_total: 1.4,
        closed: true,
    },
    {
        title: "#HeavyDutyCamp v3",
        token_price: 0.12,
        collaborators: 17,
        event_vault_total: 2.04,
        ticket_price: 0.05,
        tickets_sold: 231,
        gain_vault_total: 11.55,
        closed: false,
    },

    
  ]
  