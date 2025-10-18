<template>
  <div class="faq-detail-page">
    <!-- Top bar -->
    <div class="faq-top-bar">
      <div class="faq-container faq-top-bar__inner">
        <div class="faq-top-bar__left">
          <a
            class="faq-top-bar__notice"
            href="https://resource.saleyee.cn/Files/%E5%85%AC%E5%91%8A%E5%85%AC%E5%BC%80%E4%BF%A1/%E8%AF%A6%E7%BB%86%E8%A7%A3%E8%AF%A6TENGMING%20LIMITED%20%E5%8F%8D%E4%BD%9C%E9%94%80%E9%93%BE%E4%BF%A1%E6%81%AF.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span>【公告】TENGMING LIMITED 公司名称冒用声明</span>
          </a>
        </div>
        <div class="faq-top-bar__right">
          <a class="faq-top-bar__link" href="/login">登录</a>
          <a class="faq-top-bar__link" href="/register">注册</a>
          <a class="faq-top-bar__link" href="/getting-started">入门指引</a>
          <a class="faq-top-bar__link" href="/membership">会员���益</a>
        </div>
      </div>
    </div>

    <!-- Header -->
    <header class="faq-header">
      <div class="faq-container faq-header__inner">
        <div class="faq-header__brand">
          <a class="faq-header__logo" href="/">
            <img src="https://www.saleyee.com/Content/Images/logo.png" alt="赛盈分销" />
          </a>
          <div class="faq-header__title">
            <h1>赛盈分销</h1>
            <p>帮助中心</p>
          </div>
        </div>
        <nav class="faq-header__nav">
          <a class="faq-nav-link" href="/">首页</a>
          <a class="faq-nav-link is-active" href="/help-center">帮助中心</a>
          <a class="faq-nav-link" href="https://www.saleyee.com/faq.html" target="_blank" rel="noreferrer">常见问题</a>
          <a class="faq-nav-link" href="https://www.saleyee.com/guide.html" target="_blank" rel="noreferrer">操作指引</a>
          <a class="faq-nav-link" href="https://www.saleyee.com/contact-us.html" target="_blank" rel="noreferrer">联系我们</a>
        </nav>
      </div>
    </header>

    <!-- Main content -->
    <main class="faq-main">
      <div class="faq-container">
        <!-- Search section -->
        <div class="faq-search-section">
          <input
            v-model="searchKeyword"
            type="text"
            class="faq-search-input"
            placeholder="请输入相关问题关键字进行查询"
            @keyup.enter="handleSearch"
          />
          <button class="faq-search-btn" @click="handleSearch">
            <span>搜索</span>
          </button>
        </div>

        <!-- Content area -->
        <div class="faq-content-wrapper">
          <!-- Left sidebar -->
          <aside class="faq-left-sidebar">
            <p class="faq-sidebar-title">常见问题</p>
            <ul class="faq-category-list">
              <li
                v-for="category in categories"
                :key="category.key"
                :class="['faq-category-item', { 'is-active': activeCategory === category.key }]"
              >
                <a class="faq-category-link" @click.prevent="toggleCategory(category.key)">
                  {{ category.title }}
                  <i class="faq-icon-down"></i>
                </a>
                <ul v-if="activeCategory === category.key" class="faq-subcategory-list">
                  <li
                    v-for="subcategory in category.subcategories"
                    :key="subcategory.key"
                    :class="['faq-subcategory-item', { 'is-active': currentArticle.subcategoryKey === subcategory.key }]"
                  >
                    <a :href="`/faq/${subcategory.articles[0]?.id}`" class="faq-subcategory-link">
                      {{ subcategory.title }}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </aside>

          <!-- Right content -->
          <article class="faq-right-content">
            <!-- Breadcrumb -->
            <div class="faq-breadcrumb">
              <span>{{ currentArticle.category }}</span>
              <i class="faq-breadcrumb-sep">&gt;</i>
              <span>{{ currentArticle.subcategory }}</span>
              <i class="faq-breadcrumb-sep">&gt;</i>
              <span>{{ currentArticle.title }}</span>
            </div>

            <!-- Article header -->
            <div class="faq-article-header">
              <h1 class="faq-article-title">{{ currentArticle.fullTitle }}</h1>
              <div class="faq-article-meta">
                <span class="faq-publish-time">发布时间：{{ currentArticle.publishTime }}</span>
                <div class="faq-category-breadcrumb">
                  分类：<a href="/help-center" class="faq-meta-link">{{ currentArticle.category }}</a>
                  <span>&gt;</span>
                  <a href="/help-center" class="faq-meta-link">{{ currentArticle.subcategory }}</a>
                </div>
              </div>
            </div>

            <!-- Article content -->
            <div class="faq-article-content">
              <div class="faq-rich-text" v-html="articleContent"></div>
            </div>

            <!-- Solve status -->
            <div class="faq-solve-section">
              <ul class="faq-solve-list">
                <li class="faq-solve-item">
                  <button @click="markSolved" class="faq-solve-btn">
                    <span class="faq-solve-icon">✓</span>
                    已解决
                  </button>
                </li>
                <li class="faq-solve-item">
                  <a href="#" class="faq-solve-link" @click.prevent="markUnsolved">
                    <span class="faq-solve-icon">✗</span>
                    未解决
                  </a>
                </li>
              </ul>
              <p class="faq-help-count">已帮助 {{ helpCount }} 位用户解决问题</p>
            </div>
          </article>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="faq-footer">
      <div class="faq-container faq-footer__inner">
        <div class="faq-footer__col">
          <h3>关于赛盈</h3>
          <ul>
            <li><a href="/about-saleyee">赛盈简介</a></li>
            <li><a href="/membership">会员���益</a></li>
            <li><a href="https://blog.saleyee.com" target="_blank" rel="noreferrer">赛盈学院</a></li>
            <li><a href="/contact-us">联系我们</a></li>
          </ul>
        </div>
        <div class="faq-footer__col">
          <h3>客户服务</h3>
          <ul>
            <li><a href="/help-center">帮助中心</a></li>
            <li><a href="/faq/hc271661">售后条款</a></li>
            <li><a href="/faq/hp062361">支付方式</a></li>
            <li><a href="/faq/hp981158">物流方式</a></li>
            <li><a href="/help/vat-policy">VAT政策解读</a></li>
            <li><a href="https://www.saleyee.com/feedback.html" target="_blank" rel="noreferrer">体验反馈</a></li>
          </ul>
        </div>
        <div class="faq-footer__col">
          <h3>合作联系</h3>
          <ul>
            <li><a href="/distributors">跨境卖家入驻</a></li>
            <li><a href="/supplier">供应商入驻</a></li>
            <li><a href="/partners">合作伙伴</a></li>
            <li><a href="https://www.saleyee.com/help/51.html" target="_blank" rel="noreferrer">商务合作</a></li>
          </ul>
        </div>
        <div class="faq-footer__col faq-footer__col--wechat">
          <h3>赛盈官方微信</h3>
          <div class="faq-footer__qr">
            <img src="https://resource.saleyee.cn/UploadFiles/Images/2024/202412/3d1ddf0c-7c7c-4f2e-a9bd-30813e3e5a99.png" alt="赛盈官方微信" />
            <p>扫码关注获取平台资讯</p>
          </div>
        </div>
      </div>
      <div class="faq-footer__bottom">
        <div class="faq-container">
          © 2025 Saleyee.com Tengming Limited | 网站地图
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const searchKeyword = ref('')
const activeCategory = ref('after-sale')
const helpCount = ref(65)

