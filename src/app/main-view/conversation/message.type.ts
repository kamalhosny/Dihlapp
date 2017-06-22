export interface Message {
  id: number;
  body: string;
  conversation_id: number,
  user_id: number,
  created_at: string,
  updated_at: string
}

// interface User {
//   name: string;
//   avatar: string;
// }

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
