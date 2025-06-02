## *Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".*
```js
let semanas = prompt('qual é o dia da semana?');
let sabado = ('sabado');
let domingo = ('domingo');
if (semanas == sabado) {
    alert('Bom final de semana!');
} if (semanas == domingo) {
    alert('Bom final de semana!');
} else {
    alert('Boa semana!');
}
```
- ***BASICO, SIMPLIFICADO***
```js
let dias = prompt('qual é o dia da semana?').toLocaleLowerCase();
let sabadoDomingo = ['sabado', 'domingo'];
if (sabadoDomingo.includes(dias)) {
    alert('Bom final de semana!');
} else {
    alert('Boa semana!');
}
```

Foi utilizado nesse código o **`.includes()`**, o **array `[]`** e o **`.toLowerCase()`**.
Basicamente, o intuito era **diminuir o uso de `let`**, no sabado e domingo, assim, criando uma lista mais simplificada dos dias que eu quis, o que chamamos de **array `[]`**.

Logo após, temos que fazer a checagem se o usuário colocou **algum dos itens que contém dentro da nossa variável do fim de semana** (`sabadoDomingo`) para que a gente consiga voltar a mensagem:
**`alert('Bom final de semana!')`**

Então fazemos o uso do **`.includes()`**, que serve, nada mais, para **verificar se o usuário digitou algo que está dentro da nossa variável**.
Assim, ele analisa e **volta com `true` (está dentro da variável) ou `false` (não está dentro)**.
Dessa forma, a gente consegue **determinar de um jeito mais simples as variáveis (eu acho)**.

Ou seja, **se o usuário colocar `'sabado'`**, o `.includes()` **verifica se tem `'sabado'` na variável**, e volta com um `true`, dizendo assim que é pra mandar o alerta que **tá INCLUSO ou CONECTADO** com a variável, ou seja:
**`alert('Bom final de semana!')`**

Caso o usuário colocar `'segunda'`, o `.includes()` verifica na lista e vê que não tem nenhum item com aquele nome, então automaticamente **ele joga essa informação pro `else` (`senão`)**, assim mandando a mensagem de alerta:
**`alert('Boa semana!')`**

Já o **`.toLowerCase()`**, ele basicamente **transcreve tudo pra minúsculo**, assim fazendo o `.includes()` conseguir **ler o que o usuário mandou**, por exemplo:

Se o usuário mandar `"Sabado"` com o **S maiúsculo**, **sem ter o `.toLowerCase()`**, o `.includes()` **não vai determinar aquilo como estando dentro da variável**, apenas por ter o S maiúsculo, por conta que não está **IGUAL** dentro da variável e do array.
Comparação: `['sabado', 'domingo']` (ambos minúsculos)
**Usuário:** `"Sabado"`
Entendeu? O `.includes()` **não vai conseguir identificar aquilo como a mesma coisa**, por isso usamos o **`.toLowerCase()`**.

Obviamente ele **não serve só pra primeira letra**, mas sim **pra todas**. Se o usuário escrever tudo cagado, ele vai entender (desde que a forma escrita não mude, apenas se for maiúsculo ou minúsculo).
Segue o exemplo: `"DoMiNgO"` → o `.toLowerCase()` vai entender e vai transcrever tudo aquilo pra minúsculo, assim fazendo com que os outros componentes do código consigam entender que aquilo é a mesma coisa.

---

**Assim podemos concluir:**

> * **`.includes()`** → verifica os itens dentro da lista do **array `[]`**, e retorna **`true` ou `false`** (verdadeiro ou falso).
> * **`.toLowerCase()`** → transforma tudo que o usuário mandar em **minúsculo**, facilitando a comparação.
>   (tem um código pra deixar maiúsculo também, que é o `.toUpperCase()`, mas eu não usei ainda — deve seguir a mesma lógica)\*