// Cache configuration (used by runtime article fetch)
const CACHE_TTL = 24 * 60 * 60 * 1000 // 24 hours
const memoryCache = new Map<string, { content: string; timestamp: number }>()

// 从URL提取FAQ ID
const getFaqIdFromUrl = (): string => {
  if (typeof window === 'undefined') return 'hp246053'
  const match = window.location.pathname.match(/\/faq\/([^/]+)/)
  return match ? match[1] : 'hp246053'
}

// 文章内容库
const articleDatabase: Record<string, any> = {
  hp246053: {
    id: 'hp246053',
    title: '海外仓售后���款',
    fullTitle: '赛盈分销平台售后条款（适用海外仓）',
    category: '售��服务',
    subcategory: '售后规则',
    subcategoryKey: 'after-sale-rules',
    publishTime: '2022/06/15 10:00:00',
    content: `
<div class="faq-page-title">
  <h1><strong>赛盈分销平台售后条款（适用海外仓）</strong></h1>
</div>
<div class="faq-richtextbox">
  <p><strong>发布日期：2021.12.27</strong></p>
  <p><strong>生效日期：2022.01.04</strong></p>

  <h2><strong>一、售后服务条款适用条件</strong></h2>
  <p>赛盈分销平台售后服务条款仅适用于通过赛盈分销平台采购的商品。本平台代表实际供应商处理售后事务，确保分销商权益。</p>
  <p><strong>【重要提示与说明】</strong></p>
  <ol>
    <li>本售后��款内容可能因平台政策调整而发���变化，请以最新发布的条款为准；</li>
    <li>若平台调整条款，将通过官方渠道提前公告；</li>
    <li>条��定期更新，请用户关注官方最新版本。</li>
  </ol>

  <h2><strong>二、物流问题</strong></h2>
  <p>物流问题售后有效期为 <strong>40个自然日</strong>，自订单支付完成之日起计算。</p>
  <ol>
    <li><strong>未妥投：</strong>指订单在规定时间内未送达收货地��，平台核实后提供重发/补发/退款；</li>
    <li><strong>破损：</strong>��商品在物流过程中受到损伤，按官方轨迹显示处理；</li>
    <li><strong>错发/漏发：</strong>指物流公司发错或漏发订单，平台提供补偿；</li>
    <li><strong>退货/重发：</strong>用户可申请退货或重新发货，平台负责协调���</li>
  </ol>
  <p><strong>申诉售后须提交的资料：</strong></p>
  <p>a. 订单号与相关截图<br/>b. 物流轨迹证明<br/>c. 实物照片（如有破损）<br/>d. 其他相关证据</p>

  <h2><strong>三、破损售后</strong></h2>
  <p>破损售后有效期为 <strong>40个自然日</strong>，自订单支付完成之日起计算。</p>
  <p>赛盈平台提供 <strong>RL退货标签</strong>，用户可按指引办理退货及重发流程。破损商品可申��全额赔付或重发。</p>
  <p><strong>申诉售后须提交的资料：</strong></p>
  <p>a. 订单号与支付截图<br/>b. 破损商品照���（3张以上）<br/>c. 物流单号<br/>d. 退货单据</p>

  <h2><strong>四、产品相关售后���题</strong></h2>
  <p>产品相关售后有效期为 <strong>60个自然日</strong>，自订单支付完成之日起计算。</p>
  <p>赛盈平台提供 <strong>RL退货标签</strong>。满足条件的用��可申请退货、重发或退款。</p>
  <p><strong>不受理情形：</strong></p>
  <ul>
    <li>颜色差异在合理范围内的情况；</li>
    <li>尺寸偏差在合理范围内的情况；</li>
    <li>因消费者误操作导致的问题；</li>
    <li>使用不当或超期使用的���品。</li>
  </ul>

  <h2><strong>五、赛盈平台免责说明</strong></h2>
  <p>以下情形，赛盈平台不承担责任：</p>
  <ul>
    <li>非赛盈平台供应的产品；</li>
    <li>超过售后有效期的申诉；</li>
    <li>逾期未办理退货流程；</li>
    <li>非授权的全额退款申请；</li>
    <li>存在欺诈行为的订单；</li>
    <li>不可抗力导致的损失（自然灾害、战争、政策变化等）；</li>
    <li>终端消费者个人原因导致的退货。</li>
  </ul>

  <h2><strong>���、售后退件运费分摊规则</strong></h2>
  <p>非分销商/买家责任导致的退货，赛盈平台提供预付运费标签。</p>
  <p>预付��签有效期为 <strong>15个自然日</strong>，逾期将不予处理。</p>
  <p>若分���商自行提供退货标签，赛盈平台不承诺退运费补偿。</p>

  <h2><strong>七、售中售后退款金额说明</strong></h2>
  <p>退款金额 = 订单金额 - 支付手续费。</p>
  <p>退款方式��据原支付方式返还，退款至账户需要 <strong>7个��作日</strong>。</p>
  <p>特殊支付方式（支付宝、信用卡、微信等）将原路退回。</p>

  <h2><strong>八、赛盈分销平台售���处理时效</strong></h2>
  <ol>
    <li>工作日内提交的申诉，原则上在工作日内处理；</li>
    <li>非工作日提交的申诉，将顺延至下��个工作日处理；</li>
    <li>特殊情况下，平台将主动与申请人沟通处理方案。</li>
  </ol>

  <h2><strong>九、附录</strong></h2>
  <p>关于更多售后服务详情，请参考：</p>
  <p><a href="#" style="color: #ff0000; font-weight: bold;">物流保障服务详情 &gt;&gt;</a></p>
  <p><a href="#" style="color: #ff0000; font-weight: bold;">退货保障服务详情 &gt;&gt;</a></p>
  <p style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
    <strong>温馨提示：</strong>若分销商无法提供实质性证明材料，平台不予受理申诉。��妥善保管订单截图、物流凭证及相关凭据。
  </p>
</div>
`,
  },
  hp718571: {
    id: 'hp718571',
    title: '支付手续费问题',
    fullTitle: '为什么退款的时候支付手���费不退？',
    category: '支付问题',
    subcategory: '币种及手续费相关问题',
    subcategoryKey: 'payment-fee',
    publishTime: '2022/06/15 10:00:00',
    content: `
<div class="faq-page-title">
  <h1><strong>为什么退款的时候支付手续费不退？</strong></h1>
</div>
<div class="faq-richtextbox">
  <p>每一��支付和退款都会产生对应的支付成本，该成���在客户产生每一次支付行为时，服务商就已经和平台收取，退款后支付手续费无法退回。</p>
  
  <p>具体的退款规则可见商城底部"帮助中心"-"售后条款"-"7.售中售后退款金额说明"��详情请 <a href="/faq/hp246053" style="color: #0000ff;"><strong>点击查看</strong></a>。</p>

  <h2><strong>关键说明</strong></h2>
  <ol>
    <li><strong>支付手续费的产生</strong>：每笔支付交易都会产��对应的支付处理费用，这部分��用是在���付时就已经由支付服务商收取的。</li>
    <li><strong>不可退还的原因</strong>：由于支付手续费已在支付时立即产生并被支付服务商收取，因此退款时无法将该部分费用退回给分销��。</li>
    <li><strong>退款计算公式</strong>：退款金额 = 订单金额 - 支付手续费（不含支付手续费退还）。</li>
    <li><strong>退款方式</strong>：根据原支付方式返还，退款至账户需要7����作日，特殊支付方式（支付宝、信用卡、微信等）将原路退回。</li>
  </ol>

  <h2><strong>常见问题解答</strong></h2>
  <p><strong>Q: 为什么不能协商退还手续费？</strong></p>
  <p>A: 支付手续费属于支付服务商的收���项目，平台无权更改或协商。当用户发起支付时，支付成本就已经由服务商产生并收取，因此无法在退款时返还。</p>

  <p><strong>Q: 如何降低支付手续费的损失？</strong></p>
  <p>A: 分销商可以在采购前充分了解商品信息，避免不必要的退货申请，从而降低支��手续费的损失。</p>

  <p><strong>Q: 退款需要多长时间到账？</strong></p>
  <p>A: 一般情况下，退款需要7个工作日到账。具体到账���间根据支付方式的不同可能有所差异。</p>

  <h2><strong>相关条款链接</strong></h2>
  <p>更多关于退款和支付的详细规则，请查阅以下文档：</p>
  <ul>
    <li><a href="/faq/hp246053" style="color: #0000ff;">售后条款 - 第7条 售中售后退款金额说明</a></li>
    <li><a href="/help-center" style="color: #0000ff;">帮助中心 - 完整的支付相关文档</a></li>
  </ul>
</div>
`,
  },
}

