import api from "../../api/axios";
import { API_GREEN_INSTANCE_ID, API_GREEN_TOKEN } from "../../util/constants";

export const handleReceiveNotification = async () => {
  const { data } = await api.get(
    `/waInstance${API_GREEN_INSTANCE_ID}/receiveNotification/${API_GREEN_TOKEN}`
  );

  return data;
};

export const handleDeleteNotification = async (receiptId: number) => {
  const { data } = await api.delete(
    `/waInstance${API_GREEN_INSTANCE_ID}/deleteNotification/${API_GREEN_TOKEN}/${receiptId}`
  );
  return data;
};

// interface ITestProps {
//   chatId: string;
//   idMessage: string;
// }

// export const handleTest = async ({ chatId, idMessage }: ITestProps) => {
//   const { data } = await api.post(
//     `/waInstance${API_GREEN_INSTANCE_ID}/getMessage/${API_GREEN_TOKEN}`,
//     { chatId, idMessage }
//   );

//   return data;
// };
