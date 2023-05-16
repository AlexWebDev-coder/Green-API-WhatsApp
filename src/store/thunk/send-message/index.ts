import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/axios";
import {
  API_GREEN_INSTANCE_ID,
  API_GREEN_TOKEN,
} from "../../../util/constants";

interface IProps {
  phone: string;
  message: string;
}

export const fetchSendMessageAsync = createAsyncThunk(
  "post/message",
  async (props: IProps) => {
    try {
      const dataToServer = {
        chatId: `${props.phone}@c.us`,
        message: props.message,
      };

      const { data } = await api.post(
        `/waInstance${API_GREEN_INSTANCE_ID}/SendMessage/${API_GREEN_TOKEN}`,
        dataToServer
      );

      return data;
    } catch (error: any) {
      return error;
    }
  }
);
