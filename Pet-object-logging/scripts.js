handleSubmit = (e) => {
  e.preventDefault();
  console.log({
    name: e.target.inp1.value,
    age: e.target.inp2.value,
    weight: e.target.inp3.value,
    type: e.target.inp4.value,
    likes: e.target.inp5.value,
  });
};
