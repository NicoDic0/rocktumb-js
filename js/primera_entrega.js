// Se declara la variable continuar, la cual determina si el bucle sigue o se termina.
let continuar = true;

// Se incia el bluce principal
while (continuar) {
  let artista = prompt("Ingrese el nombre del artista");
  let validacion = validarNombre(artista);
  let resultado;

  if (validacion !== "") {
    alert(validacion);
    continuar = true; // Continua con el bucle si la validación no pasa
  } else {
    let nombreArtista = artista.toLowerCase();
    if (nombreArtista === "los ramones") {
      resultado =
        "Estos son los resultados de su búsqueda para Los Ramones:\n- Los Ramones en Argentina.\n- Entrevista a Los Ramones.\n- Los Ramones anuncia nuevo disco de estudio.";
      continuar = false; // Detiene el bluce una vez que encuentra coincidencias.
    } else if (nombreArtista === "queen") {
      resultado =
        "Estos son los resultados de su búsqueda para Queen:\n- Queen en Argentina.\n- Entrevista a Queen.\n- Queen anuncia nuevo disco de estudio.";
      continuar = false;
    } else if (nombreArtista === "sonata arctica") {
      resultado =
        "Estos son los resultados de su búsqueda para Sonata Arctica:\n- Sonata Arctica en Argentina.\n- Entrevista a Sonata Arctica.\n- Sonata Arctica anuncia nuevo disco de estudio.";
      continuar = false;
    } else {
      resultado = "No se encontraron resultados para su búsqueda.";
      continuar = true; // Sigue el bucle hasta dar con una coincidencia
    }

    alert(resultado);
  }
}

// Se crea una funcion de validar nombre para que chequee que los datos ingresados sean correctos
function validarNombre(banda) {
  if (banda === "" || banda.length < 2) {
    return "Ingrese datos válidos";
  }
  return ""; // Retorna un string vacio si pasa la validacion
}

