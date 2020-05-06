import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Actions, Effect ,ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { map ,mergeMap ,catchError } from "rxjs/operators";

import * as entityActions from "./entities.action";
import { EntityService } from "../entity.service";

@Injectable()
export class EntityEffect{
 
  constructor(
    private actions$:Actions,
    private entityService:EntityService){ }  
  
  @Effect()
  loadEntities$: Observable<Action> = this.actions$.pipe(
    ofType<entityActions.loadEntities>(
      entityActions.entityActionTypes.LOAD_ENTITIES
    ),
   mergeMap((actions : entityActions.loadEntities) =>
     this.entityService.getEntities().pipe( 
      map(
        (entities) => new entityActions.loadEntitiesSuccess(entities)
      ),
      catchError(err => of(new entityActions.loadEntitiesFail(err)))
   )
  ));


  @Effect()
  createEnity$: Observable<Action> = this.actions$.pipe(
    ofType<entityActions.BeginCreateEnity>(
      entityActions.entityActionTypes.BEGIN_CREATE_ENTITY
    ),
    mergeMap((actions : entityActions.BeginCreateEnity) =>
    this.entityService.createEntity().pipe(
      map(
        (entities) => new entityActions.CreateEntitySuccess(entities)
      ),
      catchError(err => of(new entityActions.CreateEntityFail(err)))    
    )
    ));
  


}
