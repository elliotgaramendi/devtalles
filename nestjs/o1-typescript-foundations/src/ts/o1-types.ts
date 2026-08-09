export let name: string = 'Elliot';
export const age: number = 30;
export const isValid: boolean = true;

name = 'Isabel';
// name = 0 ;
// name = true;

export const templateString = `
Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores: ${name}
expresiones: ${1 + 1}
números: ${age}
booleanos: ${isValid}
`;

console.log(templateString);
