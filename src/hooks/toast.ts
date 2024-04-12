import { toast } from "react-toastify";

type ToastType = "info" | "success" | "warning" | "error";

export function toastfy(type: ToastType, msg: string, time: number) {
  toast[type](msg, {
    position: "bottom-center",
    autoClose: time,
    hideProgressBar: false,
    pauseOnHover: false,
    closeOnClick: true,
    draggable: false,
    icon: false,
    closeButton: false,
    theme: "colored",
    className: `w-full h-full !rounded-xl`,
  });
}
