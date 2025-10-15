<template>
  <el-container class="register-page" direction="vertical">
    <el-header class="register-header" height="88px">
      <div class="register-header__inner">
        <div class="register-header__left">
          <a class="register-brand" href="/" aria-label="SaleYee 首页">
            <img src="https://www.saleyee.com/Content/Images/logo.png" alt="SaleYee Logo" />
            <span>赛盈分销平台</span>
          </a>
          <h2 class="register-header__title">{{ t('register.welcome') }}</h2>
        </div>
        <div class="register-header__right">
          <a class="register-header__link" href="/getting-started.html">{{ t('header.gettingStarted') }}</a>
          <span class="register-header__divider">|</span>
          <el-dropdown v-model:visible="langOpen" trigger="click" placement="bottom-end">
            <span class="register-language" role="button" tabindex="0">
              <img
                src="https://www.saleyee.com/ContentNew/Images/2025/202507/language.png"
                alt="语言切换"
              />
              <span>{{ langLabel }}</span>
              <el-icon class="register-language__icon"><ArrowDown /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  :class="{ 'is-active': currentLang === 'zh-CN' }"
                  @click="selectLang('zh-CN')"
                >
                  简体中文
                </el-dropdown-item>
                <el-dropdown-item :class="{ 'is-active': currentLang === 'en' }" @click="selectLang('en')">
                  English
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </el-header>

    <el-main class="register-main">
      <div class="register-main__container">
        <el-row :gutter="32" align="middle" class="register-main__row">
          <el-col :xs="24" :lg="13" class="register-banner__col">
            <div class="register-banner">
              <img
                class="register-banner__image"
                src="https://resource.saleyee.com/UploadFiles/Images/2024/202407/8267eb99-b710-45ae-a362-37a52abc0618.jpg"
                alt="注册横幅"
              />
              <div class="register-banner__bullets" aria-hidden="true">
                <span class="is-active"></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :lg="11" class="register-form__col">
            <el-card shadow="always" class="register-card">
              <h2 class="register-card__title">{{ t('register.title') }}</h2>
              <el-form :model="form" class="register-form" @submit.prevent>
                <div class="register-form__row register-form__row--split">
                  <div class="register-field register-field--select">
                    <label>{{ t('register.area') }}</label>
                    <el-select
                      v-model="form.area"
                      class="register-select"
                      filterable
                      :teleported="false"
                      placeholder="+86 中国"
                    >
                      <el-option
                        v-for="option in areaOptions"
                        :key="option.value"
                        :label="option.label"
                        :value="option.value"
                      />
                    </el-select>
                  </div>
                  <div class="register-field register-field--input">
                    <label class="sr-only" for="register-phone">{{ t('register.phone') }}</label>
                    <el-input
                      id="register-phone"
                      v-model="form.phone"
                      class="register-input"
                      :placeholder="t('register.phone')"
                      clearable
                    />
                  </div>
                </div>

                <div class="register-field">
                  <label class="sr-only" for="register-password">{{ t('register.password') }}</label>
                  <el-input
                    id="register-password"
                    v-model="form.password"
                    class="register-input"
                    :type="showPwd ? 'text' : 'password'"
                    :placeholder="t('register.password')"
                  >
                    <template #suffix>
                      <button
                        type="button"
                        class="register-eye"
                        @click="showPwd = !showPwd"
                        aria-label="切换密码可见性"
                      >
                        <img :src="showPwd ? visibleIcon : hiddenIcon" alt="" />
                      </button>
                    </template>
                  </el-input>
                </div>

                <div class="register-field">
                  <label class="sr-only" for="register-confirm">{{ t('register.confirm') }}</label>
                  <el-input
                    id="register-confirm"
                    v-model="form.confirm"
                    class="register-input"
                    :type="showConfirm ? 'text' : 'password'"
                    :placeholder="t('register.confirm')"
                  >
                    <template #suffix>
                      <button
                        type="button"
                        class="register-eye"
                        @click="showConfirm = !showConfirm"
                        aria-label="切换确认密码可见性"
                      >
                        <img :src="showConfirm ? visibleIcon : hiddenIcon" alt="" />
                      </button>
                    </template>
                  </el-input>
                </div>

                <div class="register-form__row register-form__row--code">
                  <el-input
                    id="register-sms"
                    v-model="form.sms"
                    class="register-input"
                    maxlength="4"
                    :placeholder="t('register.sms')"
                  />
                  <el-button class="register-code" type="default">{{ t('register.getCode') }}</el-button>
                </div>

                <div class="register-field">
                  <el-input
                    id="register-invite"
                    v-model="form.invite"
                    class="register-input"
                    :placeholder="t('register.invite')"
                    clearable
                  />
                </div>

                <div class="register-agree">
                  <el-checkbox v-model="form.agree" aria-label="同意条款"></el-checkbox>
                  <span>
                    {{ t('register.agree') }}
                    <a href="/PrivacyDetails/1.html" target="_blank" rel="noreferrer">{{ t('register.terms') }}</a>
                    -
                    <a href="/PrivacyDetails/2.html" target="_blank" rel="noreferrer">{{ t('register.privacy') }}</a>
                  </span>
                </div>

                <el-button class="register-submit" type="primary" size="large" native-type="submit">
                  {{ t('register.next') }}
                </el-button>

                <div class="register-login">
                  <span>{{ t('register.already') }}</span>
                  <a href="/login">{{ t('auth.login') }}</a>
                </div>
              </el-form>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-main>

    <el-footer class="register-footer" height="auto">
      <div class="register-footer__inner">
        <p>© 2025 Saleyee.com</p>
      </div>
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import { currentLang, setLang, t } from '@/i18n'

