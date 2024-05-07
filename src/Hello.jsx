let Hello = () => {
  let myName = "Sreelatha.p";
  let myNumber = 45;

  let fullName = () => {
    return "Sreelatha yadav";
  };

  return (
    <p>
      this is the future speaking. serial no : {myNumber} , hi i am {myName} and
      my full name is {fullName()}.
    </p>
  );
};

export default Hello;
