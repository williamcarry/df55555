import type { NavItem, FAQSection } from '@/data/helpCenterNav'

function section(title: string, items: string[]): FAQSection {
  return {
    title,
    items: items.map(t => ({ title: t, url: `/operation-guide#${slug(t)}` }))
  }
}

function slug(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const operationGuideNav: NavItem[] = [
  {
    id: 'getting-started',
    title: '如何成为注册会员',
    url: '/operation-guide#getting-started',
    children: [
      {
        id: 'account-security',
        title: '注册流程与账户信息安全',
        url: '/operation-guide#account-security',
        faqs: [
          section('注册流程与账户信息安全', [
            '会员注册流程步骤',
            '会员如何登录以及找回密码',
            '账户信息维护与安全管理说明',
          ])
        ]
      },
      {
        id: 'membership',
        title: '赛盈会员制度',
        url: '/operation-guide#membership',
        faqs: [
          section('赛盈会员制度', [
            '赛盈会员权益说明',
          ])
        ]
      },
      {
        id: 'company-intro',
        title: '赛盈企业介绍',
        url: '/operation-guide#company-intro',
        faqs: [
          section('赛盈企业介绍', [
            '深圳赛盈网络有限公司企业介绍',
          ])
        ]
      }
    ]
  },
  {
    id: 'realname',
    title: '如何实名认证',
    url: '/operation-guide#realname',
    children: [
      {
        id: 'realname-materials',
        title: '实名认证材料',
        url: '/operation-guide#realname-materials',
        faqs: [
          section('实名认证材料清单', [
            '实名认证材料清单所需资料说明',
          ])
        ]
      },
      {
        id: 'personal-realname',
        title: '个人用户实名认证流程',
        url: '/operation-guide#personal-realname',
        faqs: [
          section('个人用户实名认证流程', [
            '个人实名认证流程简图',
            '个人实名认证操作流程',
          ])
        ]
      },
      {
        id: 'enterprise-realname',
        title: '企业用户实名认证流程',
        url: '/operation-guide#enterprise-realname',
        faqs: [
          section('企业用户实名认证流程', [
            '企业实名认证流程指引',
            '企业用户实名认证操作流程',
          ])
        ]
      },
      {
        id: 'realname-status',
        title: '如何查看实名状态',
        url: '/operation-guide#realname-status',
        faqs: [
          section('如何查看实名状态', [
            '如何查看实名认证进度以及状态？',
          ])
        ]
      }
    ]
  },
  {
    id: 'vat-registration',
    title: '如何完成VAT税号登记',
    url: '/operation-guide#vat-registration',
    children: [
      {
        id: 'vat-materials',
        title: 'VAT税号登记资料清单',
        url: '/operation-guide#vat-materials',
        faqs: [
          section('VAT税号登记资料清单', [
            'VAT税号登记准备材料有哪些？',
          ])
        ]
      },
      {
        id: 'vat-enterprise',
        title: '企业卖家登记操作指引',
        url: '/operation-guide#vat-enterprise',
        faqs: [
          section('企业卖家登记操作指引', [
            '企业卖家VAT税号登记操作指引',
          ])
        ]
      },
      {
        id: 'vat-personal',
        title: '个人卖家登记操作指引',
        url: '/operation-guide#vat-personal',
        faqs: [
          section('个人卖家登记操作指引', [
            '卖家VAT税号信息登记操作指引',
          ])
        ]
      },
      {
        id: 'vat-manual-order',
        title: '手动下单与VAT税号关联注意事项',
        url: '/operation-guide#vat-manual-order',
        faqs: [
          section('手动下单与VAT税号关联注意事项', [
            '手动下单商品与VAT税号关联事项说明',
          ])
        ]
      },
      {
        id: 'vat-batch-order',
        title: '批量下单与VAT税号关联注意事项',
        url: '/operation-guide#vat-batch-order',
        faqs: [
          section('批量下单与VAT税号关联注意事项', [
            '商品批量导入下单与VAT税号关联注意事项',
          ])
        ]
      }
    ]
  },
  {
    id: 'product-management',
    title: '商品如何选品以及���理',
    url: '/operation-guide#product-management',
    children: [
      {
        id: 'product-search',
        title: '如何搜索筛选商品',
        url: '/operation-guide#product-search',
        faqs: [
          section('如何搜索筛选商品', [
            '如何搜索及筛选商品？',
          ])
        ]
      },
      {
        id: 'product-info',
        title: '商品信息说明',
        url: '/operation-guide#product-info',
        faqs: [
          section('商品信息说明', [
            '商品页面信息说明',
          ])
        ]
      },
      {
        id: 'one-click-listing',
        title: '一键刊登的操作指南',
        url: '/operation-guide#one-click-listing',
        faqs: [
          section('一键刊登的操作指南', [
            '商品如何一键刊登至亚马逊北美站点店铺？',
            '赛盈商品如何一键刊登至Shopify平台店铺',
            '如何获取Shopify产品ID',
            '如何获取Shopify变体ID',
          ])
        ]
      },
      {
        id: 'download-package',
        title: '如何下载商品数据包',
        url: '/operation-guide#download-package',
        faqs: [
          section('如何下载商品数据包', [
            '如何下载数据包？',
          ])
        ]
      },
      {
        id: 'favorites',
        title: '如何管理收藏商品',
        url: '/operation-guide#favorites',
        faqs: [
          section('如何管理收藏商品', [
            '如何收藏商品？',
          ])
        ]
      }
    ]
  },
  {
    id: 'platform-import',
    title: '平台载单操作指引',
    url: '/operation-guide#platform-import',
    children: [
      {
        id: 'import-intro',
        title: '平台载单简介',
        url: '/operation-guide#import-intro',
        faqs: [
          section('平台载单简介', [
            '载单操作流程简介',
          ])
        ]
      },
      {
        id: 'amazon-auth',
        title: 'Amazon账号授权',
        url: '/operation-guide#amazon-auth',
        faqs: [
          section('Amazon账号授权', [
            'Amazon店铺授权操作流程及注意事项',
          ])
        ]
      },
      {
        id: 'wish-auth',
        title: 'Wish账号授权',
        url: '/operation-guide#wish-auth',
        faqs: [
          section('Wish账号授权', [
            'Wish账号授权注意事项及流程',
          ])
        ]
      },
      {
        id: 'ebay-auth',
        title: 'eBay账号授权',
        url: '/operation-guide#ebay-auth',
        faqs: [
          section('eBay账号授权', [
            'eBay账号授权注意事项及流程',
          ])
        ]
      },
      {
        id: 'saihe-auth',
        title: '赛盒授权流程',
        url: '/operation-guide#saihe-auth',
        faqs: [
          section('赛盒授权流程', [
            '赛盒授权流程',
          ])
        ]
      }
    ]
  },
  {
    id: 'ordering',
    title: '如何下单',
    url: '/operation-guide#ordering',
    children: [
      {
        id: 'ordering-process',
        title: '下单流程介绍',
        url: '/operation-guide#ordering-process',
        faqs: [
          section('下单流程介绍', [
            '商城上的产品该如何下单？',
            '如何使用批发模式完成商品的批量采购？',
          ])
        ]
      },
      {
        id: 'ordering-notes',
        title: '下单后的注意事项',
        url: '/operation-guide#ordering-notes',
        faqs: [
          section('下单后的注意事项', [
            '物流跟踪号以及异常订单处理',
          ])
        ]
      }
    ]
  },
  {
    id: 'payment-guide',
    title: '支付操作指引',
    url: '/operation-guide#payment-guide',
    children: [
      {
        id: 'payment-methods',
        title: '支付方式介绍',
        url: '/operation-guide#payment-methods',
        faqs: [
          section('支付方式介绍', [
            '支付方式及手续费规则说明',
          ])
        ]
      },
      {
        id: 'merge-payment',
        title: '如何合并支付',
        url: '/operation-guide#merge-payment',
        faqs: [
          section('如何合并支付', [
            '如何实现合并支付？',
          ])
        ]
      },
      {
        id: 'bind-account',
        title: '支付账号如何绑定',
        url: '/operation-guide#bind-account',
        faqs: [
          section('支付账号如何绑定', [
            'Payoneer支付账号如何绑定？',
            '已有Payoneer支付账号如何绑定？',
          ])
        ]
      },
      {
        id: 'recharge',
        title: '如何充值',
        url: '/operation-guide#recharge',
        faqs: [
          section('如何充值', [
            '如何在平台进行充值？',
            '如何用Payoneer VMP合作伙伴功能，充值赛盈账户余额？',
          ])
        ]
      },
      {
        id: 'withdraw',
        title: '如何提现',
        url: '/operation-guide#withdraw',
        faqs: [
          section('如何提现', [
            '账户余额如何提现？',
          ])
        ]
      }
    ]
  },
  {
    id: 'business-model',
    title: '平台业务交易模式',
    url: '/operation-guide#business-model',
    children: [
      {
        id: 'self-pickup',
        title: '自提订单业务说明',
        url: '/operation-guide#self-pickup',
        faqs: [
          section('自提订单业务说明', [
            '赛盈分销平台商品自提功能操作指引',
          ])
        ]
      },
      {
        id: 'joint-stock',
        title: '联合备货业务说明',
        url: '/operation-guide#joint-stock',
        faqs: [
          section('联合备货业务说明', [
            '联合备货是什么？',
          ])
        ]
      },
      {
        id: 'inventory-reservation',
        title: '圈货说明以及管理',
        url: '/operation-guide#inventory-reservation',
        faqs: [
          section('圈货说明以及管理', [
            '圈货申请说明及管理查询',
            '圈货功能说明',
          ])
        ]
      }
    ]
  },
  {
    id: 'coupon-guide',
    title: '采购券使用指引',
    url: '/operation-guide#coupon-guide',
    children: [
      {
        id: 'coupon-rules',
        title: '采购券使用规则以及操作指引',
        url: '/operation-guide#coupon-rules',
        faqs: [
          section('采购券使用规则以及操作指引', [
            '采购券状态及使用要求说明',
            '采购券的操��指引',
          ])
        ]
      }
    ]
  },
  {
    id: 'after-sales-guide',
    title: '售后保障服务',
    url: '/operation-guide#after-sales-guide',
    children: [
      {
        id: 'after-sales-service',
        title: '售后保障服务以及注意事项',
        url: '/operation-guide#after-sales-service',
        faqs: [
          section('售后保障服务以及注意事项', [
            '如何购买售后保障服务',
            '售后保障服务详情说明',
          ])
        ]
      }
    ]
  },
  {
    id: 'notifications-guide',
    title: '消息中心的使用说明',
    url: '/operation-guide#notifications-guide',
    children: [
      {
        id: 'notifications-intro',
        title: '消息中心简介说明',
        url: '/operation-guide#notifications-intro',
        faqs: [
          section('消息中心简介说明', [
            '消息中心简介说明',
          ])
        ]
      },
      {
        id: 'stock-subscription',
        title: '商品缺货到货订阅说明',
        url: '/operation-guide#stock-subscription',
        faqs: [
          section('商品缺货到货订阅说明', [
            '商品缺货、到货订阅提醒',
          ])
        ]
      }
    ]
  }
]