Object.assign(articleDatabase, {
  hc271661: {
    id: 'hc271661',
    title: '售后服务',
    fullTitle: '售后服务',
    category: '售后服务',
    subcategory: '售后规则',
    subcategoryKey: 'after-sale-rules',
    publishTime: '',
    content: `
<div class="help_problem_details"><div class="level_page"><h5>售后服务</h5><div class="level_page_items"><p>售后规则</p><ul><li><a href="/faq/hp627013.html">中国直发专区“服装”售后服务规则说明</a></li></ul></div><div class="level_page_items"><p>售后咨询</p><ul><li><a href="/faq/hp599293.html">如何联系平台客服查询我的订单状态/物流信息/售后工单？</a></li><li><a href="/faq/hp491825.html">商品售后不同情况应对处理流程</a></li></ul></div><div class="level_page_items"><p>售后退货</p><ul><li><a href="/faq/hp374193.html">什么是RL?</a></li><li><a href="/faq/hp668882.html">平台���持无理由退货吗？</a></li><li><a href="/faq/hp595031.html">订单退货规定详情说明</a></li></ul></div><div class="level_page_items"><p>退款说明</p><ul><li><a href="/faq/hp285190.html">订单退款金额去向说��</a></li></ul></div><div class="level_page_items"><p>退货保障服务</p><ul><li><a href="/faq/hp503378.html">退货保障服务规则说明</a></li><li><a href="/faq/hp374068.html">退货保障服务生效前的历史订单处理说明</a></li><li><a href="/faq/hp094085.html">��品质量问题没有购买退货保障服务如何处理？</a></li><li><a href="/faq/hp763098.html">若分销商“无理由退货”售后率过高，平台保留调整以及限制购买退货保障服务的权利</a></li><li><a href="/faq/hp309528.html">如何购买退货保障服务？</a></li></ul></div></div><div class="view-list"><div class="templet-page"><input type="hidden" id="hiddenurl" value="/faq/hc271661.html"><div class="total-page"><p>共2页，前往第 <input type="text" id="a_link_page"> 页<input type="button" id="btn_a_link" value="GO"></p></div><ul class="page-nub"><li><a href="javascript:void(0);" class="on">1</a></li><li><a onclick="javascript: ZTLayer.showLoading();" href="/faq/hc271661.html?pageIndex=2">2</a></li><li><a onclick="javascript: ZTLayer.showLoading();" href="/faq/hc271661.html?pageIndex=2">下一页</a></li></ul></div></div></div><div class="clear_float"></div>
    `,
  },
  hp062361: {
    id: 'hp062361',
    title: '支付方式及手续费规则说明',
    fullTitle: '支���方式及手续费规则说明',
    category: '支付问题',
    subcategory: '支付方式相关',
    subcategoryKey: 'payment-method',
    publishTime: '2023/10/27 14:00:00',
    content: `
<div class="help_problem_details">
                    <div class="help_location">
                            <a href="/guide/hc676402.html">支付操作指引</a>
                            <i class="layui-icon layui-icon-right"></i>
                            <a href="/guide/hc713134.html">支付方式介绍</a>
                            <i class="layui-icon layui-icon-right"></i>
                        支付方式及手续费规则说明
                    </div>
                    <div class="help_problem_detailstext">
                        <p class="help_problem_title">支付方式及手续费规则说明</p>
                        <div class="help_problem_time">
                            <span>发布时间：<em>2023/10/27 14:00:00</em></span>
                                <span>分类：
                                        <a href="/guide/hc676402.html">支��操作指引</a>&gt;<a href="/guide/hc713134.html">支付方式介绍</a>
                                </span>

                        </div>
                        <div class="help_rich_text">
                            <div style="text-align: justify;"><span style="font-size: 11pt;"><br>关于赛盈分销平台上的支付方式及手续费规则的相关说明如下：<br><br><br><strong><span style="font-size: 13pt;">一、支付方式：</span></strong></span><strong><br><br></strong><strong><span style="font-size: 11pt;">1. Airwallex Pay</span><br><img src="https://resource.saleyee.cn/Content/Images/uploaded/帮助中心-支付方式/空中云汇.png?v=1174939608" alt=""></strong><br><span style="font-size: 11pt;">（1）支持美元，欧元，英镑及加元订单支付；</span></div>
<div style="text-align: justify;"><span style="font-size: 11pt;">（2）申请售中售后退款时，资金将会默认退回您的赛盈余额账户，您可以继续消费，或选择提现；</span></div>
<div style="text-align: justify;"><span style="font-size: 11pt;">（3）线下充值非实时到账。</span><br><br><span style="font-size: 11pt;"><strong>2. Payoneer</strong></span><br><img src="https://resource.saleyee.cn/Content/Images/uploaded/帮助中心-支付方式/payonner.png?v=347031152" alt=""><br><span style="font-size: 11pt;">（1）支持美元，欧元及英镑订单支付；</span><br><span style="font-size: 11pt;">（2）单笔支付金额��台无限制，如在支付��遇到限额问题，可联系Payoneer客服提升您的支付额度；</span><br><span style="font-size: 11pt;">（3）线下充值非实时到账。</span><strong><br></strong><br><br><span style="font-size: 11pt;"><strong>3. 银行转账</strong></span><strong><br></strong><img src="https://resource.saleyee.cn/Content/Images/uploaded/帮助中心-支付方式/bank.png?v=440062435" alt=""><br><span style="font-size: 11pt;">（1）仅支持线下的银行汇款，非实时到账，用户在线下汇款完成后需要到“个人中心-资产管理-我的余额-汇款”界面填写汇款单，平台核实到账以后将为您充值到账；</span><br><span style="font-size: 11pt;">（2）支持美元、欧元、英镑、加元币种的汇款；</span><br><span style="font-size: 11pt;">（3）在汇款过程中，银行会收取一定的手续费，您的充值金额=赛盈收款账户的实际到账金额；</span><br><span style="font-size: 11pt;">（4）��支持跨支付方式转账，通过银行转账以外的方式汇款到我方银行收款账户的资金不予受理，如造成损失��需自行承担。</span></div>
<div style="text-align: justify;">&nbsp;</div>
<div style="text-align: justify;">
<div data-lark-html-role="root">
<div class="messageList-row-wrapper">
<div class="resize-inner">
<div class="messageItem-wrapper message-last" data-id="7525365324890800129" data-a11y-arrow-key="true">
<div class="message-container">
<div id="7525365324890800129" class="js-message-item message-item message-self message-item-first message-is-p2p message-align-between message-position-right text-message" data-position="183" data-badge-count="183">
<div data-im-copy-permission-invalid="false" data-im-copy-permission-invalid-toast="保密模式已开启，禁止复制、转发消息">
<div class="message-right">
<div class="message-section">
<div id="7525365324890800129" class="NewMessageContextMenuTrigger MessageContextMenuTrigger MessageContextMenuTrigger--scene-chatSelfMessage message-section-left message-section-newFileCard" data-element="message-section-left" data-message-descendant-bounded="true">
<div class="MessageActionPermissionWrapper" data-im-copy-permission-invalid="false" data-im-copy-permission-invalid-toast="">
<div class="message-content-container">
<div class="catch-resize-observer-dom message-content">
<div class="MessageActionPermissionWrapper message-text" role="text-message" data-im-copy-permission-invalid="false" data-im-copy-permission-invalid-toast="">
<div class="limit-height-container">
<div class="wrapper">
<div class="" data-message-descendant-index="0" data-message-descendant-block="true">
<div class="richTextContainer text-align-left" dir="auto" data-partial-quote-enabled="true"><strong><span class="text-only" data-eleid="3">4. 微信支付</span></strong></div>
<div class="richTextContainer text-align-left" dir="auto" data-partial-quote-enabled="true"><strong><span class="text-only" data-eleid="3">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img src="https://resource.saleyee.cn/UploadFiles/Images/2024/202404/83eb66f1-6b7e-45ef-8931-4f4d2762776d.png" width="79" height="70"></span></strong></div>
<div class="richTextContainer text-align-left" dir="auto" data-partial-quote-enabled="true"><span class="text-only" data-eleid="6">（1）可直接支付赛盈订单，不支持账户余额充值；</span></div>
<div class="richTextContainer text-align-left" dir="auto" data-partial-quote-enabled="true"><span class="text-only" data-eleid="8">（2）支付时，微信会将美元、欧元、英镑和加元币种的支付金额按照微信官方实时汇率转��为人民币付款，支持用绑定的储蓄卡或信用卡支付；</span></div>
<div class="richTextContainer text-align-left" dir="auto" data-partial-quote-enabled="true"><span class="text-only" data-eleid="10">（3）仅支持微信大陆钱包认证用户使用，不支持用回乡证（港澳台往来大陆通行证）认证的用户使用；</span></div>
... (truncated for brevity) ...
    `,
  },
  hp981158: {
    id: 'hp981158',
    title: '平台上各区域相关发货物流方式',
    fullTitle: '平台上各区域相关发货物流方式',
    category: '物流方式',
    subcategory: '物流信息',
    subcategoryKey: 'logistics-info',
    publishTime: '2022/06/15 10:00:00',
    content: `
<div class="help_problem_detailstext">
                        <p class="help_problem_title">平台上各区域相关发货物流方式</p>
                        <div class="help_problem_time">
                            <span>发布时间：<em>2022/06/15 10:00:00</em></span>
                                <span>分类：
                                        <a href="/faq/hc377673.html">物流方式</a>&gt;<a href="/faq/hc884860.html">相关物流方式及发货地区介绍</a>
                                </span>

                        </div>
                        <div class="help_rich_text">
                            <p>&nbsp;</p>
<div style="text-align: justify;"><span style="font-size: 11pt;">赛盈分销平台在收到下单请求后，赛盈海外仓将在<span style="color: #000000;"><strong>24小时内出物流单号，2-8天内即可实现妥投</strong></span>。关于赛盈分销平台各个发货区域的物流解决方案，具体如下：</span></div>
... (truncated for brevity) ...
    `,
  },
});

