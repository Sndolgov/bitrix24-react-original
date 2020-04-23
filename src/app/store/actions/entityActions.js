import {ADD_ENTITIES} from "./actionTypes";

export function getEntities(entityName, sort) {
    return (dispatch) => {
        return new Promise((resolve) => {
            try {
                BX24.callMethod('entity.item.get', {
                        ENTITY: entityName,
                        SORT: sort//{DATE_ACTIVE_FROM: 'ASC'}
                    },

                    (result) => {
                        let entities = {};
                        const data = result.data();
                        data.map((entity) => {
                            entities[entity.PROPERTY_VALUES.ID_USER] = entity;
                        });
                        dispatch({
                            type: ADD_ENTITIES,
                            entities
                        });
                        resolve(entities)
                    })
            } catch (e) {
                console.log(e)
            }
        });
    }
}

export function getEntityByParameter(parameter, values) {
    return () => {
        return new Promise((resolve) => {
            try {
                BX24.callMethod(
                    'entity.item.get',
                    {parameter: values}
                    ,
                    (result) => {

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
                    },
                    (result) => resolve(result))
            } catch (e) {
                console.log(e)
            }
        });
    }
}

export function deleteEntityById(entity, id) {
    return () => {
        return new Promise((resolve, reject) => {
            try {
                BX24.callMethod('entity.item.delete', {
                        ENTITY: entity,
                        ID: id
                    }, (result) => resolve(result)
                )
            } catch (err) {
                console.log(err);
            }
        });
    }
}