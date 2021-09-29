export const onRequest = (type, payload = null) => ({
    type,
    payload
})

export const onSuccess = (type, payload = null) => ({
    type,
    payload
})

export const onError = (type, error = null) => ({
    type,
    error
})