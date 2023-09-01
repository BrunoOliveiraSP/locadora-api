import { inserir, consultar, alterar, deletar } from '../repository/veiculoRepository.js'
import { buscarTipoPorId, listarTipos } from '../repository/tipoVeiculoRepository.js'
import { Router } from "express";

let endpoints = Router();


endpoints.post('/veiculo', async (req, resp) => {
  try {
    let veiculo = req.body;

    if (!veiculo.modelo)
      throw new Error('Modelo obrigatório');

    if (!veiculo.ano || isNaN(veiculo.ano))
      throw new Error('Ano deve ser um número')

    
    
    let r1 = await consultar(veiculo.placa);
    if (r1.length > 0)
      throw new Error('Placa já cadastrada!');

    
    let r2 = await buscarTipoPorId(veiculo.idTipoVeiculo);
    if (r2.length == 0)
      throw new Error('Tipo inválido');


    let r = await inserir(veiculo);
    resp.send(r);
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
  

})






endpoints.put('/veiculo/:id', async (req, resp) => {
  try {
    let veiculo = req.body;
    let id = req.params.id;

    if (!veiculo.modelo)
      throw new Error('Modelo obrigatório');

    if (!veiculo.ano || isNaN(veiculo.ano))
      throw new Error('Ano deve ser um número')

    
    
    // let r1 = await consultar(veiculo.placa);
    // if (r1.length > 0)
    //   throw new Error('Placa já cadastrada!');

    
    let r2 = await buscarTipoPorId(veiculo.idTipoVeiculo);
    if (r2.length == 0)
      throw new Error('Tipo inválido');


    let r = await alterar(id, veiculo);
    resp.send();
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
  

})






endpoints.delete('/veiculo/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let r = await deletar(id);
    if (r == 0)
      throw new Error('Nenhum veículo pode ser excluído.');

    resp.send();
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
});











endpoints.get('/veiculo/tipo', async (req, resp) => {
  let r = await listarTipos();
  resp.send(r);
});



endpoints.get('/veiculo', async (req, resp) => {
  let busca = req.query.busca ?? '';
  let r = await consultar(busca)
  resp.send(r);
})


export default endpoints;