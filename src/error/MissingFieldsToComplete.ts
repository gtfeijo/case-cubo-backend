import { BaseError } from "./BaseError";

export class MissingFieldsToComplete extends BaseError {
  constructor() {
    super("Missing fields to complete");
  }
}
