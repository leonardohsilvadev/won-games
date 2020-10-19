'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

const axios = require('axios')

module.exports = {
  populate: async (params) => {
    const url = 'https://www.gog.com/games/ajax/filtered?mediaType=game&page=1&sort=popularity';

    const { data: { products } } = await axios.get(url)
    // .catch(err => console.log('Erro aaa: ', err))

    console.log(products)
  }
};
