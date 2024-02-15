
    function limparCampos() {
        document.getElementById("Nome").value = "";
        document.getElementById("Sobrenome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("Cidade").value = "";
        document.getElementById("state").value = "";
        document.getElementById("phone").value = "";

        var clicavelDivs = document.getElementsByClassName("clicavelDiv");
        for (var i = 0; i < clicavelDivs.length; i++) {
            clicavelDivs[i].classList.remove("selecionado");
        }
    }

    function minhaFuncao(element) {
        element.classList.toggle("selecionado");
    }
    

    function minhaFuncao(element) {
   
        element.classList.toggle("selecionado");
    }
    
    function confirmarCadastro() {
        var confirma = confirm("Deseja realmente confirmar o cadastro?");
        if (confirma) {
            alert("Cadastro confirmado!");
            limparCampos();
        } else {
            alert("Cadastro não confirmado.");
            limparCampos();
        }
    }
    