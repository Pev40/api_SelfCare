
import {post} from "../../../servicies/api/api.service"
export const signIn = async ({ data }) => {
  try {
    const res = await post({
      url: "usuario/login",
      data,
    });

    if (res.status === "ERROR") throw res;
    return res;
  } catch (error) {
    throw error;
  }
};
