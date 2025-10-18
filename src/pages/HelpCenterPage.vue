<template>
  <div class="help-center">
    <div class="hc-top-bar">
      <div class="hc-container hc-top-bar__inner">
        <div class="hc-top-bar__left">
          <a
            class="hc-top-bar__notice"
            href="https://resource.saleyee.cn/Files/%E5%85%AC%E5%91%8A%E5%85%AC%E5%BC%80%E4%BF%A1/%E8%AF%A6%E7%BB%86%E8%A7%A3%E8%AF%OTTENGMING%20LIMITED%20%E5%8F%8D%E4%BD%9C%E9%94%80%E9%93%BE%E4%BF%A1%E6%81%AF.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span>【公告】TENGMING LIMITED 公司名称被冒用声明</span>
          </a>
        </div>
        <div class="hc-top-bar__right">
          <a class="hc-link" href="/login">登录</a>
          <a class="hc-link" href="/register">注册</a>
          <a class="hc-link" href="/getting-started">入门指引</a>
          <a class="hc-link" href="/membership">会员权益</a>
        </div>
      </div>
    </div>

    <header class="hc-header">
      <div class="hc-container hc-header__inner">
        <div class="hc-header__brand">
          <a class="hc-header__logo" href="/">
            <img src="https://www.saleyee.com/Content/Images/logo.png" alt="赛盈分销" />
          </a>
          <div class="hc-header__title">
            <h1>赛盈分销</h1>
            <p>帮助中心</p>
          </div>
        </div>
        <nav class="hc-header__nav">
          <a :class="['hc-nav-link', isActive('/') ? 'is-active' : '']" href="/">首页</a>
          <a :class="['hc-nav-link', isActive('/help-center') ? 'is-active' : '']" href="/help-center">帮助中心</a>
          <a class="hc-nav-link" href="https://www.saleyee.com/faq.html" target="_blank" rel="noreferrer">常见问题</a>
          <a class="hc-nav-link" href="https://www.saleyee.com/guide.html" target="_blank" rel="noreferrer">操作指引</a>
          <a class="hc-nav-link" href="https://www.saleyee.com/videos/operational-guidelines.html" target="_blank" rel="noreferrer">视频指南</a>
          <a class="hc-nav-link" href="/contact-us">联系我们</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hc-search-section">
        <div class="hc-container">
          <div class="hc-search-card">
            <div class="hc-search-title">您想要了解什么？</div>
            <el-input
              v-model="searchKeyword"
              placeholder="请输入相关问题关键字进行查询"
              class="hc-search-input"
              clearable
              @keyup.enter="handleSearch"
            >
              <template #append>
                <el-button type="primary" class="hc-search-button" @click="handleSearch">搜索</el-button>
              </template>
            </el-input>
            <div class="hc-search-suggestions">
              <span>热门搜索：</span>
              <a v-for="(item, index) in hotKeywords" :key="item + index" :href="item.link" target="_blank" rel="noreferrer">
                {{ item.label }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="hc-section">
        <div class="hc-container">
          <header class="hc-section__header">
            <h2>常见问题</h2>
            <a class="hc-section__more" href="/faq/hp246053">
              查看更多
              <span class="hc-icon">&raquo;</span>
            </a>
          </header>
          <div class="hc-faq">
            <el-tabs v-model="activeFaq" class="hc-faq__tabs">
              <el-tab-pane
                v-for="category in faqCategories"
                :key="category.key"
                :label="category.title"
                :name="category.key"
              >
                <div class="hc-faq__grid">
                  <a
                    v-for="faq in category.items"
                    :key="faq.href"
                    class="hc-faq__item"
                    :href="`/faq/${extractFaqId(faq.href)}`"
                  >
                    <span class="hc-faq__text">{{ faq.title }}</span>
                    <span class="hc-icon">&raquo;</span>
                  </a>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </section>

      <section class="hc-section hc-section--light">
        <div class="hc-container">
          <header class="hc-section__header">
            <h2>操作指南</h2>
            <a class="hc-section__more" href="https://www.saleyee.com/guide.html" target="_blank" rel="noreferrer">
              查看更多
              <span class="hc-icon">&raquo;</span>
            </a>
          </header>
          <div class="hc-guides">
            <el-row :gutter="20">
              <el-col v-for="guide in guides" :key="guide.href" :xs="24" :sm="12" :md="12" :lg="8">
                <el-card class="hc-guide-card" shadow="hover">
                  <div class="hc-guide-card__body">
                    <div class="hc-guide-card__image">
                      <img :src="guide.image" :alt="guide.title" loading="lazy" />
                    </div>
                    <div class="hc-guide-card__content">
                      <a :href="guide.href" target="_blank" rel="noreferrer" class="hc-guide-card__title">
                        {{ guide.title }}
                      </a>
                      <div class="hc-guide-card__links">
                        <a
                          v-for="(sub, index) in guide.related"
                          :key="guide.href + index"
                          :href="sub.href"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {{ sub.title }}
                        </a>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </section>

      <section class="hc-section">
        <div class="hc-container">
          <header class="hc-section__header">
            <h2>快捷工具</h2>
          </header>
          <div class="hc-tools">
            <el-row :gutter="16">
              <el-col v-for="tool in tools" :key="tool.href" :xs="12" :sm="8" :md="6" :lg="6">
                <a class="hc-tool-card" :href="tool.href" target="_blank" rel="noreferrer">
                  <div class="hc-tool-card__icon">
                    <img :src="tool.image" :alt="tool.title" loading="lazy" />
                  </div>
                  <p class="hc-tool-card__title">{{ tool.title }}</p>
                </a>
              </el-col>
            </el-row>
          </div>
        </div>
      </section>

      <section class="hc-section">
        <div class="hc-container">
          <header class="hc-section__header">
            <h2>赛盈学院</h2>
            <a class="hc-section__more" href="https://blog.saleyee.com" target="_blank" rel="noreferrer">
              查看更多
              <span class="hc-icon">&raquo;</span>
            </a>
          </header>
          <div class="hc-academy">
            <el-row :gutter="20">
              <el-col v-for="article in academyArticles" :key="article.href" :xs="24" :sm="12" :md="8" :lg="6">
                <a class="hc-academy-card" :href="article.href" target="_blank" rel="noreferrer">
                  <div class="hc-academy-card__image">
                    <img :src="article.image" :alt="article.title" loading="lazy" />
                  </div>
                  <p class="hc-academy-card__title">{{ article.title }}</p>
                </a>
              </el-col>
            </el-row>
          </div>
        </div>
      </section>

      <section class="hc-contact">
        <div class="hc-container hc-contact__inner">
          <div class="hc-contact__text">
            找不到你要找的答案？我们在这里提供帮助。
          </div>
          <a class="hc-contact__button" href="/contact-us">
            联系我们
          </a>
        </div>
      </section>
    </main>

    <footer class="hc-footer">
      <div class="hc-container hc-footer__inner">
        <div class="hc-footer__col">
          <h3>关于赛盈</h3>
          <ul>
            <li><a href="/about-saleyee">赛盈简介</a></li>
            <li><a href="/membership">会员权益</a></li>
            <li><a href="https://blog.saleyee.com" target="_blank" rel="noreferrer">赛盈学院</a></li>
            <li><a href="/contact-us">联系我们</a></li>
          </ul>
        </div>
        <div class="hc-footer__col">
          <h3>客户服务</h3>
          <ul>
            <li><a href="/help-center">帮助中心</a></li>
            <li><a href="/faq/hc271661">售后条款</a></li>
            <li><a href="/faq/hp062361">支付方式</a></li>
            <li><a href="/faq/hp981158">物流方式</a></li>
            <li><a href="https://www.saleyee.com/help/14.html" target="_blank" rel="noreferrer">VAT政策解读</a></li>
            <li><a href="https://www.saleyee.com/feedback.html" target="_blank" rel="noreferrer">体验反馈</a></li>
          </ul>
        </div>
        <div class="hc-footer__col">
          <h3>���作联系</h3>
          <ul>
            <li><a href="/distributors">跨境卖家入驻</a></li>
            <li><a href="/supplier">供应商入驻</a></li>
            <li><a href="/partners">合作伙伴</a></li>
            <li><a href="https://www.saleyee.com/help/51.html" target="_blank" rel="noreferrer">商务合作</a></li>
          </ul>
        </div>
        <div class="hc-footer__col hc-footer__col--wechat">
          <h3>赛盈官方微信</h3>
          <div class="hc-footer__qr">
            <img src="https://resource.saleyee.cn/UploadFiles/Images/2024/202412/3d1ddf0c-7c7c-4f2e-a9bd-30813e3e5a99.png" alt="赛盈官���微信" />
            <p>扫码关注获取平台资讯</p>
          </div>
        </div>
      </div>
      <div class="hc-footer__partners">
        <div class="hc-container">
          <div class="hc-footer__partners-title">合作伙伴：</div>
          <ul class="hc-footer__partners-list">
            <li v-for="partner in partners" :key="partner.alt">
              <img :src="partner.src" :alt="partner.alt" loading="lazy" />
            </li>
          </ul>
        </div>
      </div>
      <div class="hc-footer__bottom">
        <div class="hc-container">
          © 2025 Saleyee.com Tengming Limited | 网站地图
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface LinkItem {
  title: string
  href: string
}

interface GuideItem {
  title: string
  href: string
  image: string
  related: LinkItem[]
}

interface ToolItem {
  title: string
  href: string
  image: string
}

interface ArticleItem {
  title: string
  href: string
  image: string
}

interface PartnerItem {
  alt: string
  src: string
}

const faqCategories = [
  {
    key: 'order',
    title: '订单管理',
    items: [
      { title: '下单后如何拦截取消订单？', href: 'https://www.saleyee.com/faq/hp957079.html' },
      { title: '如何查看我的异常订单？', href: 'https://www.saleyee.com/faq/hp727360.html' },
      { title: '偏远州订单报价时间？', href: 'https://www.saleyee.com/faq/hp114827.html' },
      { title: '物流费用收取说明', href: 'https://www.saleyee.com/faq/hp111072.html' },
      { title: '订单审核不通过怎么办？', href: 'https://www.saleyee.com/faq/hp854294.html' },
      { title: '订单被标记异常如何处理？', href: 'https://www.saleyee.com/faq/hp445722.html' },
      { title: '如何申请订单退款？', href: 'https://www.saleyee.com/faq/hp215035.html' },
      { title: '订单处理时效说明', href: 'https://www.saleyee.com/faq/hp492037.html' },
      { title: '海外仓订单发货时效是多久？', href: 'https://www.saleyee.com/faq/hp531926.html' },
      { title: '如何批量上传订单？', href: 'https://www.saleyee.com/faq/hp672849.html' },
      { title: '如何支付订单？', href: 'https://www.saleyee.com/faq/hp835912.html' },
      { title: '订单状态说明', href: 'https://www.saleyee.com/faq/hp932579.html' },
    ],
  },
  {
    key: 'product',
    title: '商品问题',
    items: [
      { title: '平台商品支持哪些平台刊登？', href: 'https://www.saleyee.com/faq/hp222463.html' },
      { title: '如何下载商品图片和描述？', href: 'https://www.saleyee.com/faq/hp562110.html' },
      { title: '商品是否提供质检报告？', href: 'https://www.saleyee.com/faq/hp945012.html' },
      { title: '如何申请特定类目素材？', href: 'https://www.saleyee.com/faq/hp612398.html' },
      { title: '商品价格多久调整一次？', href: 'https://www.saleyee.com/faq/hp319403.html' },
      { title: '海外仓商品库存多久更新一次？', href: 'https://www.saleyee.com/faq/hp710225.html' },
      { title: '支持定制包装吗？', href: 'https://www.saleyee.com/faq/hp232780.html' },
      { title: '如何申请新品推荐？', href: 'https://www.saleyee.com/faq/hp845922.html' },
      { title: '如何查看商品物流方式？', href: 'https://www.saleyee.com/faq/hp129808.html' },
      { title: '如何进行SKU映射？', href: 'https://www.saleyee.com/faq/hp448229.html' },
      { title: '商品图片可以商用吗？', href: 'https://www.saleyee.com/faq/hp516278.html' },
      { title: '如何批量导出商品��', href: 'https://www.saleyee.com/faq/hp787410.html' },
    ],
  },
  {
    key: 'after-sale',
    title: '售后服务',
    items: [
      { title: '如何申请售后服务？', href: 'https://www.saleyee.com/faq/hp246053.html' },
      { title: '售后处理时效说明', href: 'https://www.saleyee.com/faq/hp315274.html' },
      { title: '售后请求支持哪些类型？', href: 'https://www.saleyee.com/faq/hp439107.html' },
      { title: '��换货流程介绍', href: 'https://www.saleyee.com/faq/hp575331.html' },
      { title: '售后凭证需要提交��些资料？', href: 'https://www.saleyee.com/faq/hp678322.html' },
      { title: '售后退款多久到账？', href: 'https://www.saleyee.com/faq/hp744221.html' },
      { title: '售后服务范围����哪些限制？', href: 'https://www.saleyee.com/faq/hp805142.html' },
      { title: '处理结果如何查询���', href: 'https://www.saleyee.com/faq/hp902036.html' },
      { title: '物流破损如何处理？', href: 'https://www.saleyee.com/faq/hp118950.html' },
      { title: '如何提交售后补充信息？', href: 'https://www.saleyee.com/faq/hp260937.html' },
      { title: '售后服务的有效期是多久？', href: 'https://www.saleyee.com/faq/hp332981.html' },
      { title: '如何作废售后申请？', href: 'https://www.saleyee.com/faq/hp431159.html' },
    ],
  },
  {
    key: 'platform',
    title: '赛盈平台使用问题',
    items: [
      { title: '如何绑定店铺？', href: 'https://www.saleyee.com/faq/hp623132.html' },
      { title: '如何开启自动加载订单？', href: 'https://www.saleyee.com/faq/hp782245.html' },
      { title: '如何设置库存同步？', href: 'https://www.saleyee.com/faq/hp964427.html' },
      { title: '如��创建多账号子用户？', href: 'https://www.saleyee.com/faq/hp135292.html' },
      { title: '如何查看财务对账单？', href: 'https://www.saleyee.com/faq/hp267110.html' },
      { title: '如何设置物流模板？', href: 'https://www.saleyee.com/faq/hp344512.html' },
      { title: '如何启用邮件通知？', href: 'https://www.saleyee.com/faq/hp455681.html' },
      { title: '如何修改账号安全信息？', href: 'https://www.saleyee.com/faq/hp521389.html' },
      { title: 'API接口如何申请？', href: 'https://www.saleyee.com/faq/hp638290.html' },
      { title: '如何升级会员等级？', href: 'https://www.saleyee.com/faq/hp793440.html' },
      { title: '平台支持哪些语言？', href: 'https://www.saleyee.com/faq/hp852190.html' },
      { title: '如何联系我们的客户经理？', href: 'https://www.saleyee.com/faq/hp918432.html' },
    ],
  },
  {
    key: 'logistics',
    title: '物流方式',
    items: [
      { title: '物流方式有哪些？', href: '/faq/hp981158' },
      { title: '如何查看物流费用？', href: 'https://www.saleyee.com/faq/hp111072.html' },
      { title: '如何跟踪物流信息？', href: 'https://www.saleyee.com/faq/hp472001.html' },
      { title: '物流时效多久？', href: 'https://www.saleyee.com/faq/hp984032.html' },
      { title: '物流异常如何处理？', href: 'https://www.saleyee.com/faq/hp205310.html' },
      { title: '如何申请地址修改？', href: 'https://www.saleyee.com/faq/hp362710.html' },
      { title: '海外仓派送范围有哪些限制？', href: 'https://www.saleyee.com/faq/hp506329.html' },
      { title: '如何选择合适的物流服务？', href: 'https://www.saleyee.com/faq/hp661039.html' },
      { title: '物流费用结算规则', href: 'https://www.saleyee.com/faq/hp712428.html' },
      { title: '丢件赔付标准', href: 'https://www.saleyee.com/faq/hp842610.html' },
      { title: '如何处理签收异常？', href: 'https://www.saleyee.com/faq/hp903215.html' },
      { title: '如何预约送货时间？', href: 'https://www.saleyee.com/faq/hp974523.html' },
    ],
  },
]

const guides: GuideItem[] = [
  {
    title: '如何实名认证',
    href: 'https://www.saleyee.com/guide/hc313828.html',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2021/202111/2022355e-83ea-4007-ad77-796fed3ddbd2.png',
    related: [
      { title: '企业用户实名认证操作流程', href: 'https://www.saleyee.com/guide/hc363120.html' },
      { title: '实名认证常见问题', href: 'https://www.saleyee.com/guide/hc371112.html' },
    ],
  },
  {
    title: '如何绑定店铺',
    href: 'https://www.saleyee.com/guide/hc021324.html',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2021/202111/27368c66-857c-4110-b017-4b762c462748.png',
    related: [
      { title: '绑定店铺常见问题', href: 'https://www.saleyee.com/guide/hc232042.html' },
      { title: '��何开启订单自动加载', href: 'https://www.saleyee.com/guide/hc428812.html' },
    ],
  },
  {
    title: '订单如何操作',
    href: 'https://www.saleyee.com/guide/hc623421.html',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2021/202111/89df1b72-5ca4-4b93-a23d-edef54dc6063.png',
    related: [
      { title: '订单审核流程介绍', href: 'https://www.saleyee.com/guide/hc711902.html' },
      { title: '如何批量下单', href: 'https://www.saleyee.com/guide/hc821392.html' },
    ],
  },
  {
    title: '如何查看物流信息',
    href: 'https://www.saleyee.com/guide/hc372910.html',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2021/202111/63e355ec-f36a-4a8b-a0cf-31ba71ce6aa8.png',
    related: [
      { title: '物流费用计算规则', href: 'https://www.saleyee.com/guide/hc901284.html' },
      { title: '物流异常处理指南', href: 'https://www.saleyee.com/guide/hc952837.html' },
    ],
  },
  {
    title: '��后申请操作指南',
    href: 'https://www.saleyee.com/guide/hc418220.html',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2021/202111/551e1f49-90f4-4126-a7dd-963be6656211.png',
    related: [
      { title: '售后申请注意事项', href: 'https://www.saleyee.com/guide/hc531270.html' },
      { title: '��后凭证���传要求', href: 'https://www.saleyee.com/guide/hc672518.html' },
    ],
  },
  {
    title: '财务中心功能介绍',
    href: 'https://www.saleyee.com/guide/hc723019.html',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2021/202111/44cd4e21-b5f1-4a35-861f-94618269e7cb.png',
    related: [
      { title: '如何查看账单明细', href: 'https://www.saleyee.com/guide/hc813209.html' },
      { title: '充值/提现操作说明', href: 'https://www.saleyee.com/guide/hc942510.html' },
    ],
  },
]

const tools: ToolItem[] = [
  {
    title: '平台授权',
    href: 'https://www.saleyee.com/user/authorizationing.html',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2021/202111/d87015dd-77e7-4c86-859b-0253b815cc2b.png',
  },
  {
    title: 'SKU映射',
    href: 'https://www.saleyee.com/user/skumapping.html',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2021/202111/15c2c658-dcd9-4d35-906b-8f4b94a82366.png',
  },
  {
    title: '平台载单',
    href: 'https://www.saleyee.com/user/platformorders.html',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2021/202111/3d3fc2a1-2234-4a4a-9175-51b7fd7fe552.png',
  },
  {
    title: '批量下单',
    href: 'https://www.saleyee.com/user/dropshipping.html',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2021/202111/f4cfb369-e2be-48ab-ae5f-c941d2a41911.png',
  },
  {
    title: 'VAT税号管理',
    href: 'https://www.saleyee.com/user/vatmanagement.html',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2021/202112/8493beca-8b79-422c-ae53-1bb247d6a84e.png',
  },
  {
    title: '订单管理',
    href: 'https://www.saleyee.com/user/orders.html',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2021/202112/77f2613a-0865-49a7-a4d1-4f9ac862dbe1.png',
  },
  {
    title: '支付账号',
    href: 'https://www.saleyee.com/user/paymentaccount.html',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2021/202112/16f3be3b-fee0-4110-b80a-9f3945593124.png',
  },
  {
    title: '账号安全',
    href: 'https://www.saleyee.com/user/security.html',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2021/202112/4b9d2652-0818-41af-b0a3-c8d3599ca285.png',
  },
]


const academyArticles: ArticleItem[] = [
  {
    title: '跨境卖家如何抓住Q4旺季？',
    href: 'https://blog.saleyee.com/seasonal-sales-q4',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2022/202208/a5627fc0-9ca4-4218-b5f6-c9d0c5d50666.jpg',
  },
  {
    title: '选品策略：避开爆品误区',
    href: 'https://blog.saleyee.com/product-selection-strategy',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2022/202206/8ed12e1d-4e20-4c08-8d36-dc9d1095cea4.jpg',
  },
  {
    title: '跨境物流费用解析',
    href: 'https://blog.saleyee.com/cross-border-logistics-cost',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2021/202110/f677bbe5-ea75-460d-abbd-b45b538fb970.jpg',
  },
  {
    title: '如何提升店铺转化率',
    href: 'https://blog.saleyee.com/store-conversion-guide',
    image: 'https://resource.saleyee.com/UploadFiles/Images/2021/202109/f6c0a4ae-d8fc-484d-954f-4e544be73dd8.png',
  },
]

const partners: PartnerItem[] = [
  {
    alt: 'Amazon',
    src: 'https://www.saleyee.com/ContentNew/Images/partners/amazon.png',
  },
  {
    alt: 'eBay',
    src: 'https://www.saleyee.com/ContentNew/Images/partners/ebay.png',
  },
  {
    alt: 'Wish',
    src: 'https://www.saleyee.com/ContentNew/Images/partners/wish.png',
  },
  {
    alt: 'Walmart',
    src: 'https://www.saleyee.com/ContentNew/Images/partners/walmart.png',
  },
  {
    alt: 'Shopify',
    src: 'https://www.saleyee.com/ContentNew/Images/partners/shopify.png',
  },
]

const hotKeywords = [
  { label: '账号授权', link: 'https://www.saleyee.com/help/search.html?keywords=%E8%B4%A6%E5%8F%B7%E6%8E%88%E6%9D%83' },
  { label: 'SKU映射', link: 'https://www.saleyee.com/help/search.html?keywords=SKU%E6%98%A0%E5%B0%84' },
  { label: 'VAT税号', link: 'https://www.saleyee.com/help/search.html?keywords=VAT%E7%A8%8E%E5%8F%B7' },
  { label: '批量下单', link: 'https://www.saleyee.com/help/search.html?keywords=%E6%89%B9%E9%87%8F%E4%B8%8B%E5%8D%95' },
]

const activeFaq = ref('order')
const searchKeyword = ref('')

function handleSearch() {
  const keyword = searchKeyword.value.trim()
  const target = keyword
    ? `https://www.saleyee.com/help/search.html?keywords=${encodeURIComponent(keyword)}`
    : 'https://www.saleyee.com/help/search.html'
  window.open(target, '_blank', 'noopener')
}

function isActive(path: string) {
  if (typeof window === 'undefined') return false
  return window.location.pathname.replace(/\/+/g, '/').replace(/\/index\.html$/, '/') === path
}

function extractFaqId(href: string): string {
  const match = href.match(/hp\d+/)
  return match ? match[0] : 'hp246053'
}
</script>

<style scoped>
.help-center {
  font-family: 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif;
  color: #2f2f2f;
  background: #f7f9fb;
}

.hc-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.hc-top-bar {
  background: #f5f7fa;
  border-bottom: 1px solid #e5e7eb;
  font-size: 12px;
  color: #666;
}

.hc-top-bar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
}

