export function DiminuirTexto(texto:string){
  let textoFormatado = texto.split(" ").slice(0,40).join(" ") + "...";
  
  return textoFormatado
}