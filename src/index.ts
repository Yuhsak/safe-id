import {create as secureId} from 'secure-id'

const s = '0123456789abcdefghijklmnopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ-_'

export const create = secureId(s)

export const {generate: safeid, validate, regexp} = create(21)