.hc-top-bar__left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.hc-top-bar__notice {
  color: #cb261c;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.hc-top-bar__notice:hover {
  opacity: 0.8;
}

.hc-top-bar__right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.hc-link {
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;
}

.hc-link:hover {
  color: #cb261c;
}

.hc-header {
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
}

.hc-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  gap: 24px;
}

.hc-header__brand {
  display: flex;
  align-items: center;
  gap: 16px;
}

.hc-header__logo img {
  height: 60px;
  width: auto;
}

.hc-header__title h1 {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  color: #111827;
}

.hc-header__title p {
  margin: 4px 0 0;
  font-size: 14px;
  color: #6b7280;
}

.hc-header__nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.hc-nav-link {
  color: #374151;
  font-size: 14px;
  text-decoration: none;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.2s ease;
}

.hc-nav-link:hover,
.hc-nav-link.is-active {
  color: #cb261c;
}

.hc-nav-link.is-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #cb261c;
}

main {
  background: linear-gradient(180deg, #f7f9fb 0%, #ffffff 100%);
}

.hc-search-section {
  padding: 40px 0 32px;
  background: url('https://www.saleyee.com/ContentNew/Images/help/help_bg.png') center/cover no-repeat;
}

.hc-search-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.hc-search-title {
  font-size: 22px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 18px;
}

.hc-search-input :deep(.el-input__inner) {
  height: 48px;
  font-size: 15px;
  border-radius: 8px 0 0 8px;
  border-color: #cb261c;
}

.hc-search-input :deep(.el-input-group__append) {
  border: none;
  background: transparent;
  padding: 0;
}

.hc-search-button {
  height: 48px;
  font-size: 15px;
  padding: 0 28px;
  border-radius: 0 8px 8px 0;
  background: #cb261c;
  border: none;
}

.hc-search-button:hover {
  filter: brightness(0.95);
}

.hc-search-suggestions {
  margin-top: 16px;
  font-size: 13px;
  color: #6b7280;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hc-search-suggestions a {
  color: #cb261c;
  text-decoration: none;
}

.hc-search-suggestions a:hover {
  text-decoration: underline;
}

.hc-section {
  padding: 48px 0;
  background: #fff;
}

.hc-section--light {
  background: #f7f9fb;
}

.hc-section__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
}

