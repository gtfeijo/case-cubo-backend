import { UserDataBase } from "../data/UserDataBase";
import { MissingFieldsToComplete } from "../error/MissingFieldsToComplete";
import { UserInputDTO, UserInsertDTO } from "../model/User";
import IdGenerator from "../services/IdGenerator";

export class UserBusiness {
  async user(input: UserInputDTO) {
    if (input.participation === 0) {
      throw new Error("Participation can not be 0");
    }
    if (!input.firstName || !input.lastName || !input.participation) {
      throw new MissingFieldsToComplete();
    }

    const user: UserInsertDTO = {
      id: IdGenerator.generate(),
      ...input,
    };

    const userDataBase = new UserDataBase();
    const result = await userDataBase.insertUser(user);

    return result;
  }

  async allUser() {
    const userDataBase = new UserDataBase();
    const result = await userDataBase.getAllUsers();

    return result;
  }
}
