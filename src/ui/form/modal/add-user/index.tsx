import { FC, useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import FormButton from "../../button";
import FormTextFieldPhone from "../../textfield-phone";

import FormTextField from "../../textfield";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import {
  setAddMessage,
  setMessage,
  setPhone,
} from "../../../../store/features/chatSlice";
import { fetchSendMessageAsync } from "../../../../store/thunk/send-message";
import { fetchReceiveNotificationAsync } from "../../../../store/thunk/receipt-notification";

const FormAddUser: FC = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const phone = useAppSelector((state) => state.chat.phone);
  const message = useAppSelector((state) => state.chat.message);
  const receive = useAppSelector((state) => state.chat.receiveNotificationData);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleSendMessage = async () => {
    dispatch(fetchSendMessageAsync({ phone, message }));
    dispatch(fetchReceiveNotificationAsync());

    dispatch(
      setAddMessage({
        id: receive.idMessage,
        text: message,
        status: receive.statusMessage,
      })
    );

    dispatch(setPhone(""));
    dispatch(setMessage(""));

    toast.success("Сообщение отправлено");
    handleOpen();
  };

  return (
    <div>
      <FormButton onClick={handleOpen}>Добавить собеседника</FormButton>
      <Dialog open={open} onClose={handleOpen}>
        <DialogTitle>Начинайте беседу здесь</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <FormTextFieldPhone
            placeholder="Add phone user"
            value={phone}
            name="phone"
            onChange={(e) => dispatch(setPhone(e.target.value))}
          />
          <FormTextField
            name="message"
            variant="outlined"
            placeholder="Add first message"
            value={message}
            onChange={(e) => dispatch(setMessage(e.target.value))}
          />
        </DialogContent>
        <DialogActions>
          <FormButton onClick={handleOpen}>Cancel</FormButton>
          <FormButton onClick={handleSendMessage}>Send</FormButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormAddUser;
