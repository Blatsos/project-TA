import classes from "../styles/about.module.css";
import Skills from "./skills";
import { saveAs } from "file-saver";
import { Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import {makeStyles} from '@mui/styles'
import { grey } from "@mui/material/colors";

const styles = makeStyles({
  button: {
    color: grey,
  },
});

const About = () => {
  const stylesObj = styles();

  const saveFile = () => {
    saveAs("ΤΑΣΟΣ ΑΦΕΝΔΡΑΣ ΒΙΟΓΡΑΦΙΚΟ.pdf", "example.pdf");
  };
  return (
    <div className={classes.container}>
      <img alt="Tasos profile" className={classes.image} src="/tasos.jpg"></img>
      <p className={classes.text}>
        Γειά σου! Ονομάζομαι Τάσος Αφένδρας και είμαι 23 χρονών. Είμαι γραφίστας
        και φωτογράφος με έδρα την Αθήνα. Δραστηριοποιούμαι στο χώρο αυτό για
        πάνω από 5 χρόνια και έχω αρκετή εμπειρία παρόλο το νεαρό της ηλικίας
        μου. Δημιουργώ οτιδήποτε μου ανατεθεί με επαγγελματισμό και με κύριο
        μέλημα μου την ικανοποίηση του πελάτη μου. Στόχος μου είναι το κάθε μου
        project να είναι μοναδικό και γεμάτο φρέσκες ιδέες! Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      <Button
        startIcon={<SaveIcon />}
        className={stylesObj.button}
        onClick={saveFile}
        variant="outlined"
      >
        CV
      </Button>
      {/* <Skills /> */}
    </div>
  );
};

export default About;