type LangCode = 'zh-CN' | 'en'

interface RegisterFormState {
  area: string
  phone: string
  password: string
  confirm: string
  sms: string
  invite: string
  agree: boolean
}

const langOpen = ref(false)
const form = reactive<RegisterFormState>({
  area: '86',
  phone: '',
  password: '',
  confirm: '',
  sms: '',
  invite: '',
  agree: false,
})
const showPwd = ref(false)
const showConfirm = ref(false)

const visibleIcon = 'https://www.saleyee.com/ContentNew/Images/visible.png'
const hiddenIcon = 'https://www.saleyee.com/ContentNew/Images/invisible.png'

const langLabel = computed(() => (currentLang.value === 'zh-CN' ? t('lang.zh') : t('lang.en')))

function selectLang(code: LangCode) {
  setLang(code)
  langOpen.value = false
}

const areaOptions = [
  { value: '1', label: '+1 美国 和 加拿大' },
  { value: '7', label: '+7 俄罗斯 和 哈萨克' },
  { value: '20', label: '+20 埃及' },
  { value: '27', label: '+27 南非' },
  { value: '30', label: '+30 希腊' },
  { value: '31', label: '+31 荷兰' },
  { value: '32', label: '+32 比利时' },
  { value: '33', label: '+33 法国' },
  { value: '34', label: '+34 西班牙' },
  { value: '36', label: '+36 匈牙利' },
  { value: '39', label: '+39 意大利' },
  { value: '40', label: '+40 罗马尼亚' },
  { value: '41', label: '+41 瑞士' },
  { value: '43', label: '+43 奥地利' },
  { value: '44', label: '+44 英国' },
  { value: '45', label: '+45 丹麦' },
  { value: '46', label: '+46 瑞典' },
  { value: '47', label: '+47 挪威' },
  { value: '48', label: '+48 波兰' },
  { value: '49', label: '+49 德国' },
  { value: '51', label: '+51 秘鲁' },
  { value: '52', label: '+52 墨西哥' },
  { value: '53', label: '+53 古巴' },
  { value: '54', label: '+54 阿根廷' },
  { value: '55', label: '+55 巴西' },
  { value: '56', label: '+56 智利' },
  { value: '57', label: '+57 哥伦比亚' },
  { value: '58', label: '+58 委内瑞拉' },
  { value: '60', label: '+60 马来西亚' },
  { value: '61', label: '+61 澳洲' },
  { value: '62', label: '+62 印度尼西亚' },
  { value: '63', label: '+63 菲律宾' },
  { value: '64', label: '+64 新西兰' },
  { value: '65', label: '+65 新加坡' },
  { value: '66', label: '+66 泰国' },
  { value: '81', label: '+81 日本' },
  { value: '82', label: '+82 韩国' },
  { value: '84', label: '+84 越南' },
  { value: '86', label: '+86 中国' },
  { value: '90', label: '+90 土耳其' },
  { value: '91', label: '+91 印度' },
  { value: '92', label: '+92 巴基斯坦' },
  { value: '93', label: '+93 阿富汗' },
  { value: '94', label: '+94 斯里兰卡' },
  { value: '95', label: '+95 缅甸' },
  { value: '98', label: '+98 伊朗' },
  { value: '211', label: '+211 南苏丹' },
  { value: '212', label: '+212 摩洛哥' },
  { value: '213', label: '+213 阿尔及利亚' },
  { value: '216', label: '+216 突尼斯' },
  { value: '218', label: '+218 利比亚' },
  { value: '220', label: '+220 冈比亚' },
  { value: '221', label: '+221 塞内加尔' },
  { value: '222', label: '+222 毛里塔尼亚' },
  { value: '223', label: '+223 马里共和国' },
  { value: '224', label: '+245 几内亚比绍' },
  { value: '225', label: '+225 科特迪瓦' },
  { value: '226', label: '+226 布基纳法索' },
  { value: '227', label: '+227 尼日' },
  { value: '228', label: '+228 多哥' },
  { value: '229', label: '+229 贝宁' },
  { value: '230', label: '+230 毛里求斯' },
  { value: '231', label: '+231 利比里亚' },
  { value: '232', label: '+232 狮子山共和国' },
  { value: '233', label: '+233 加纳' },
  { value: '234', label: '+234 尼日利亚' },
  { value: '235', label: '+235 查德' },
  { value: '236', label: '+236 中非共和国' },
  { value: '237', label: '+237 喀麦隆' },
  { value: '238', label: '+238 佛得角' },
  { value: '239', label: '+239 圣多美普林西比' },
  { value: '240', label: '+240 赤道几内亚' },
  { value: '241', label: '+241 加蓬' },
  { value: '242', label: '+242 刚果共和国' },
  { value: '243', label: '+243 刚果民主共和国' },
  { value: '244', label: '+244 安哥拉' },
  { value: '245', label: '+245 几内亚比绍' },
  { value: '247', label: '+247 阿森松岛' },
  { value: '248', label: '+248 塞舌尔' },
  { value: '249', label: '+249 苏丹' },
  { value: '250', label: '+250 卢旺达' },
  { value: '251', label: '+251 埃塞俄比亚' },
  { value: '252', label: '+252 索马里' },
  { value: '253', label: '+253 吉布提' },
  { value: '254', label: '+254 肯尼亚' },
  { value: '255', label: '+255 坦桑尼亚' },
  { value: '256', label: '+256 乌干达' },
  { value: '257', label: '+257 布隆迪' },
  { value: '258', label: '+258 莫桑比克' },
  { value: '260', label: '+260 赞比亚' },
  { value: '261', label: '+261 马达加斯加' },
  { value: '262', label: 'account.enum.fields.reunion' },
  { value: '263', label: '+263 津巴布韦' },
  { value: '264', label: '+264 纳米比亚' },
  { value: '265', label: '+265 马拉维' },
  { value: '266', label: '+266 莱索托' },
  { value: '267', label: '+267 博茨瓦纳' },
  { value: '268', label: '+268 斯威士兰' },
  { value: '269', label: '+269 科摩罗 和 马约特' },
  { value: '297', label: '+297 阿鲁巴 (荷兰王国)' },
  { value: '298', label: '+298 法罗群岛 (丹麦)' },
  { value: '299', label: '+299 格陵兰 (丹麦)' },
  { value: '350', label: '+350 直布罗陀 (英国)' },
  { value: '351', label: '+351 葡萄牙' },
  { value: '352', label: '+352 卢森堡' },
  { value: '353', label: '+353 爱尔兰共和国' },
  { value: '354', label: '+354 冰岛' },
  { value: '355', label: '+355 阿尔巴尼亚' },
  { value: '356', label: '+356 马耳他' },
  { value: '357', label: '+357 塞浦路斯' },
  { value: '358', label: '+358 芬兰' },
  { value: '359', label: '+359 保加利亚' },
  { value: '370', label: '+370 立陶宛' },
  { value: '371', label: '+371 拉脱维亚' },
  { value: '372', label: '+372 爱沙尼亚' },
  { value: '373', label: '+373 摩尔多瓦' },
  { value: '374', label: '+374 亚美尼亚' },
  { value: '375', label: '+375 白俄罗斯' },
  { value: '376', label: '+376 安道尔' },
  { value: '377', label: '+377 摩纳哥' },
  { value: '378', label: '+378 圣马力诺' },
  { value: '380', label: '+380 乌克兰' },
  { value: '381', label: '+381 塞尔维亚共和国' },
  { value: '382', label: '+382 黑山共和国' },
  { value: '385', label: '+385 克罗地亚' },
  { value: '386', label: '+386 斯洛文���亚' },
  { value: '387', label: '+387 波斯尼亚与赫塞哥维纳' },
  { value: '389', label: '+389 马其顿' },
  { value: '420', label: '+420 捷克' },
  { value: '421', label: '+421 斯洛伐克' },
  { value: '423', label: '+423 列支敦士登' },
  { value: '501', label: '+501 伯利兹' },
  { value: '502', label: '+502 危地马拉' },
  { value: '503', label: '+503 萨尔瓦多' },
  { value: '504', label: '+504 洪都拉斯' },
  { value: '505', label: '+505 尼加拉瓜' },
  { value: '506', label: '+506 哥斯达黎加' },
  { value: '507', label: '+507 巴拿马' },
  { value: '508', label: '+508 圣皮耶与密克隆群岛 (法国)' },
  { value: '509', label: '+509 海地' },
  { value: '590', label: '+590 瓜德罗普岛 和 圣马丁岛(荷兰部分)' },
  { value: '591', label: '+591 玻利维亚' },
  { value: '592', label: '+592 圭亚那' },
  { value: '593', label: '+593 厄瓜多尔' },
  { value: '594', label: '+594 法属圭亚那 (法国)' },
  { value: '595', label: '+595 巴拉圭' },
  { value: '596', label: '+596 马提尼克 (法国)' },
  { value: '597', label: '+597 苏里南' },
  { value: '598', label: '+598 乌拉圭' },
  { value: '599', label: '+599 博内尔岛，圣尤斯特歇斯 和 库拉索 (荷兰王国)' },
  { value: '670', label: '+670 ��帝汶' },
  { value: '673', label: '+673 文莱' },
  { value: '675', label: '+675 巴布亚新几内亚' },
  { value: '676', label: '+676 东加' },
  { value: '677', label: '+677 所罗门群岛' },
  { value: '678', label: '+678 瓦努阿图' },
  { value: '679', label: '+679 斐济' },
  { value: '680', label: '+680 帕劳' },
  { value: '682', label: '+682 库克群岛 (新西兰)' },
  { value: '685', label: '+685 萨摩亚' },
  { value: '686', label: '+686 基里巴斯' },
  { value: '687', label: '+687 新喀里多尼亚 (法国)' },
  { value: '689', label: '+689 法属波利尼西亚 (法国)' },
  { value: '852', label: '+852 中国香港' },
  { value: '853', label: '+853 中国澳门' },
  { value: '855', label: '+855 柬埔寨' },
  { value: '856', label: '+856 老挝' },
  { value: '880', label: '+880 孟加拉国' },
  { value: '886', label: '+886 中国台湾' },
  { value: '960', label: '+960 马尔代夫' },
  { value: '961', label: '+961 黎巴嫩' },
  { value: '962', label: '+962 约旦' },
  { value: '963', label: '+963 叙利亚' },
  { value: '964', label: '+964 伊拉克' },
  { value: '965', label: '+965 科威特' },
  { value: '966', label: '+966 沙特阿拉伯' },
  { value: '967', label: '+967 也门' },
  { value: '968', label: '+968 阿曼' },
  { value: '970', label: '+970 巴勒斯坦' },
  { value: '971', label: '+971 阿拉伯联合酋长国' },
  { value: '972', label: '+972 以色列' },
  { value: '973', label: '+973 巴林' },
  { value: '974', label: '+974 卡达' },
  { value: '975', label: '+975 不丹' },
  { value: '976', label: '+976 蒙古国' },
  { value: '977', label: '+977 尼泊尔' },
  { value: '992', label: '+992 塔吉克' },
  { value: '993', label: '+993 土库曼' },
  { value: '994', label: '+994 阿塞拜疆' },
  { value: '995', label: '+995 乔治亚' },
  { value: '996', label: '+996 吉尔吉斯' },
  { value: '998', label: '+998 乌兹别克' },
  { value: '1242', label: '+1242 巴哈马' },
  { value: '1246', label: '+1246 巴巴多斯' },
  { value: '1264', label: '+1264 安圭拉' },
  { value: '1268', label: '+1268 安提瓜和巴布达' },
  { value: '1284', label: '+1284 英属维尔京群岛 (英国)' },
  { value: '1340', label: '+1340 美属维尔京群岛 (美国)' },
  { value: '1345', label: '+1345 开曼群岛 (英国)' },
  { value: '1441', label: '+1441 百慕大 (英国)' },
  { value: '1473', label: '+1473 格林纳达' },
  { value: '1649', label: '+1649 土克凯可群岛 (英国)' },
  { value: '1664', label: '+1664 蒙塞拉特岛 (英国)' },
  { value: '1671', label: '+1671 关岛 (美国)' },
  { value: '1684', label: '+1684 美属萨摩亚 (美国)' },
  { value: '1758', label: '+1758 圣卢西亚' },
  { value: '1767', label: '+1767 多米尼克' },
  { value: '1784', label: '+1784 圣文森及格林纳丁' },
  { value: '1787', label: '+1787 波多黎各 (美国)' },
  { value: '1809', label: '+1809 多米尼加共和国' },
  { value: '1868', label: '+1868 特立尼达和多巴哥' },
  { value: '1869', label: '+1869 圣克里斯多福与尼维斯' },
  { value: '1876', label: '+1876 牙买加' },
]
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background: #ffffff;
  color: #1f2937;
  font-family: 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif;
}

