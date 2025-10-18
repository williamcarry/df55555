import { reactive, computed } from 'vue'

export type Lang = 'zh-CN' | 'en'

const stored = (typeof localStorage !== 'undefined' && (localStorage.getItem('app.lang') as Lang)) || 'zh-CN'

const state = reactive({ lang: (stored === 'en' ? 'en' : 'zh-CN') as Lang })

const messages: Record<Lang, Record<string, string>> = {
  'zh-CN': {
    'lang.zh': '简体中文',
    'lang.en': 'English',

    'header.international': '国际站',
    'header.wechat': '公众号',
    'header.gettingStarted': '入门指引',
    'header.help': '帮助中心',
    'header.membership': '会员权益',
    'auth.login': '登录',
    'auth.register': '注册',
    'auth.logout': '退出登录',
    'auth.userCenter': '个人中心',

    'header.allCategories': '全部分类',

    'nav.platform': '平台爆款',
    'nav.festival': '节日装饰',
    'nav.new': '本周新品',
    'nav.region': '区域热卖',
    'nav.selected': '平台严选',
    'nav.home': '家���家具&家居收纳',
    'nav.kitchen': '厨房用品&汽摩汽维',
    'nav.top': '顶部',
    'nav.guide': '入门指引',
    'nav.manager': '业务经理',

    'ui.search': '搜索',
    'ui.searchPlaceholder': '请输入商品名称、SKU、SPU零件号等关键词进行搜索…',

    'sections.platform': '平台爆款',
    'sections.festival': '节日装饰',
    'sections.new': '本周新品',
    'sections.region': '区域热卖',
    'sections.selected': '平台严选',

    'cards.newArrival': '新品上架',
    'cards.hotSale': '热卖单品',
    'cards.curated': '精选推荐',
    'cards.homePreferred': '家居优选',
    'cards.categoryPicks': '品类精选',

    'platform.comingSoon': '敬请期待…',

    'login.title': '欢迎登录',
    'login.accountPlaceholder': '手机号',
    'login.passwordPlaceholder': '密码',
    'login.forgot': '忘记密码？',
    'login.register': '免费注册新账号',
    'login.submit': '登录',
    'login.altBanner': '登录横幅',
    'login.captchaPlaceholder': '请输入验证码',
    'login.captchaMismatch': '验证码错误，请重试',
    'login.captchaRequired': '请填写验证码',
    'login.captchaAlt': '验证码图像',

    'register.welcome': '欢迎免费注册',
    'register.title': '注册',
    'register.area': '区号',
    'register.phone': '手机号码',
    'register.password': '请输入密码(须含字母及数字，区分大小写，8-32位)',
    'register.confirm': '请再次输入密码',
    'register.sms': '请输入短信验证码',
    'register.getCode': '获取验证码',
    'register.invite': '邀请码（没有可不填）',
    'register.agree': '我已阅读并同意',
    'register.terms': '《服务条款》',
    'register.privacy': '《隐私协议》',
    'register.next': '下一步',
    'register.already': '已有账号,马上登录',

    'footer.about': '关于赛盈',
    'footer.customer': '客户服务',
    'footer.partners': '合作伙伴',
    'footer.weixin': '赛盈官方微信',
    'footer.scan': '扫码关注获取平台资讯',
    'footer.friendLinks': '友情链接：',
    'footer.more': '更多…',

    'messages.productNotFound': '商品未找到',
    'messages.productNotFoundDesc': '抱歉，找不到该商品。',
    'messages.allOverseas': '所有商品均为海外仓存储，库存充足。',
    'messages.shippingInfo': '标准物流2-8天送达，自提方式更快更便宜。',
    'messages.tracking': '24小时内获得追踪号，全程可跟踪。',
    'messages.processing': '24小时内发货，2-8天送达。',

    'labels.distribution': '配送方式',
    'labels.standardShipping': '标准物流',
    'labels.selfPickup': '自提',
    'labels.dimensions': '产品规格',
    'labels.length': '长',
    'labels.width': '宽',
    'labels.height': '高',
    'labels.weight': '重量',
    'labels.description': '产品描述',
    'labels.logisticsInfo': '物流配送信息',
    'labels.inOverseas': '海外仓存储',
    'labels.shipping': '配送',
    'labels.tracking': '物流追踪',
    'labels.processing': '处理时间',
    'labels.shippingAddresses': '发货地址',
    'labels.carriers': '承运商',

    'buttons.submitApplication': '提交申请',
    'buttons.addToCart': '加入购物车',
    'buttons.download': '下载数据包',
    'buttons.notification': '到货通知',

    'tabs.productDetails': '详细信息',
    'tabs.logistics': '物流配送信息',
    'tabs.addresses': '发货/退货地址',
  },
  en: {
    'lang.zh': '简体中文',
    'lang.en': 'English',

    'header.international': 'Global Site',
    'header.wechat': 'WeChat',
    'header.gettingStarted': 'Getting Started',
    'header.help': 'Help Center',
    'header.membership': 'Membership',
    'auth.login': 'Log in',
    'auth.register': 'Sign up',
    'auth.logout': 'Log out',
    'auth.userCenter': 'Personal Center',

    'header.allCategories': 'All Categories',

    'nav.platform': 'Hot Picks',
    'nav.festival': 'Seasonal Decor',
    'nav.new': 'New This Week',
    'nav.region': 'Regional Bestsellers',
    'nav.selected': 'Editor’s Choice',
    'nav.home': 'Home & Storage',
    'nav.kitchen': 'Kitchen & Auto Tools',
    'nav.top': 'Top',
    'nav.guide': 'Guide',
    'nav.manager': 'Account Manager',

    'ui.search': 'Search',
    'ui.searchPlaceholder': 'Search by product name, SKU, SPU part number…',

    'sections.platform': 'Hot Picks',
    'sections.festival': 'Seasonal Decor',
    'sections.new': 'New This Week',
    'sections.region': 'Regional Bestsellers',
    'sections.selected': 'Editor’s Choice',

    'cards.newArrival': 'New Arrival',
    'cards.hotSale': 'Hot Item',
    'cards.curated': 'Curated Picks',
    'cards.homePreferred': 'Home Picks',
    'cards.categoryPicks': 'Category Picks',

    'platform.comingSoon': 'Coming soon…',

    'login.title': 'Log in',
    'login.accountPlaceholder': 'Phone or Email',
    'login.passwordPlaceholder': 'Password',
    'login.forgot': 'Forgot password?',
    'login.register': 'Create account',
    'login.submit': 'Log in',
    'login.altBanner': 'Login banner',
    'login.captchaPlaceholder': 'Verification code',
    'login.captchaMismatch': 'Incorrect verification code, please try again.',
    'login.captchaRequired': 'Please enter the verification code.',
    'login.captchaAlt': 'Verification image',

    'register.welcome': 'Welcome to register',
    'register.title': 'Register',
    'register.area': 'Area Code',
    'register.phone': 'Phone Number',
    'register.password': 'Enter password (8-32 chars, letters and numbers, case sensitive)',
    'register.confirm': 'Confirm password',
    'register.sms': 'SMS verification code',
    'register.getCode': 'Get code',
    'register.invite': 'Invitation code (optional)',
    'register.agree': 'I have read and agree to',
    'register.terms': 'Terms of Service',
    'register.privacy': 'Privacy Policy',
    'register.next': 'Next',
    'register.already': 'Already have an account? Log in',

    'footer.about': 'About Saleyee',
    'footer.customer': 'Customer Service',
    'footer.partners': 'Partnership',
    'footer.weixin': 'Official WeChat',
    'footer.scan': 'Scan QR to follow',
    'footer.friendLinks': 'Friend Links:',
    'footer.more': 'More…',

    'messages.productNotFound': 'Product Not Found',
    'messages.productNotFoundDesc': 'Sorry, we could not find the product.',
    'messages.allOverseas': 'All products are stored in overseas warehouses with sufficient inventory.',
    'messages.shippingInfo': 'Standard shipping 2-8 days delivery, self-pickup is faster and cheaper.',
    'messages.tracking': 'Get tracking number within 24 hours, fully trackable.',
    'messages.processing': 'Ship within 24 hours, 2-8 days delivery.',

    'labels.distribution': 'Shipping Options',
    'labels.standardShipping': 'Standard Shipping',
    'labels.selfPickup': 'Self-Pickup',
    'labels.dimensions': 'Dimensions',
    'labels.length': 'Length',
    'labels.width': 'Width',
    'labels.height': 'Height',
    'labels.weight': 'Weight',
    'labels.description': 'Description',
    'labels.logisticsInfo': 'Logistics Information',
    'labels.inOverseas': 'Overseas Storage',
    'labels.shipping': 'Shipping',
    'labels.tracking': 'Tracking',
    'labels.processing': 'Processing Time',
    'labels.shippingAddresses': 'Shipping Address',
    'labels.carriers': 'Carriers',

    'buttons.submitApplication': 'Submit Application',
    'buttons.addToCart': 'Add to Cart',
    'buttons.download': 'Download Data Package',
    'buttons.notification': 'Stock Notification',

    'tabs.productDetails': 'Product Details',
    'tabs.logistics': 'Logistics Information',
    'tabs.addresses': 'Shipping/Return Address',
  },
}

export const currentLang = computed(() => state.lang)

export function setLang(lang: Lang) {
  state.lang = lang
  try {
    localStorage.setItem('app.lang', lang)
  } catch {}
  if (typeof document !== 'undefined') document.documentElement.lang = lang
}

export function t(key: string): string {
  const lang = state.lang
  return messages[lang][key] ?? messages['zh-CN'][key] ?? key
}
