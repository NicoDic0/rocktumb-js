//🗨🗨<------------------------------------------------------------------------------->🗨🗨//
//🗨🗨<------------------------ SE DECLARA EL ARRAY PRINCIPAL ------------------------>🗨🗨//
//🗨🗨<------------------------------------------------------------------------------->🗨🗨//
const post = [
    { id: 1, category: "noticias", title: "Sonata Artica lanza un nuevo single", status: 'publicado'},
    { id: 2, category: "noticias", title: "Ramones: A 18 años del ultimo show en Argentina", status: 'publicado'},
    { id: 3, category: "noticias", title: "Queen regresa al pais con su nueva gira mundial", status: 'A publicar'},
    { id: 4, category: "coberturas",title: "En fotos: Conociendo Rusia en el Teatro Vorterix", status: 'A publicar'},
    { id: 5, category: "coberturas", title: "En fotos: La Renga en el Estadio de Racing", status: 'publicado'},
    { id: 6, category: "coberturas", title: "En fotos: Fito Paez en el Luna Park", status: 'publicado'},
    { id: 7, category: "noticias", title: "Charly Garcia prepara su nuevo material de estudio", status: 'A publicar'},
  ];

console.table(post)

//🗨🗨<-------------------------------------------------------------------------------->🗨🗨//
//🗨🗨<-- SE CREA UNA CLASE DONDE SE VAN A ENGLOBAR Y TRABAJAR LOS DISTINTOS METODOS -->🗨🗨//
//🗨🗨<-------------------------------------------------------------------------------->🗨🗨//
class Check {
    constructor(post){
        this.post = post;
    }
//🗨🗨<-- Metodo para realizar busquedas a traves del ID -->🗨🗨// 
getPostById(id){
    const foundPost = this.post.find((item) => item.id === id);
    if (foundPost) 
      return foundPost;
  }
//🗨🗨<-- Metodo para realizar busquedas a traves de la categoria -->🗨🗨//
getPostByCategory(category){
    const post = this.post.filter ( item => item.category.toLowerCase() === category.toLowerCase())
    return post
} 
//🗨🗨<-- Metodo para realizar busquedas a traves del estado -->🗨🗨//
getPostByStatus(status){
    const post = this.post.filter ( item => item.status.toLowerCase() === status.toLowerCase())
    return post
} 
//🗨🗨<-- Metodo para realizar busquedas a traves de titulo/palabras -->🗨🗨//
getPostByTitle (title){
    const post = this.post.filter ( item => item.title.toLowerCase().includes(title.toLowerCase()))
    return post
}
//🗨🗨<-- Metodo para agregar un nuevo posteo -->🗨🗨//
addPost(newPost){
    let id = this.post.length + 1;
    newPost.id = id;
    //🗨🗨<-- Variable para visualizar que el array ordene los objetos de la forma en que se declaro inicialmente ID / CATEGORY / TITLE / STATUS -->🗨🗨//
    //🗨🗨<---------------- de no declararla, al cargar un nuevo posteo en consola se visualizaria CATEGORY / TITLE / STATUS / ID ----------------->🗨🗨//
    let orderedPost = Object.assign({}, {
        id: newPost.id,
        category: newPost.category,
        title: newPost.title,
        status: newPost.status
      });  
      this.post.push(orderedPost);
      alert('Su posteo se ha creado con exito')
    }
  
showPost() {
    console.table(this.post);
    }

} 

//🗨🗨<-------------------------------------------------------------------------------------------->🗨🗨//
//🗨🗨<-- VARIABLES INDIVIDUALES DONDE SE REALIZARON LOS CHEQUEOS DE QUE FUNCIONARAN LOS METODOS -->🗨🗨//
//🗨🗨<-------------------------------------------------------------------------------------------->🗨🗨//

// SE DECLARAN LAS VARIABLES PARA HACER LA BUSQUEDA DE LAS PUBLICACIONES A TRAVES DEL ID //
// const news = new Check(post)
// const id = parseInt(prompt('Ingrese el ID'))
// const results = news.getPostById(id)
// console.log(results)

// SE DECLARAN LAS VARIABLES PARA HACER LA BUSQUEDA DE LAS PUBLICACIONES A TRAVES DE LA CATEGORIA //
//  const news = new Check(post)
//  const category = (prompt('Ingrese la categoria' ))
//  const results = news.getPostByCategory(category)
//  console.table(results)
//  console.log(results)

