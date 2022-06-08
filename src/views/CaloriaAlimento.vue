<template>
    <div class="container-fluid align-items-center d-flex justify-content-center pt-5" id="tela-imc">
        <form class="formulario bg-light" @click="Alerta()">
            <h1 class="text-center">Consultar Calorias</h1>
            <div class="row pt-5 mb-3">
                <label for="inputAlimento" class="col-sm-2 col-form-label">Alimento</label>
                <div class="col-sm-10 col-auto">
                    <input type="text" class="form-control" id="inputAlimento">
                </div>
            </div>
            <div class=" d-flex justify-content-center">
                <button type="submit" class="btn btn-primary">Pesquisar</button>
            </div>
          </form>
    </div>
</template>

<script>

export default {
    name: 'CaloriaAlimento',
    

    methods: {
        Alerta(){
            alert("Ok")
        }
    }

}
</script>

<style>
body {
    font-family: "Helvetica", Verdana, Tahoma, sans-serif;
}

.formulario {
    width: 500px;
    height: 400px;
    border: 1px solid rgba(111, 114, 114, 0.993);
    padding: 50px;
    border-radius: 5%;
}

#tela-imc {
    height: 700px;
    background-image: url("../assets/imc-bg.jpg");
    background-size: cover;
}

#logo {
    width: 160px;
}

a, header i {
    color: black;
    transition: .5s;
    text-decoration: none;
}

header .bi {
    border: 1px solid black;
    border-radius: 30%;
}

.item-menu:hover {
    color: white;
    border: 8px solid rgb(187, 186, 182);
    background-color: darkcyan;
}

footer {
    border-top: 1px solid #CCC;
    padding: 30px;
    height: 150px;
}

footer i {
    font-size: 20px;
}

footer p{
    padding: 3px;
}
</style>