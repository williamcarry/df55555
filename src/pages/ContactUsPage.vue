<template>
  <div class="contact-us-page">
    <!-- Top bar -->
    <div class="top-bar">
      <div class="container top-bar-inner">
        <div class="top-bar-left">
          <a
            class="top-bar-notice"
            href="https://resource.saleyee.cn/Files/%E5%85%AC%E5%91%8A%E5%85%AC%E5%BC%80%E4%BF%A1/%E8%AF%A6%E7%BB%86%E8%A7%A3%E8%AF%ATTENGMING%20LIMITED%20%E5%8F%8D%E4%BD%9C%E9%94%80%E9%93%BE%E4%BF%A1%E6%81%AF.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span>【公告】TENGMING LIMITED 公司名称冒用声明</span>
          </a>
        </div>
        <div class="top-bar-right">
          <a class="top-bar-link" href="/login">登录</a>
          <a class="top-bar-link" href="/register">注册</a>
          <a class="top-bar-link" href="/getting-started">入门指引</a>
          <a class="top-bar-link" href="/membership">会员权益</a>
        </div>
      </div>
    </div>

    <!-- Header -->
    <header class="header">
      <div class="container header-inner">
        <div class="header-brand">
          <a class="header-logo" href="/">
            <img src="https://www.saleyee.com/Content/Images/logo.png" alt="赛盈分销" />
          </a>
          <div class="header-title">
            <h1>赛盈分销</h1>
            <p>帮助中心</p>
          </div>
        </div>
        <nav class="header-nav">
          <a class="nav-link" href="/">首页</a>
          <a class="nav-link" href="/help-center">帮助中心</a>
          <a class="nav-link" href="https://www.saleyee.com/faq.html" target="_blank" rel="noreferrer">常见问题</a>
          <a class="nav-link" href="https://www.saleyee.com/guide.html" target="_blank" rel="noreferrer">操作指引</a>
          <a class="nav-link is-active" href="/contact-us">联系我们</a>
        </nav>
      </div>
    </header>

    <!-- Main content -->
    <main class="main">
      <!-- Banner image -->
      <div class="contact-banner-wrapper">
        <img src="https://www.saleyee.com/Area/ZT.DMS.Help.Web/Content/images/contact_banner.png" alt="联系我们" class="banner-image" />
      </div>

      <div class="container">
        <!-- Contact sections -->
        <div class="contact-sections">
          <ul class="contact-list">
            <!-- 客户服务支持 -->
            <li class="contact-list-item">
              <div class="contact-icon customer-service">
                <HeadsetIcon size="48" />
              </div>
              <div class="contact-text">
                <h5>客户服务支持</h5>
                <p>东南、华东、华北客户经理：<br /><strong>18059185796</strong></p>
                <p>华南、华西客户经理：<br /><strong>17301942893</strong></p>
                <p>联系邮箱：<br /><strong><a href="mailto:service@saleyee.cn">service@saleyee.cn</a></strong></p>
                <p>工作时间：9:00-18:00（周一至周六）</p>
              </div>
            </li>

            <!-- 售后支持 -->
            <li class="contact-list-item">
              <div class="contact-icon after-sale">
                <CheckCircleIcon size="48" />
              </div>
              <div class="contact-text">
                <h5>售后支持</h5>
                <p>在线客服：<br /><a href="https://work.weixin.qq.com/kfid/kfc8b17c61dab13bde4" target="_blank" rel="noreferrer">与我联系</a></p>
                <p>客服工作时间：<br />周一至周五：9:00-18:00<br />周六：10:00-16:00</p>
                <p>客服邮箱：<br /><a href="mailto:service@saleyee.cn">service@saleyee.cn</a></p>
              </div>
            </li>

            <!-- 平台合作 -->
            <li class="contact-list-item">
              <div class="contact-icon cooperation">
                <HandshakeIcon size="48" />
              </div>
              <div class="contact-text">
                <h5>平台合作</h5>
                <p>分销商入驻：<br /><a href="/distributors">洽谈</a></p>
                <p>供应商入驻：<br /><a href="/supplier">洽谈</a></p>
                <p>商务合作：<br /><a href="https://www.saleyee.com/help/51.html" target="_blank" rel="noreferrer">洽谈</a></p>
              </div>
            </li>

            <!-- 意见/建议反馈 -->
            <li class="contact-list-item">
              <div class="contact-icon feedback">
                <MessageSquareIcon size="48" />
              </div>
              <div class="contact-text">
                <h5>意见/建议反馈</h5>
                <p>赛盈官方电话（工作日）：<br /><strong>0755-23108669</strong></p>
                <p>意见/建议反馈：<br /><a href="https://www.saleyee.com/feedback.html" target="_blank" rel="noreferrer">点我提交</a></p>
              </div>
            </li>

            <!-- 公司信息 -->
            <li class="contact-list-item">
              <div class="contact-icon company-info">
                <Building2Icon size="48" />
              </div>
              <div class="contact-text">
                <h5>公司信息</h5>
                <p>公司名称：<br />深圳赛盈网络有限公司</p>
                <p>公司地址：<br />中国香港九龙观塘道348号宏利广场6楼</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-inner">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="6" class="footer-col">
            <h3>关于赛盈</h3>
            <ul>
              <li><a href="/about-saleyee">赛盈简介</a></li>
              <li><a href="/membership">会员权益</a></li>
              <li><a href="https://blog.saleyee.com" target="_blank" rel="noreferrer">赛盈学院</a></li>
              <li><a href="/contact-us">联系我们</a></li>
            </ul>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" class="footer-col">
            <h3>客户服务</h3>
            <ul>
              <li><a href="/help-center">帮助中心</a></li>
              <li><a href="/faq/hc271661">售后条款</a></li>
              <li><a href="/faq/hp062361">支付方式</a></li>
              <li><a href="/faq/hp981158">物流方式</a></li>
              <li><a href="https://www.saleyee.com/help/14.html" target="_blank" rel="noreferrer">VAT政策解读</a></li>
              <li><a href="https://www.saleyee.com/feedback.html" target="_blank" rel="noreferrer">体验反馈</a></li>
            </ul>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" class="footer-col">
            <h3>合作联系</h3>
            <ul>
              <li><a href="https://www.saleyee.com/distributors.html" target="_blank" rel="noreferrer">跨境卖家入驻</a></li>
              <li><a href="https://supplier.saleyee.cn/?invitationCode=LeJWrx" target="_blank" rel="noreferrer">供应商入驻</a></li>
              <li><a href="/partners">合作伙伴</a></li>
              <li><a href="https://www.saleyee.com/help/51.html" target="_blank" rel="noreferrer">商务合作</a></li>
            </ul>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" class="footer-col footer-col--wechat">
            <h3>赛盈官方微信</h3>
            <div class="footer-qr">
              <img src="https://resource.saleyee.cn/UploadFiles/Images/2024/202412/3d1ddf0c-7c7c-4f2e-a9bd-30813e3e5a99.png" alt="赛盈官方微信" />
              <p>扫码关注获取平台资讯</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="footer-bottom">
        <div class="container">
          © 2025 Saleyee.com Tengming Limited | 网站地图
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Headset as HeadsetIcon, CheckCircle as CheckCircleIcon, Handshake as HandshakeIcon, MessageSquare as MessageSquareIcon, Building2 as Building2Icon } from 'lucide-vue-next'
</script>

