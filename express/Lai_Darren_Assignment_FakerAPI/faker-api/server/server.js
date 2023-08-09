const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');

// app.use( express.json() );
// app.use( express.urlencoded({ extended: true }) );
// above only needed when doing POST requests

const createUser = () => {
  const newFakePerson = {
    password : faker.internet.password(),
    email : faker.internet.email(),
    phoneNumber : faker.phone.number(),
    lastName : faker.person.lastName(),
    firstName : faker.person.firstName(),
    _id : faker.database.mongodbObjectId()
  }
  return newFakePerson;
}

const newFakeUser = createUser();
console.log(newFakeUser);

const createCompany = () => {
  const newFakeBusiness = {
    _id : faker.database.mongodbObjectId(),
    name : faker.company.name(),
    address : {
      street : faker.location.streetAddress(),
      city : faker.location.city(),
      state : faker.location.state(),
      zipCode : faker.location.zipCode(),
      country : faker.location.country()
    }
  }
  return newFakeBusiness;
}

const newFakeCompany = createCompany();
console.log(newFakeCompany);


app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.get("/api/users/new", (req, res) => {
  let newUser = createUser();
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  let newCompany = createCompany();
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  newUser = createUser();
  newCompany = createCompany();
  res.json({newUser, newCompany});
}

)

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
