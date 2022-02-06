import {
  Avatar,
  Button,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import SendIcon from "@mui/icons-material/Send";
import { FormControl, FormLabel } from "@mui/material";
import { RadioGroup, Radio } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import avatarCss from "../styles/contact.module.css";

const useStyles = makeStyles({
  field: {
    marginTop: 25,
    marginBottom: 200,
    paddingTop: 20,
    display: "block",
  },
});

const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [reason, setReason] = useState("photo");

  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_agis71t",
        "template_i14bezi",
        e.target,
        "user_7jYn62gmoeCADbJMY06K8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <Container>
      <Typography className={classes.field} variant="h4">
        Πως μπορώ να βοηθήσω;
      </Typography>

      <form
        className={classes.field}
        noValidate
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <TextField
          name="name"
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          label="Όνομα"
        ></TextField>
        <TextField
          name="surname"
          onChange={(e) => setSurname(e.target.value)}
          required
          fullWidth
          label="Επίθετο"
        ></TextField>
        <TextField
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          required
          fullWidth
          label="Κινητό"
        ></TextField>
        <TextField
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          label="Email"
        ></TextField>

        <TextField
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          required
          fullWidth
          multiline
          rows={4}
          label="Μήνυμα"
        ></TextField>
        <FormControl color='secondary'>
          <FormLabel>Ενδιαφέρομαι για:</FormLabel>
          <RadioGroup
            name="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          >
            <FormControlLabel
              value="photo"
              control={<Radio />}
              label="Φωτογράφιση"
            />
            <FormControlLabel
              value="graphic"
              control={<Radio />}
              label="Γραφιστική"
            />
            <FormControlLabel
              value="question"
              control={<Radio />}
              label="Ερώτηση"
            />
          </RadioGroup>
          <Button
            className={avatarCss.some}
            type="submit"
            endIcon={
              <img
                variant="square"
                className={avatarCss.rotate}
                src="/TA LOGO GREY.png"
              />
            }
            variant="outlined"
          >
            Αποστολή
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default Contact;
