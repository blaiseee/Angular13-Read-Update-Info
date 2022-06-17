var faker = require('faker');

var database =
{
    contacts: []
};

for (var i = 1; i <= 30; i++)
{
    database.contacts.push
    ({
        id: i,
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        middleName: faker.name.middleName().toUpperCase(),
        lastName: faker.name.lastName(),

        // Uses old faker version, birthdate() is not available.
        // Created a workaround to display birthdate
        birthMonth: faker.date.month(),
        birthDay: faker.datatype.number({min: 1, max: 30}),
        birthYear: faker.datatype.number({min: 1950, max: 2020}),

        profile_picture: "https://source.unsplash.com/50x50/?product",
        interest: faker.lorem.sentences()
    });
}

console.log(JSON.stringify(database));