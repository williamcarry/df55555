export interface FAQ {
  title: string
  url: string
}

export interface NavItem {
  id: string
  title: string
  url: string
  children?: NavItem[]
  faqs?: FAQSection[]
}

export interface FAQSection {
  title: string
  items: FAQ[]
}

export const helpCenterNav: NavItem[] = [
  {
    id: 'platform-usage',
    title: '赛盈平台使用问题',
    url: 'https://www.saleyee.com/faq/hc269436.html',
    children: [
      {
        id: 'platform-rules',
        title: '平台相关规则介绍',
        url: 'https://www.saleyee.com/faq/hc456953.html',
        faqs: [
          {
            title: '平台相关规则介绍',
            items: [
              { title: '下载包只有200次吗？', url: 'https://www.saleyee.com/faq/hp746821.html' },
              { title: '货源主要发往哪些国家，是否可实现多国派送？', url: 'https://www.saleyee.com/faq/hp390321.html' },
              { title: '赛盈产品运费怎么计算？', url: 'https://www.saleyee.com/faq/hp133421.html' },
              { title: '中国直发专区商品规则内容说明', url: 'https://www.saleyee.com/faq/hp376149.html' },
              { title: '赛盈海外仓货源一件代发是什么意思？', url: 'https://www.saleyee.com/faq/hp385467.html' },
              { title: '赛盈海外仓货源一件代发的步骤是什么？', url: 'https://www.saleyee.com/faq/hp302813.html' },
              { title: '平台出单模式及合作说明', url: 'https://www.saleyee.com/faq/hp935341.html' },
              { title: '赛盈一件代发有什么优势？', url: 'https://www.saleyee.com/faq/hp087295.html' },
              { title: '交易过程中出了问题该找谁？', url: 'https://www.saleyee.com/faq/hp080876.html' },
              { title: '我的专属客户经理(业务经理)的联系方式在哪里？', url: 'https://www.saleyee.com/faq/hp015424.html' },
              { title: '关于赛盈会员权益补充说明（适用于中国直发专区内所有商品）', url: 'https://www.saleyee.com/faq/hp797337.html' },
              { title: '赛盈平台佣金怎么结算？', url: 'https://www.saleyee.com/faq/hp905148.html' }
            ]
          }
        ]
      },
      {
        id: 'account-issues',
        title: '账户相关问题',
        url: 'https://www.saleyee.com/faq/hc026649.html',
        faqs: [
          {
            title: '账户相关问题',
            items: [
              { title: '注册时，账户类型选择个体或企业有什么不一样？', url: 'https://www.saleyee.com/faq/hp552305.html' },
              { title: '怎么入驻赛盈分销平台？', url: 'https://www.saleyee.com/faq/hp088481.html' },
              { title: '怎么获得赛盈分销资格？', url: 'https://www.saleyee.com/faq/hp363270.html' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'realname',
    title: '实名认证问题',
    url: 'https://www.saleyee.com/faq/hc968495.html',
    children: [
      {
        id: 'realname-issues',
        title: '实名认证相关问题',
        url: 'https://www.saleyee.com/faq/hc618061.html',
        faqs: [
          {
            title: '实名认证相关问题',
            items: [
              { title: '实名认证安全吗？', url: 'https://www.saleyee.com/faq/hp187719.html' },
              { title: '实名认证，选择企业与个人客户类型，有什么区别？', url: 'https://www.saleyee.com/faq/hp285348.html' },
              { title: '如果未进行实名认证，有什么影响？', url: 'https://www.saleyee.com/faq/hp166686.html' },
              { title: '实名认证次数用完了怎么办？', url: 'https://www.saleyee.com/faq/hp623875.html' },
              { title: '企业账户实名认证资料应该填写谁的身份信息？', url: 'https://www.saleyee.com/faq/hp260232.html' },
              { title: '企业账户，账户运营人员不是公司法人怎么办？', url: 'https://www.saleyee.com/faq/hp273620.html' },
              { title: '实名认证后，想修改认证资料怎么办？', url: 'https://www.saleyee.com/faq/hp851266.html' },
              { title: '实名认证无法通过怎么办？', url: 'https://www.saleyee.com/faq/hp493567.html' },
              { title: '我确认信息填写无误，但是为什么还是认证失败了？', url: 'https://www.saleyee.com/faq/hp923420.html' },
              { title: '我企业认证失败后重新提交认证，确认信息填写无误，为何还是一直认证失败？', url: 'https://www.saleyee.com/faq/hp442686.html' },
              { title: '我已经认证了，修改���机号后，怎么又变成了未认证?', url: 'https://www.saleyee.com/faq/hp617815.html' },
              { title: '短信验证码无法获取到的原因：', url: 'https://www.saleyee.com/faq/hp961285.html' },
              { title: '个人二要素核验失败的原因', url: 'https://www.saleyee.com/faq/hp394240.html' },
              { title: '银行卡三四要素核验失败的原因', url: 'https://www.saleyee.com/faq/hp193255.html' },
              { title: '运营商三要素核验失败的原因', url: 'https://www.saleyee.com/faq/hp711225.html' },
              { title: '对公打款失败的原因', url: 'https://www.saleyee.com/faq/hp128858.html' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'stock',
    title: '库存问题',
    url: 'https://www.saleyee.com/faq/hc860056.html',
    children: [
      {
        id: 'stock-issues',
        title: '库存相关问题',
        url: 'https://www.saleyee.com/faq/hc173879.html',
        faqs: [
          {
            title: '库存相关问题',
            items: [
              { title: '出单后缺货怎么办？库存管控怎么设置？', url: 'https://www.saleyee.com/faq/hp800015.html' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'order',
    title: '订单管理',
    url: 'https://www.saleyee.com/faq/hc086135.html',
    children: [
      {
        id: 'order-submit',
        title: '订单提交',
        url: 'https://www.saleyee.com/faq/hc491205.html',
        faqs: [
          {
            title: '订单提交',
            items: [
              { title: '为什么下单时地址无法添加？', url: 'https://www.saleyee.com/faq/hp117108.html' },
              { title: '物流费用收取说明', url: 'https://www.saleyee.com/faq/hp111072.html' },
              { title: '偏远州订单报价时间？', url: 'https://www.saleyee.com/faq/hp114827.html' }
            ]
          }
        ]
      },
      {
        id: 'order-exception',
        title: '订单异常',
        url: 'https://www.saleyee.com/faq/hc579845.html',
        faqs: [
          {
            title: '订单异常',
            items: [
              { title: '如何查看我的异常订单？', url: 'https://www.saleyee.com/faq/hp727360.html' },
              { title: '下单成功后，为什么平台显示库存不足？', url: 'https://www.saleyee.com/faq/hp226648.html' },
              { title: '自提订单 若包裹物流异常该如何处理？', url: 'https://www.saleyee.com/faq/hp924547.html' }
            ]
          }
        ]
      },
      {
        id: 'order-cancel',
        title: '订单取消',
        url: 'https://www.saleyee.com/faq/hc694363.html',
        faqs: [
          {
            title: '订单取消',
            items: [
              { title: '下单后如何拦截取消订单？', url: 'https://www.saleyee.com/faq/hp957079.html' },
              { title: '如何查询订单信息？', url: 'https://www.saleyee.com/faq/hp308406.html' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'product',
    title: '商品问题',
    url: 'https://www.saleyee.com/faq/hc240384.html',
    children: [
      {
        id: 'product-intro',
        title: '赛盈商品介绍',
        url: 'https://www.saleyee.com/faq/hc068842.html',
        faqs: [
          {
            title: '赛盈商品介绍',
            items: [
              { title: '商品有哪些方式可以上架到亚马逊、Shopify等店铺？', url: 'https://www.saleyee.com/faq/hp946862.html' },
              { title: '平台产品都有什么品类？', url: 'https://www.saleyee.com/faq/hp068843.html' },
              { title: '网站在售商品是海外仓现货吗？', url: 'https://www.saleyee.com/faq/hp068844.html' },
              { title: '平台是否提供高清图片和SEO相关优化？', url: 'https://www.saleyee.com/faq/hp068845.html' },
              { title: '商品库存充足吗？', url: 'https://www.saleyee.com/faq/hp068846.html' },
              { title: '如何申请品牌区产品分销权限？', url: 'https://www.saleyee.com/faq/hp068847.html' },
              { title: '如何选择适合在亚马逊或ebay等平台上销售的商品？', url: 'https://www.saleyee.com/faq/hp068848.html' }
            ]
          }
        ]
      },
      {
        id: 'amazon-listing',
        title: '亚马逊商品刊登问题',
        url: 'https://www.saleyee.com/faq/hc083006.html',
        faqs: [
          {
            title: '亚马逊商品刊登问题',
            items: [
              { title: '使用飞刊进行亚马逊商品刊登的话，那是否还需要在赛盈商城做SKU映射？能否实现库存同步、跟踪号同��设置？', url: 'https://www.saleyee.com/faq/hp083006.html' },
              { title: '使用飞刊进行亚马逊商品刊登时，那飞刊授权绑定的亚马逊店铺与赛盈授权绑定的亚马逊店铺，是否可以为同一个？', url: 'https://www.saleyee.com/faq/hp083007.html' },
              { title: '使用赛盈账号授权注册飞刊，这种情况下通过飞刊刊登到亚马逊店铺的赛盈商品，是怎么实现加载订单到赛盈分销账户？', url: 'https://www.saleyee.com/faq/hp472196.html' },
              { title: '如果我在赛盈账户授权绑定了亚马逊店铺A，飞刊账户另外授权绑定了亚马逊店铺B进行商品刊登，那亚马逊店铺B的商品订单能否同步载单到赛盈账户进行下单？', url: 'https://www.saleyee.com/faq/hp389362.html' },
              { title: '使用飞刊进行亚马逊商品刊登的话，SKU映射等操作多久会同步到亚马逊店铺？', url: 'https://www.saleyee.com/faq/hp136072.html' },
              { title: '如果多个亚马逊店铺授权飞刊刊登，是否有亚马逊店铺关联风险？', url: 'https://www.saleyee.com/faq/hp298339.html' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'payment',
    title: '支付问题',
    url: 'https://www.saleyee.com/faq/hc219148.html',
    children: [
      {
        id: 'currency-fee',
        title: '币种及手续费相关问题',
        url: 'https://www.saleyee.com/faq/hc642333.html',
        faqs: [
          {
            title: '币种及手续费相关问题',
            items: [
              { title: '订单支付手续费情况说明', url: 'https://www.saleyee.com/faq/hp793905.html' },
              { title: '订单手续费不一致情况说明', url: 'https://www.saleyee.com/faq/hp173771.html' },
              { title: '为��么退款的时候支付手续费不退？', url: 'https://www.saleyee.com/faq/hp642335.html' }
            ]
          }
        ]
      },
      {
        id: 'refund',
        title: '退款问题',
        url: 'https://www.saleyee.com/faq/hc466955.html',
        faqs: [
          {
            title: '退款问题',
            items: [
              { title: '订单申请售中/售后退款，钱退到哪里？', url: 'https://www.saleyee.com/faq/hp864191.html' },
              { title: '保障服务费用是否可以返还？', url: 'https://www.saleyee.com/faq/hp773281.html' },
              { title: '平台收取退款手续费说明', url: 'https://www.saleyee.com/faq/hp937592.html' },
              { title: '申请退款后为什么查不到退款记录？', url: 'https://www.saleyee.com/faq/hp513929.html' },
              { title: '赛盈平台退款后，多久可以收到退款？', url: 'https://www.saleyee.com/faq/hp962937.html' }
            ]
          }
        ]
      },
      {
        id: 'balance-withdrawal',
        title: '余额提现问题',
        url: 'https://www.saleyee.com/faq/hc288289.html',
        faqs: [
          {
            title: '余额提现问题',
            items: [
              { title: '更换余额提现账号，需提供哪些资料信息？', url: 'https://www.saleyee.com/faq/hp185588.html' },
              { title: '提现需要收取手续费吗？', url: 'https://www.saleyee.com/faq/hp288290.html' },
              { title: '提现状态说明', url: 'https://www.saleyee.com/faq/hp663310.html' },
              { title: '提现处理时效是多久呢?', url: 'https://www.saleyee.com/faq/hp027460.html' }
            ]
          }
        ]
      },
      {
        id: 'payment-security',
        title: '支付安全问题',
        url: 'https://www.saleyee.com/faq/hc729097.html',
        faqs: [
          {
            title: '支付安全问题',
            items: [
              { title: '用Payoneer时，MFA认证及关闭MFA认证功能说明', url: 'https://www.saleyee.com/faq/hp079869.html' }
            ]
          }
        ]
      },
      {
        id: 'payment-account',
        title: '支付账号使用问题',
        url: 'https://www.saleyee.com/faq/hc960578.html',
        faqs: [
          {
            title: '支付账号使用问题',
            items: [
              { title: '支付账号绑定后显示未激活状态是什么意思？', url: 'https://www.saleyee.com/faq/hp567753.html' }
            ]
          }
        ]
      },
      {
        id: 'order-payment',
        title: '订单支付问��',
        url: 'https://www.saleyee.com/faq/hc419361.html',
        faqs: [
          {
            title: '订单支付问题',
            items: [
              { title: '订单付款成功后，显示支付失败或者已关闭怎么办？', url: 'https://www.saleyee.com/faq/hp419361.html' },
              { title: '订单付款完成后为什么显示支付确认中？', url: 'https://www.saleyee.com/faq/hp850171.html' },
              { title: '支付时遇到某些原因导致支付流程无法进行下去怎么办？', url: 'https://www.saleyee.com/faq/hp854945.html' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'after-sale',
    title: '售后服务',
    url: 'https://www.saleyee.com/faq/hc271661.html',
    children: [
      {
        id: 'after-sale-rules',
        title: '售后规则',
        url: 'https://www.saleyee.com/faq/hc457219.html',
        faqs: [
          {
            title: '售后规则',
            items: [
              { title: '关于海外仓售后条款有哪些？', url: 'https://www.saleyee.com/faq/hp457219.html' },
              { title: '中国直发专区"服装"售后服务规则说明', url: 'https://www.saleyee.com/faq/hp457220.html' }
            ]
          }
        ]
      },
      {
        id: 'after-sale-consultation',
        title: '售后咨询',
        url: 'https://www.saleyee.com/faq/hc476291.html',
        faqs: [
          {
            title: '售后咨询',
            items: [
              { title: '如何联系平台客服查询我的订单状态/物流信息/售后工单？', url: 'https://www.saleyee.com/faq/hp599293.html' },
              { title: '商品售后不同情况应对处理流程', url: 'https://www.saleyee.com/faq/hp491825.html' }
            ]
          }
        ]
      },
      {
        id: 'after-sale-return',
        title: '售后退货',
        url: 'https://www.saleyee.com/faq/hc977055.html',
        faqs: [
          {
            title: '售后退货',
            items: [
              { title: '什么是RL?', url: 'https://www.saleyee.com/faq/hp374193.html' },
              { title: '平台支持无理由退货吗？', url: 'https://www.saleyee.com/faq/hp668882.html' },
              { title: '订单退货规定详情说明', url: 'https://www.saleyee.com/faq/hp595031.html' }
            ]
          }
        ]
      },
      {
        id: 'refund-info',
        title: '退款说明',
        url: 'https://www.saleyee.com/faq/hc089856.html',
        faqs: [
          {
            title: '退款说明',
            items: [
              { title: '订单退款金额去向说明', url: 'https://www.saleyee.com/faq/hp285190.html' }
            ]
          }
        ]
      },
      {
        id: 'return-guarantee',
        title: '退货保障服务',
        url: 'https://www.saleyee.com/faq/hc119194.html',
        faqs: [
          {
            title: '退货保障服务',
            items: [
              { title: '退货保障服务规则说明', url: 'https://www.saleyee.com/faq/hp503378.html' },
              { title: '退货保障服务生效前的历史订单处理说明', url: 'https://www.saleyee.com/faq/hp374068.html' },
              { title: '产品质量问题没有购买退货保障服务如何处理？', url: 'https://www.saleyee.com/faq/hp094085.html' },
              { title: '若分销商"无理由退货"售后率过高，平台保留调整以及限制购买退货保障服务的权利', url: 'https://www.saleyee.com/faq/hp119197.html' },
              { title: '如何购买退货保障服务？', url: 'https://www.saleyee.com/faq/hp309528.html' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'coupon',
    title: '采购券的注意事项',
    url: 'https://www.saleyee.com/faq/hc497480.html',
    children: [
      {
        id: 'coupon-usage',
        title: '采购券的获取、使用以及注意事项',
        url: 'https://www.saleyee.com/faq/hc700511.html',
        faqs: [
          {
            title: '采购券的获取、使用以及注意事项',
            items: [
              { title: '如何查看和管理"我的采购券"?', url: 'https://www.saleyee.com/faq/hp700511.html' },
              { title: '如何获取采购券？', url: 'https://www.saleyee.com/faq/hp892358.html' },
              { title: '采购券的类型有哪些？', url: 'https://www.saleyee.com/faq/hp855778.html' },
              { title: '使用采购券生成的订单，若未完成支付动作，采购券是否会退回账户中？', url: 'https://www.saleyee.com/faq/hp354339.html' },
              { title: '使用采购券的商品订单，若发生退款环节，采购券是否作废？', url: 'https://www.saleyee.com/faq/hp776950.html' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'logistics',
    title: '物流方式',
    url: 'https://www.saleyee.com/faq/hc377673.html',
    children: [
      {
        id: 'logistics-intro',
        title: '相关物流方式及发货地区介绍',
        url: 'https://www.saleyee.com/faq/hc884860.html',
        faqs: [
          {
            title: '相关物流方式及发货地区介绍',
            items: [
              { title: '平台上的仓库类型：平台仓、认证仓、自建仓是什么意思？', url: 'https://www.saleyee.com/faq/hp274614.html' },
              { title: '平台上各区域相关发货物流方式', url: 'https://www.saleyee.com/faq/hp981158.html' },
              { title: '赛盈尾程物流方式查询网址', url: 'https://www.saleyee.com/faq/hp884862.html' }
            ]
          }
        ]
      },
      {
        id: 'shipping-time',
        title: '发货&时效',
        url: 'https://www.saleyee.com/faq/hc339975.html',
        faqs: [
          {
            title: '发货&时效',
            items: [
              { title: '平台发什么快递，有跟踪信息吗，时效怎样？', url: 'https://www.saleyee.com/faq/hp339975.html' },
              { title: '订单物流费用是免费的吗？', url: 'https://www.saleyee.com/faq/hp339976.html' },
              { title: '赛盈平台退货的物流费用是怎么算的？', url: 'https://www.saleyee.com/faq/hp339977.html' },
              { title: '平台仓库地址在哪里？', url: 'https://www.saleyee.com/faq/hp339978.html' },
              { title: '下单后到货时间说明', url: 'https://www.saleyee.com/faq/hp159585.html' },
              { title: '中国直发专区物流方式以及时效说明', url: 'https://www.saleyee.com/faq/hp600878.html' }
            ]
          }
        ]
      },
      {
        id: 'delivery-exception',
        title: '签收异常',
        url: 'https://www.saleyee.com/faq/hc081955.html',
        faqs: [
          {
            title: '签收异常',
            items: [
              { title: '物流跟踪号显示已妥投，但终端买家未收到反馈情况说明', url: 'https://www.saleyee.com/faq/hp953250.html' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'vat',
    title: 'VAT（增值税）问题',
    url: 'https://www.saleyee.com/faq/hc144914.html',
    children: [
      {
        id: 'vat-intro',
        title: 'VAT（增值税）相关介绍',
        url: 'https://www.saleyee.com/faq/hc019043.html',
        faqs: [
          {
            title: 'VAT（增值税）相关介绍',
            items: [
              { title: '平台正式执行VAT相关政策相关说明', url: 'https://www.saleyee.com/faq/hp333182.html' },
              { title: '需要增加VAT税额的商品条件是什么？', url: 'https://www.saleyee.com/faq/hp288090.html' },
              { title: '后续对于商品价格加VAT税的调整，对赛盈商城选品分销有什么影响吗？', url: 'https://www.saleyee.com/faq/hp620879.html' },
              { title: '产生的VAT税额由谁承担？', url: 'https://www.saleyee.com/faq/hp546061.html' },
              { title: '赛盈分销平台的VAT税收政策是否会影响到分销商在英国、欧盟区域销售？', url: 'https://www.saleyee.com/faq/hp145516.html' },
              { title: '相关VAT发票如何申请？', url: 'https://www.saleyee.com/faq/hp101374.html' },
              { title: 'VAT税款包括哪些项？', url: 'https://www.saleyee.com/faq/hp708221.html' },
              { title: '发票金额包括哪些项目？', url: 'https://www.saleyee.com/faq/hp707696.html' },
              { title: '有VAT税号的公司卖家，具体需要提供哪些信息？', url: 'https://www.saleyee.com/faq/hp878884.html' },
              { title: '无VAT税号的个人卖家，具体需要提供哪些信息？', url: 'https://www.saleyee.com/faq/hp631462.html' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'law',
    title: '法律条款声明',
    url: 'https://www.saleyee.com/faq/hc887205.html',
    children: [
      {
        id: 'legal-terms',
        title: '赛盈网站法律条款声明',
        url: 'https://www.saleyee.com/faq/hc755652.html',
        faqs: [
          {
            title: '赛盈网站法律条款声明',
            items: [
              { title: '平台服务条款详情声明', url: 'https://www.saleyee.com/faq/hp995674.html' },
              { title: '隐私协议', url: 'https://www.saleyee.com/faq/hp813307.html' },
              { title: '圈货服务条款', url: 'https://www.saleyee.com/faq/hp665504.html' },
              { title: 'VAT承诺函', url: 'https://www.saleyee.com/faq/hp129882.html' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'site',
    title: '网站功能对接问题',
    url: 'https://www.saleyee.com/faq/hc502912.html',
    children: [
      {
        id: 'site-modules',
        title: '网站现有功能模块',
        url: 'https://www.saleyee.com/faq/hc442315.html',
        faqs: [
          {
            title: '网站现有功能模块',
            items: [
              { title: '平台是否支持ERP对接？', url: 'https://www.saleyee.com/faq/hp118345.html' },
              { title: '平台上的商品支持一键刊登吗？', url: 'https://www.saleyee.com/faq/hp365363.html' },
              { title: '赛盈是否可以一键上传物流跟踪号至店铺？', url: 'https://www.saleyee.com/faq/hp795304.html' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'supplier',
    title: '供应商入驻须知',
    url: 'https://www.saleyee.com/faq/hc373194.html',
    children: [
      {
        id: 'supplier-product',
        title: '关于入驻的商品管理',
        url: 'https://www.saleyee.com/faq/hc604453.html',
        faqs: [
          {
            title: '关于入驻的商品管理',
            items: [
              { title: '产品创建支持单个和批量创建吗？', url: 'https://www.saleyee.com/faq/hp269806.html' },
              { title: '批量创建时产品描述是直接填写上传就可以了吗？', url: 'https://www.saleyee.com/faq/hp369916.html' },
              { title: '如何更新库存？', url: 'https://www.saleyee.com/faq/hp737972.html' },
              { title: '所有的图片标签商城都可以展示吗，图片的规格最小是多少？', url: 'https://www.saleyee.com/faq/hp635336.html' },
              { title: '产品价格调整有时间规定吗？', url: 'https://www.saleyee.com/faq/hp983898.html' },
              { title: '首次分销的时候需要绑定仓库和物流吗？', url: 'https://www.saleyee.com/faq/hp877118.html' },
              { title: '首次分销后商城那边会当天安排商品上架到商城吗？', url: 'https://www.saleyee.com/faq/hp635328.html' },
              { title: '绑定的物流和仓库后期可以改成其他的物流和仓库吗？', url: 'https://www.saleyee.com/faq/hp560348.html' },
              { title: '批量调整库存成功了，但是分销商品管理那里的库存还是没有变化？', url: 'https://www.saleyee.com/faq/hp604461.html' },
              { title: '可���多个SKU组合挂单吗？', url: 'https://www.saleyee.com/faq/hp604462.html' },
              { title: '刊登单号是唯一的吗？', url: 'https://www.saleyee.com/faq/hp993925.html' },
              { title: '产品信息变更/价格调整在哪里可以看得到变更记录？', url: 'https://www.saleyee.com/faq/hp811804.html' }
            ]
          }
        ]
      },
      {
        id: 'supplier-order',
        title: '所产生的订单如何管理',
        url: 'https://www.saleyee.com/faq/hc046570.html',
        faqs: [
          {
            title: '所产生的订单如何管理',
            items: [
              { title: '如何获取订单收件人信息？', url: 'https://www.saleyee.com/faq/hp838752.html' },
              { title: '支持单个发货���批量发货吗？（仅针对未进行API对接的自建仓合作模式）', url: 'https://www.saleyee.com/faq/hp046571.html' },
              { title: '无库存的订单可以让客户取消吗？', url: 'https://www.saleyee.com/faq/hp212062.html' },
              { title: '平台支持偏远地区的订单吗？', url: 'https://www.saleyee.com/faq/hp723096.html' },
              { title: '客户要求取消订单但该订单已发货只是未上传跟踪号，此类订单如何处理？', url: 'https://www.saleyee.com/faq/hp151541.html' },
              { title: '实际发货物流和分销时绑定的物流不一致怎么办？', url: 'https://www.saleyee.com/faq/hp533200.html' }
            ]
          }
        ]
      },
      {
        id: 'supplier-settlement',
        title: '关于结算问题的解答',
        url: 'https://www.saleyee.com/faq/hc758024.html',
        faqs: [
          {
            title: '关于结算问题的解答',
            items: [
              { title: '结算周期是多久？', url: 'https://www.saleyee.com/faq/hp498185.html' },
              { title: '收款账户都支持哪些？', url: 'https://www.saleyee.com/faq/hp965352.html' },
              { title: '英国欧洲订单vat税需要供应商缴纳吗？', url: 'https://www.saleyee.com/faq/hp767124.html' }
            ]
          }
        ]
      }
    ]
  }
]
