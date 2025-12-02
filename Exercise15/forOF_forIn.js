const people = [
  { name: "zaakir", age: 22, city: "Mogadishu" },
  { name: "hassan", age: 23, city: "garoowe" },
  { name: "mohamed", age: 33, city: "hargeisa" }
];


for (let person of people) {
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("City:", person.city);
  console.log("-------");
}
