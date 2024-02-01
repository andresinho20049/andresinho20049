import { Toast } from "flowbite-react";
import { FaTelegramPlane } from "react-icons/fa";
import { TbFaceIdError } from "react-icons/tb";

export type statusToats = "" | "error" | "success";

export type IToastComponentProps = {
  msg: string;
  status: statusToats;
};

export const ToastComponent = ({ msg, status }: IToastComponentProps) => {

  if (status === "") {
    return <></>;
  } else if (status === "error") {
    return (
      <Toast>
        <TbFaceIdError className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
        <div className="pl-4 text-sm font-normal">{msg}</div>
      </Toast>
    );
  }

  return (
    <Toast>
      <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
      <div className="pl-4 text-sm font-normal">{msg}</div>
    </Toast>
  );
};
