import PoneyCard from "../PoneyCard";
import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

class Core extends React.Component {
  render() {
    return (
      <Container>
        <Paper>
          <h1> Ecurie</h1>
          <PoneyCard />
          <PoneyCard />
          <PoneyCard />
          <PoneyCard />
          <PoneyCard />
          <PoneyCard />
          <PoneyCard />
        </Paper>
      </Container>
    );
  }
}

const useStyles = makeStyles(theme => ({
  PoneyCard: {
    display: "flex"
  },
  h1: {
    color: "#ff4411",
    fontSize: "48px",
    fontFamily: "Signika",
    paddingBottom: "10px"
  }
}));

export default Core;
//https://www.pixelstalk.net/wp-content/uploads/2016/04/MLP-wallpapers-HD-cartoon-fantasy-horses-horse-unicorn.png
