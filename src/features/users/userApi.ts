import { FilterState } from '../filter/filterSlice';
import { api } from "../api/api";


export const fetchUsers = async (filters: FilterState) => {
  const page = filters.page.toString()

  const response = await api.get(`users?page=${page}`);


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


