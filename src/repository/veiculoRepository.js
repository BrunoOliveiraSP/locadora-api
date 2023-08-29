import con from "./connection.js"


export function inserir(veiculo) {
  let comando = `
      insert into tb_veiculo (id_tipo_veiculo, ds_modelo, ds_marca, nr_ano, ds_placa) 
                      values (?, ?, ?, ?, ?)
  `

}


export function consultar(busca) {
  let comando = `
      select ve.id_veiculo			    as id,
              tv.id_tipo_veiculo		as idTipoVeiculo,
              tv.ds_tipo				    as tipo,
              ve.ds_modelo				  as modelo,
              ve.ds_marca				    as marca,
              ve.nr_ano				      as ano,
              ve.ds_placa				    as placa
        from tb_veiculo				    as ve
        inner join tb_tipo_veiculo	as tv  ON tv.id_tipo_veiculo = ve.id_tipo_veiculo
        order 
          by id_veiculo
  `
}


export default function alterar(id, veiculo) {
  let comando = `
      update tb_veiculo 
         set id_tipo_veiculo = ?,
             ds_modelo       = ?,
             ds_marca        = ?,
             nr_ano          = ?,
             ds_placa        = ?
       where id_veiculo      = ?
  `
}



export default function deletar(id) {
  let comando = `
      delete from tb_veiculo 
            where id_veiculo = ?
  `


}
