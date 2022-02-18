import { useSelector } from "react-redux";

export default function authheader() {
  const { token, id } = useSelector((state) => state.user);
  if (id && token) {
    console.log("from autheader", token);
    return { "x-access-token": token };
  } else {
    return;
  }
}
