drop schema if exists health_coin cascade;
create schema health_coin;

create table health_coin.nubank (
  nuc_id uuid primary key,
  dolar_price number,
  brl_price number,
  created_at number
);