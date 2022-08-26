const validation = (data) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const err = {};

  if (!data.massageUserName.trim()) {
    err.massageUserName = "username required";
  } else if (!regex.test(data.massageUserName)) {
    err.massageUserName = "invalid usename";
  } else {
    delete err.massageUserName;
  }

  if (!data.massagePassword) {
    err.massagePassword = "password required";
  } else if (data.massagePassword.length < 6) {
    err.massagePassword = "password should be 6 characters or more";
  } else {
    delete err.massagePassword;
  }

  if (!data.isAccepted) {
    err.isAccepted = "plaese check this item";
  } else {
    delete err.isAccepted;
  }

  return err;
};

export default validation;
