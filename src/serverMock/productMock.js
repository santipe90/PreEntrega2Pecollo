// import { Description } from "@mui/icons-material";


export const products = [
  { id: 1, categoryId: 'Joystick', name: "GameSir X2 Pro", info: `Especialmente diseñado para Xbox Cloud Gaming en smartphones Android, 
  el X2 Pro ofrece gatillos analógicos de efecto de sala, joysticks analógicos ALPS, 2 botones traseros asignables y agarres texturizados.`, 
description: "Gamepad", stock: 1, price: '$175.000', img: 'https://m.media-amazon.com/images/I/61ba7DkG1bL.jpg'},

  { id: 2, categoryId: 'GamePad', name: "GameSir G8 Galileo", info: `El GameSir G8 Galileo es un controlador de juegos móvil que vale la pena comprar si eres un jugador serio que quiere disfrutar 
  de una experiencia de juego similar a una consola en tu teléfono inteligente. Es un controlador bien diseñado, con buen rendimiento y con buen soporte que funciona con dispositivos 
  iOS y Android y admite una amplia gama de juegos, incluidos los servicios de juegos en la nube.`, 
description: "Gamepad", stock: 22, price: '$195.000', img: 'https://files.pccasegear.com/images/1667531374-GAMESIR-X2-PRO-XBOX-WH-thb2.jpg'},

  { id: 3, categoryId: 'VR', name: "Meta Quest 3", info: `Crea tu propio avatar personalizado, únete a salas de chat y participa en una variedad de actividades sociales, como jugar juegos, 
  ver películas juntos o simplemente charlar y pasar el rato. Con el Meta Quest 3, nunca estarás solo, ¡incluso cuando estés físicamente solo en casa!`, 
description: "VR Headset", stock: 15, price: '$895.000', img: 'https://www.ventasrosario.com.ar/wp-content/uploads/2023/10/meta-quest-3-new-mixed-reality-headset.jpg'},
  ];

  export const getProducts = () => {
    return new Promise((resolve, reject)=> {
        if (products.length === 0) {
            reject(new Error('no hay productos'));
        }
        setTimeout(()=>{
      resolve(products);
    }, 2000);
    });
  };

  export const getProductByCategory = (categoryId) => {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve([products.find(prod => prod.categoryId == categoryId)])
      }, 2000)
    })
  }
  
  export const getProductById = (id) => {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id == id))
      }, 2000)
    })
  }