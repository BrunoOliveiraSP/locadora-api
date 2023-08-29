import con from "./connection.js"


export async function inserir(veiculo) {
  let comando = `
      insert into tb_veiculo (id_tipo_veiculo, ds_modelo, ds_marca, nr_ano, ds_placa) 
                      values (?, ?, ?, ?, ?)
  `

  let [resp] = await con.query(comando,
    [
      veiculo.idTipoVeiculo,
      veiculo.modelo,
      veiculo.marca,
      veiculo.ano,
      veiculo.placa
    ])
  
  veiculo.id = resp.insertId;
  return veiculo;
}


export async function consultar(busca) {
  let comando = `
      select ve.id_veiculo			    as id,
              tv.id_tipo_veiculo		as idTipoVeiculo,
              tv.ds_tipo				    as tipo,
              ve.ds_modelo				  as modelo,
              ve.ds_marca				    as marca,
              ve.nr_ano				      as ano,
              ve.ds_placa				    as placa
        from tb_veiculo				      as ve
        inner join tb_tipo_veiculo	as tv  ON tv.id_tipo_veiculo = ve.id_tipo_veiculo
        where ds_modelo like ?
           or ds_marca  like ?
           or ds_placa  like ?
        order 
          by id_veiculo
  `

  let [dados] = await con.query(comando,
    [
      '%' + busca + '%',
      '%' + busca + '%',
      '%' + busca + '%'
    ])
  return dados;
}


export async function alterar(id, veiculo) {
  let comando = `
      update tb_veiculo 
         set id_tipo_veiculo = ?,
             ds_modelo       = ?,
             ds_marca        = ?,
             nr_ano          = ?,
             ds_placa        = ?
       where id_veiculo      = ?
  `

  let [resp] = await con.query(comando, 
    [
      veiculo.idTipoVeiculo,
      veiculo.modelo,
      veiculo.marca,
      veiculo.ano,
      veiculo.placa,
      id
    ])
  
  return resp.affectedRows;
}



export async function deletar(id) {
  let comando = `
      delete from tb_veiculo 
            where id_veiculo = ?
  `

  let [resp] = await con.query(comando, [id]);
  return resp.affectedRows;
}


