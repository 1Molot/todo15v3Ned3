import {setError, SetErrorType, setLoadingStatus, SetLoadingStatusType} from "../app/app-reducer";
import {Dispatch} from "redux";
import {ResponseType} from "../api/todolists-api";
import React from "react";

type User = {
    name: string,
    city: string
}

const test = (param: string |  number | string[] | User | React.Component): string |  number | string[] | User | React.Component => {
    return param
}

function identity<T>(arg: T): T {
    return arg;
}

const res = test({name: 'Alex', city: 'Minsk'})

const res2 = identity<Array<User>>([{name: 'Alex', city: 'Minsk'}])

export const handleServerAppError = <T>(dispatch: Dispatch<ErrorUtilsDispatchType>, data: ResponseType<T>) => {
    if (data.messages.length) {
        dispatch(setError(data.messages[0]))
    } else {
        dispatch(setError('Some error'))
    }
    dispatch(setLoadingStatus('failed'))
}

export const handleServerNetworkError = (dispatch: Dispatch<ErrorUtilsDispatchType>, error: string ) => {
    dispatch(setError(error))
    dispatch(setLoadingStatus('failed'))
}

type ErrorUtilsDispatchType =  SetLoadingStatusType | SetErrorType