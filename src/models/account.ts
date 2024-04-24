import { IAccount } from "@/types/models";
import { model, Schema } from "mongoose";

const accountSchema = new Schema<IAccount>(
  {
    uid: String,
    name: String,
    pin: String,
  },
  { timestamps: true }
);

accountSchema.set("toObject", { getters: true, virtuals: true });
accountSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Account = model<IAccount>("Account", accountSchema);

export default Account;
