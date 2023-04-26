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

const Model = Sequelize.Model;
class User extends Model {}
User.init({
    especie: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'animal'
});

sequelize.sync()
  .then(() => User.create({
    especie: 'Perro',
    color: 'Marron'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  })
  .then(() => User.create({
    especie: 'Gato',
    color: 'Marron'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  })
  .then(() => User.create({
    especie: 'Pajaro',
    color: 'Verde'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  })
  .then(() => User.create({
    especie: 'Pajaro',
    color: 'Rojo'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  })

////////actualizacion todos los pajaros ahora son rosas

.then(()=> User.update({ color: "Rosa" }, {
    where: {
        especie: 'Pajaro'
    }
  }).then(() => {
    console.log("Done");
  }));