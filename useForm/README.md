

# useForm Hook


Ejemplo de uso:

```
   const initialState = {
       name: '',
       age: 0,
       email: '',
       ...
   }
   const  [values, handleInputChange, reset] = useForm(initialState)
```


useForm(initialState) // Valores por defecto para los campos