import '../css/componentes.css';


export const saludar = (nombre) => {
  console.log('Creadon etiqueta H1, en el html desde terminal');
  const h1 = document.createElement('h1');
  h1.innerText = `Hola , ${ nombre }, como estas`;
  document.body.append(h1);
}