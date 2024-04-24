import { IFavourite } from "@/types/models";
import { model, Schema } from "mongoose";

const favouriteSchema = new Schema<IFavourite>(
  {
    uid: String,
    accountId: String,
    backdrop_path: String,
    poster_path: String,
    movieId: String,
    type: String,
    title: String,
    overview: String,
  },
  { timestamps: true }
);

favouriteSchema.set("toObject", { getters: true, virtuals: true });
favouriteSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Favourite = model<IFavourite>("Favourite", favouriteSchema);
export default Favourite;
