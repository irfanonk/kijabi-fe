import {
  CircularProgress,
  Container,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import Pagination from "../../components/Pagination";
import {
  User,
  UserState,
  getUsers,
  selectUsers,
} from "../../features/users/userSlice";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import UserCard from "./components/UserCard";

export default function UserList() {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectUsers) as UserState;

  const [searchedData, setSearchedData] = useState<User[] | null>(null);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchedData(
      data?.users?.data?.filter((user) =>
        user.email.toLowerCase().includes(value)
      ) || null
    );
  };
  return (
    <Container sx={{ padding: 5 }}>
      <Stack sx={{ background: "#fff" }} direction="column">
        <Stack p={2}>
          <TextField
            label="Search user by email"
            onChange={onChangeSearch}
            variant="outlined"
          />
        </Stack>
        <Grid container minHeight={"60vh"} alignItems="center" spacing={2}>
          {data.status === "loading" ? (
            <Stack justifyContent="center" alignItems="center" p={20}>
              <CircularProgress />
            </Stack>
          ) : (
            (searchedData || data.users?.data)?.map((user: User) => {
              const { id } = user;
              return (
                <Grid key={id} item xs={12} sm={6} md={3}>
                  <UserCard user={user} />
                </Grid>
              );
            })
          )}
        </Grid>
        <Stack marginTop={10} p={2}>
          <Pagination />
        </Stack>
      </Stack>
    </Container>
  );
}
