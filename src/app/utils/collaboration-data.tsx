export interface CollaborationData {
    event_title: string;
    tokens_amount: number;
    event_closed: boolean;
  }
  
  export const dataTest: CollaborationData[] = [
    {
      event_title: "Mi primer evento en Solana",
      tokens_amount: 2,
      event_closed: true
    },
    {
      event_title: "#HeavyDutyCamp v3",
      tokens_amount: 15,
      event_closed: false
    },

    {
      event_title: "#Hackathon #Solana por Kalcha",
      tokens_amount: 10,
      event_closed: true
    },
  ]
  