// 获取文章数据
const getArticleData = (faqId: string) => {
  return articleDatabase[faqId] || articleDatabase['hp246053']
}

// 当前文章数据
const currentArticle = ref({
  id: getFaqIdFromUrl(),
  title: '海外仓售后条款',
  fullTitle: '赛���分销平台售后条款（适用海外仓）',
  category: '售后服务',
  subcategory: '售后���则',
  subcategoryKey: 'after-sale-rules',
  publishTime: '2022/06/15 10:00:00',
})

// 文章内容 - 使用运行时从远端获取并缓存（内存 + localStorage），回退到本地articleDatabase
const articleContent = ref('')

const getLocalStorageCache = (id: string): string | null => {
  try {
    if (typeof window === 'undefined') return null
    const raw = localStorage.getItem(`faq_article_${id}`)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || !parsed.timestamp || !parsed.content) return null
    if (Date.now() - parsed.timestamp > CACHE_TTL) {
      localStorage.removeItem(`faq_article_${id}`)
      return null
    }
    return parsed.content
  } catch (e) {
    return null
  }
}

const setLocalStorageCache = (id: string, content: string) => {
  try {
    if (typeof window === 'undefined') return
    localStorage.setItem(
      `faq_article_${id}`,
      JSON.stringify({ content, timestamp: Date.now() }),
    )
  } catch (e) {
    // ignore
  }
}

