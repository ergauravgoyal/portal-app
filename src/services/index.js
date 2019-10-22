export const getProducts = () => {
    fetch("https://shopifyvolodimir-kudriachenkov1.p.rapidapi.com/getProductImagesCount", {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "Shopifyvolodimir-kudriachenkoV1.p.rapidapi.com",
            "x-rapidapi-key": "e6abccc2ddmsh7a26df39af987e5p157021jsn5f9148fd85b2",
            "content-type": "application/x-www-form-urlencoded"
        },
        "body": {}
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
}