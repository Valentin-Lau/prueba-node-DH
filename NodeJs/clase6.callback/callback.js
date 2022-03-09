function agregarHttp(url) {
          return  "http://" + url  // escribí tu código aquí
      }
      console.log(agregarHttp("www.google.com"))
      console.log(agregarHttp("www.yahoo.com"))
      
      function procesar(array,agregarHttp){
          let sitios = [] 
          for(let i = 0; i < sitios.lenght; i++){
              sitios.push(agregarHttp(array[i]))
          }
          return sitios
          
      };
       console.log(procesar(["www.google.com","www.yahoo.com"]));