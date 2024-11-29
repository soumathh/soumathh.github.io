//boton = document.getElementById("calcular")
//boton.addEventListener("click",control)
historial = ""


function espacios(numero){ 
		cantidad = Number(numero)
		espacios_mostrar = ""
		x = 0
		while(x < cantidad){
				espacios_mostrar += " "
				x++
		}
		return espacios_mostrar
}


function guiones(numero){
		cantidad = Number(numero)
		guiones_mostrar = ""
		x = 0
		while(x < cantidad){
				guiones_mostrar += "-"
				x++
		}
		return guiones_mostrar
}


function obtener_n1() {
		numero1 = document.getElementById("n1").value
		return numero1
}


function obtener_n2() {
		numero2 = document.getElementById("n2").value
		return numero2
}

function limpiar() {
		document.getElementById("n1").value=""
		document.getElementById("n2").value=""
		document.getElementById("result").innerHTML = " "
		historial = ""
}




function sumar(){
		numero1 = obtener_n1()
		numero2 = obtener_n2()
		suma = String(Number(numero1) + Number(numero2))
		espacio = 0
		texto = []


		function espacios(numero){ 
				cantidad = Number(numero)
				espacios_mostrar = ""
				x = 0
				while(x < cantidad){
						espacios_mostrar += " "
						x++
				}
				return espacios_mostrar
		}


		function guiones(numero){
				cantidad = Number(numero)
				guiones_mostrar = ""
				x = 0
				while(x < cantidad){
						guiones_mostrar += "-"
						x++
				}
				return guiones_mostrar
		}


		texto.push(espacios(suma.length - numero1.length+1)+numero1)
		texto.push(espacios(suma.length - numero2.length)+"+"+numero2)
		texto.push(guiones(suma.length+1))
		texto.push(espacios(1)+suma)

		result = ""
		for (x=0; x<texto.length; x++) {
				result += texto[x]+"\n"
		}
		document.getElementById("n1").value=""
		document.getElementById("n2").value=""
		return result

}


function restar() {

		numero1 = obtener_n1()
		numero2 = obtener_n2()
		resta = String(Number(numero1) - Number(numero2))
		espacio = 0
		texto = []


		
		
		if(Number(numero1) >= Number(numero2) && numero1.length == numero2.length){
				texto.push(" "+numero1)
				texto.push(espacios(numero1.length - numero2.length -1)+"-"+numero2)
				texto.push(guiones(numero1.length+1))
				texto.push(espacios(numero1.length - resta.length +1)+resta)
		}else if(Number(numero1) > Number(numero2)){
				texto.push(numero1)
				texto.push(espacios(numero1.length - numero2.length -1)+"-"+numero2)
				texto.push(guiones(numero1.length))
				texto.push(resta)
		
		}
	
		result = ""
		for(x = 0; x < texto.length; x++){
				result += texto[x]+"<br>"
		}
		
		if(Number(numero1) >= Number(numero2)){
				return result
		}else{
				return "error"		
		}

}



function multiplicar() {
		numero1 = obtener_n1()
		numero2 = obtener_n2()
		multiplicacion = String(Number(numero1) * Number(numero2))
		tamano_de_espacio = multiplicacion.length
		lista1 = []
		lista2 = []
		reversa1 = []
		reversa2 = []
		resultados = []
		resul_reversa = []
		texto = []
		sub_espacio = 0
		contador = 0


		for(x = 0; x < numero1.length; x++) {
				lista1.push(numero1[x])
		}

		for(x = 0; x < numero2.length; x++) {
				lista2.push(numero2[x])
		}

		reversa1 = lista1.reverse()
		reversa2 = lista2.reverse()


		for(x = 0; x < reversa2.length; x++){
				resultados.push(String(Number(reversa2[x]) * Number(numero1)))
		}
		

		function espacios(numero){ 
				cantidad = Number(numero)
				espacios_mostrar = ""
				x = 0
				while(x < cantidad){
						espacios_mostrar += " "
						x++
				}
				return espacios_mostrar
		}


		function guiones(numero){
				cantidad = Number(numero)
				guiones_mostrar = ""
				x = 0
				while(x < cantidad){
						guiones_mostrar += "-"
						x++
				}
				return guiones_mostrar
		}

		texto.push(espacios(multiplicacion.length - numero1.length)+numero1)
		texto.push(espacios(multiplicacion.length - numero2.length -1)+"X"+numero2)



		if(numero1.length > numero2.length){
				texto.push(espacios(multiplicacion.length - numero1.length -1)+guiones(numero1.length +1))
		}else{
				texto.push(espacios(multiplicacion.length - numero2.length -1)+guiones(numero2.length +1))
		}



		y = 0
		for(y = 0; y < resultados.length; y++){
				if(y == 0){
						espace = espacios(multiplicacion.length - resultados[y].length)
						texto.push(espace+resultados[y])
						sub_espacio++
				}else{
						espace = espacios(multiplicacion.length - resultados[y].length - sub_espacio)
						texto.push(espace+resultados[y])
         		   sub_espacio++
				}
		
		}

		n_guiones = guiones(multiplicacion.length)
		texto.push(n_guiones)
		texto.push(multiplicacion)

		result = ""
		for(x = 0; x<texto.length; x++){
				result += texto[x]+"<br>"
		}
		
		document.getElementById("n1").value=""
		document.getElementById("n2").value=""

		return result

}



