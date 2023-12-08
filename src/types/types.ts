export interface MessageType {
  messageID: number;
  userName: string;
  userID: number;
  message: string;
  image?: string;
  timeSent: string;
}

export interface Channel {
  channelId: number;
  channelName: string;
  serverID: number;
}

export interface ServerData {
  channels: Channel[];
  serverID: number;
  serverName: string;
  userIDs: number[];
}

export interface UserType {
  username: string;
  profilePicture: string;
  email: string;
  serverIDs: number[];
  serverData?: ServerData[];
  currentServer?: number;
}
