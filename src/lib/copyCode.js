import toast from "react-hot-toast";

export const copyToClipboard = (code) => {
  navigator.clipboard.writeText(code);
  toast.success("Code copied to clipboard!");
};
