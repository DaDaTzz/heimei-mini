import { View, Image } from '@tarojs/components'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'


export default () => {
    return (
      <View className='indexPage' >
        <View className='at-article'>
          <View className='at-article__h1'>
            CF职业选手恋情引热议，女选手草莓与富二代选手Doo关系成焦点
          </View>
          <View className='at-article__info'>
            2024-04-01&nbsp;&nbsp;&nbsp;神秘人小黑
          </View>
          <View className='at-article__content'>
            <View className='at-article__section'>
              <View className='at-article__p'>
                近日，电子竞技圈传出一段引人注目的恋情。知名射击游戏《穿越火线》（CF）的职业女选手草莓与男选手Doo的恋情成为公众关注的焦点。据悉，Doo家境殷实，家族经营着一家4S店，而草莓则因追求这段恋情而引发了一些争议。
              </View>
              <View className='at-article__p'>
                草莓与Doo在职业赛场上相识，两人同为CF职业选手，因共同的竞技爱好和出色的实力而备受瞩目。然而，这段恋情并非如人们想象中的那样单纯。有知情人士透露，草莓对Doo的追求不仅基于对他个人才华的欣赏，更包含了对其家庭背景的考虑。
              </View>
              <Image
                className='at-article__img'
                src={c4}
                mode='widthFix'
              />
              <View className='at-article__p'>
                据称，草莓为了接近Doo，不惜在赛场上故意制造机会，甚至牺牲自己的竞技状态来迎合Doo的喜好。她的行为在职业圈引起了一些争议，有人认为她为了爱情放弃了自己的职业追求，也有人认为她的行为违反了公平竞争的原则。
                Doo本人对于这段恋情的态度则相对低调。他表示，自己与草莓的恋情纯属私事，不希望过多地受到外界的关注和议论。他同时强调，自己与草莓的关系是建立在互相尊重和理解的基础上的，并不存在外界所猜测的金钱交易或利益交换。
                对于草莓的行为，一些粉丝表示理解和支持，认为每个人都有追求自己幸福的权利。但也有人持批评态度，认为草莓的行为过于功利，损害了电子竞技的精神。
                无论如何，这段恋情已经成为电子竞技圈的一桩热议话题。它不仅引发了人们对电子竞技选手私生活的关注，也引发了对于职业选手道德标准和职业精神的讨论。希望双方能够妥善处理这段恋情，不要让私事影响到自己的职业生涯。
              </View>
              <Image
                className='at-article__img'
                src={c3}
                mode='widthFix'
              />
            </View>
          </View>

        </View>
      </View>
    )

}
