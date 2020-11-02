# safe-id

## Install

```sh
npm install safe-id
```

## Usage

```ts
import {safeid, validate} from 'safe-id'

// 'r2Uv0BdF_jrSrYTQWk6mn', 'E-sQInvR5SAqCi5EJY1AM', 'e70oGrYqbgJE-7KvnzAzc' etc
const id = safeid()

// true
validate(id)

// false
validate(id+'@')
```
