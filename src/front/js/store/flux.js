const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      // message: null,
      // demo: [
      // 	{
      // 		title: "FIRST",
      // 		background: "white",
      // 		initial: "white"
      // 	},
      // 	{
      // 		title: "SECOND",
      // 		background: "white",
      // 		initial: "white"
      // 	}
      // ]
      menu: [
        {
          price: 3.5,
          name: "ENSALADA CÉSAR",
          ingredients:
            "CON PECHUGA EMPANADA, DADITOS DE QUESO, HUEVO, PICATOSTES, SALSA CÉSAR O ACEITE Y VINAGRE",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ENSALADAS WALDORF",
          ingredients:
            "CON POLLO PLANCHA, NUECES, MANZANA, APIO, HUEVO, SALSA CÉSAR O MOSTAZA-MIEL",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ENSALADA HARRISON FORD",
          ingredients:
            "CON PECHUGA EMPANADA, BACON, DADITOS DE QUESO, PICATOSTES, HUEVO, SALSA MOSTAZA Y MIEL",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ENSALADA ESPAÑOLA",
          ingredients:
            "CON LECHUGAS, TOMATES, HUEVO COCIDO, ESPARRAGO, ALCACHOFA, PIMIENTO, OLIVAS, ATÚN. CON ACEITE DE OLIVA",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "BOCADILLO DE ATÚN",
          ingredients: "CON TOMATE Y ANCHOA. + PATATAS FRITAS",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "¡PICA! -POLLO AL CURRY VERDE",
          ingredients: "CON PIMIENTOS Y ZANAHORIAS. ARROZ",
          vegetarian: false,
          vegan: false,
          special: true,
        },
        {
          price: 3.5,
          name: "FABADA ASTURIANA",
          ingredients: "DE LA CASA",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ENSALADA DE LENTEJAS Y ARROZ BASMATI",
          ingredients: "CON MANZANA, QUESO FRESCO Y ATÚN",
          vegetarian: false,
          vegan: false,
          special: true,
        },
        {
          price: 3.5,
          name: "ENSALADA DE HABICHUELAS FINAS",
          ingredients: "CON PIMIENTOS Y GAMBITAS",
          vegetarian: false,
          vegan: false,
          special: true,
        },
        {
          price: 3.5,
          name: "BERENJENAS RELLENAS DE CARNE Y GRATINADAS",
          ingredients: "CON PATATAS",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "FETTUCINI",
          ingredients: "CON PESTO DE ALBAHACA Y AVELLANA, POLLO Y QUESO",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "GAZPACHO ANDALUZ",
          ingredients: "CON SUS TROPEZONES",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ENSALADA DE PASTA",
          ingredients: "CON POLLO ASADO, QUESO DE CABRA Y MAYONESA",
          vegetarian: false,
          vegan: false,
          special: true,
        },
        {
          price: 3.5,
          name: "ARROZ",
          ingredients: "DE COSTILLAS, MAGRO Y POLLO",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ENSALADA MURCIANA",
          ingredients: "CON ATÚN, CABALLA, ANCHOA, HUEVO, ETC",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ENSALADA DE PASTA IDEAL",
          ingredients: "CON PAVO, QUESO FRESCO, HUEVO, MANZANA, AGUACATE",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ESPAGUETTI CHINOS",
          ingredients: "CON PECHUGA DE POLLO, CALABACÍN Y SOJA",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ALBÓNDIGAS HUERTANAS",
          ingredients: "CON ARROZ BLANCO O PATATAS",
          vegetarian: true,
          vegan: true,
          special: false,
        },
        {
          price: 3.5,
          name: "ENSALADA DE PATATA",
          ingredients:
            "CON ATÚN, PIMIENTO, TOMATE, HUEVO, ALCACHOFA, OLIVAS Y MAYONESA",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ARROZ A LA CUBANA",
          ingredients: "CON VERDURITAS VARIADAS Y HUEVO",
          vegetarian: true,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "WRAP CESAR",
          ingredients: "CON PECHUGA EMPANADA, BACON, QUESO, ETC. SALSA CÉSAR",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "WRAP DE VERANO",
          ingredients:
            "CON ATÚN, CABALLA, ANCHOA, QUESO FRESCO, ACEITUNAS NEGRAS, ZANAHORIA, LECHUGA, MAYONESA",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ENSALADA DE ARROZ INTEGRAL",
          ingredients: "CON PECHUGA EMPANADA,ATÚN, HUEVO, TOMATE, MAÍZ",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ESPAGUETTI CARBONARA",
          ingredients: "",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ESPAGUETTI A LA BOLOÑESA",
          ingredients: "",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "TAJÍN VEGANO",
          ingredients: "CON VERDURAS SALTEADAS, ALMENDRAS, DÁTILES Y PASAS",
          vegetarian: true,
          vegan: true,
          special: false,
        },
        {
          price: 3.5,
          name: "ENSALADA DE PASTA",
          ingredients: "CON ATÚN, CANGREJO Y QUESO FRESCO",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ENSALADA DE PASTA",
          ingredients: "CON POLLO, BACON, QUESO",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "TAJÍN DE POLLO",
          ingredients:
            "CON SALTEADO DE POLLO Y VERDURAS, ALMENDRAS, DÁTILES Y PASAS SOBRE COUS-COUS",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ARROZ A LA CUBANA",
          ingredients: "CON SALSA BOLOÑESA Y HUEVO",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "TACOS CARNITAS",
          ingredients: "CON CARNE DE SECRETO IBÉRICO, GUACAMOLE Y QUESO",
          vegetarian: false,
          vegan: false,
          special: true,
        },
        {
          price: 3.5,
          name: "TACOS CARNITAS",
          ingredients: "CON JALAPEÑO",
          vegetarian: false,
          vegan: false,
          special: true,
        },
        {
          price: 3.5,
          name: "TACOS MEXICANOS",
          ingredients: "DE POLLO, PIMIENTOS Y CEBOLLA. GUACAMOLE",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ARROZ A LA CUBANA",
          ingredients: "CON PECHUGA EMPANADA Y HUEVO FRITO",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "PASTA ITALIANA POMODORO",
          ingredients:
            "CON BERENJENA PLANCHA, SALSA DE TOMATE DULCE, ACEITE DE ALBAHACA Y AVELLANA Y QUESO FRESCO",
          vegetarian: true,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "MACARRONES",
          ingredients: "A LA BOLOÑESA",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "MACARRONES",
          ingredients: "CON SALSA CARBONARA",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "FIDEUÁ",
          ingredients: "DE CALAMAR, CHIPI, ATÚN",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "RIGATONI",
          ingredients: "CON SALSA ALFREDO CON DADITOS DE POLLO Y JAMÓN",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "WOK DE TALLARINES",
          ingredients: "CON POLLO, VERDURAS FRESCAS Y SOJA",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "TALLARINES JAPONESES",
          ingredients:
            "CON SALTEADO DE POLLO, VERDURAS, SALSA TERIYAKI, CACAHUETES CARAMELIZADOS Y HUEVO FRITO",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "HAMBURGUESA DE CERDO IBÉRICO",
          ingredients: "CON BACON, QUESO, CEBOLLA, TOMATE, LECHUGA",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "ALBÓNDIGAS DE LA ABUELA",
          ingredients: "DE CARNE CON PATATAS",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 3.5,
          name: "HAMBURGUESA CRUNCHY",
          ingredients: "CON QUESO, HUEVO, TOMATE Y CEBOLLA",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 4.0,
          name: "PECHUGAS A LA PLANCHA",
          ingredients: "CON SALSA DE SETAS Y PATATAS",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 4.0,
          name: "HAMBURGUESA 100 % TERNERA",
          ingredients: "CON BACON, QUESO, CEBOLLA, TOMATE, LECHUGA",
          vegetarian: false,
          vegan: false,
          special: false,
        },

        {
          price: 4.0,
          name: "LASAÑA CASERA",
          ingredients: "DE POLLO, SETAS Y QUESO. GRATINADA",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 4.0,
          name: "ARROZ CON COSTRA DE LA CASA",
          ingredients: "",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 4.0,
          name: "PECHUGAS EMPANADAS",
          ingredients: "CON PATATAS O VERDURAS",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 4.0,
          name: "PECHUGAS A LA PLANCHA",
          ingredients: "CON VERDURAS PLANCHA",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 4.0,
          name: "MAGRA EN SALSA",
          ingredients: "CON HUEVO Y PATATAS",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 4.0,
          name: "MUSLO DE POLLO AL HORNO",
          ingredients: "CON PATATAS ASADAS",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 4.5,
          name: "CRUJIPOLLO AL HORNO",
          ingredients: "CON SALSA DE SETAS Y PATATAS",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 4.5,
          name: "SECRETO IBÉRICO AL PEDRO XIMENEZ",
          ingredients: "CON HUEVO FRITO Y PATATAS (PLATO DULCE)",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 4.5,
          name: "CARRILLERA IBÉRICA",
          ingredients: "EN SALSA DE VINO VIEJO CON PATATAS ASADAS",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 4.5,
          name: "ATÚN A LA PLANCHA",
          ingredients: "",
          vegetarian: false,
          vegan: false,
          special: false,
        },
        {
          price: 4.5,
          name: "MERLUZA A LA PLANCHA",
          ingredients: "CON ARROZ BLANCO, VERDURAS O PATATAS ASADAS",
          vegetarian: false,
          vegan: false,
          special: false,
        },
      ],
      order: [],
      client: {},
      token: null,
    },
    actions: {
      // 	// Use getActions to call a function within a fuction
      // 	exampleFunction: () => {
      // 		getActions().changeColor(0, "green");
      // 	},

      // 	getMessage: () => {
      // 		// fetching data from the backend
      // 		fetch(process.env.BACKEND_URL + "/api/hello")
      // 			.then(resp => resp.json())
      // 			.then(data => setStore({ message: data.message }))
      // 			.catch(error => console.log("Error loading message from backend", error));
      // 	},
      // 	changeColor: (index, color) => {
      // 		//get the store
      // 		const store = getStore();

      // 		//we have to loop the entire demo array to look for the respective index
      // 		//and change its color
      // 		const demo = store.demo.map((elm, i) => {
      // 			if (i === index) elm.background = color;
      // 			return elm;
      // 		});

      // 		//reset the global store
      // 		setStore({ demo: demo });
      // 	}
      makeOrder: (index) => {
        const store = getStore();
        store.order.push(store.menu[index]);
      },
      removeFromOrder: (i) => {
        const store = getStore();
        let aux = store.order.filter((item, index) => index !== i);
        setStore({ order: aux });
      },
      setClientInfo: (client) => {
        setStore({ client: client });
      },
      login: (userInfo) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(userInfo);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/api/login", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            sessionStorage.setItem("token", result.access_token);
            setStore({ token: result.access_token });
          })
          .catch((error) => console.log("error", error));
      },
      syncLocalToken: () => {
        const token = sessionStorage.getItem("token");
        if (token && token != "" && token != null && token != undefined)
          setStore({ token: token });
      },
      logout: () => {
        sessionStorage.removeItem("token");
        setStore({ token: null });
      },
    },
  };
};

export default getState;
