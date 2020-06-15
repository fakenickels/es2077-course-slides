# Exercícios dessa aula


Recrie uma lib promise que obeça as regras de monads com Reason.
Ela deve ter a seguinte API:

# Exemplo de uso da API quando concluída
```
let promise = Promise.make(resolve => {
  let _ = Js.Global.setTimeout(() => {
    resolve(Ok("Hello!"))
  }, 1000)
});

let () = promise
  ->Promise.map()
  ->Promise.mapError(() => )
```

## API da lib

Parênteses colocados pra facilitar o entendimento mas eles não são necessários!

Nível um
```reason
type t('a);
/* Cria a promise */
let make: unit => (t('a), 'a => unit);
/* Aplica uma transformação */
let map: t('a) => ('a => 'b) => t('b);
```

Nível dois!
```reason
/* Aplica uma transformação e retorna uma outra promise */
let flatMap: t('a) => ('a => t('b)) => t('b);
/* Aplica transformação apenas se a promise for um tipo result e estiver no valor Ok */
let mapOk: t(resolve('a, 'errorA)) => ('errorA => 'errorB) => resolve('a, 'errorB));
/* Aplica transformação apenas se a promise for um tipo result e estiver no valor Error */
let mapError: t(resolve('a, 'errorA)) => ('errorA => 'errorB) => resolve('a, 'errorB));
```

## Requisitos de conclusão
- Deve ser possível mapear sobre o valor
- Deve ser possível fazer flatMap sobre o valor
- Deve diferenciar os ramos de error e de sucesso, tanto map e flatMap

## O que você lembrar
- Records
- Tipo unit
- Tipo result('a)
- Tipos paramétricos 
- Tuples
- Diferença entre os operadores pipe-first e pipe operator