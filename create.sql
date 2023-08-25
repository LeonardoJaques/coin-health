drop schema if exists health_coin cascade;
create schema health_coin;

create table health_coin.nubank (
  nuc_id text primary key,
  dollar_price text,
  br_price text,
  created_at text
);