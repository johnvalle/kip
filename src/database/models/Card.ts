import * as SQLite from "expo-sqlite";
import { BaseModel, types } from "expo-sqlite-orm";
import uuid from "react-native-uuid";

export default class CardModel extends BaseModel {
  constructor(obj) {
    super(obj);
  }

  static get database() {
    return async () => SQLite.openDatabase("database.db");
  }

  static get tableName() {
    return "cards";
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      uuid: { type: types.TEXT, unique: true, default: () => uuid.v4() },
      name: { type: types.TEXT, not_null: true },
      type: { type: types.TEXT, not_null: true },
      number: { type: types.NUMERIC, not_null: true },
      date_created: { type: types.INTEGER, default: () => Date.now() },
    };
  }
}
