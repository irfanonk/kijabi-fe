import {
  Box,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import {
  FilterState,
  paginate,
  selectFilters,
} from "../features/filter/filterSlice";
import useResponsive from "../hooks/useResponsive";
import { getUsers, selectUsers } from "../features/users/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const StyledStack = styled(Stack)(() => ({
  cursor: "pointer",
}));
export default function Pagination() {
  const isDesktop = useResponsive("up", "lg");

  const filters = useAppSelector(selectFilters) as FilterState;
  const page = filters.page;
  const data = useAppSelector(selectUsers);
  const totalPage = data?.users?.total_pages || 2;

  const dispatch = useAppDispatch();

  const onClickPage = (pageNumber: number) => {
    dispatch(paginate(pageNumber));
    dispatch(getUsers());
  };

  const onClickNextPage = () => {
    if (page === totalPage) return;

    dispatch(paginate(page + 1));
    dispatch(getUsers());
  };
  const onClickPrevPage = () => {
    if (page === 1) return;
    dispatch(paginate(page - 1));
    dispatch(getUsers());
  };

  const onChangePage = (event: SelectChangeEvent) => {
    const pageNumber = +event.target.value;
    onClickPage(pageNumber);
  };

  return (
    <Grid container spacing={1}>
      <Grid sx={{ display: "flex", justifyContent: "flex-start" }} item xs>
        <StyledStack
          onClick={onClickPrevPage}
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <Box component="img" src="/assets/icons/arrow-left.png" alt="prev" />
          {isDesktop && <Typography>Prev</Typography>}
        </StyledStack>
      </Grid>
      <Grid item xs={8}>
        {isDesktop ? (
          <Stack direction="row" spacing={2}>
            {Array.from(Array(totalPage + 1).keys())
              .slice(1)
              .map((item) => (
                <Box
                  onClick={() => onClickPage(item)}
                  sx={{
                    background: item === page ? "#1EA4CE" : "",
                    color: item === page ? "#fff" : "#000",
                    padding: "10px 8px 8px 10px",
                    cursor: "pointer",
                  }}
                  key={item}
                >
                  {item}
                </Box>
              ))}
          </Stack>
        ) : (
          <Stack>
            <Select
              value={page.toString()}
              label="Page"
              name="Page"
              onChange={onChangePage}
            >
              {Array.from(Array(totalPage + 1).keys())
                .slice(1)
                .map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
            </Select>
          </Stack>
        )}
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }} item xs>
        <StyledStack
          onClick={onClickNextPage}
          direction="row"
          spacing={1}
          alignItems="center"
        >
          {isDesktop && <Typography>Next</Typography>}

          <Box
            width={14}
            height={14}
            component="img"
            src="/assets/icons/arrow-right.png"
            alt="next"
          />
        </StyledStack>
      </Grid>
    </Grid>
  );
}