.hc-section__header h2 {
  font-size: 22px;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.hc-section__more {
  font-size: 14px;
  color: #6b7280;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.hc-section__more:hover {
  color: #cb261c;
}

.hc-icon {
  font-size: 16px;
}

.hc-faq {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
  padding: 24px;
}

.hc-faq__tabs :deep(.el-tabs__header) {
  margin: 0 0 24px;
  border-bottom: 1px solid #e5e7eb;
}

.hc-faq__tabs :deep(.el-tabs__item) {
  font-size: 15px;
  padding: 12px 16px;
}

.hc-faq__tabs :deep(.el-tabs__item.is-active) {
  color: #cb261c;
}

.hc-faq__tabs :deep(.el-tabs__active-bar) {
  background: #cb261c;
}

.hc-faq__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
}

.hc-faq__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  text-decoration: none;
  color: #374151;
  background: #fff;
  transition: all 0.2s ease;
}

.hc-faq__item:hover {
  border-color: #cb261c;
  box-shadow: 0 10px 24px rgba(203, 38, 28, 0.12);
  transform: translateY(-1px);
}

.hc-faq__text {
  flex: 1;
  margin-right: 12px;
  font-size: 14px;
  line-height: 1.4;
}

.hc-guides {
  margin-top: 12px;
}

