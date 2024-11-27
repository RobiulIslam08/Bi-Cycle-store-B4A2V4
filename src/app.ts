import { Application, Request, Response } from 'express';
import cors from 'cors';

import express from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());
app.use('/api', ProductRoutes)
app.get('/', (req: Request, res: Response) => {
  res.send('my bi cicle project running');
});

export default app;
