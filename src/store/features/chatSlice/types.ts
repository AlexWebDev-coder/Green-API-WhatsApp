export interface IInitialState {
  phone: string;
  message: string;
  messages: IMessages[];
  status: "loading" | "succeeded" | "404" | "failed";
  receiveNotificationData: {
    chatId: string;
    idMessage: string;
    statusMessage: string;
    status: "loading" | "succeeded" | "failed";
  };
}

export interface IMessages {
  id: string;
  text: string;
  status: string;
}
