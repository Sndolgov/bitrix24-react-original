import {LOADING_STATUS, SAVE_ENTITY, UPDATE_ENTITIES} from "./actionTypes";

export function getEntities(entityName, sort) {
    return () => {
        return new Promise((resolve) => {
            try {
                BX24.callMethod('entity.item.get', {
                        ENTITY: entityName,
                        SORT: sort//{DATE_ACTIVE_FROM: 'ASC'}
                    },
                    (result) => {
                        resolve(result)
                    })
            } catch (e) {
                console.log(e)
            }
        });
    }
}

export function getUserByParameter(parameterWithValues) {
    return () => {
        return new Promise((resolve) => {
            try {
                BX24.callMethod(
                    'user.get',
                    parameterWithValues,
                    (result) => {
                        if (result.more())
                            result.next();
                        else
                            resolve(result)
                    })
            } catch (e) {
                console.log(e)
            }
        });
    }
}

export function getDealList(order, filter, select) {
    return () => {
        return new Promise((resolve) => {
            try {
                BX24.callMethod(
                    "crm.deal.list",
                    {
                        order,
                        filter,
                        select
                        // order: { "ASSIGNED_BY_ID": "ASC", "DATE_CREATE": "ASC" },
                        // filter: null,
                        // select: [ "ID", "TITLE", "OPPORTUNITY", "ASSIGNED_BY_ID"]
                    },
                    (result) => {
                        if (result.more())
                            result.next();
                        else
                            resolve(result)                    })
            } catch (e) {
                console.log(e)
            }
        });
    }
}

export function deleteEntityById(entityName, id) {
    return () => {
        return new Promise((resolve, reject) => {
            try {
                BX24.callMethod('entity.item.delete', {
                        ENTITY: entityName,
                        ID: id
                    }, (result) => resolve(result)
                )
            } catch (err) {
                console.log(err);
            }
        });
    }
}

export function saveEntity(id, entity) {
    return {
        type: SAVE_ENTITY,
        id,
        entity
    }
}

export function updateEntity(entities) {
    return {
        type: UPDATE_ENTITIES,
        entities
    }
}

export function loadingStatus(isLoading){
    return{
        type: LOADING_STATUS,
        isLoading
    }
}