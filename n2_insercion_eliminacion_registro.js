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
    especie: 'Gato',
    color: 'Negro'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  })

//eliminar cabra
.then(()=>User.destroy({
    where: {
      especie: "Gato"
    }
  }).then(() => {
    console.log("Elimine Registro");
  }));