function dividir(){
		cociente = ""
		x = 0
		sub_dividendo = ""
		dividendo = document.getElementById("n1").value
		divisor = document.getElementById("n2").value
		longitud_dividendo = dividendo.length
   	numeros = []
		for(y = 0; y <= longitud_dividendo; y++){
   			x++
				sub_dividendo += dividendo[y]
		
				if(Number(sub_dividendo) >= Number(divisor)){
						numeros.push(sub_dividendo)		
						if(x == dividendo.length){
							cociente += String(Math.floor(Number(sub_dividendo) / Number(divisor)))
							sub_dividendo = String(Number(sub_dividendo) % Number(divisor))
							numeros.push(sub_dividendo)
							break
						}else{
							cociente += String(Math.floor(Number(sub_dividendo) / Number(divisor)))
							sub_dividendo = String(Number(sub_dividendo) % Number(divisor))
						}
				}else if(Number(sub_dividendo) < Number(divisor) && x == dividendo.length){
						numeros.push(sub_dividendo)
						cociente += String(Math.floor(Number(sub_dividendo) / Number(divisor)))
				}else if(Number(sub_dividendo) < Number(divisor)){
						cociente += "0"				
				}
			
		}
	

		numbers = numeros
		len = numbers.length
		posicion = 0
		es_numeros = [0] //0 -> valor ficticio
		lista_de_texto = []

		for(x = 0; x < len; x++){
			if(x != 0){
					tamano_real = String(Number(numbers[x-1]) % Number(divisor)).length
					es_numero = numbers[x-1].length - tamano_real
					es_numeros.push(Number(es_numero))					
					
			}
	
		}		

		espacio = 0
		suit = 0
		while(suit < es_numeros.length){
				if(suit != 0){
						espacio = espacio + es_numeros[suit]
						lista_de_texto.push(espacios(espacio)+numbers[suit]);
				}
				suit++
		}


		if(lista_de_texto.length == 0){
				lista_de_texto.push("")
		}


		if(lista_de_texto.length >= 2){
				tamano_del_primer_elemento = lista_de_texto[0].length
      		numero_de_espacios = dividendo.length+1 - tamano_del_primer_elemento
      		lista_de_texto[0] = lista_de_texto[0]+espacios(numero_de_espacios)+"|"+guiones(cociente.length +5)

				tamano_del_primer_elemento = lista_de_texto[0].length
				tamano_del_segundo_elemento = lista_de_texto[1].length
				//n = cociente.length+6
				numero_de_espacios = tamano_del_primer_elemento - tamano_del_segundo_elemento  - (cociente.length+6)
				lista_de_texto[1] = lista_de_texto[1]+espacios(numero_de_espacios)+"| "+String(Number(cociente))    
		}else{
				tamano_del_primer_elemento = lista_de_texto[0].length
      		numero_de_espacios = (dividendo.length+1) - tamano_del_primer_elemento
      
      		lista_de_texto[0] = lista_de_texto[0]+espacios(numero_de_espacios)+"|"+guiones(cociente.length+5)
        
      		tamano_del_primer_elemento = lista_de_texto[0].length
      		numero_de_espacios = tamano_del_primer_elemento - (cociente.length+6)
      		lista_de_texto.push(espacios(numero_de_espacios)+"| "+cociente)
		}


		resultado = dividendo+" | "+divisor+"<br>"		
		for(x = 0; x < lista_de_texto.length; x++){
				resultado += lista_de_texto[x]+"<br>"
		}
		document.getElementById("n1").value=""
		document.getElementById("n2").value=""
		
		if(Number(divisor) != 0){
				return resultado
		}else{
				return "Infinito"		
		}
}



function control(){
		n2 = obtener_n1()
		n2 = obtener_n2()
		error = 0
		
		if(n1 != "" && n2 != "" ){
				error = 0						
		}else{
				error = 1
		}
		
		
		if(error == 0){
				opcion = document.getElementById("operacion").value
				
			//	abrir = '<div class="docs-code-block"><pre class="shadow-lg rounded"><code class="json hljs" >'
			//	cerrar = '</code> </pre></div>'
				
				if(opcion == "s"){
						historial = '<pre style="line-height: 25px;">'+sumar()+"</pre>"+"<hr><br><br><br>"+historial
						document.getElementById("result").innerHTML = "<pre>"+historial+"</pre>"
						document.getElementById("n1").value=""
						document.getElementById("n2").value=""
				}else if(opcion == "r"){
								historial = '<pre style="line-height: 25px;">'+restar()+"</pre>"+"<hr><br><br><br>"+historial
								document.getElementById("result").innerHTML = "<pre>"+historial
								document.getElementById("n1").value=""
								document.getElementById("n2").value=""
								document.getElementById("n2").value=""
				}else if(opcion == "m"){
								historial = '<pre style="line-height: 25px;">'+multiplicar()+"</pre>"+"<hr><br><br><br>"+historial
								document.getElementById("result").innerHTML = "<pre>"+historial
								document.getElementById("n1").value=""
								document.getElementById("n2").value=""
								document.getElementById("n2").value=""							
				
				
				}else if(opcion == "d"){
								historial = '<pre style="line-height: 25px;">'+dividir()+"</pre>"+"<hr><br><br><br>"+historial
								document.getElementById("result").innerHTML = "<pre>"+historial
								document.getElementById("n1").value=""
								document.getElementById("n2").value=""
								document.getElementById("n2").value=""				
				}



		
		}
	
}