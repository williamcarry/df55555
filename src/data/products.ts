export interface ProductImage {
  id: string
  url: string
  alt: string
}

export interface ProductLogistics {
  region: string
  warehouse: string
  standardShipping: {
    price: number
    discounted: number
    currency: string
  }
  selfPickup: {
    price: number
    discounted: number
    currency: string
  }
  carriers: string[]
  address: string
}

export interface Product {
  id: string
  sku: string
  spu: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  images: ProductImage[]
  mainImage: string
  dimensions: {
    length: string
    width: string
    height: string
    weight: string
  }
  category: string
  subcategory: string
  publishDate: string
  logistics: ProductLogistics[]
  richContent: string
  attachments: any[]
}

export interface ProductColor {
  name: string
  code: string
}

export interface ProductSize {
  name: string
  code: string
}

export interface ProductAttribute {
  colors: ProductColor[]
  sizes: ProductSize[]
}

export const products: Product[] = [
  {
    id: '75682614',
    sku: '75682614',
    spu: 'BFDSWKJNZY',
    title: '3抽抽屉柜 床头柜储物柜 白色（同款07479869, 69269387）',
    titleEn: 'FCH Modern Simple 3-Drawer Dresser White',
    description: 'What a wonderful FCH Modern Simple 3-Drawer Dresser White. It is made of high quality P2 grade 15mm particle board material, durable and non-toxic for your daily use. It is suitable for indoor use, like family room, bedroom and living room. It is the perfect solution to save space and store scattered and small gadgets. It is delicate design with beautiful appearance, and gives color to your life. Actually, it is a good decoration to embellish your home.',
    descriptionEn: 'What a wonderful FCH Modern Simple 3-Drawer Dresser White. It is made of high quality P2 grade 15mm particle board material, durable and non-toxic for your daily use.',
    mainImage: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202312/b4a7be3d-a601-4332-a34d-47833226c810.Jpeg',
    images: [
      { id: '1', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202312/b4a7be3d-a601-4332-a34d-47833226c810.Jpeg', alt: 'Main' },
      { id: '2', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202312/86bb50ad-7a28-4ade-982f-600530c9bb3f.Jpeg', alt: 'View 2' },
      { id: '3', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202312/2753d850-5827-4fcb-a4ac-bea08144b53e.Jpeg', alt: 'View 3' },
      { id: '4', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202312/6c0c8e08-eea0-4549-a58d-7948b172c108.Jpeg', alt: 'View 4' },
      { id: '5', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202312/ca1e9b4e-269f-437d-a752-a64881c1392c.Jpeg', alt: 'View 5' },
      { id: '6', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202312/8932ee99-2ea8-42e5-87a5-8c3894c9dc8d.Jpeg', alt: 'View 6' },
      { id: '7', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202312/e468b1a5-ebb9-492a-aa81-804ebed20077.Jpeg', alt: 'View 7' },
      { id: '8', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202312/9d6b1b07-61e8-4cb6-a052-8f57b310cb66.Jpeg', alt: 'View 8' },
      { id: '9', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202312/35f2fe0e-a05a-44eb-8d25-37383dc7d6c3.Jpeg', alt: 'View 9' },
      { id: '10', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202312/1f17701d-2c04-4c8a-bdd5-3abc1b3deed9.Jpeg', alt: 'View 10' },
      { id: '11', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202312/264583a7-3d0d-48c1-bb98-b75336a33751.Jpeg', alt: 'View 11' },
      { id: '12', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202312/50c20eb2-be4f-4e0b-a71e-6d33c406e278.Jpeg', alt: 'View 12' },
    ],
    dimensions: {
      length: '76.2 cm',
      width: '52.1 cm',
      height: '11.4 cm',
      weight: '18000 g',
    },
    category: '家居和家具',
    subcategory: '卧室家具',
    publishDate: '2023/12/01',
    logistics: [
      {
        region: 'US',
        warehouse: 'NJ Fieldsboro',
        standardShipping: {
          price: 52.0,
          discounted: 46.8,
          currency: 'USD',
        },
        selfPickup: {
          price: 34.0,
          discounted: 30.6,
          currency: 'USD',
        },
        carriers: ['FedEx', 'USPS', 'UPS'],
        address: 'C/O 1170 Florence, Gate (102-125) Columbus Rd, Fieldsboro, NJ 08505, USA',
      },
    ],
    richContent: '<h3>Product Features</h3><p>Made of high quality P2 grade 15mm particle board material</p><p>Durable and non-toxic for your daily use</p><p>Perfect solution to save space and store scattered gadgets</p><p>Delicate design with beautiful appearance</p>',
    attachments: [],
  },
  {
    id: '50904039',
    sku: '50904039',
    spu: 'BZIXBSBWRA',
    title: '12ft 巨型可怕幽灵 4颗LED灯 火焰和闪烁的红眼睛 充气万圣装饰',
    titleEn: '12ft 4pcs LED Lights Giant Scary Ghost Flames and Flashing Red Eyes Inflatable Halloween Decoration',
    description: '万圣节充气幽灵装饰，采用防水涤纶材料，内置LED灯，可在室外使用，可重复使用。',
    descriptionEn: 'Halloween inflatable ghost decoration with waterproof polyester, built-in LED lights, can be used outdoors, reusable.',
    mainImage: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202308/4695cd17-10c7-473c-960a-fbb9d18c4a90.Jpeg',
    images: [
      { id: '1', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202308/4695cd17-10c7-473c-960a-fbb9d18c4a90.Jpeg', alt: 'Main' },
      { id: '2', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202308/03b9a883-ada3-41af-88a5-0beba02f2eeb.Jpeg', alt: 'Side view' },
      { id: '3', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202309/2a764166-da43-45a1-9fba-ceea6243b6b7.Jpeg', alt: 'Detailed view' },
      { id: '4', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2025/202501/8829a6ab-0a10-4349-a506-12835c30c872.Jpeg', alt: 'Setup example' },
      { id: '5', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2025/202506/89c6cc05-8416-491e-8b0e-3fde8a318f0e.Jpeg', alt: 'Usage example' },
      { id: '6', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202309/3c1b039b-de57-4d8f-805a-4d15658b90c5.Jpeg', alt: 'Close-up' },
    ],
    dimensions: {
      length: '35 cm',
      width: '22 cm',
      height: '12 cm',
      weight: '2210 g',
    },
    category: '庭院和园艺',
    subcategory: '庭院装饰',
    publishDate: '2023/08/11',
    logistics: [
      {
        region: 'US',
        warehouse: 'NJ Fieldsboro',
        standardShipping: {
          price: 37.0,
          discounted: 34.04,
          currency: 'USD',
        },
        selfPickup: {
          price: 26.0,
          discounted: 23.92,
          currency: 'USD',
        },
        carriers: ['FedEx', 'USPS', 'UPS'],
        address: 'C/O 1170 Florence, Gate (102-125) Columbus Rd, Fieldsboro, NJ 08505, USA',
      },
    ],
    richContent: '<h3>产品特点</h3><ul><li>高质量防水涤纶材料</li><li>4颗LED灯，可闪烁和变色</li><li>充气设计，易于存储和运输</li><li>适合室内外使用</li><li>完美的万圣节装饰</li></ul>',
    attachments: [],
  },
  {
    id: '50904040',
    sku: '50904040',
    spu: 'BZIXBSBWRB',
    title: '6ft LED南瓜灯 万圣节充气装饰',
    titleEn: '6ft LED Pumpkin Light Halloween Inflatable Decoration',
    description: '万圣节南瓜灯充气装饰，采用高品质材料，LED发光效果震撼。',
    descriptionEn: 'Halloween pumpkin inflatable decoration with LED lighting effect.',
    mainImage: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202309/3c1b039b-de57-4d8f-805a-4d15658b90c5.Jpeg',
    images: [
      { id: '1', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202309/3c1b039b-de57-4d8f-805a-4d15658b90c5.Jpeg', alt: 'Main' },
      { id: '2', url: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202310/3c1b039b-de57-4d8f-805a-4d15658b90c5.Jpeg', alt: 'Alternate' },
    ],
    dimensions: {
      length: '30 cm',
      width: '25 cm',
      height: '35 cm',
      weight: '1500 g',
    },
    category: '庭院和园艺',
    subcategory: '节日装饰',
    publishDate: '2023/09/15',
    logistics: [
      {
        region: 'US',
        warehouse: 'NJ',
        standardShipping: {
          price: 25.0,
          discounted: 22.5,
          currency: 'USD',
        },
        selfPickup: {
          price: 15.0,
          discounted: 13.5,
          currency: 'USD',
        },
        carriers: ['FedEx', 'UPS'],
        address: 'NJ Warehouse, USA',
      },
    ],
    richContent: '<h3>特点</h3><ul><li>LED发光</li><li>防水材料</li><li>易于充气</li></ul>',
    attachments: [],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByIds(ids: string[]): Product[] {
  return ids.map((id) => getProductById(id)).filter((p) => p !== undefined) as Product[]
}
