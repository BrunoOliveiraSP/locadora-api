create database locadoraDB;

use locadoraDB;

create table tb_cliente (
	id_cliente			int primary key auto_increment,
    nm_cliente			varchar(200) not null,
    ds_cpf				varchar(15) not null,
    ds_telefone			varchar(200) not null,
    ds_email			varchar(200) not null,
    ds_cnh				varchar(50) not null
);


create table tb_tipo_veiculo (
	id_tipo_veiculo			int primary key auto_increment,
    ds_tipo					varchar(200) not null
);


create table tb_veiculo (
	id_veiculo				int primary key auto_increment,
    id_tipo_veiculo			int not null,
    ds_modelo				varchar(200) not null,
    ds_marca				varchar(200) not null,
    nr_ano					int not null,
    ds_placa				varchar(50) not null,
    foreign key (id_tipo_veiculo) references tb_tipo_veiculo (id_tipo_veiculo)
);


select * from tb_cliente;
select * from tb_tipo_veiculo where id_tipo_veiculo = 3;
select * from tb_veiculo;


select ve.id_veiculo			as id,
       tv.id_tipo_veiculo		as idTipoVeiculo,
       tv.ds_tipo				as tipo,
       ve.ds_modelo				as modelo,
       ve.ds_marca				as marca,
       ve.nr_ano				as ano,
       ve.ds_placa				as placa
  from tb_veiculo				as ve
  inner join tb_tipo_veiculo	as tv  ON tv.id_tipo_veiculo = ve.id_tipo_veiculo
  order 
     by id_veiculo;



insert into tb_cliente (nm_cliente, ds_cpf, ds_telefone, ds_email, ds_cnh)
				values ('Bruno', '123.123.123-00', '(11) 99999-8888', 'bruno@gmail.com', '123123123123');

insert into tb_veiculo (id_tipo_veiculo, ds_modelo, ds_marca, nr_ano, ds_placa) 
				values (1, 'Prius', 'Toyota', 2020, 'ABC-124');
                
insert into tb_veiculo (id_tipo_veiculo, ds_modelo, ds_marca, nr_ano, ds_placa) 
				values (2, 'CG 160 Titan', 'Honda', 2017, 'ABC-126');


delete from tb_cliente where id_cliente = 2;


