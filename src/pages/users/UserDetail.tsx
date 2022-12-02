import React, { useEffect } from "react";
import {
  UserState,
  getUser,
  selectUsers,
} from "../../features/users/userSlice";
import { CircularProgress, Container } from "@mui/material";
import { Stack } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useParams } from "react-router-dom";
import UserCard from "./components/UserCard";

export default function UserDetail() {
  const params = useParams();
  const { id } = params;
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectUsers) as UserState;
  console.log("data", data);

  useEffect(() => {
    dispatch(getUser(id!));
  }, []);
  return (
    <Container>
      <Stack>
        {data.status === "loading" ? (
          <CircularProgress />
        ) : (
          <Stack>
            <UserCard user={data?.user} />
          </Stack>
        )}
      </Stack>
    </Container>
  );
}
