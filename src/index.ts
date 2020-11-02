import {create} from 'secure-id'

const s = '0123456789abcdefghijklmnopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ-_'

export const {generate: picoid, validate, regexp} = create(s)
