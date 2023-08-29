import con from "./connection.js";


export function inserir(cliente) {
  let comando = `
      insert into tb_cliente (nm_cliente, ds_cpf, ds_telefone, ds_email, ds_cnh)
                      values (?, ?, ?, ?, ?)
      `

}

export function consultar(nome) {
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


}



export function alterar(id, cliente) {
  let comando = `
      update tb_cliente
         set nm_cliente   = ?,
             ds_cpf       = ?,
             ds_telefone  = ?,
             ds_email     = ?,
             ds_cnh       = ?
       where id_cliente   = ?
  `


}

export function deletar(id) {
  let comando = `
      delete from tb_cliente
            where id_cliente = ?
  `

  
}