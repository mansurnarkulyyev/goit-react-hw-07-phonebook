import axios from "axios";

const instance = axios.create({
  baseURL: "https://62e251e33891dd9ba8e4bde4.mockapi.io/contacts/contacts",
});

export const getContacts = async () => {
  const { data } = await instance.get("/");
  console.log(data);

  return data;
}; 

export const removeContacts = async (id) => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};

export const addContacts = async (data) => {
  const { data: result } = await instance.post("/", data);
  return result;
};