import { FilterState } from '../filter/filterSlice';
import { api } from "../api/api";


export const fetchUsers = async (filters: FilterState) => {
  const page = filters.page.toString()
  const email = filters.email

  const response = await api.get(`users?page=${page}${email ? `&email=${email}` : ''}`);



  if (response.status === 200) {

    return {
      data: response.data,

    };
  }
  throw new Error('Get Users')
};
export const fetchUser = async (id: string) => {


  const response = await api.get(`users/${id}`);


  if (response.status === 200) {

    return {
      data: response.data.data

    };
  }
  throw new Error('Get User')
};


