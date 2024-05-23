import {Image, View} from '@tarojs/components'
import c9 from '../../assets/c9.jpg'
import c10 from '../../assets/c10.jpg'


export default () => {
    return (
      <View className='indexPage' >
        <View className='at-article'>
          <View className='at-article__h1'>
            莓疑似遭受男友家暴，电竞圈再掀波澜
          </View>
          <View className='at-article__info'>
            2024-04-18&nbsp;&nbsp;&nbsp;神秘人小黑
          </View>
          <View className='at-article__content'>
            <View className='at-article__section'>
              <View className='at-article__p'>
                近日，CF职业选手草莓疑似遭受其男友Doo家暴的消息在电竞圈引起了广泛关注。这一事件不仅引发了公众对于电竞选手私生活的热议，也再次将家庭暴力问题推到了公众视野的中心。
              </View>
              <Image
                className='at-article__img'
                src={c9}
                mode='widthFix'
              />
              <View className='at-article__p'>
                据知情人士透露，草莓与Doo的关系一直备受外界关注。然而，最近草莓在社交媒体上发布的一些言论和照片，以及她近期在比赛中的异常表现，都让人不禁猜测她是否遭受了家庭暴力。一些细心的网友甚至发现了草莓身上疑似淤青和伤痕的照片，这些照片更是引发了公众的广泛关注和担忧。
                家庭暴力是一种严重的社会问题，它不仅会对受害者造成身体上的伤害，更会对他们的心理和情感造成深远的影响。作为公众人物，草莓的遭遇更是引起了社会的广泛关注和同情。我们呼吁所有遭受家庭暴力的人，无论他们的身份和地位如何，都应该勇敢地站出来，寻求帮助和支持。
                对于这一事件，我们目前尚未得到草莓和Doo的正面回应。然而，无论事实如何，我们都应该正视家庭暴力这一社会问题，并采取措施加以解决。首先，我们应该加强对家庭暴力的宣传和教育，提高公众对于家庭暴力的认识和警惕性。其次，我们应该建立健全的法律制度，为受害者提供及时、有效的法律保护和救助。同时，我们也应该加强对施暴者的教育和惩罚，让他们认识到自己的错误并承担相应的责任。
                最后，我们希望草莓能够尽快走出阴影，重新找回自己的生活和信心。同时，我们也希望这一事件能够引起更多人的关注和反思，共同为消除家庭暴力这一社会问题贡献力量。
              </View>
              <View className='at-article__p'>
                然而，无论事实如何，我们都应该正视家庭暴力这一社会问题，并采取措施加以解决。首先，我们应该加强对家庭暴力的宣传和教育，提高公众对于家庭暴力的认识和警惕性。其次，我们应该建立健全的法律制度，为受害者提供及时、有效的法律保护和救助。同时，我们也应该加强对施暴者的教育和惩罚，让他们认识到自己的错误并承担相应的责任。
                最后，我们希望草莓能够尽快走出阴影，重新找回自己的生活和信心。同时，我们也希望这一事件能够引起更多人的关注和反思，共同为消除家庭暴力这一社会问题贡献力量。
              </View>
              <Image
                className='at-article__img'
                src={c10}
                mode='widthFix'
              />
            </View>
          </View>
        </View>
      </View>
    )

}
