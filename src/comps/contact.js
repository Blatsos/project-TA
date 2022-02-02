import { Button, Container, FormControlLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import SendIcon from "@mui/icons-material/Send";
import { FormControl, FormLabel } from "@mui/material";
import { RadioGroup, Radio } from "@mui/material";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const Contact = () => {
  const classes = useStyles();

  const submitHandler = (e) => {
    console.log("Submitted");
  };
  return (
    <Container>
      <form noValidate autoComplete="off">
        <TextField fullWidth className={classes.field} required label="Όνομα"></TextField>
        <TextField
          className={classes.field}
          required
          fullWidth
          label="Επίθετο"
        ></TextField>
        <TextField
          className={classes.field}
          required
          fullWidth
          label="Κινητό"
        ></TextField>
        <TextField
          className={classes.field}
          required
          fullWidth
          label="Email"
        ></TextField>

        <TextField
          className={classes.field}
          required
          fullWidth
          multiline
          rows={4}
          label="Μήνυμα"
        ></TextField>
        <FormControl className={classes.field} >
          <FormLabel>Λόγως επικοινωνίας</FormLabel>
          <RadioGroup>
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
        </FormControl>
        <Button
          onClick={submitHandler}
          endIcon={<SendIcon />}
          variant="outlined"
        >
          Αποστολή
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