// SE DECLARAN LAS VARIABLES PARA HACER LA BUSQUEDA DE LAS PUBLICACIONES A TRAVES DEL ESTADO //
// const news = new Check(post)
// const stage = (prompt('Ingrese el estado del posteo' ))
// const results = news.getPostByStatus(stage)
// console.table(results)
// console.log(results)

// SE DECLARAN LAS VARIABLES PARA HACER LA BUSQUEDA DE LAS PUBLICACIONES A TRAVES DE PALABRAS //
// const news = new Check(post)
// const title = (prompt('Ingrese su busqueda' ))
// const results = news.getPostByTitle(title)
// console.table(results)
// console.log(results)


 
//🗨🗨<------------------------------------------------------------------------------->🗨🗨//
//🗨🗨<-- SE DECLARAN LAS VARIABLES PARA AGREGAR UN NUEVO POST Y REALIZAR BUSQUEDAS -->🗨🗨//
//🗨🗨<------------------------ SE EJECUTA EL BUCLE PRINCIPAL ------------------------>🗨🗨//
//🗨🗨<------------------------------------------------------------------------------->🗨🗨//
const news = new Check(post)  
let continuar = true;
        //🗨🗨<-- Inicio del bucle -->🗨🗨//
while (continuar) {
    //🗨🗨<-- Se le da al usuario la opcion de elegir que desea hacer... Agregar, buscar o salir. -->🗨🗨//
    let eleccion = prompt('Escribir "agregar" para realizar una nueva publicacion\nEscribir "buscar" para acceder al buscador\nEscribir "salir" para terminar');
    eleccion = eleccion.toLowerCase();
    //🗨🗨<-- Al elegir agregar se empieza a ejecutar el metodo de addPost, el bucle se ejecuta hasta que el usuario escriba "salir" y vuelva al menu principal -->🗨🗨//
    if (eleccion === 'agregar') { 
        let newPost;
        let titulo;
        let estado;
        do {
            newPost = prompt('Ingrese la categoria del posteo o "salir" para volver al menu anterior');
            if (newPost.toLowerCase() !== 'salir') {
                titulo = prompt('Ingrese el titulo del nuevo posteo o "salir" para volver al menu anterior');
                if (titulo.toLowerCase() !== 'salir') {
                    estado = prompt('Ingrese el estado del nuevo posteo o "salir" para volver al menu anterior');
                    if (estado.toLowerCase() !== 'salir') {
                        news.addPost({category: newPost, title: titulo, status: estado});
                        news.showPost(); 
                    }
                }
            }
        } while (newPost.toLowerCase() !== 'salir' && titulo.toLowerCase() !== 'salir' && estado.toLowerCase() !== 'salir');
    //🗨🗨<-- Al elegir buscar se ejectuan los distintos metodos de busqueda, el mismo lo hace hasta que el usuario escriba "salir" y vuelva al menu principal -->🗨🗨//        
    } else if (eleccion === 'buscar') {
        let busqueda;
    do {
      busqueda = prompt(
        'Ingrese el ID, título, categoría o estado de la publicación que está buscando o "salir" para volver al menu anterior'
      );
        if (busqueda.toLowerCase() !== "salir") {
        let results = [];
        //🗨🗨<-- Si es un número busca por ID, si es un string busca por el titulo -->🗨🗨//
            if (!isNaN(busqueda)) {
            const resultById = news.getPostById(parseInt(busqueda));
            const resultByNumberString = news.getPostByTitle(busqueda);
                if (resultById) {
                results.push(resultById);
            }
            results = results.concat(resultByNumberString);       
        //🗨🗨<-- Si no es un número busca por título, categoría o estado -->🗨🗨//
            } else {          
                const resultByTitle = news.getPostByTitle(busqueda);
                const resultByCategory = news.getPostByCategory(busqueda);
                const resultByStatus = news.getPostByStatus(busqueda);
                results = results.concat(resultByTitle, resultByCategory, resultByStatus, );
            } 
            if (results.length > 0) {
                let message = "Resultados:\n";
                results.forEach((result) => {message += `ID: ${result.id}\nTítulo: ${result.title}\nCategoría: ${result.category}\nEstado: ${result.status}\n\n`});
                alert(message);
            } else {
                alert('No se encontro su busqueda o no existe.')
            }
      }
        } while (busqueda.toLowerCase() !== 'salir' );    
       
        //🗨🗨<-- Termina el bucle si el usuario elije salir -->🗨🗨// 
    } else { (eleccion === 'salir') 

        continuar = false;}
}