const fetchRemoteArticle = async (id: string): Promise<string | null> => {
  try {
    const url = `https://www.saleyee.com/faq/${id}.html`
    const resp = await fetch(url, { method: 'GET' })
    if (!resp.ok) return null
    const text = await resp.text()
    // 优先提取 body 内容，若失败则返回完整页面
    const bodyMatch = text.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
    const contentHtml = bodyMatch ? bodyMatch[1] : text
    return contentHtml
  } catch (e) {
    return null
  }
}

const fetchArticle = async (id: string) => {
  // 内存缓存
  const mem = memoryCache.get(id)
  if (mem && Date.now() - mem.timestamp < CACHE_TTL) {
    articleContent.value = mem.content
    return
  }

  // localStorage 缓存
  const local = getLocalStorageCache(id)
  if (local) {
    articleContent.value = local
    memoryCache.set(id, { content: local, timestamp: Date.now() })
    return
  }

  // 尝试远端拉取
  const remote = await fetchRemoteArticle(id)
  if (remote) {
    articleContent.value = remote
    memoryCache.set(id, { content: remote, timestamp: Date.now() })
    setLocalStorageCache(id, remote)
    return
  }

  // 最后回退到本地数据库
  const article = getArticleData(id)
  articleContent.value = article.content || ''
}

