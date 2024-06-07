'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vendas.belongsTo(models.Cliente);
    }
  }
  Vendas.init({
    clienteId: DataTypes.INTEGER,
    valor: DataTypes.FLOAT,
    dataVenda: DataTypes.DATE,
    dataPagamento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Vendas',
  });
  return Vendas;
};