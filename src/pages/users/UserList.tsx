import { CircularProgress, Container, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";

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

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Container sx={{ padding: 10 }}>
      <Stack sx={{ background: "#fff" }} direction="row">
        <Grid container minHeight={"60vh"} alignItems="center" spacing={2}>
          {data.status === "loading" ? (
            <Stack alignItems="center">
              <CircularProgress />
            </Stack>
          ) : (
            data.users?.data.map((user: User) => {
              const { id } = user;
              return (
                <Grid key={id} item xs={12} sm={6} md={3}>
                  <UserCard user={user} />
                </Grid>
              );
            })
          )}
        </Grid>
      </Stack>
      <Stack marginTop={10} px={10}>
        <Pagination />
      </Stack>
    </Container>
  );
}