// 分类列表
const categories = [
  {
    key: 'order',
    title: '订单管���',
    subcategories: [
      {
        key: 'order-rules',
        title: '订单规则',
        articles: [{ id: 'hp123001' }],
      },
      {
        key: 'order-faq',
        title: '订单常见问题',
        articles: [{ id: 'hp123002' }],
      },
    ],
  },
  {
    key: 'product',
    title: '商品问题',
    subcategories: [
      {
        key: 'product-info',
        title: '商品信息',
        articles: [{ id: 'hp123003' }],
      },
      {
        key: 'product-faq',
        title: '商品常见问题',
        articles: [{ id: 'hp123004' }],
      },
    ],
  },
  {
    key: 'after-sale',
    title: '售后服务',
    subcategories: [
      {
        key: 'after-sale-rules',
        title: '售后规则',
        articles: [{ id: 'hc271661' }],
      },
      {
        key: 'after-sale-faq',
        title: '售后常见问题',
        articles: [{ id: 'hp123006' }],
      },
    ],
  },
  {
    key: 'payment',
    title: '支付问题',
    subcategories: [
      {
        key: 'payment-fee',
        title: '币种及手续费相关问题',
        articles: [{ id: 'hp718571' }],
      },
      {
        key: 'payment-method',
        title: '支付方式相关',
        articles: [{ id: 'hp062361' }],
      },
    ],
  },
  {
    key: 'platform',
    title: '赛盈平台使用',
    subcategories: [
      {
        key: 'platform-guide',
        title: '平台操作指南',
        articles: [{ id: 'hp123007' }],
      },
      {
        key: 'platform-faq',
        title: '平台常见问题',
        articles: [{ id: 'hp123008' }],
      },
    ],
  },
  {
    key: 'logistics',
    title: '物流方式',
    subcategories: [
      {
        key: 'logistics-info',
        title: '物流信息',
        articles: [{ id: 'hp981158' }],
      },
      {
        key: 'logistics-faq',
        title: '物流常见问题',
        articles: [{ id: 'hp123010' }],
      },
    ],
  },
]

const toggleCategory = (key: string) => {
  activeCategory.value = activeCategory.value === key ? '' : key
}

const handleSearch = () => {
  if (searchKeyword.value.trim()) {
    window.open(
      `https://www.saleyee.com/help/search.html?keywords=${encodeURIComponent(searchKeyword.value)}`,
      '_blank',
      'noopener',
    )
  }
}

const markSolved = () => {
  helpCount.value += 1
  alert('感谢您的反馈，您的意见对我们很重要！')
}

