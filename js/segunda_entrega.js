// SE DECLARA EL ARRAY //
const post = [
    { id: 1, category: "noticias", title: "Sonata Artica lanza un nuevo single", status: 'publicado'},
    { id: 2, category: "noticias", title: "Ramones: A 20 años del ultimo show en Argentina", status: 'publicado'},
    { id: 3, category: "noticias", title: "Queen regresa al pais con su nueva gira mundial", status: 'A publicar'},
    { id: 4, category: "coberturas",title: "En fotos: Conociendo Rusia en el Teatro Vorterix", status: 'A publicar'},
    { id: 5, category: "coberturas", title: "En fotos: La Renga en el Estadio de Racing", status: 'publicado'},
    { id: 6, category: "coberturas", title: "En fotos: Fito Paez en el Luna Park", status: 'publicado'},
    { id: 7, category: "noticias", title: "Charly Garcia prepara su nuevo material de estudio", status: 'A publicar'},
  ];

console.table(post)


// SE CREA UNA CLASE DONDE SE VAN A ENGLOBAR Y TRABAJAR LOS DISTINTOS METODOS //
class check {
    constructor(post){
        this.post = post;
    }
 
getPostById(id){
    const foundPost = this.post.find( item => item.id === id );
    if (foundPost){
        return post;
    } else {
        return 'No existe la publicacion';
    }
    } 

getPostByCategory(category){
    const post = this.post.filter ( item => item.category.toLowerCase() === category.toLowerCase())
    return post
} 

getPostByStatus(status){
    const post = this.post.filter ( item => item.status.toLowerCase() === status.toLowerCase())
    return post

} 

getPostByTitle (title){
    const post = this.post.filter ( item => item.title.toLowerCase().includes(title.toLowerCase()))
    return post
}

addPost(newPost){
    let id = this.post.length + 1;
    newPost.id = id;
    this.post.push(newPost)
}


} 

// SE DECLARAN LAS VARIABLES PARA HACER LA BUSQUEDA DE LAS PUBLICACIONES A TRAVES DEL ID //
// const news = new search(post)
// const id = parseInt(prompt('Ingrese el ID'))
// const results = news.getPostById(id)
// console.log(results)

// SE DECLARAN LAS VARIABLES PARA HACER LA BUSQUEDA DE LAS PUBLICACIONES A TRAVES DE LA CATEGORIA //

//  const news = new search(post)
//  const category = (prompt('Ingrese la categoria' ))
//  const results = news.getPostByCategory(category)
//  console.table(results)
//  console.log(results)

// SE DECLARAN LAS VARIABLES PARA HACER LA BUSQUEDA DE LAS PUBLICACIONES A TRAVES DEL ESTADO //

// const news = new search(post)
// const stage = (prompt('Ingrese el estado del posteo' ))
// const results = news.getPostByStatus(stage)
// console.table(results)
// console.log(results)

// SE DECLARAN LAS VARIABLES PARA HACER LA BUSQUEDA DE LAS PUBLICACIONES A TRAVES DE PALABRAS //

// const news = new search(post)
// const title = (prompt('Ingrese su busqueda' ))
// const results = news.getPostByTitle(title)
// console.table(results)
// console.log(results)

// SE DECLARAN LAS VARIABLES PARA AGREGAR UN NUEVO POST //


const news = new check(post)   
let continuar = true;
while (continuar) {
    let eleccion = prompt('Escribir "agregar" para realizar una nueva publicacion\nEscribir "buscar" para acceder al buscador\nEscribir "salir" para terminar');
    eleccion = eleccion.toLowerCase();
    
    if (eleccion === 'agregar') { 
        let newPost;
        do {
            newPost = prompt('Ingrese la categoria del posteo')
       
            if (newPost.toLowerCase() !== 'salir') {
                let titulo = prompt('Ingrese el titulo del nuevo posteo');
                let estado = prompt('Ingrese el estado del nuevo posteo');
                news.addPost({category: newPost, title: titulo, status: estado});
            }
       
        } while ( newPost.toLowerCase() !== 'salir' );
       
    } else if (eleccion === 'buscar') {
        let busqueda
        do {
            busqueda = (prompt('Ingrese el ID, titulo, categoria o estado de la publicacion que esta buscando ' ))
            
            if (busqueda.toLowerCase() !== 'salir'){
            let results = news.getPostById(parseInt(busqueda)); 
            alert (results);
            }
        
        } while (busqueda.toLowerCase() !== 'salir' );    
       
    
    } else if (eleccion === 'salir') {
        // Terminar el bucle si el usuario elige salir
        continuar = false;}
            
            
            
            
            
            
            }
        