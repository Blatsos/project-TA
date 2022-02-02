import { Button, Container, FormControlLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import SendIcon from "@mui/icons-material/Send";
import { FormControl, FormLabel } from "@mui/material";
import { RadioGroup, Radio } from "@mui/material";
import { useState } from "react";

const useStyles = makeStyles({
  field: {
    marginTop: 25,
    marginBottom: 20,
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
    console.log(name, surname, email, phone, reason, message);
  };
  return (
    <Container>
      <form noValidate autoComplete="off" onSubmit={submitHandler}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          className={classes.field}
          fullWidth
          required
          label="Όνομα"
        ></TextField>
        <TextField
          onChange={(e) => setSurname(e.target.value)}
          className={classes.field}
          required
          fullWidth
          label="Επίθετο"
        ></TextField>
        <TextField
          onChange={(e) => setPhone(e.target.value)}
          className={classes.field}
          required
          fullWidth
          label="Κινητό"
        ></TextField>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          className={classes.field}
          required
          fullWidth
          label="Email"
        ></TextField>

        <TextField
          onChange={(e) => setMessage(e.target.value)}
          required
          fullWidth
          multiline
          rows={4}
          label="Μήνυμα"
        ></TextField>
        <FormControl>
          <FormLabel>Λόγως επικοινωνίας</FormLabel>
          <RadioGroup
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
          <Button type="submit" endIcon={<SendIcon />} variant="outlined">
            Αποστολή
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default Contact;
