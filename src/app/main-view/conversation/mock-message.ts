import {  Message } from './message.type';

export const MESSAGES = [
  {
    content: 'Hello there',
    sent: true,
    seen: true,
    timestamp: '11 June',
    user: {
      name: 'Joe',
      avatar: 'https://placeholdit.co//i/50x50'
    }
  },
  {
    content: 'salamo 3aleko',
    sent: false,
    seen: false,
    timestamp: '11 June',
    user: {
      name: 'Kamal',
      avatar: 'https://placeholdit.co//i/50x50'
    }
  },
  {
    content: 'How are you?',
    sent: true,
    seen: false,
    timestamp: '11 June',
    user: {
      name: 'Joe',
      avatar: 'https://placeholdit.co//i/50x50'
    }
  }
];