.register-header {
  border-bottom: 1px solid #e5e7eb;
  background: #ffffff;
}

.register-header__inner {
  width: min(1200px, 100%);
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}

.register-header__left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.register-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #111827;
  font-weight: 600;
  font-size: 18px;
}

.register-brand img {
  height: 44px;
  display: block;
}

.register-header__title {
  font-size: 20px;
  font-weight: 600;
  color: #cb261c;
}

.register-header__right {
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 14px;
  color: #4b5563;
}

.register-header__link {
  color: inherit;
  text-decoration: none;
}

.register-header__link:hover {
  color: #cb261c;
}

.register-header__divider {
  color: #d1d5db;
}

.register-language {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #25313f;
}

.register-language img {
  width: 20px;
  height: 20px;
}

.register-language__icon {
  font-size: 12px;
  color: #25313f;
}

.register-main {
  padding: 40px 0 72px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 18%);
}

.register-main__container {
  width: min(1280px, calc(100% - 32px));
  margin: 0 auto;
}

.register-banner__col {
  display: flex;
  justify-content: center;
}

.register-banner {
  position: relative;
  width: 100%;
  max-width: 640px;
  height: 520px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.16);
}

.register-banner__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.register-banner__bullets {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.register-banner__bullets span {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.6);
}

.register-banner__bullets span.is-active {
  background: #ffffff;
  width: 11px;
  height: 11px;
}

