const apiKey = "RMSHbePltPXdPeP7fPXbGUBAIPagIW60";
// si no llega como parámetro un objeto , se crea uno vació, para que no de error, si llega un objeto que no tiene una palabra clave por defecto se usara la palabra "Chayanne"
export default function getGifs({ keyWord = "chayanne" } = {}) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyWord}&limit=10&offset=0&rating=g&lang=en`;
    return fetch(apiUrl)
        .then((response) => response.json())
        .then((jsonResponse) => {
            //si no hay gifs, devuelve un array vacio
            const { data = [] } = jsonResponse;
            if (Array.isArray(jsonResponse.data)) {
                //cada vez que hagamos un listado de elementos, tiene que tener una key unica
                const gifs = data.map((image) => {
                    const { images, title, id } = image;
                    const url = images.downsized_medium.url;
                    return { url, title, id };
                });
                return gifs;
            }
        });
}
