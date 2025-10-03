import { toast } from "react-toastify";
const CustomToastSuccess = (text) => {
  return toast.success(`${text}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
const CustomToastError = (text) => {
  return toast.error(`${text}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export { CustomToastSuccess, CustomToastError };
