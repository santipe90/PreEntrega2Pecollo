// import { Description } from "@mui/icons-material";


export const products = [
  { id: 1, categoryId: 'Joystick', name: "GameSir X2 Pro", info: `Versatile Compatibility: Supports Xbox Series X/S, Xbox One X/S consoles, and PC Win10 and above (including the Steam game platform).
Precise Control: Features Hall Joysticks and Hall trigger for comfortable feel, long life, and enhanced gaming accuracy.
Plug-and-Play Convenience: USB wired connection (detachable) for easy setup and instant gaming without the need for additional drivers.
Customizable Experience: Includes 2 custom back keys, allowing users to eliminate false triggers and enhance their gaming experience.
Immersive Gameplay: Offers pulse type vibration trigger motor and asymmetric vibration grip motor for immersive tactile feedback.
Enhanced Audio and Comfort: Equipped with a 3.5mm audio interface for seamless connection with gaming headsets and an ergonomic grip with ultra-fine laser engraved texture for comfortable and non-slip gaming sessions.`, description: "Gamepad", stock: 1, price: '$175.000', img: 'https://m.media-amazon.com/images/I/61ba7DkG1bL.jpg'},
  { id: 2, categoryId: 'GamePad', name: "GameSir G8 Galileo", info: `Versatile Compatibility: Supports Xbox Series X/S, Xbox One X/S consoles, and PC Win10 and above (including the Steam game platform).
Precise Control: Features Hall Joysticks and Hall trigger for comfortable feel, long life, and enhanced gaming accuracy.
Plug-and-Play Convenience: USB wired connection (detachable) for easy setup and instant gaming without the need for additional drivers.
Customizable Experience: Includes 2 custom back keys, allowing users to eliminate false triggers and enhance their gaming experience.
Immersive Gameplay: Offers pulse type vibration trigger motor and asymmetric vibration grip motor for immersive tactile feedback.
Enhanced Audio and Comfort: Equipped with a 3.5mm audio interface for seamless connection with gaming headsets and an ergonomic grip with ultra-fine laser engraved texture for comfortable and non-slip gaming sessions.`, description: "Gamepad", stock: 22, price: '$195.000', img: 'https://files.pccasegear.com/images/1667531374-GAMESIR-X2-PRO-XBOX-WH-thb2.jpg'},
  { id: 3, categoryId: 'VR', name: "Meta Quest 3", info: `Versatile Compatibility: Supports Xbox Series X/S, Xbox One X/S consoles, and PC Win10 and above (including the Steam game platform).
Precise Control: Features Hall Joysticks and Hall trigger for comfortable feel, long life, and enhanced gaming accuracy.
Plug-and-Play Convenience: USB wired connection (detachable) for easy setup and instant gaming without the need for additional drivers.
Customizable Experience: Includes 2 custom back keys, allowing users to eliminate false triggers and enhance their gaming experience.
Immersive Gameplay: Offers pulse type vibration trigger motor and asymmetric vibration grip motor for immersive tactile feedback.
Enhanced Audio and Comfort: Equipped with a 3.5mm audio interface for seamless connection with gaming headsets and an ergonomic grip with ultra-fine laser engraved texture for comfortable and non-slip gaming sessions.`, description: "VR Headset", stock: 15, price: '$895.000', img: 'https://www.ventasrosario.com.ar/wp-content/uploads/2023/10/meta-quest-3-new-mixed-reality-headset.jpg'},
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

  export const getProductById = (categoryId) => {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve([products.find(prod => prod.categoryId == categoryId)])
      }, 2000)
    })
  }
  
