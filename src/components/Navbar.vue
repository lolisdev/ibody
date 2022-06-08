<template>
    <header>
        <nav class="bg-light">
            <div class="container-fluid" id="topo">
                <div class="row">
                    <div class="col-2">
                        <a href="" class="navbar-brand">
                            <img src="../assets/ibdlogotipo.png" alt="logo" id="logo">
                        </a>
                    </div>
                    <div class="col-10 d-flex align-items-center justify-content-between">
                        <router-link>

                        </router-link>
                        <router-link to='/GorduraCorporal'><a class="btn"> <i class="bi bi-percent"></i> Gordura Corporal (BF)</a></router-link>
                        <router-link to='/IMC'><a class="btn"> <i class="bi bi-activity"></i> Índice de Massa Corporal (IMC)</a></router-link>
                        <router-link to='/Caloria'><a class="btn"> <i class="bi bi-cup-straw"></i> Consultar Calorias</a></router-link>
                        <router-link to='/MontarDieta'><a class="btn"> <i class="bi bi-clipboard2"></i> Monte sua dieta</a></router-link>
                        <router-link to='/Entrar'><a class="btn"> <i class="bi bi-box-arrow-in-right"></i> Entrar</a></router-link>
                        <p class="btn btn-primary mt-2">Registre-se</p>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>