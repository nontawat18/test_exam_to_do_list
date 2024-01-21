import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import examImage from "../assets/img/exam-1.png";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Item = styled(Grid)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  justifyItems: "center",
}));

const theme = createTheme({
  palette: {
    ochre: {
      main: "#305f9b",
      light: "#305f9b",
      dark: "#305f9b",
      contrastText: "#FFFFFF",
    },
  },
});

export default function RowAndColumnSpacing() {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 1000, behavior: 'smooth' });
      };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} md={6} lg={6}>
          <Container maxWidth="sm">
            <Item>
              <div className="title-main">
                <h1 className="main-haeder">Exam</h1>
                <br />
                <span className="sub-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur odio distinctio voluptatum autem assumenda, unde
                  minus ipsam nisi ad in excepturi magni incidunt impedit maxime
                  eos. Sed repellendus fuga commodi?
                </span>
              </div>
              <div className="btn-maim ">
                <ThemeProvider theme={theme}>
                  <Button variant="contained" color="ochre" onClick={handleScrollToTop}>
                    Go to Exam
                  </Button>
                </ThemeProvider>
              </div>
            </Item>
          </Container>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Item>
            <div>
              <img src={`${examImage}`} className="main-img" />
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
