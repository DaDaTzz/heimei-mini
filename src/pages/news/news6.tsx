import {Image, View} from '@tarojs/components'
import c11 from '../../assets/c11.jpg'



export default () => {
    return (
      <View className='indexPage' >
        <View className='at-article'>
          <View className='at-article__h1'>
            CF职业选手草莓在俱乐部遭队友霸凌，手指受伤严重
          </View>
          <View className='at-article__info'>
            2024-04-26&nbsp;&nbsp;&nbsp;神秘人小黑
          </View>
          <View className='at-article__content'>
            <View className='at-article__section'>
              <View className='at-article__p'>
                近日，穿越火线（CF）职业联赛中的女选手草莓，在所属俱乐部不幸遭遇队友的霸凌行为，导致手指受伤严重。这一事件在电竞界引起了广泛的关注和讨论。              </View>
              <Image
                className='at-article__img'
                src={c11}
                mode='widthFix'
              />
              <View className='at-article__p'>
                据知情人士透露，草莓在俱乐部内长期受到队友的排挤和欺凌，其训练和比赛环境一直不佳。近日，在一次与队友的争执中，草莓被对方恶意攻击，导致手指受伤严重。经过医院的检查，她的手指骨折并需要手术治疗。
                草莓作为CFPL（穿越火线职业联赛）现役唯一的女选手，在赛场上展现出了出色的实力和坚韧的精神。
              </View>
              <View className='at-article__p'>
                然而，在俱乐部内部，她却面临着如此恶劣的待遇，这不禁让人对她的处境感到担忧。
                对于这一事件，俱乐部方面尚未发表正式声明。然而，从草莓的伤势和知情人士的爆料来看，这起霸凌事件是真实存在的。电竞作为一项高度竞争的体育项目，选手们应该相互尊重、团结合作，而不是进行恶意的攻击和排挤。
                在电竞界，选手的身心健康和比赛环境一直备受关注。俱乐部作为选手们的“家”，应该为他们提供一个安全、和谐、积极的训练和比赛环境。
              </View>
              <View className='at-article__p'>
                对于这起霸凌事件，我们呼吁俱乐部方面能够尽快采取行动，保护选手的权益和利益，维护电竞圈的公平和正义。
                我们祝愿草莓能够早日康复，并希望她能够在一个更加公正、友善的环境中继续追逐自己的电竞梦想。同时，我们也呼吁广大电竞爱好者和从业者，共同关注电竞圈的健康发展，为电竞事业的繁荣做出积极贡献。
              </View>
            </View>
          </View>
        </View>
      </View>
    )

}
