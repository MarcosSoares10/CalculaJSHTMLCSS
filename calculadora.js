$(document).ready(function() {

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Tentando esconder a barra de endereço
	window.addEventListener("load",function(){
	setTimeout(window.scrollTo(0,1),500);
		},false); 

////////////////////////////////////////////////////////////////////////////////////////////////////////




	
// Tentando adaptação simples de layout por meio de aproximação
// Inicialmente é verificado se o usuário esta abrindo a página de um dispositivo móvel
// Caso estiver dá uma aproximação inicial
// Abaixo desta função é implementado um evento para verificar durante todo o tempo de execução do app
// qual posição e os tamanhos da tela no momento em o aparelho (em pé ou deitado pra um dos lados)
// e regulariza a aproximação do layout

	if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {		
		document.getElementById("calculadora").style.zoom = "160%";
		window.addEventListener("orientationchange", function() {
			if(window.orientation == '90' || window.orientation == '-90'){
				// alert("Width: "+$(window).width()+" ,Height: "+$(window).height());
		  	      	if($(window).width()>=980 && $(window).height()>460){
				  			document.getElementById("calculadora").style.zoom = "95%";			
						}			
		} else if(window.orientation == '0'){
			    //alert("Width: "+$(window).width()+" ,Height: "+$(window).height());
					if($(window).width()>=980 && $(window).height()<=460){
				  			document.getElementById("calculadora").style.zoom = "160%";			
						}
			}
		}, false);
	}

	
//////////////////////////////////////////////////////////////////////////////////////////////////////////	
// Instanciando as 3 divs (Input, Histórico e Botões)
// Criando os elementos necessários dinamicamente
		var DivEntrada = document.createElement('div');
	    var DivHistorico = document.createElement('div');
        var DivBT = document.createElement('div');
        var newTR  = document.createElement("TR");  //Table Row
        var newINPUT  = document.createElement("INPUT");
        var newBotao1 = document.createElement("BUTTON");
        var newBotao2 = document.createElement("BUTTON");
        var newBotao3 = document.createElement("BUTTON");
        var newBotao4 = document.createElement("BUTTON");
        var newBotao5 = document.createElement("BUTTON");
        var newBotao6 = document.createElement("BUTTON");
        var newBotao7 = document.createElement("BUTTON");
        var newBotao8 = document.createElement("BUTTON");
        var newBotao9 = document.createElement("BUTTON");
        var newBotaoZ = document.createElement("BUTTON");
        var newBotaomais = document.createElement("BUTTON");
        var newBotaomenos = document.createElement("BUTTON");
        var newBotaomult = document.createElement("BUTTON");
        var newBotaodivid = document.createElement("BUTTON");
        var newBotaoigual = document.createElement("BUTTON");
        var newBotaozerar = document.createElement("BUTTON");
        var newBotaoponto = document.createElement("BUTTON");
        var espaco = document.createElement("TD");
    	var br = document.createElement("br");
    	var br2 = document.createElement("br");
    	var br3 = document.createElement("br");
    	
 // Váriável simbolizando um possivel arquivo com dados no formato JSON
    	var JsonArquivo = '{"botoes":[' +
				  '{"nome":"botao1","texto":"1","valor":"1" },'+
				  '{"nome":"botao2","texto":"2","valor":"2" },'+
				  '{"nome":"botao3","texto":"3","valor":"3" },'+
				  '{"nome":"botao4","texto":"4","valor":"4" },'+
				  '{"nome":"botao5","texto":"5","valor":"5" },'+
				  '{"nome":"botao6","texto":"6","valor":"6" },'+
				  '{"nome":"botao7","texto":"7","valor":"7" },'+
				  '{"nome":"botao8","texto":"8","valor":"8" },'+
				  '{"nome":"botao9","texto":"9","valor":"9" },'+
				  '{"nome":"botaoZ","texto":"0","valor":"0" },'+
				  '{"nome":"botaomais","texto":"+","valor":"+" },'+
				  '{"nome":"botaomenos","texto":"-","valor":"-" },'+
				  '{"nome":"botaomult","texto":"*","valor":"*" },'+
				  '{"nome":"botaodivid","texto":"/","valor":"/" },'+
				  '{"nome":"botaoigual","texto":"=","valor":"=" },'+
				  '{"nome":"botaozerar","texto":"C","valor":"" },'+
				  '{"nome":"botaoponto","texto":".","valor":"." }]}';

// Demonstrando no console conteúdo do JSON
	var jsonData = JSON.parse(JsonArquivo);
	for (var i = 0; i < jsonData.botoes.length; i++) {
	    var counter = jsonData.botoes[i];
	    console.log("Nome: "+counter.nome+"  Texto: "+counter.texto+"  Valor: "+counter.valor);
		}

//Atribuindo os nomes dos elementos apartir dos valores no JSON
        newBotao1.innerHTML = jsonData.botoes[0].texto;
        newBotao2.innerHTML = jsonData.botoes[1].texto;
        newBotao3.innerHTML = jsonData.botoes[2].texto;
        newBotao4.innerHTML = jsonData.botoes[3].texto;
        newBotao5.innerHTML = jsonData.botoes[4].texto;
        newBotao6.innerHTML = jsonData.botoes[5].texto;
        newBotao7.innerHTML = jsonData.botoes[6].texto;
        newBotao8.innerHTML = jsonData.botoes[7].texto;
        newBotao9.innerHTML = jsonData.botoes[8].texto;
        newBotaoZ.innerHTML = jsonData.botoes[9].texto;
        newBotaomais.innerHTML = jsonData.botoes[10].texto;
        newBotaomenos.innerHTML = jsonData.botoes[11].texto;
        newBotaomult.innerHTML = jsonData.botoes[12].texto;
        newBotaodivid.innerHTML = jsonData.botoes[13].texto;
        newBotaoigual.innerHTML = jsonData.botoes[14].texto;
        newBotaozerar.innerHTML = jsonData.botoes[15].texto;
        newBotaoponto.innerHTML = jsonData.botoes[16].texto;
        newINPUT.setAttribute("type", "text");
        newINPUT.setAttribute("value", "0");

// Adicionando elementos nas divs (Input, histórico e entrada)
        DivBT.appendChild(newBotao1);
        DivBT.appendChild(newBotao2);
        DivBT.appendChild(newBotao3);               
        DivBT.appendChild(newBotaomais);
        DivBT.appendChild(br);
        DivBT.appendChild(newBotao4);
        DivBT.appendChild(newBotao5);
        DivBT.appendChild(newBotao6);
        DivBT.appendChild(newBotaomenos);
        DivBT.appendChild(br2);
		DivBT.appendChild(newBotao7);
        DivBT.appendChild(newBotao8);
        DivBT.appendChild(newBotao9);
		DivBT.appendChild(newBotaomult);
        DivBT.appendChild(br3);
        DivBT.appendChild(newBotaoZ);
        DivBT.appendChild(newBotaoponto);
        DivBT.appendChild(newBotaoigual);
        DivBT.appendChild(newBotaodivid);

        DivEntrada.appendChild(newINPUT);
		DivEntrada.appendChild(newBotaozerar);
		newTR.appendChild(DivEntrada);
        newTR.appendChild(DivHistorico);
        newTR.appendChild(DivBT);

// Adicionando na Tela Principal                   
        var element = document.getElementById("calculadora");
        element.appendChild(newTR);



// Funções referentes ao botões 
// São formadas em especial por um acumulador no qual é armazenado a função a ser resolvida
// e uma pequena função para adicionar os valores de cada botão no input
	var acumulador = '';

	newBotao1.onclick = function(){
		acumulador += jsonData.botoes[0].valor;
	    newINPUT.setAttribute("value", acumulador);
	};
	newBotao2.onclick = function(){
		acumulador += jsonData.botoes[1].valor;
	    newINPUT.setAttribute("value", acumulador);
	};
	newBotao3.onclick = function(){
		acumulador += jsonData.botoes[2].valor;
	    newINPUT.setAttribute("value", acumulador);
	};
	newBotao4.onclick = function(){
		acumulador += jsonData.botoes[3].valor;
	    newINPUT.setAttribute("value", acumulador);
	};
	newBotao5.onclick = function(){
		acumulador += jsonData.botoes[4].valor;
	    newINPUT.setAttribute("value", acumulador);
	};
	newBotao6.onclick = function(){
		acumulador += jsonData.botoes[5].valor;
	    newINPUT.setAttribute("value", acumulador);
	};
	newBotao7.onclick = function(){
		acumulador += jsonData.botoes[6].valor;
	    newINPUT.setAttribute("value", acumulador);
	};
	newBotao8.onclick = function(){
		acumulador += jsonData.botoes[7].valor;
	    newINPUT.setAttribute("value", acumulador);
	};
	newBotao9.onclick = function(){
		acumulador += jsonData.botoes[8].valor;
	    newINPUT.setAttribute("value", acumulador);
	};
	newBotaoZ.onclick = function(){
		acumulador += jsonData.botoes[9].valor;
	    newINPUT.setAttribute("value", acumulador);
	};
	newBotaozerar.onclick = function(){
		acumulador = jsonData.botoes[15].valor;
		newINPUT.setAttribute("value", '0');
	};
	newBotaoponto.onclick = function(){
		acumulador += jsonData.botoes[16].valor;
	    newINPUT.setAttribute("value", acumulador);
	};
	newBotaomult.onclick = function(){
		acumulador += jsonData.botoes[12].valor;
	    newINPUT.setAttribute("value", acumulador);
	};
	newBotaodivid.onclick = function(){
		acumulador += jsonData.botoes[13].valor;
	    newINPUT.setAttribute("value", acumulador);
	};
	newBotaomais.onclick = function(){
		acumulador += jsonData.botoes[10].valor;
	    newINPUT.setAttribute("value", acumulador);
	};
	newBotaomenos.onclick = function(){
		acumulador += jsonData.botoes[11].valor;
	    newINPUT.setAttribute("value", acumulador);
	};

		
// Método para calculo final e demostração de histórico
// Para exibição na div histórico é exibido os três ultimos cálculos realizados ordenadamente
// Cada linha do histórico exibe todo o conteúdo do calculo desde a função até o resultado


		var Historico1 = document.createElement('li');
		var Historico2 = document.createElement('li');
		var Historico3 = document.createElement('li');
		var ordena1;
		var ordena2;
		var ordena3;

// É utilizado 3 elementos para 1 para cada linha do histórico
// Além de ser utilizado 3 variáveis para possibilitar a ordenação
// É importante citar que o histórico inicialmente é oculto
// Logo após iniciado os calculos será instanciado cada linha
		newBotaoigual.onclick = function(){
				ordena3=ordena2;
				ordena2=ordena1;
				ordena1= acumulador+" "+jsonData.botoes[14].valor+" "+ eval(newINPUT.value);		
				Historico1.innerHTML=ordena1;
				Historico2.innerHTML=ordena2;
				Historico3.innerHTML=ordena3;
				
				if(ordena1!=null){DivHistorico.appendChild(Historico1);}
				if(ordena2!=null){DivHistorico.appendChild(Historico2);}
				if(ordena3!=null){DivHistorico.appendChild(Historico3);}

		// Por fim e resetado o acumulador e o input
			newINPUT.setAttribute("value", '0');	
			acumulador = '';
			};
});
 
 
// Tentativa com falha devido a problema na configuração da aws s3
// Por algum motivo idiota nega as requisições
// (Adicionado a lista de tarefas pra aprender com urgência)

	
/*var req = new XMLHttpRequest();

req.open('GET', 'https://s3-sa-weast-1.amazonaws.com/calculadoraaluno/1picapau.jpg', true);
req.withCredentials = true;
req.onload = function () {  };
req.onerror = function () { };
req.send();
*/


//$(newBotao1).bind('taphold',TESTER);
//function TESTER(event){
//	alert("Funcionou");
//};