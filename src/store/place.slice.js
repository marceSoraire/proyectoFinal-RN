// import { createSlice } from "@reduxjs/toolkit";
// import { documentDirectory, copyAsync } from "expo-file-system";

// import Place from "../model/place";

// const initialState = {
//   places: [],
// };

// const placeSlice = createSlice({
//   name: "place",
//   initialState,
//   reducers: {
//     addPlace: (state, action) => {
//       const newPlace = new Place(Date.now(), action.payload);
//       state.places.push(newPlace);
//     },
//   },
// });

// export const { addPlace } = placeSlice.actions;

// export const savePlace = ({ title, image }) => {
//   return async (dispatch) => {
//     const fileName = image.split("/").pop();
//     const newPath = `${documentDirectory}${fileName}`;
//     try {
//       // await copyAsync({
//       //   from: image,
//       //   to: newPath,
//       // });
//     } catch (error) {
//       console.error(error);
//     }

//     dispatch(addPlace({ title, image }));
//   };
// };
// export default placeSlice.reducer;
