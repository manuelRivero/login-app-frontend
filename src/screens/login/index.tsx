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

export default function Login() {
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        direction="row"
        justifyContent="center"
      >
        <Grid item>
          <Typography variant={"h1"} component={"h1"} align="center">
            Inicia sesión
          </Typography>
          <Box sx={{ background: "#fff", padding: 2, borderRadius: 2, marginTop:2 }}>
            <form>
              <Stack direction="column" sx={{ marginBottom: 2 }}>
                <TextField id="email" label="Correo" variant="outlined" />
              </Stack>
              <Stack direction="column" sx={{ marginBottom: 2 }}>
                <TextField id="email" label="Contraseña" variant="outlined" />
              </Stack>
              <Box sx={{ marginBottom: 2 }}>
                <Typography variant={"body1"} component={"small"}>
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
