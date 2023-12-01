
import { NavigateAction, NavigationActions, Screens } from "../types/store"
import { getPostData } from "../utils/firebase";


export const navigate = (screen: Screens): NavigateAction => {
    return {
        action: NavigationActions.NAVIGATE,
        payload: screen
    }
}

export const fetchFirebaseData = () => {
    return async (dispatch: any) => {
      try {
        const postData = await getPostData(); // Llamada a la función de Firebase para obtener datos
        dispatch({ type: 'FETCH_FIREBASE_DATA_SUCCESS', payload: postData });
      } catch (error) {
        dispatch({ type: 'FETCH_FIREBASE_DATA_FAILURE', payload: error });
      }
    };
  };


