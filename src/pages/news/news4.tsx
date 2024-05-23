import {Image, View} from '@tarojs/components'
import c7 from '../../assets/c7.jpg'
import c8 from '../../assets/c8.jpg'


export default () => {
    return (
      <View className='indexPage' >
        <View className='at-article'>
          <View className='at-article__h1'>
            CF职业选手草莓自杀未遂：电竞圈心理健康问题亟待关注
          </View>
          <View className='at-article__info'>
            2024-04-16&nbsp;&nbsp;&nbsp;神秘人小黑
          </View>
          <View className='at-article__content'>
            <View className='at-article__section'>
              <View className='at-article__p'>
                近日，CF职业选手草莓试图通过服用安眠药自杀的消息震惊了整个电竞圈。这一极端行为不仅让无数粉丝和观众痛心疾首，也引发了对于电竞选手心理健康问题的深刻反思和抨击。
              </View>
              <Image
                className='at-article__img'
                src={c7}
                mode='widthFix' />
              <View className='at-article__p'>
                据悉，草莓作为CF领域的知名选手，长期以来承受着巨大的竞技压力和心理负担。然而，这些压力似乎并未得到适当的疏导和缓解，最终导致了这一悲剧的发生。作为电竞选手，他们需要在比赛中保持高度的集中和专注，同时还要面对来自粉丝、媒体和赞助商等多方面的期待和压力。这种持续的压力和焦虑可能会对他们的心理健康造成严重影响。
                对于草莓的自杀未遂行为，我们深感痛心和遗憾。然而，我们更应该关注的是这一事件背后所反映出的电竞圈心理健康问题。电竞行业作为一个新兴的竞技领域，其快速发展和商业化进程也带来了诸多挑战和问题。其中，职业选手的心理健康问题尤为突出。他们不仅需要应对激烈的比赛和训练，还要面对来自社交媒体的负面评论和攻击，这些因素都可能对他们的心理健康造成不良影响。
                我们强烈呼吁电竞行业和相关机构能够正视这一问题，并采取措施加以解决。首先，应该加强对职业选手的心理健康教育和培训，帮助他们更好地应对压力和焦虑。其次，应该建立健全的心理咨询和疏导机制，为职业选手提供及时、有效的心理支持和帮助。同时，媒体和粉丝也应该更加理性和宽容地对待职业选手，避免过度期望和攻击，为他们创造一个更加健康、积极的竞技环境。
                最后，我们希望草莓能够尽快康复，并重新找回对电竞的热爱和信心。同时，我们也希望这一事件能够引起更多人的关注和反思，共同为电竞行业的健康发展贡献力量。
              </View>
              <Image
                className='at-article__img'
                src={c8}
                mode='widthFix' />
            </View>
          </View>
        </View>
      </View>
    )

}
