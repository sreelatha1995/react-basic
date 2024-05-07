function Random() {
  let randomNumber = Math.random() * 10;

  return (
    <h1 style={{ "background-color": "brown" }}>
      random number is : {Math.round(randomNumber)}
    </h1>
  );
}

export default Random;
