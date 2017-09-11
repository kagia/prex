## Prex
A preact/mongoose/express bolierplate

### Instructions
-------------

#### Develop client side script

run:

```
yarn build --watch
```

*Note*:
 - Remember to import `h` (hyperscript) when writting JSX
    ```
    import { h } from preact
    ```
 - You can pass Promises to the expression response object 🎉
    ```
    res.json(Customer.find(id))
    ```


#### Develop server side script

```
yarn serve
```

*Note*:
  - import `./connection` to work with database models, this ensures you will be using a valid mongodb connection.