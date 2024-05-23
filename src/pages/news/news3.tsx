import {Image, View} from '@tarojs/components'
import c5 from '../../assets/c5.jpg'
import c6 from '../../assets/c6.jpg'


export default () => {
    return (
      <View className='indexPage' >
        <View className='at-article'>
          <View className='at-article__h1'>
            CF职业选手草莓：私生活放纵，无视安全
          </View>
          <View className='at-article__info'>
            2024-04-19&nbsp;&nbsp;&nbsp;神秘人小黑
          </View>
          <View className='at-article__content'>
            <View className='at-article__section'>
              <View className='at-article__p'>
                近日，CF职业选手草莓的私生活行为引发了社会的广泛关注和担忧。据悉，他不仅频繁喝酒抽烟，还热衷于纹身，并且多次因醉酒后骑乘“鬼火”摩托车摔伤，这种放纵的生活方式不仅对其个人健康和安全构成严重威胁，也损害了他作为职业选手的公众形象。
              </View>
              <Image
                className='at-article__img'
                src={c6}
                mode='widthFix' />
              <View className='at-article__p'>
                作为电竞领域的佼佼者，草莓以其出色的游戏技巧和竞技能力赢得了众多粉丝的喜爱。然而，他近期的私生活行为却让人大跌眼镜。频繁喝酒抽烟不仅影响他的身体健康，更可能对他的竞技状态产生负面影响。更令人担忧的是，他多次在醉酒后骑乘“鬼火”摩托车，不仅危及自己的生命安全，也对他人的安全构成威胁。
                作为一名职业选手，草莓应该明白自己的责任和义务。他不仅代表着个人的荣誉和成就，更代表着整个电竞行业的形象和声誉。然而，他的这些放纵行为却让人不禁对他的职业素养和道德观念产生质疑。在电竞这个快速发展的行业中，职业选手应该以身作则，树立健康、正面的榜样，而不是沉迷于私生活的放纵和刺激。
                此外，草莓的这些行为也可能对年轻粉丝和观众产生不良影响。作为公众人物，他的一言一行都可能成为年轻人模仿的榜样。如果他继续放纵自己的私生活行为，不仅可能误导年轻人形成不良的生活习惯，还可能让他们对电竞行业产生负面印象。
                我们呼吁CF职业选手草莓能够正视自己的问题，并采取措施加以改正。他应该认识到自己的私生活行为对个人和社会的影响，并主动寻求帮助和支持，改掉不良习惯。同时，我们也希望电竞行业能够加强对职业选手的管理和教育，引导他们树立正确的价值观和职业观，为电竞事业的健康发展贡献力量。
                总之，CF职业选手草莓的私生活放纵行为不仅损害了他个人的形象和声誉，也引发了社会的广泛担忧。我们希望他能够认真对待这些问题，并采取措施加以改正，为电竞行业的健康发展树立榜样。
              </View>
              <Image
                className='at-article__img'
                src={c5}
                mode='widthFix' />
            </View>
          </View>
        </View>
      </View>
    )

}