.hc-guide-card {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hc-guide-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.12);
}

.hc-guide-card__body {
  display: flex;
  gap: 16px;
}

.hc-guide-card__image {
  width: 120px;
  flex-shrink: 0;
}

.hc-guide-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.hc-guide-card__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hc-guide-card__title {
  font-size: 16px;
  color: #111827;
  font-weight: 600;
  text-decoration: none;
}

.hc-guide-card__title:hover {
  color: #cb261c;
}

.hc-guide-card__links {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hc-guide-card__links a {
  font-size: 13px;
  color: #6b7280;
  text-decoration: none;
}

.hc-guide-card__links a:hover {
  color: #cb261c;
}

.hc-tools {
  margin-top: 12px;
}

.hc-tool-card {
  background: #fff;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  padding: 24px 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #1f2937;
  gap: 16px;
  transition: all 0.2s ease;
  height: 100%;
}

.hc-tool-card:hover {
  border-color: transparent;
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);
  transform: translateY(-2px);
}

.hc-tool-card__icon img {
  width: 64px;
  height: 64px;
}

.hc-tool-card__title {
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin: 0;
}

.hc-academy {
  margin-top: 12px;
}

.hc-academy-card {
  display: block;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hc-academy-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 32px rgba(15, 23, 42, 0.12);
}

