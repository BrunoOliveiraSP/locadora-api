import con from "./connection.js";


export async function buscarTipoPorId(id) {
  let comando = 'select * from tb_tipo_veiculo where id_tipo_veiculo = ?';
  let [dados] = await con.query(comando, [id]);
  return dados;
}