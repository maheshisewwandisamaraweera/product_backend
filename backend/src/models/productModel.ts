import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database'; // Default import for sequelize instance

// Define the Product interface to enforce types
interface IProduct {
  id?: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Optional fields are used for 'id', 'createdAt', and 'updatedAt' during creation
interface IProductCreation extends Optional<IProduct, 'id' | 'createdAt' | 'updatedAt'> {}

// Product Model Definition
class Product extends Model<IProduct, IProductCreation> {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public stock!: number;
  public category!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

// Initialize the Product model with Sequelize
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Sequelize instance from your database config
    modelName: 'Product',
    tableName: 'products',
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

export default Product;
