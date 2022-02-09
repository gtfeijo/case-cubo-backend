import { User, UserInsertDTO } from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
  private static TABLE_NAME = "usuario_cubo";

  async insertUser(user: UserInsertDTO): Promise<string> {
    try {
      const { id, firstName, lastName, participation } = user;
      await this.getConnection()
        .insert({
          id,
          firstName,
          lastName,
          participation,
        })
        .into(UserDataBase.TABLE_NAME);
      return "Usuário criado com sucesso";
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco de dados");
      }
    }
  }

  async getAllUsers() {
    try {
      const result: User[] = await this.getConnection()
        .select("*")
        .from(UserDataBase.TABLE_NAME);

      const users = result.map((user) => {
        return User.userModel(user);
      });
      return users;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco de dados");
      }
    }
  }
}
