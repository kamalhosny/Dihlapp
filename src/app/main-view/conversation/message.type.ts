export class Message {
  id: number;
  content: string;
  sent: boolean;
  seen: boolean;
  timestamp: string;
  user: User;
}

export class User {
  name: string;
  avatar: string;
}