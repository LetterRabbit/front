import axios from "axios";

export const logout = async () => {
  const { data } = await axios.post("/api/logout");
  if (data) location.href = "/";
};
