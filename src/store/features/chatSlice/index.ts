import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialState, IMessages } from "./types";
import { fetchSendMessageAsync } from "../../thunk/send-message";
import { fetchReceiveNotificationAsync } from "../../thunk/receipt-notification";

const initialState: IInitialState = {
  phone: "",
  message: "",
  messages: [],
  status: "loading",
  receiveNotificationData: {
    chatId: "",
    idMessage: "",
    statusMessage: "",
    status: "loading",
  },
};

const chatSlice = createSlice({
  name: "chatState",
  initialState: initialState,
  reducers: {
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setAddMessage: (state, action: PayloadAction<IMessages>) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchSendMessageAsync.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(fetchSendMessageAsync.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     // state.items = action.payload;
    //   })
    //   .addCase(fetchSendMessageAsync.rejected, (state) => {
    //     state.status = "failed";
    //   });

    builder.addCase(fetchReceiveNotificationAsync.pending, (state) => {
      state.receiveNotificationData.status = "loading";
    });
    builder.addCase(
      fetchReceiveNotificationAsync.fulfilled,
      (state, action) => {
        state.receiveNotificationData.chatId = action.payload?.body.chatId;
        state.receiveNotificationData.idMessage =
          action.payload?.body.idMessage;
        state.receiveNotificationData.statusMessage =
          action.payload?.body.status;
        state.receiveNotificationData.status = "succeeded";
      }
    );
    builder.addCase(fetchReceiveNotificationAsync.rejected, (state) => {
      state.receiveNotificationData.status = "failed";
    });
  },
});

export const { setPhone, setMessage, setAddMessage } = chatSlice.actions;
export default chatSlice.reducer;