const markUnsolved = () => {
  alert('感谢您的反馈，我们将继续改进帮助文档。')
}

onMounted(() => {
  // 初始化当前文章数据
  const faqId = getFaqIdFromUrl()
  const articleData = getArticleData(faqId)

  currentArticle.value = {
    id: articleData.id,
    title: articleData.title,
    fullTitle: articleData.fullTitle,
    category: articleData.category,
    subcategory: articleData.subcategory,
    subcategoryKey: articleData.subcategoryKey,
    publishTime: articleData.publishTime,
  }

  // 根据FAQ ID设置活跃分类
  if (faqId === 'hp246053' || faqId === 'hc271661') {
    activeCategory.value = 'after-sale'
  } else if (faqId === 'hp718571' || faqId === 'hp062361') {
    activeCategory.value = 'payment'
  } else if (faqId === 'hp981158') {
    activeCategory.value = 'logistics'
  }

  // 异步加载文章内容（会从内存/localStorage/远端顺序尝试）
  void fetchArticle(faqId)
})
</script>

<style scoped>
/* ============================================================
   FAQ Detail Page Styles - Complete Style Isolation
   All styles prefixed with .faq- to prevent global pollution
   ============================================================ */

.faq-detail-page {
  font-family: 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif;
  color: #2f2f2f;
  background: #f7f9fb;
  line-height: 1.5;
}

.faq-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
}

/* ============================================================
   Top Bar Styles
   ============================================================ */
.faq-top-bar {
  background: #f5f7fa;
  border-bottom: 1px solid #e5e7eb;
  font-size: 12px;
  color: #666;
}

.faq-top-bar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
}

.faq-top-bar__left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.faq-top-bar__notice {
  color: #cb261c;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: opacity 0.2s ease;
  font-size: 12px;
}

.faq-top-bar__notice:hover {
  opacity: 0.8;
}

.faq-top-bar__right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.faq-top-bar__link {
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 12px;
}

.faq-top-bar__link:hover {
  color: #cb261c;
}

/* ============================================================
   Header Styles
   ============================================================ */
.faq-header {
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
}

.faq-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  gap: 24px;
}

.faq-header__brand {
  display: flex;
  align-items: center;
  gap: 16px;
}

.faq-header__logo {
  display: inline-flex;
  align-items: center;
}

.faq-header__logo img {
  height: 60px;
  width: auto;
  display: block;
}

.faq-header__title h1 {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  color: #111827;
}

.faq-header__title p {
  margin: 4px 0 0;
  font-size: 14px;
  color: #6b7280;
}

.faq-header__nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.faq-nav-link {
  color: #374151;
  font-size: 14px;
  text-decoration: none;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.2s ease;
  cursor: pointer;
}

.faq-nav-link:hover,
.faq-nav-link.is-active {
  color: #cb261c;
}

.faq-nav-link.is-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #cb261c;
}

/* ============================================================
   Main Area
   ============================================================ */
.faq-main {
  background: linear-gradient(180deg, #f7f9fb 0%, #ffffff 100%);
  padding: 40px 0;
  min-height: calc(100vh - 300px);
}

/* ============================================================
   Search Section
   ============================================================ */
.faq-search-section {
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
}

.faq-search-input {
  flex: 1;
  height: 40px;
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  box-sizing: border-box;
}

.faq-search-input:focus {
  outline: none;
  border-color: #cb261c;
  box-shadow: 0 0 0 3px rgba(203, 38, 28, 0.1);
}

.faq-search-btn {
  height: 40px;
  min-width: 80px;
  background: #cb261c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.2s ease;
  font-family: inherit;
}

.faq-search-btn:hover {
  background: #a81f18;
}

.faq-search-btn:active {
  transform: scale(0.98);
}

/* ============================================================
   Content Wrapper Layout
   ============================================================ */
.faq-content-wrapper {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 24px;
}

/* ============================================================
   Left Sidebar
   ============================================================ */
.faq-left-sidebar {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
  height: fit-content;
}

.faq-sidebar-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px;
  color: #111827;
}

.faq-category-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.faq-category-item {
  margin: 0;
}

.faq-category-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 12px;
  color: #374151;
  text-decoration: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  border: none;
  background: transparent;
  font-family: inherit;
  text-align: left;
}

.faq-category-link:hover {
  background: #f3f4f6;
  color: #cb261c;
}

.faq-category-item.is-active .faq-category-link {
  background: #f3f4f6;
  color: #cb261c;
  font-weight: 600;
}

.faq-icon-down {
  display: inline-block;
  font-size: 10px;
  margin-left: 8px;
  transition: transform 0.2s ease;
}

.faq-category-item.is-active .faq-icon-down {
  transform: rotate(180deg);
}

.faq-subcategory-list {
  list-style: none;
  padding: 0 0 0 12px;
  margin: 8px 0 0;
  display: block;
  animation: slideDown 0.2s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
}

.faq-subcategory-item {
  margin: 0 0 4px;
  list-style: none;
}

.faq-subcategory-link {
  display: block;
  padding: 8px 12px;
  color: #6b7280;
  text-decoration: none;
  border-radius: 4px;
  font-size: 13px;
  transition: all 0.2s ease;
}

