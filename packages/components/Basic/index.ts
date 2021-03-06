import vcBasicArrow from './VCBasicArrow.vue'
import vcBasicHelp from './VCBasicHelp.vue'
import vcBasicTitle from './BasicTitle.vue'
import { withInstall } from '@/utils'
import { Plugin } from 'vue'

const VCBasicArrow = withInstall(vcBasicArrow) as typeof vcBasicArrow & Plugin
const VCBasicHelp = withInstall(vcBasicHelp) as typeof vcBasicHelp & Plugin
const VCBasicTitle = withInstall(vcBasicTitle) as typeof vcBasicTitle & Plugin

export { VCBasicArrow, VCBasicHelp, VCBasicTitle }
