'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

const axios = require('axios')
const slugify = require('slugify')

async function getGameInfo(slug) {
  const { JSDOM } = require('jsdom')

  const body = await axios.get(`https://www.gog.com/game/${slug}`)

  const dom = new JSDOM(body.data)

  const ratingElement = dom.window.document.querySelector('.age-restrictions__icon use')

  const description = dom.window.document.querySelector('.description')

  return {
    rating: ratingElement ?
      ratingElement.getAttribute('xlink:href').replace(/_/g, '').replace(/[^\w-]+/g, '') :
      'FREE',
    short_description: description.textContent.trim().slice(0, 160),
    description: description.innerHTML
  }

}

async function getByName(name, entityName) {
  const item = await strapi.services[entityName].find({ name })
  return item.length ? item[0] : null
}

async function create(name, entityName) {
  const item = await getByName(name, entityName)

  if (!item) {
    return await strapi.services[entityName].create({ name, slug: slugify(name, { lower: true }) })
  }
}

module.exports = {
  populate: async (params) => {
    const url = 'https://www.gog.com/games/ajax/filtered?mediaType=game&page=1&sort=popularity';

    const { data: { products } } = await axios.get(url)
    // .catch(err => console.log('Erro aaa: ', err))

    // console.log(products[1])

    await create(products[2].publisher, "publisher")
    await create(products[2].publisher, "developer")

    // console.log(await getGameInfo(products[1].slug))
  }
};
