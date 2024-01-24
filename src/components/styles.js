// style sheet for the login page
const styles = {
  containerWrapper: {
    background: "#154f61",
    backgroundSize: "100% 100%",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1300,
  },
  landingContainer: {
    background: "#ffff",
    width: "300px", //modify
    maxWidth: "100%",
    textAlign: "center",
    margin: "0px",
    paddingTop: "65px",
    paddingLeft: "75px",
    paddingRight: "75px",
    paddingBottom: "65px",
    borderRadius: "2px",
  },
  landingInnerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "35px",
  },
  formContainer: {
    width: "100%",
    marginTop: "8px",
  },
  errorText: {
    color: "#cc0033",
    display: "inline-block",
    fontSize: "14px",
    lineHeight: "15px",
    margin: "5px 0 0",
  },
};
export default styles;
