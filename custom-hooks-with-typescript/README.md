# Regras de utilização dos hooks

- Não podemos invocar hooks condicionalmente. Ex: não invoque um hook dentro de um `if`

```tsx
if (true) {
  useEffect(); // não funciona
}
```

- Todo hook começa com `use`. Ex: useCodersClub

- Hooks utilizam de funcionalidades do react, caso contrário não é um hook, e sim uma função utilitária, de formatação, de datas e etc...

```tsx
//hook
const useCodersClub = () => {
  const [website, setWebsite] = useState("codersclub.com");

  return website;
};
```

```tsx
//função utilitária
const getCodersClubWebsite = () => "codersclub.com";
```

Funções com use, restringem a sua utilização, dentro de um `if` por exemplo. Por isso deve se utilizar hooks e funções utilitárias corretamente ex:

```tsx
//com use
const useCodersClubWebsite = () => "codersclub.com";

if (true) {
  const website = useCodersClubWebsite(); // vai quebrar
}
```

```tsx
//sem o use
const getCodersClubWebsite = () => "codersclub.com";

if (true) {
  const website = getCodersClubWebsite(); // vai funcionar
}
```
