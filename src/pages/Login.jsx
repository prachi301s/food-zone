import {
  Box,
  Button,
  Checkbox,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const user = JSON.parse(localStorage.getItem("foodAppUser"))||[];
    user.push({ userEmail: data.email, password: data.password });
    localStorage.setItem("foodAppUser", JSON.stringify(user));
    reset();
  };
  return (
    <>
      <Grid alignItems={"center"}>
        <Paper
          component="div"
          elevation={10}
          sx={{ margin: "75px auto", width: "20rem", height: "25rem", p: 5 }}
        >
          <Box p={2} mb={5}>
            <Typography variant="h4" textAlign="center">
              Login
            </Typography>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} alignItems={"center"}>
              <TextField
                required
                id="filled-basic"
                label="Email"
                variant="standard"
                fullWidth
                {...register("email")}
              />
              <TextField
                required
                id="filled-basic"
                label="Password"
                variant="standard"
                fullWidth
                {...register("password")}
              />
            </Stack>
            <Button
              color="primary"
              type="submit"
              fullWidth
              sx={{
                width: "50%",
                ml: "80px",
                marginTop: "50px",
                borderRadius: "40px",
              }}
              variant="contained"
            >
              Log In
            </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
