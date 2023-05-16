import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/axios";
import {
  API_GREEN_INSTANCE_ID,
  API_GREEN_TOKEN,
} from "../../../util/constants";

export const fetchReceiveNotificationAsync = createAsyncThunk(
  "get/notification",
  async () => {
    try {
      const { data } = await api.get(
        `/waInstance${API_GREEN_INSTANCE_ID}/receiveNotification/${API_GREEN_TOKEN}`
      );

      return data;
    } catch (error: any) {
      return error;
    }
  }
);
