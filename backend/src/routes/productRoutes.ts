import { Router } from 'express';
import { body, param, query } from 'express-validator';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts
} from '../controllers/productController';
import { protect } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', protect, getProducts);
router.get('/search', protect, [
  query('q').notEmpty().withMessage('Search term is required')
], searchProducts);
router.get('/:id', protect, [
  param('id').isInt().withMessage('Product ID must be an integer')
], getProductById);
router.post('/', protect, [
  body('name').notEmpty().withMessage('Product name is required'),
  body('price').isNumeric().withMessage('Price must be a number')
], createProduct);
router.put('/:id', protect, [
  param('id').isInt().withMessage('Product ID must be an integer'),
  body('name').optional().notEmpty().withMessage('Product name cannot be empty'),
  body('price').optional().isNumeric().withMessage('Price must be a number')
], updateProduct);
router.delete('/:id', protect, [
  param('id').isInt().withMessage('Product ID must be an integer')
], deleteProduct);

export default router;
