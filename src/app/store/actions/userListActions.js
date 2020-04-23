import {ADD_RATING_USER_ROW, DELETE_USER, RESET_SAVING_ERROR, SAVING_ERROR} from "./actionTypes";


export function deleteUser(id) {
    return {
        type: DELETE_USER,
        id
    }
}

export function addRatingUserRow() {
    return (dispatch, getState) => {
        let userList = {...getState().userListReducer.userList};
        return BX24.selectUsers(users => {
            for (var indexUser in users) {
                if (!userList.hasOwnProperty(users[indexUser].id)) {
                    userList[users[indexUser].id] = users[indexUser];
                }
            }
            dispatch({
                type: ADD_RATING_USER_ROW,
                userList: userList
            });
        });
    }
}


const arRatingUsersEntity = {
        NAME: 'users',
        DESC: 'Rating users',
        PROPERTIES: [
            {CODE: 'ID_USER', NAME: 'User ID', TYPE: 'N'}
        ]
    },

    arRatingDataEntity = {
        NAME: 'ratings',
        DESC: 'Rating data',
        PROPERTIES: [
            {CODE: 'ID_USER', NAME: 'User ID', TYPE: 'N'},
            {CODE: 'SUM', NAME: 'Daily sum', TYPE: 'N'},
            {CODE: 'RATE_DATE', NAME: 'Rating Date', TYPE: 'S'}
        ]
    };

function prepareEntity(arEntityDesc) {
    let batch = [];

    batch.push(['entity.add', {'ENTITY': arEntityDesc.NAME, 'NAME': arEntityDesc.DESC, 'ACCESS': {AU: 'W'}}]);
    batch.push(['entity.update', {'ENTITY': arEntityDesc.NAME, 'ACCESS': {AU: 'W'}}]);

    for (let indexProperty in arEntityDesc.PROPERTIES)
        batch.push(['entity.item.property.add', {
            ENTITY: arEntityDesc.NAME,
            PROPERTY: arEntityDesc.PROPERTIES[indexProperty].CODE,
            NAME: arEntityDesc.PROPERTIES[indexProperty].NAME,
            TYPE: arEntityDesc.PROPERTIES[indexProperty].TYPE
        }]);

    return batch;
}

export function finishInstallation(history) {
    return (dispatch, getState) => {
        const userList = {...getState().userListReducer.userList};

        let arEntityBatch = prepareEntity(arRatingUsersEntity);
        arEntityBatch = arEntityBatch.concat(prepareEntity(arRatingDataEntity));

        {
            for (let user in userList) {
                arEntityBatch.push(['entity.item.add', {
                    ENTITY: 'users',
                    DATE_ACTIVE_FROM: new Date(),
                    NAME: userList[user].name,
                    PROPERTY_VALUES: {
                        ID_USER: userList[user].id
                    }
                }]);
            }
        }

        // Create storage and add rating users
        BX24.callBatch(arEntityBatch,

            function (result) {

                // check saving of rating users
                BX24.callMethod('entity.item.get', {
                        ENTITY: 'users',
                        SORT: {DATE_ACTIVE_FROM: 'ASC'}
                    },

                    function (result) {

                        if (result.error()) {
                            dispatch({
                                type: SAVING_ERROR,
                                error: result.error().ex.error_description
                            });
                            console.error(result.error());
                        } else {
                            // ok, go to our application
                            BX24.installFinish();
                            history.push('/sales/')
                        }
                    }
                );
            });
    };

}

export function errorHandler() {
    return {
        type: RESET_SAVING_ERROR
    }
}


