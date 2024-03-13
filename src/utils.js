export const getImageUrl = (path) => {
    /* function to construct the absolute path of whatever image is there 
    takes a relative path that is passed to it, and then takes base url of our website appends the relative path onto it and returns the new url*/
    return new URL(`./assets/${path}`, import.meta.url).href;
};
