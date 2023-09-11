import React from "react";
import { useGetPostsQuery } from "../../services/todoApi";
import { Box, Container, Grid, Typography } from "@mui/material";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const { data, isLoading } = useGetPostsQuery({ page: 0 });
  return isLoading ? (
    <Typography>Cargando datos ...</Typography>
  ) : (
    <Container>
      <Grid container spacing={4} sx={{ marginTop: 2, paddingBottom: 4 }}>
        {data.posts.map((post: Post) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
              <Box
                sx={{
                  background: "#fff",
                  padding: 2,
                  borderRadius: 2,
                  marginTop: 2,
                }}
              >
                <Typography fontWeight={"bold"}>titulo</Typography>
                <Typography>{post.title}</Typography>
                <Typography sx={{marginTop:1}} fontWeight={"bold"}>Descripción</Typography>
                <Typography>{post.body}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
