import React, { useState, useEffect } from "react";
import seedrandom from "seedrandom";
import questionsData from "./questions.json";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const rng = seedrandom();
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
const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const allQuestions = [...questionsData].sort(() => rng() - 0.5);
    const selectedQuestions = allQuestions.slice(0, 20);
    setQuestions(selectedQuestions);
  }, []);

  const correct = [];
  const handleAnswer = (selectedOption, correctAnswer, optionIndex) => {
    if (selectedOption === correctAnswer) {
      correct.push(correctAnswer);
    }
  };

  const handleSubmit = () => {
    console.log(correct);
    setScore(score + correct.length);
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };
  const Item = styled(Grid)(({ theme }) => ({
    //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
    justifyItems: "center",
  }));

  const displayQuestion = () => {
    if (score > 0) {
      return (
        <div>
          <h2 className="completed">Quiz completed!</h2>
          <p>
            Your score: {score} out of {questions.length}
          </p>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="exam">
        <h1>Random Exam 20 Qsuestion!</h1>
      </div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Container maxWidth="sm">
            <Item>
              {questions.map((questionData, index) => (
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    {index + 1}. {questionData.question}
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    {questionData.options.map((option, optionIndex) => (
                      <FormControlLabel
                        value={option}
                        control={<Radio />}
                        label={option}
                        onClick={() =>
                          handleAnswer(
                            option,
                            questionData.correctAnswer,
                            optionIndex
                          )
                        }
                      />
                    ))}
                    {/* <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                  </RadioGroup>
                </FormControl>
              ))}
            </Item>
          </Container>
        </Grid>
        <Grid item xs={6}>
        <div>{displayQuestion()}</div>;

        </Grid>
      </Grid>
      <div>
        <div className="btn-maim ">
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="ochre"
              onClick={() => handleSubmit()}
            >
              submit
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
