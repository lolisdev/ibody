<template>
    <div class="container-fluid align-items-center d-flex justify-content-center pt-5" id="tela-imc">
        <form class="formulario bg-light" @click="Alerta()">
            <h1 class="text-center">IMC</h1>
            <div class="row pt-5 mb-3">
                <label for="inputPeso" class="col-sm-2 col-form-label">Peso</label>
                <div class="col-sm-10 col-auto">
                    <input type="text" placeholder="exemplo@exemplo.com" class="form-control" id="inputPeso">
                </div>
                <br />
                <br />
                <label for="inputAltura" class="col-sm-2 col-form-label">Altura</label>
                <div class="col-sm-10 col-auto">
                    <input type="password" placeholder="Altura" class="form-control" id="inputAltura">
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
    name: 'imc'
}
</script>
