import * as entityActions from "./entities.action";

const initialState = {
  entities : [],
  error :'',
};

export function entityReducer(state = initialState, action:entityActions.EntityAction) {
  switch (action.type) {

    case entityActions.entityActionTypes.LOAD_ENTITIES: {
      return { ...state };
    }

    case entityActions.entityActionTypes.LOAD_ENTITIES_SUCCESS: {
      return { ...state , entities:action.payload };
    }
    
    case entityActions.entityActionTypes.LOAD_ENTITIES_FAIL: {
      return { ...state , entities:[],error:action.payload };
    }

    case entityActions.entityActionTypes.CREATE_ENTITY_SUCESS: {
      return { ...state , entities:action.payload };
    }
    
    case entityActions.entityActionTypes.CREATE_ENTITY_FAIL: {
      return { ...state , entities:[],error:action.payload };
    }

    default: {
      return state;
    }
  }
}
