import {
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../../components/shared/customButton";
import { Link } from "react-router-dom";
import CustomInput from "../../components/shared/customInput";
// form
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginRequest } from "../../services/authApi";

const schema = yup.object({
  email: yup.string().email("Email invalido").required("Campo requerido"),
  password: yup.string().required("Campo requerido"),

});


export default function Login() {
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const { control, handleSubmit } = useForm<LoginRequest>({
    resolver: yupResolver(schema),
  });

  const submit = (values: LoginRequest) => {
    console.log("values", values);
  };
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        direction="row"
        justifyContent="center"
      >
        <Grid item>
          <Typography variant={"h2"} component={"h2"} align="center">
            Inicia sesión
          </Typography>
          <Box sx={{ background: "#fff", padding: 2, borderRadius: 2, marginTop:2 }}>
            <form onSubmit={handleSubmit(submit)}>
            <Box sx={{ marginBottom: "1rem" }}>
        <Controller
          name={"email"}
          control={control}
          render={({ field, fieldState }) => (
            <CustomInput
              type="text"
              error={fieldState.error}
              value={field.value}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                field.onChange(e.target.value);
              }}
              label="Email"
              outline={true}
              placeholder="Escribe tu email"
            />
          )}
        />
      </Box>
      <Box sx={{ marginBottom: "1rem" }}>
        <Controller
          name={"email"}
          control={control}
          render={({ field, fieldState }) => (
            <CustomInput
              type="password"
              error={fieldState.error}
              value={field.value}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                field.onChange(e.target.value);
              }}
              label="Contrseña"
              outline={true}
              placeholder="Escribe tu contraseña"
            />
          )}
        />
      </Box>
              <Box sx={{ marginBottom: 2 }}>
                <Typography align="center" variant={"body1"} component={"p"}>
                  ¿No tienes una cuenta?{" "}
                  <Link to="/auth/register">registrate aquí</Link>
                </Typography>
              </Box>
              <Stack direction="column" sx={{ marginBottom: 2 }}>
                <CustomButton
                  type="submit"
                  color="primary"
                  variant="contained"
                  title="Ingresar"
                  cb={() => {}}
                  disabled={loadingSubmit}
                  isLoading={loadingSubmit}
                />
              </Stack>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
