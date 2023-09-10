import {
  Box,
  Modal,
  Typography,
  Stack,
  IconButton,
  Container,
  Grid,
} from "@mui/material";
import React, { useState } from "react";

import ProfileAvatar from "../../components/shared/avatar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Step1 from "./forms/step1";
import Step2 from "./forms/step2";
import Step3 from "./forms/step3";
import CustomButton from "../../components/shared/customButton";
import { Link } from "react-router-dom";

export default function RegisterModal() {
  //states
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [userData, setUserData] = useState<any | null>(null);
  const [resetForms, setResetForms] = useState<boolean>(false);
  const [step1Error, setStep1Error] = useState<null | {
    fieldName: "email";
    error: string;
  }>(null);

  const submit = async () => {
    setLoadingSubmit(true);
    const form = new FormData();
    Object.keys(userData).forEach((key) => {
      form.append(key, userData[key]);
    });
    try {
      // const response = await register(form);
      // to do
      // register request
      // success modal
      // redirect to login
    } catch (error: any) {
      console.log("error", error.response.data);
      // to do
      // error modal
    } finally {
      setLoadingSubmit(false);
    }
  };

  const handleStep1 = (values: any) => {
    setUserData({ ...userData, ...values });
    setStep(2);
  };

  const handleStep2 = (values: any) => {
    setUserData({ ...userData, ...values });
    setStep(3);
  };

  const handleStep3 = (values: any) => {
    setUserData({ ...userData, ...values });
    setStep(4);
  };

  const handleImage = (image: any) => {
    setUserData({ ...userData, image });
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
            Registro
          </Typography>
          <Box
            sx={{
              marginTop:2,
              maxWidth: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: "1rem",
            }}
          >
            {step > 1 && (
              <IconButton onClick={() => setStep(step - 1)}>
                <ArrowBackIcon />
              </IconButton>
            )}
          

            {step === 4 && (
              <Stack
                direction="column"
                alignItems={"center"}
                justifyContent="center"
              >
                <Typography
                  variant="body1"
                  align="center"
                  sx={{ color: "#c2c2c2", marginBottom: 2 }}
                >
                  {`Agrega tu foto de perfil (Opcional)`}
                </Typography>
                <ProfileAvatar avatar={null} onChange={handleImage} />
              </Stack>
            )}
            {step === 1 && (
              <Step1
                onSubmit={handleStep1}
                resetForm={resetForms}
                initialValues={userData}
                error={step1Error}
              />
            )}
            {step === 1 && (
              <Box sx={{ marginTop: 2 }}>
              <Typography align="center" variant={"body1"} component={"p"}>
                ¿Ya tienes una cuenta?{" "}
                <Link to="/auth/login">inicia sesión</Link>
              </Typography>
            </Box>
            )}

            {step === 2 && (
              <Step2
                onSubmit={handleStep2}
                resetForm={resetForms}
                initialValues={userData}
              />
            )}

            {step === 3 && (
              <Step3
                onSubmit={handleStep3}
                resetForm={resetForms}
                initialValues={userData}
              />
            )}

            {step === 4 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  marginTop: "1rem",
                }}
              >
                <CustomButton
                  type="button"
                  color="primary"
                  variant="contained"
                  title="Registrarme"
                  cb={() => submit()}
                  disabled={loadingSubmit}
                  isLoading={loadingSubmit}
                />
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
