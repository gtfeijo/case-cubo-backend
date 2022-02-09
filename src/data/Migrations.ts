import { BaseDataBase } from "./BaseDataBase";

class Migrations extends BaseDataBase {
  async createTable() {
    await this.getConnection().raw(`
            create table usuario_cubo(
                id varchar(255) primary key,
                firstName varchar(255) not null,
                lastName varchar(255) not null,
                participation float
            );
        `);
    console.log("Tabela criada com sucesso");
  }
}

const createTable = new Migrations();
createTable.createTable();
