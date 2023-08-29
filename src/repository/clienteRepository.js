import con from "./connection.js";


export async function inserir(cliente) {
  let comando = `
      insert into tb_cliente (nm_cliente, ds_cpf, ds_telefone, ds_email, ds_cnh)
                      values (?, ?, ?, ?, ?)
      `

  let [resp] = await con.query(comando,
    [
      cliente.nome,
      cliente.cpf,
      cliente.telefone,
      cliente.email,
      cliente.cnh
    ])
  
  cliente.id = resp.insertId;
  return cliente;
}

export async  function consultar(nome) {
  let comando = `
      select id_cliente       as id,
             nm_cliente       as nome,
             ds_cpf           as cpf,
             ds_telefone      as telefone,
             ds_email         as email,
             ds_cnh           as cnh
        from tb_cliente
       where nm_cliente like  ?
  `

  let [dados] = await con.query(comando, ['%' + nome + '%'])
  return dados;
}



export async function alterar(id, cliente) {
  let comando = `
      update tb_cliente
         set nm_cliente   = ?,
             ds_cpf       = ?,
             ds_telefone  = ?,
             ds_email     = ?,
             ds_cnh       = ?
       where id_cliente   = ?
  `

  let [resp] = await con.query(comando,
    [
      cliente.nome,
      cliente.cpf,
      cliente.telefone,
      cliente.email,
      cliente.cnh,
      id
    ])
  
  return resp.affectedRows;
}

export async function deletar(id) {
  let comando = `
      delete from tb_cliente
            where id_cliente = ?
  `

  let [resp] = await con.query(comando, [id]);
  return resp.affectedRows;
}
