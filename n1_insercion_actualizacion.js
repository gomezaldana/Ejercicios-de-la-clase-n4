const Sequelize = require('sequelize');

const sequelize = new Sequelize('animales', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }) 
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

///////////////

class User extends Sequelize.Model {}
User.init({
  especie: Sequelize.STRING, 
  color:Sequelize.STRING
}, { sequelize, modelName: 'animal' });


//creo un gato de color negro
sequelize.sync()
  .then(() => User.create({
    especie: 'Gato',
    color: 'Negro'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  })

/// cambio a especie cabra a todo animal que sea negro

.then(()=>User.update({ especie: "Cabra" }, {
    where: {
        color: 'Negro'
    }
  }).then(() => {
    console.log("Done");
  }));
