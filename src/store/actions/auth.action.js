import { FIREBASE_AUTH_SING_IN_URL, FIREBASE_AUTH_SING_UP_URL } from "../../constants/firebase";
import { authTypes } from "../types";

const { SING_IN, SING_UP } = authTypes;

export const signUp = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const res = await fetch(FIREBASE_AUTH_SING_UP_URL, {
        method: "POST",
        headres: {
          "Conten-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!res.ok) {
        throw new Error("something went wrong!");
      }

      const data = await res.json();
      dispatch({
        type: SING_UP,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const signIn = ({ email, password }) => {
  console.log("signIn");
};
