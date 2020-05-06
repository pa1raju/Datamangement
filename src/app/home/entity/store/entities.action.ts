import { Action } from "@ngrx/store";

 export  enum entityActionTypes {
  LOAD_ENTITIES = '[entity] load entities',
  LOAD_ENTITIES_SUCCESS = '[entity] load entities success',
  LOAD_ENTITIES_FAIL = '[entity] load entities fail',

  //add entity
  BEGIN_CREATE_ENTITY = '[entity] begin create entity',
  CREATE_ENTITY_SUCESS = '[enitity] create enitty success',
  CREATE_ENTITY_FAIL = '[enitity] create enitty fail',

}

export class loadEntities implements Action {
  
   readonly type = entityActionTypes.LOAD_ENTITIES
}

export class loadEntitiesSuccess implements Action {
  readonly type = entityActionTypes.LOAD_ENTITIES_SUCCESS
  constructor(public payload:any){
    console.log('----from loadentities action succss');
  }
  
}

export class loadEntitiesFail implements Action {
  readonly type = entityActionTypes.LOAD_ENTITIES_FAIL;

  constructor(public payload:string){
    console.log('----from loadentities action fail');
  }
}


export class BeginCreateEnity implements Action {
  readonly type = entityActionTypes.BEGIN_CREATE_ENTITY
}


export class CreateEntitySuccess implements Action {
  readonly type = entityActionTypes.CREATE_ENTITY_SUCESS
  constructor(public payload:any){
    console.log('----from create entity action succss');
  }
  
}

export class CreateEntityFail implements Action {
  readonly type = entityActionTypes.CREATE_ENTITY_FAIL;

  constructor(public payload:string){
    console.log('----from create entity action fail');
  }
}

export type EntityAction = loadEntities | loadEntitiesSuccess | loadEntitiesFail | CreateEntityFail | CreateEntitySuccess;

