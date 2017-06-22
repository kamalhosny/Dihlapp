export interface Message {
  id: number;
  body: string;
  sent: boolean;
  seen: boolean;
  timestamp: string;
  user: User;
  conversation_id:number;
}

interface User {
  name: string;
  avatar: string;
}

// export class Message {
//   id: number;
//   content: string;
//   sent: boolean;
//   seen: boolean;
//   timestamp: string;
//   user: User;
// }

// export class User {
//   name: string;
//   avatar: string;
// }