.register-card {
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
  border: none;
}

:deep(.register-card .el-card__body) {
  padding: 28px 28px 20px;
}

.register-card__title {
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: #cb261c;
  margin-bottom: 20px;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.register-form__row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.register-form__row--split {
  align-items: flex-end;
}

.register-field {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.register-field--select {
  max-width: 180px;
}

.register-field label {
  font-size: 12px;
  color: #6b7280;
}

.register-field--input label {
  display: none;
}

.register-field--select label {
  display: block;
}

.register-form__row--code {
  justify-content: space-between;
}

.register-form__row--code .register-input {
  flex: 1;
}

.register-code {
  height: 44px;
  padding: 0 18px;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  color: #1f2937;
  font-weight: 500;
}

.register-code:hover,
.register-code:focus {
  background: #f3f4f6;
  color: #1f2937;
}

.register-input :deep(.el-input__wrapper),
.register-select :deep(.el-input__wrapper) {
  box-shadow: none !important;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 0 12px;
  height: 44px;
  background-color: #ffffff;
}

.register-select :deep(.el-input__wrapper) {
  padding-right: 32px;
}

.register-input :deep(.el-input__inner) {
  font-size: 14px;
  color: #111827;
}

.register-input :deep(.el-input__suffix) {
  display: flex;
  align-items: center;
}

.register-eye {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
}

.register-eye img {
  width: 18px;
  height: 18px;
}

.register-agree {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: #4b5563;
  line-height: 1.4;
}

.register-agree a {
  color: #cb261c;
  text-decoration: none;
}

.register-agree a:hover {
  text-decoration: underline;
}

.register-submit {
  width: 100%;
  height: 46px;
  border-radius: 6px;
  font-weight: 600;
  letter-spacing: 0.6px;
  background: #cb261c;
  border: none;
}

.register-submit:hover,
.register-submit:focus {
  background: #b02118;
}

.register-login {
  margin-top: 6px;
  font-size: 13px;
  color: #6b7280;
  display: flex;
  gap: 6px;
  justify-content: center;
}

.register-login a {
  color: #cb261c;
  text-decoration: none;
}

.register-login a:hover {
  text-decoration: underline;
}

.register-footer {
  border-top: 1px solid #e5e7eb;
  padding: 24px 0;
  background: #ffffff;
  color: #6b7280;
  font-size: 13px;
}

.register-footer__inner {
  width: min(1200px, 100%);
  margin: 0 auto;
  text-align: center;
  padding: 0 16px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

@media (max-width: 1200px) {
  .register-banner {
    height: 420px;
  }

  .register-field--select {
    max-width: 160px;
  }
}

@media (max-width: 1024px) {
  .register-main {
    padding: 32px 0 60px;
  }

  .register-main__row {
    flex-direction: column;
  }

  .register-banner {
    height: 340px;
    margin-bottom: 24px;
  }

  .register-field--select {
    max-width: 100%;
  }

  .register-form__row--split {
    flex-direction: column;
    align-items: stretch;
  }

  .register-form__row--split .register-field {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .register-header__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .register-header__title {
    font-size: 18px;
  }

  .register-main {
    padding: 24px 0 48px;
  }

  .register-banner {
    height: 260px;
  }

  .register-card {
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
  }

  :deep(.register-card .el-card__body) {
    padding: 22px 20px 18px;
  }
}
</style>