.hc-academy-card__image {
  height: 150px;
  overflow: hidden;
}

.hc-academy-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hc-academy-card__title {
  padding: 16px;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.hc-contact {
  background: linear-gradient(90deg, #cb261c 0%, #e6443a 100%);
  padding: 36px 0;
  color: #fff;
}

.hc-contact__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.hc-contact__text {
  font-size: 20px;
  font-weight: 600;
}

.hc-contact__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 999px;
  background: #fff;
  color: #cb261c;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.hc-contact__button:hover {
  transform: translateY(-2px);
}

.hc-footer {
  background: #111827;
  color: #f9fafb;
}

.hc-footer__inner {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px;
  padding: 48px 0 40px;
}

.hc-footer__col h3 {
  font-size: 16px;
  margin-bottom: 16px;
  font-weight: 600;
}

.hc-footer__col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.hc-footer__col a {
  color: #d1d5db;
  text-decoration: none;
  font-size: 13px;
}

.hc-footer__col a:hover {
  color: #fff;
}

.hc-footer__col--wechat {
  text-align: center;
}

.hc-footer__qr img {
  width: 120px;
  height: 120px;
  border-radius: 12px;
  object-fit: cover;
}

.hc-footer__qr p {
  margin-top: 10px;
  font-size: 13px;
  color: #d1d5db;
}

.hc-footer__partners {
  background: #0f172a;
  padding: 18px 0;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
}

.hc-footer__partners-title {
  font-size: 13px;
  color: #e5e7eb;
  margin-bottom: 12px;
}

.hc-footer__partners-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.hc-footer__partners-list img {
  height: 28px;
  filter: brightness(0) invert(1);
  opacity: 0.75;
}

.hc-footer__partners-list img:hover {
  opacity: 1;
}

.hc-footer__bottom {
  background: #0b1220;
  padding: 16px 0;
  font-size: 12px;
  color: #9ca3af;
  text-align: center;
}

@media (max-width: 1199px) {
  .hc-container {
    max-width: 960px;
  }

  .hc-header__nav {
    gap: 16px;
  }

  .hc-guide-card__body {
    flex-direction: column;
  }

  .hc-guide-card__image {
    width: 100%;
    height: 160px;
  }
}

@media (max-width: 991px) {
  .hc-container {
    max-width: 720px;
  }

  .hc-top-bar__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    height: auto;
    padding: 8px 0;
  }

  .hc-header__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .hc-header__nav {
    flex-wrap: wrap;
    gap: 12px;
  }

  .hc-faq__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hc-footer__inner {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .hc-container {
    max-width: 540px;
    padding: 0 12px;
  }

  .hc-search-card {
    padding: 24px;
  }

  .hc-section__header {
    flex-direction: column;
    align-items: flex-start;
  }

  .hc-faq__grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .hc-tool-card {
    padding: 20px 12px;
  }

  .hc-contact__inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .hc-contact__button {
    width: 100%;
  }

  .hc-footer__inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 575px) {
  .hc-header__logo img {
    height: 48px;
  }

  .hc-header__title h1 {
    font-size: 20px;
  }

  .hc-search-title {
    font-size: 18px;
  }

  .hc-contact__text {
    font-size: 18px;
  }
}
</style>
