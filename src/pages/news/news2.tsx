import {Image, View} from '@tarojs/components'
import c1 from '../../assets/c1.jpg'
import c2 from '../../assets/c2.jpg'


export default () => {
    return (
      <View className='indexPage' >
        <View className='at-article'>
          <View className='at-article__h1'>
            酒吧"甜姐"真面目曝光：CF职业选手涉嫌骗钱骗色
          </View>
          <View className='at-article__info'>
            2024-05-22&nbsp;&nbsp;&nbsp;神秘人小黑
          </View>
          <View className='at-article__content'>
            <View className='at-article__section'>
              <View className='at-article__p'>
                近日，本台记者深入调查，揭露了一名在酒吧以甜美形象为掩护，实则专门骗钱骗色的女子——蒲欣婷。
              </View>
              <View className='at-article__p'>
                蒲欣婷，来自四川成都，她因为对穿越火线（CF）的热爱而走上了职业电竞的道路，并因喜欢吃草莓而选择了这个ID。
                草莓作为一名CF女职业选手，凭借出色的游戏技巧和战术意识，在电竞圈中赢得了广泛的关注。然而，令人意想不到的是，她在赛场外的私生活却与她的职业形象大相径庭。
              </View>
              <Image
                className='at-article__img'
                src={c2}
                mode='widthFix' />
              <View className='at-article__p'>
                据调查，草莓经常出入各大酒吧，利用自己的美貌和电竞明星的身份，吸引那些渴望爱情和刺激的男性。在酒吧中，她以各种手段骗取男性的钱财和感情，让无数男性陷入她精心设计的陷阱。
                据受害者透露，草莓会主动与男性搭讪，利用自己的甜美外貌和温柔话语，迅速与对方建立感情联系。一旦取得对方的信任，她便会以各种理由向对方借钱，如生活困难、急需资金等。这些男性在草莓的甜言蜜语下，往往毫不犹豫地借出钱财，但往往无法收回。
                更令人发指的是，草莓不仅骗钱，还利用自己的美貌和魅力，诱惑那些对她产生好感的男性发生关系。她善于把握男性的心理，让他们在激情中迷失自我，忘记了对她的防备。这些男性在事后往往发现自己被欺骗，但为时已晚。
                本台记者通过多方走访和调查取证，已经掌握了草莓骗钱骗色的确凿证据。目前，警方已经介入调查，并将草莓列为重点嫌疑人。我们呼吁广大市民保持警惕，不要轻信陌生人的甜言蜜语，以免成为下一个受害者。
                同时，我们也希望电竞界能够加强对选手的管理和教育，防止类似事件再次发生。电竞作为一项新兴的竞技项目，应该注重选手的品德教育和职业道德培养，为观众树立正面的榜样。
                我们将持续关注此案的进展，并及时向公众公布最新消息。对于草莓这样的骗子，我们将坚决予以曝光和谴责，维护社会的公正和正义。
              </View>
              <Image
                className='at-article__img'
                src={c1}
                mode='widthFix' />
            </View>
          </View>
        </View>
      </View>
    )

}
