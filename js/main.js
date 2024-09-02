window.addEventListener("load", iniciar)

//Función que obtiene el botón y válida el evento de 'click'
function iniciar() {
  let botonGuardarNota = document.getElementById("guardarNota")
  botonGuardarNota.addEventListener("click", guardarNota)
}

//Función para guardar cada nota
function guardarNota() {
    let nota = document.getElementById("noteText")
    let espacioNota = document.getElementById("notes") 
    let notaArticle = document.createElement("article")  //creareamos un <article> donde guardaremos por independiente cada nota
    notaArticle.textContent = nota.value 
    espacioNota.appendChild(notaArticle) 
    nota.value = "" 
  }
