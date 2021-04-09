import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  income: {
    borderBottom: "10px solid rgba(0, 255, 0, 0.5)",
    marginBottom: "50px",
  },
  expense: {
    borderBottom: "10px solid rgba(255, 0, 0, 0.5)",
    marginBottom: "50px",
  },
  owe: {
    borderBottom: "10px solid rgba(0, 0, 255, 0.5)",
    marginBottom: "50px",
  },
  monthlyList: {
    borderBottom: "10px solid rgba(255,136,17,0.5)",
    height: "70vh",
  },
}));