<style scoped>
.contact-us-page {
  font-family: 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif;
  color: #2f2f2f;
  background: #f7f9fb;
  line-height: 1.5;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
}

/* ============================================================
   Top Bar Styles
   ============================================================ */
.top-bar {
  background: #f5f7fa;
  border-bottom: 1px solid #e5e7eb;
  font-size: 12px;
  color: #666;
}

.top-bar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
}

.top-bar-left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.top-bar-notice {
  color: #cb261c;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: opacity 0.2s ease;
  font-size: 12px;
}

.top-bar-notice:hover {
  opacity: 0.8;
}

.top-bar-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.top-bar-link {
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 12px;
}

.top-bar-link:hover {
  color: #cb261c;
}

/* ============================================================
   Header Styles
   ============================================================ */
.header {
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  gap: 24px;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-logo {
  display: inline-flex;
  align-items: center;
}

.header-logo img {
  height: 60px;
  width: auto;
  display: block;
}

.header-title h1 {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  color: #111827;
}

.header-title p {
  margin: 4px 0 0;
  font-size: 14px;
  color: #6b7280;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.nav-link {
  color: #374151;
  font-size: 14px;
  text-decoration: none;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.2s ease;
  cursor: pointer;
}

.nav-link:hover,
.nav-link.is-active {
  color: #cb261c;
}

.nav-link.is-active::after {
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
.main {
  background: linear-gradient(180deg, #f7f9fb 0%, #ffffff 100%);
  padding: 40px 0;
  min-height: calc(100vh - 300px);
}

/* ============================================================
   Banner
   ============================================================ */
.contact-banner-wrapper {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-bottom: 40px;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
}

/* ============================================================
   Contact Sections
   ============================================================ */
.contact-sections {
  margin-bottom: 40px;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.contact-list-item {
  display: flex;
  gap: 30px;
  padding-bottom: 0;
  border-bottom: none;
}

.contact-list-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.contact-icon {
  width: 80px;
  height: 80px;
  min-width: 80px;
  border-radius: 8px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.contact-icon svg {
  width: 48px;
  height: 48px;
}

.contact-icon.customer-service {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.contact-icon.after-sale {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.contact-icon.cooperation {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.contact-icon.feedback {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.contact-icon.company-info {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

.contact-text {
  flex: 1;
}

.contact-text h5 {
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 16px;
}

.contact-text p {
  font-size: 14px;
  color: #374151;
  margin: 0 0 12px;
  line-height: 1.8;
}

.contact-text p:last-child {
  margin-bottom: 0;
}

.contact-text strong {
  color: #111827;
  font-weight: 600;
}

.contact-text a {
  color: #1890ff;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-text a:hover {
  text-decoration: underline;
  color: #0050b3;
}

/* ============================================================
   Footer
   ============================================================ */
.footer {
  background: #111827;
  color: #f9fafb;
  margin-top: 60px;
}

.footer-inner {
  padding: 48px 0 40px;
  box-sizing: border-box;
}

.footer-col {
  box-sizing: border-box;
  margin-bottom: 20px;
}

.footer-col h3 {
  font-size: 16px;
  margin: 0 0 16px;
  font-weight: 600;
  color: #fff;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-col li {
  list-style: none;
  margin: 0;
}

.footer-col a {
  color: #d1d5db;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s ease;
}

.footer-col a:hover {
  color: #fff;
}

.footer-col--wechat {
  text-align: center;
}

.footer-qr img {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}

.footer-qr p {
  margin: 10px 0 0;
  font-size: 13px;
  color: #d1d5db;
}

.footer-bottom {
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
@media (max-width: 768px) {
  .header-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .header-nav {
    width: 100%;
    gap: 12px;
  }

  .contact-list {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .contact-list-item {
    gap: 20px;
  }

  .contact-icon {
    width: 60px;
    height: 60px;
    min-width: 60px;
  }

  .contact-text h5 {
    font-size: 16px;
  }

  .contact-text p {
    font-size: 13px;
  }

  .contact-banner-wrapper {
    margin-bottom: 30px;
  }

  .banner-image {
    width: 100%;
  }

  .top-bar-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    height: auto;
    padding: 8px 0;
  }

  .footer-inner {
    padding: 30px 0;
  }

  .footer-col--wechat {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 12px;
  }

  .header-logo img {
    height: 48px;
  }

  .header-title h1 {
    font-size: 18px;
  }

  .contact-list {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .contact-list-item {
    flex-direction: column;
    gap: 16px;
  }

  .contact-icon {
    width: 50px;
    height: 50px;
    min-width: 50px;
  }

  .contact-text h5 {
    font-size: 15px;
    margin-bottom: 12px;
  }

  .contact-text p {
    font-size: 12px;
    margin-bottom: 8px;
  }

  .contact-banner-wrapper {
    margin-bottom: 20px;
  }

  .banner-image {
    width: 100%;
  }

  .top-bar-link {
    font-size: 11px;
  }

  .nav-link {
    font-size: 12px;
  }
}
</style>
