import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel } from "@mui/material";
import { RadioGroup, Radio } from "@mui/material";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import avatarCss from "../styles/contact.module.css";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const radioChoices = [
  {
    value: "Φωτογραφία",
    label: "Φωτογραφία",
  },
  {
    value: "Βίντεο",
    label: "Βίντεο",
  },
  {
    value: "Γραφιστική",
    label: "Γραφιστική",
  },
  {
    value: "Άλλο",
    label: "Άλλο",
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [reason, setReason] = useState("photo");
  const [openDialog, setOpenDialog] = useState(false);

  const openSuccess = (e) => {
    e.preventDefault();

    setOpenDialog(true);
  };

  const closeSuccess = () => {
    setOpenDialog();
  };

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
      <Typography variant="h4">Πως μπορώ να βοηθήσω;</Typography>

      <form
        className={avatarCss.form}
        noValidate
        autoComplete="off"
        onSubmit={openSuccess}
      >
        <TextField
          className={avatarCss.form_item}
          name="name"
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          label="Όνομα"
        ></TextField>
        <TextField
          className={avatarCss.form_item}
          name="surname"
          onChange={(e) => setSurname(e.target.value)}
          required
          fullWidth
          label="Επίθετο"
        ></TextField>
        <TextField
          className={avatarCss.form_item}
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          required
          fullWidth
          label="Κινητό"
        ></TextField>
        <TextField
          className={avatarCss.form_item}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          label="Email"
        ></TextField>

        <TextField
          className={avatarCss.form_item}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          required
          fullWidth
          multiline
          rows={4}
          label="Μήνυμα"
        ></TextField>
        <FormControl color="secondary">
          <FormLabel>Ενδιαφέρομαι για:</FormLabel>
          <RadioGroup
            name="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          >
            {radioChoices.map((item) => (
              <FormControlLabel
                className={avatarCss.options}
                value={item.value}
                control={<Radio />}
                label={item.value}
              />
            ))}
          </RadioGroup>
          <Button
            className={avatarCss.form_button}
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

      <Dialog
        open={openDialog}
        onClose={closeSuccess}
        TransitionComponent={Transition}
      >
        <DialogTitle color="green">Επιτυχία αποστολής!</DialogTitle>
        <DialogContent>
          Ευχαριστώ για το μήνυμα σας. Θα προσπαθήσω να απαντήσω στο αίτημα σας
          το συντομότερο δυνατόν!
        </DialogContent>
        <DialogActions>
          <button onClick={closeSuccess}>ΟΚ</button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Contact;
