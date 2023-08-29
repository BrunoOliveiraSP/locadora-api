import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import veiculoController from './controller/veiculoController.js'

let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(veiculoController);


servidor.listen(process.env.PORT,
                () => console.log('API SUBIUUUUU!'));
                
