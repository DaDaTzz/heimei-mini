import { View } from '@tarojs/components'
import {AtList, AtListItem, AtNoticebar, AtPagination} from "taro-ui";
import Taro from "@tarojs/taro";
import './index.scss'
import GlobalFooter from "../../components/GlobalFooter";



export default () => {
    return (
      <View className='indexPage' >
        <AtNoticebar >
          如有侵权，请联系作者，联系了也不会删！
        </AtNoticebar>
        <View className='at-article'>
          <View className='at-article__h1'>
            热点Top10
          </View>
        </View>
        <AtList hasBorder={false}>
          <AtListItem hasBorder={false} title='一、CF职业选手恋情引热议，女选手草莓与富二代选手Doo关系成焦点' onClick={() =>{
            Taro.navigateTo({
              url: '/pages/news/news1',
            })
          }}
          />
          <AtListItem hasBorder={false} title='二、酒吧"甜姐"真面目曝光：CF职业选手涉嫌骗钱骗色' onClick={() =>{
            Taro.navigateTo({
              url: '/pages/news/news2',
            })
          }}
          />
          <AtListItem hasBorder={false} title='三、CF职业选手草莓：私生活放纵，无视安全' onClick={() =>{
            Taro.navigateTo({
              url: '/pages/news/news3',
            })
          }}
          />
          <AtListItem hasBorder={false} title='四、CF职业选手草莓自杀未遂：电竞圈心理健康问题亟待关注' onClick={() =>{
            Taro.navigateTo({
              url: '/pages/news/news4',
            })
          }}
          />
          <AtListItem hasBorder={false} title='五、草莓疑似遭受男友家暴，电竞圈再掀波澜' onClick={() =>{
            Taro.navigateTo({
              url: '/pages/news/news5',
            })
          }}
          />
          <AtListItem hasBorder={false} title='六、CF职业选手草莓在俱乐部遭队友霸凌，手指受伤严重' onClick={() =>{
            Taro.navigateTo({
              url: '/pages/news/news6',
            })
          }}
          />
          <AtListItem hasBorder={false} title='七、eStar俱乐部经理恋情曝光，粉丝送上祝福' onClick={() =>{
            Taro.navigateTo({
              url: '/pages/news/news7',
            })
          }}
          />

          <AtPagination
            total={50}
            pageSize={10}
            current={1}
          >
          </AtPagination>

          <GlobalFooter />

        </AtList>

      </View>
    )

}
