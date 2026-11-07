// Image manifest - list all images in each category
const imageManifest = {
  bedsheets: [
    'b1.jpg',
    'bd2.jpg',
    'bluebedsheet.jpeg',
    'bluebedsheet8.jpg.jpeg',
    'pinkbedsheet.jpeg',
    'pinkformat.jpg',
    'red2.jpg.jpeg',
    'red3.jpg.jpeg',
    'red4.jpg.jpeg',
    'red5.jpg.jpeg',
    'redformat1.jpg'
  ],
  table_runner: [
    'bp.jpg',
    'g1.jpg',
    'green1.jpg',
    'green2.jpg',
    'grx2.jpg',
    'o1.jpg',
    'orange1.jpg',
    'orangeset1.jpg',
    'purple1.jpg',
    'purple2.jpg',
    'tr1.jpg'
  ],
  cushion: [
    'b1.jpg',
    'b2.jpg',
    'c3.jpg',
    'cb1.jpg',
    'gc1.jpg',
    'p1.jpg',
    'p2.jpg',
    'pd2.jpg',
    'ro1.jpg',
    'sb1.jpg'
  ],
  hangings: [
    'cu1.jpg',
    'hg1.jpg'
  ],
  covers: [
    'tc1.jpg',
    'tc2.jpg'
  ],
  clothing: [
    'grey1.jpg',
    'grey2.jpg',
    'grey4.jpg',
    'grey5.jpg',
    'rustgold1.jpg',
    'rustgold2.jpg',
    'yellow1.jpg',
    'yellow2.jpg'
  ]
}

export const loadCategoryImages = (folderName) => {
  const files = imageManifest[folderName] || []

  const images = files.map(filename => ({
    id: filename.split('.')[0],
    filename,
    src: `/images/${folderName}/${filename}`
  }))

  return images.sort((a, b) => a.id.localeCompare(b.id))
}

export const loadAllCategories = async () => {
  try {
    const response = await fetch('/data/categories.json')
    const data = await response.json()

    // Enrich categories with dynamically loaded images
    const categoriesWithImages = data.categories
      .filter(cat => cat.enabled)
      .map(category => ({
        ...category,
        images: loadCategoryImages(category.folderName)
      }))

    return categoriesWithImages
  } catch (error) {
    console.error('Error loading categories:', error)
    return []
  }
}
