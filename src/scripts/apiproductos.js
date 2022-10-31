import axios from 'axios';

const allProducts = async () => {
    const peticion = axios.get('https://jsoncrack.com/editor?json=%5B%5B%22id%22%2C%22img%22%2C%22Name%22%2C%22Descripcion%22%2C%22Precio%22%2C%22Inventario%22%2C%22vendidos%22%2C%22a%7C0%7C1%7C2%7C3%7C4%7C5%7C6%22%2C%22n%7C1%22%2C%22url%22%2C%22Grilla%20Multicolor%22%2C%22Hecha%20a%20mano%20por%20artesanas%20Nari%C3%B1ences%20en%20el%20municipio%20de%20Sandon%C3%A1.%22%2C%22n%7C1T3A%22%2C%22n%7CC%22%2C%22n%7C3%22%2C%22o%7C7%7C8%7C9%7CA%7CB%7CC%7CD%7CE%22%2C%22n%7C2%22%2C%22Bolso%20Elegante%22%2C%22n%7C1DRQ%22%2C%22o%7C7%7CG%7C9%7CH%7CB%7CI%7CD%7CE%22%2C%22Pava%20Fucsia%20para%20mujer%22%2C%22n%7CkpE%22%2C%22o%7C7%7CE%7C9%7CK%7CB%7CL%7CD%7CE%22%2C%22n%7C4%22%2C%22Sombrero%20para%20hombre%22%2C%22Hecho%20a%20mano%20por%20artesanas%20Nari%C3%B1ences%20en%20el%20municipio%20de%20Sandon%C3%A1.%22%2C%22n%7Ctvk%22%2C%22o%7C7%7CN%7C9%7CO%7CP%7CQ%7CD%7CE%22%2C%22a%7CF%7CJ%7CM%7CR%22%5D%2C%22S%22%5D')
    console.log(peticion)
}

export {
    allProducts
}