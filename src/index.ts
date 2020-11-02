import {create} from 'secure-id'

const s = '0123456789abcdefghijklmnopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ-_'

export const {generate: safeid, validate, regexp} = create(s)
