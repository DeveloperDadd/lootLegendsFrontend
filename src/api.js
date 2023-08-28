import axios from 'axios';

export const fetchSlug = async (slug) => {
    const APIKEY = '752261bddc104be7860f16124d616255';
    let slug = userInput.split(' ').join('-').toLowerCase();
    const apiUrl = `https://api.rawg.io/api/games?key=${APIKEY}&search=${slug}&page_size=3`;
    
    try {
      const response = await axios.get(apiUrl);
      const gameData = response.data.data;
      const images = {
        leaf: [],
        flower: [],
        bark: [],
      };
      if (plantData.main_species) {
        if (plantData.main_species.images && plantData.main_species.images.leaf) {
          plantData.main_species.images.leaf.forEach((image) => {
            images.leaf.push(image.image_url);
          });
        }
        if (plantData.main_species.images && plantData.main_species.images.flower) {
          plantData.main_species.images.flower.forEach((image) => {
            images.flower.push(image.image_url);
          });
        }
        if (plantData.main_species.images && plantData.main_species.images.bark) {
          plantData.main_species.images.bark.forEach((image) => {
            images.bark.push(image.image_url);
          });
        }
        const commonNames = plantData.main_species.common_names
          ? plantData.main_species.common_names.eng || []
          : [];
        // Include genus and family information
        const genus = plantData.main_species.genus || '';
        const family = plantData.main_species.family || '';
        const scientific_name = plantData.main_species.scientific_name || '';
        const formattedData = {
          common_names: {
            eng: commonNames,
          },
          images,
          genus,
          family,
          scientific_name,
        };
        return formattedData;
      }
      return {
        common_names: {
          eng: [],
        },
        images: {
          leaf: [],
          flower: [],
          bark: [],
        },
        genus: '',
        family: '',
        scientific_name: '',
      };
    } catch (error) {
      console.error('Error fetching plant data by slug:', error);
      return {
        common_names: {
          eng: [],
        },
        images: {
          leaf: [],
          flower: [],
          bark: [],
        },
      };
    }
  };