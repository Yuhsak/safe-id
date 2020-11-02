# safe-id

Secure and URL safe id for Browser, Node.js, and ReactNative written in TypeScript.

## Install

```sh
npm install safe-id
```

## Usage

```ts
/** simple usage */
import {safeid, validate} from 'safe-id'

// 'r2Uv0BdF_jrSrYTQWk6mn', 'E-sQInvR5SAqCi5EJY1AM', 'e70oGrYqbgJE-7KvnzAzc' etc
const id = safeid()

// true
validate(id)
validate('a'.repeat(21))

// false
validate('a'.repeat(20)) //invalid length
validate('@'.repeat(21)) //invalid characters
```

```ts
/** create custom-length id generator */
import {create} from 'safe-id'

const {generate, validate} = create(12)

// 'mkgy78-a4_'
const cid = generate()

// true
validate(cid)
validate('a'.repeat(12))

// false
validate('a'.repeat(21)) //invalid length
```