.faq-subcategory-link:hover {
  color: #cb261c;
  background: #f9fafb;
}

.faq-subcategory-item.is-active .faq-subcategory-link {
  color: #cb261c;
  background: #fef2f0;
  font-weight: 600;
}

/* ============================================================
   Right Content Area
   ============================================================ */
.faq-right-content {
  background: #fff;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
}

.faq-breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e7eb;
  gap: 4px;
}

.faq-breadcrumb span {
  display: inline;
}

.faq-breadcrumb-sep {
  display: inline;
  color: #9ca3af;
  margin: 0 6px;
}

.faq-article-header {
  margin-bottom: 24px;
}

.faq-article-title {
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 16px;
  line-height: 1.4;
  word-break: break-word;
}

.faq-article-meta {
  font-size: 13px;
  color: #6b7280;
}

.faq-publish-time {
  display: block;
  margin-bottom: 8px;
}

.faq-category-breadcrumb {
  display: flex;
  align-items: center;
  gap: 4px;
}

.faq-meta-link {
  color: #cb261c;
  text-decoration: none;
}

.faq-meta-link:hover {
  text-decoration: underline;
}

/* ============================================================
   Article Content
   ============================================================ */
.faq-article-content {
  margin: 32px 0;
  min-height: 400px;
}

.faq-rich-text {
  line-height: 1.8;
  color: #374151;
  word-break: break-word;
  overflow-wrap: break-word;
}

.faq-rich-text h1 {
  font-size: 18px;
  font-weight: 700;
  margin: 24px 0 16px;
  color: #111827;
}

.faq-rich-text h2 {
  font-size: 16px;
  font-weight: 700;
  margin: 20px 0 12px;
  color: #111827;
}

.faq-rich-text p {
  margin: 12px 0;
}

.faq-rich-text ol,
.faq-rich-text ul {
  margin: 12px 0;
  padding-left: 32px;
}

.faq-rich-text li {
  margin: 8px 0;
}

.faq-rich-text table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 13px;
}

.faq-rich-text table,
.faq-rich-text td,
.faq-rich-text th {
  border: 1px solid #d1d5db;
}

.faq-rich-text th {
  background: #f3f4f6;
  text-align: center;
  padding: 12px;
  font-weight: 600;
}

.faq-rich-text td {
  padding: 12px;
  vertical-align: top;
}

.faq-rich-text a {
  color: #cb261c;
  text-decoration: none;
}

.faq-rich-text a:hover {
  text-decoration: underline;
}

/* ============================================================
   Solve Section
   ============================================================ */
.faq-solve-section {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
}

.faq-solve-list {
  list-style: none;
  padding: 0;
  margin: 0 0 16px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.faq-solve-item {
  margin: 0;
  list-style: none;
}

.faq-solve-btn,
.faq-solve-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #f3f4f6;
  color: #374151;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  font-family: inherit;
}

.faq-solve-btn:hover,
.faq-solve-link:hover {
  background: #cb261c;
  color: #fff;
  border-color: #cb261c;
}

.faq-solve-icon {
  display: inline-block;
  font-weight: bold;
}

.faq-help-count {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}

/* ============================================================
   Footer
   ============================================================ */
.faq-footer {
  background: #111827;
  color: #f9fafb;
  margin-top: 60px;
}

.faq-footer__inner {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px;
  padding: 48px 0 40px;
  box-sizing: border-box;
}

.faq-footer__col {
  box-sizing: border-box;
}

.faq-footer__col h3 {
  font-size: 16px;
  margin: 0 0 16px;
  font-weight: 600;
  color: #fff;
}

.faq-footer__col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.faq-footer__col li {
  list-style: none;
  margin: 0;
}

.faq-footer__col a {
  color: #d1d5db;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s ease;
}

.faq-footer__col a:hover {
  color: #fff;
}

.faq-footer__col--wechat {
  text-align: center;
}

.faq-footer__qr img {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}

.faq-footer__qr p {
  margin: 10px 0 0;
  font-size: 13px;
  color: #d1d5db;
}

.faq-footer__bottom {
  background: #0b1220;
  padding: 16px 0;
  font-size: 12px;
  color: #9ca3af;
  text-align: center;
  margin-top: 20px;
}

/* ============================================================
   Responsive Design
   ============================================================ */
@media (max-width: 1024px) {
  .faq-content-wrapper {
    grid-template-columns: 1fr;
  }

  .faq-left-sidebar {
    display: none;
  }
}

@media (max-width: 768px) {
  .faq-container {
    padding: 0 12px;
  }

  .faq-header__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .faq-header__nav {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }

  .faq-right-content {
    padding: 20px;
  }

  .faq-article-title {
    font-size: 20px;
  }

  .faq-footer__inner {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .faq-top-bar__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    height: auto;
    padding: 8px 0;
  }

  .faq-header__logo img {
    height: 48px;
  }

  .faq-header__title h1 {
    font-size: 20px;
  }

  .faq-article-title {
    font-size: 18px;
  }

  .faq-search-section {
    flex-direction: column;
  }

  .faq-footer__inner {
    grid-template-columns: 1fr;
  }

  .faq-solve-list {
    flex-direction: column;
    gap: 12px;
  }

  .faq-solve-btn,
  .faq-solve-link {
    width: 100%;
    justify-content: center;
  }
}
</style>
