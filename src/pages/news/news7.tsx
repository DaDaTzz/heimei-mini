import {Image, View} from '@tarojs/components'
import c12 from '../../assets/c12.jpg'



export default () => {
    return (
      <View className='indexPage' >
        <View className='at-article'>
          <View className='at-article__h1'>
            eStar俱乐部牛经理恋情曝光，两人同屏出现引发热议
          </View>
          <View className='at-article__info'>
            2024-04-29&nbsp;&nbsp;&nbsp;神秘人小黑
          </View>
          <View className='at-article__content'>
            <View className='at-article__section'>
              <View className='at-article__p'>
                近日，电竞圈再次传来喜讯，eStar俱乐部的牛经理恋情正式曝光，两人在社交媒体上同屏出现，甜蜜互动引发了粉丝和网友们的广泛关注和热议。              </View>
              <Image
                className='at-article__img'
                src={c12}
                mode='widthFix'
              />
              <View className='at-article__p'>
                据悉，牛经理与恋人相识已久，感情稳定，此次选择公开恋情并一同亮相，无疑是为了给彼此的感情加上更多正式和公开的认证。在曝光的照片和视频中，两人笑容满面，举止亲密，甜蜜的氛围让粉丝们纷纷送上祝福。
                作为eStar俱乐部的核心管理人员，牛经理在俱乐部的运营和发展中起到了举足轻重的作用。他不仅在管理层面有着出色的能力，还经常在训练和比赛中给予选手们积极的指导和鼓励。因此，他的恋情曝光也引发了粉丝们的极大关注。
                对于牛经理的恋情，eStar俱乐部方面也给予了积极回应。
              </View>
              <View className='at-article__p'>
                俱乐部表示，他们尊重并祝福牛经理的恋情，并认为这是牛经理个人生活中的一件喜事。同时，俱乐部也强调，牛经理的私人生活不会影响到俱乐部的正常运营，他们将继续为选手们提供最好的支持和帮助。
                此次恋情曝光不仅展现了电竞圈中人性化的一面，也让人们看到了电竞从业者在追求事业成功的同时，也能够拥有幸福美满的私人生活。这也提醒了大家要关注电竞从业者的个人生活和感受，给予他们更多的理解和支持。
                最后，我们祝愿牛经理和恋人能够一直幸福下去，也期待eStar俱乐部在未来能够取得更加辉煌的成绩。
              </View>
            </View>
          </View>
        </View>
      </View>
    )

}
