import { Image,SafeAreaView,View,Text,Pressable, StyleSheet, ScrollView, Platform, ImageBackground } from 'react-native';
import React from 'react'
import Svg, { Circle, Rect, Path } from 'react-native-svg';


const d = () => {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false} // Hides the vertical scrollbar
    >
 <View style={styles.root} >
    <View style={styles.frame109} testID="1270:78">
      <View style={styles.frame108} testID="1270:79">
        <ImageBackground  source={require("../../assets/images/cover.png")} style={styles.rectangle11} testID="1270:80"/>
        <View style={styles.frame1082} testID="1272:165">
          <View style={styles.frame103} testID="1272:166">
            <Text style={styles.$3642K} testID="1272:167">
              {`364.2k`}
            </Text>
            <Text style={styles.creadits} testID="1272:168">
              {`Creadits`}
            </Text>
          </View>
          <View style={styles.frame112} testID="1272:169">
            <ImageBackground  source={require("../../assets/images/profile.png")} style={styles.frame106} testID="1272:170">
            </ImageBackground>
          </View>
          <View style={styles.frame104} testID="1272:171">
            <Text style={styles.$231} testID="1272:172">
              {`231`}
            </Text>
            <Text style={styles.posts} testID="1272:173">
              {`Posts`}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.group33} testID="1270:91">
        <View style={styles.frame102} testID="1270:92">
          <Text style={styles.$0Xc5G4444} testID="1270:93">
            {`0xc5g4....444`}
          </Text>
          <Text style={styles.kai06} testID="1270:94">
            {`@kai_06`}
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.frame110} testID="1270:95">
      <View style={styles.frame3} testID="1270:96">
        <View style={styles.frame35} testID="1270:97">
        <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9842 0.93335H7.61125L7.80878 1.52595L9.34462 6.13335H12.7175L11.3644 2.07408L10.9842 0.93335ZM13.8996 7.86668C13.9131 7.867 13.9265 7.867 13.9399 7.86668H19.9866V15.2334C19.9866 17.8659 17.8525 20 15.2199 20H5.68659C3.05403 20 0.919922 17.8659 0.919922 15.2334V7.86668H8.69969C8.71306 7.867 8.72651 7.867 8.73994 7.86668H13.8996ZM14.5446 6.13335L13.0088 1.52595L12.8113 0.93335H15.2199C17.8525 0.93335 19.9866 3.06746 19.9866 5.70002V6.13335H14.5446ZM5.68659 0.93335H5.78415L6.1644 2.07408L7.51748 6.13335H0.919922V5.70002C0.919922 3.06746 3.05403 0.93335 5.68659 0.93335ZM8.78362 8.89004C8.51885 8.7047 8.17299 8.68207 7.88635 8.83128C7.59972 8.98052 7.41992 9.27684 7.41992 9.60002V15.6667C7.41992 15.9899 7.59972 16.2862 7.88635 16.4354C8.17299 16.5847 8.51885 16.562 8.78362 16.3767L13.117 13.3433C13.3486 13.1812 13.4866 12.9161 13.4866 12.6334C13.4866 12.3506 13.3486 12.0855 13.117 11.9234L8.78362 8.89004Z"
        fill={'white'}
      />
    </Svg>
        </View>
        <View style={styles.frame36} testID="1270:99">
        <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
  <Path d="M5.10827 0.933353C4.70034 0.935202 4.37021 1.30284 4.36856 1.75601L4.34655 9.18023C4.34655 9.18239 4.34655 9.18482 4.34655 9.18699C4.34655 9.80128 4.70237 10.2028 5.04226 10.4734C6.34635 11.3548 7.81457 11.6617 9.56179 11.66C11.2819 11.6617 12.7401 11.243 14.0593 10.4531C14.3978 10.1806 14.7499 9.78268 14.7499 9.16838V1.76109C14.7515 1.30319 14.4173 0.93209 14.0051 0.933353H5.10827ZM1.74317 2.66838C1.51449 2.66932 1.29544 2.76057 1.13374 2.92227C0.972045 3.08396 0.880801 3.303 0.879887 3.53166V6.99833C0.87931 7.18127 0.936639 7.3597 1.04367 7.50808C1.15069 7.65646 1.30193 7.76717 1.47572 7.82437L3.47819 8.4896V6.66486L2.61491 6.37879V4.40171H3.47819V2.66838H1.74317ZM15.6149 2.66838V4.40171H16.4782V6.37879L15.6149 6.66486V8.4896L17.6174 7.82437C17.7912 7.76717 17.9424 7.65646 18.0494 7.50808C18.1565 7.3597 18.2138 7.18127 18.2132 6.99833V3.53166C18.2123 3.303 18.1211 3.08396 17.9594 2.92227C17.7977 2.76057 17.5786 2.66931 17.3499 2.66838H15.6149ZM12.1482 12.2322C11.5976 12.3388 11.0169 12.4167 10.4149 12.4539V13.3155H8.67989V12.4539C8.07609 12.4169 7.49631 12.3402 6.94655 12.2356V13.3155H6.09512C5.75418 13.3148 5.44281 13.4939 5.29278 13.7776L3.56791 17.0835C3.28473 17.6313 3.7148 18.2658 4.37025 18.2667H14.7262C15.3817 18.2657 15.8118 17.6313 15.5286 17.0835L13.7969 13.7776C13.6469 13.4939 13.3355 13.3148 12.9946 13.3155H12.1482V12.2322Z" fill="#808080" fill-opacity="0.5"/>
</Svg>
          <View/>
        </View>
      </View>
      <View style={styles.frame29} testID="1270:104">
        <View style={styles.frame32} testID="1270:105">
          <Text style={styles.garlicBread} testID="1270:106">
            {`Garlic Bread`}
          </Text>
        </View>
        <View style={styles.frame33} testID="1270:107">
          <Text style={styles.garlicBread2} testID="1270:108">
            {`Garlic Bread`}
          </Text>
        </View>
        <View style={styles.frame34} testID="1270:109">
          <Text style={styles.garlicBread3} testID="1270:110">
            {`Garlic Bread`}
          </Text>
        </View>
        <View style={styles.frame352} testID="1270:111">
          <Text style={styles.garlicBread4} testID="1270:112">
            {`Garlic Bread`}
          </Text>
        </View>
      </View>
    </View>
  </View>
    </ScrollView>
   
  )
}


const styles = StyleSheet.create({
    root: {
        width: 390,
        minHeight: 845.29999,
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 36.053,
        columnGap: 36.053,
        backgroundColor: 'rgba(0, 0, 0, 1)',
      },
      rectangle11: {
        height: 272.133,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(52, 52, 52, 1)',
      },
      $3642K: {
        alignSelf: 'stretch',
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 13.408,
        fontStyle: 'normal',
        fontWeight: '600',
      },
      creadits: {
        alignSelf: 'stretch',
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 12.48,
        fontStyle: 'normal',
        fontWeight: '500',
      },
      frame109: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        rowGap: 10.053,
        columnGap: 10.053,
        alignSelf: 'stretch',
      },
      frame108: {
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: -56,
        columnGap: -56,
        alignSelf: 'stretch',
        
      },
      frame1082: {
        marginTop: -56,
        flexDirection: 'row',
        paddingTop: 0,
        paddingLeft: 38.827,
        paddingBottom: 0,
        paddingRight: 38.827,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
      },
      frame103: {
        width: 75.92,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        rowGap: 5.2,
        columnGap: 5.2,
        alignSelf: 'stretch',
      },
      frame112: {
        flexDirection: 'row',
        paddingTop: 7,
        paddingLeft: 7,
        paddingBottom: 7,
        paddingRight: 7,
        alignItems: 'center',
        rowGap: 10,
        columnGap: 10,
        borderBottomLeftRadius: 77,
        borderBottomRightRadius: 77,
        borderTopLeftRadius: 77,
        borderTopRightRadius: 77,
        backgroundColor: 'rgba(0, 0, 0, 1)',
      },
      frame106: {
        flexDirection: 'row',
        width: 98.107,
        height: 98.107,
        alignItems: 'center',
        rowGap: 3.467,
        columnGap: 3.467,
        overflow: 'hidden',
        borderRadius: 77,
        backgroundColor: 'rgba(255, 255, 255, 1)',
      },
      $231: {
        alignSelf: 'stretch',
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 13.408,
        fontStyle: 'normal',
        fontWeight: '600',
      },
      posts: {
        alignSelf: 'stretch',
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 12.48,
        fontStyle: 'normal',
        fontWeight: '500',
      },
      frame104: {
        width: 75.92,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        rowGap: 5.2,
        columnGap: 5.2,
      },
      $0Xc5G4444: {
        alignSelf: 'stretch',
        color: 'rgba(255, 255, 255, 0.7019608020782471)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 12.48,
        fontStyle: 'normal',
        fontWeight: '500',
      },
      kai06: {
        alignSelf: 'stretch',
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 21.493,
        fontStyle: 'normal',
        fontWeight: '500',
      },
      group33: {
        height: 47.587,
        alignSelf: 'stretch',
      },
      frame102: {
        width: 390,
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 6.587,
        columnGap: 6.587,
      },
      frame110: {
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 7,
        columnGap: 7,
        alignSelf: 'stretch',
      },
      frame3: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        rowGap: 3.467,
        columnGap: 3.467,
        alignSelf: 'stretch',
      },
      frame35: {
        width: 111.627,
        height: 33.986,
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 14.907,
        columnGap: 14.907,
        borderBottomColor: 'rgba(255, 255, 255, 1)',
        borderBottomWidth: 2.08,
      },
      frame36: {
        width: 111.627,
        height: 33.987,
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 14.907,
        columnGap: 14.907,
      },
      garlicBread: {
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 14.56,
        fontStyle: 'normal',
        fontWeight: '600',
      },
      frame29: {
        flexDirection: 'row',
        height: 506.51999,
        paddingTop: 0,
        paddingLeft: 20.8,
        paddingBottom: 0,
        paddingRight: 20.8,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        rowGap: 17,
        alignSelf: 'stretch',
        flexWrap: 'wrap',
      },
      frame32: {
        width: 165.013,
        height: 227.75999,
        paddingTop: 21.493,
        paddingLeft: 15.947,
        paddingBottom: 21.493,
        paddingRight: 15.947,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        rowGap: 3.467,
        columnGap: 3.467,
        borderBottomLeftRadius: 24.267,
        borderBottomRightRadius: 24.267,
        borderTopLeftRadius: 24.267,
        borderTopRightRadius: 24.267,
        backgroundColor: 'rgba(49, 49, 49, 1)',
      },
      garlicBread2: {
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 14.56,
        fontStyle: 'normal',
        fontWeight: '600',
      },
      frame33: {
        width: 165.013,
        height: 227.75999,
        paddingTop: 21.493,
        paddingLeft: 15.947,
        paddingBottom: 21.493,
        paddingRight: 15.947,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        rowGap: 3.467,
        columnGap: 3.467,
        borderBottomLeftRadius: 24.267,
        borderBottomRightRadius: 24.267,
        borderTopLeftRadius: 24.267,
        borderTopRightRadius: 24.267,
        backgroundColor: 'rgba(49, 49, 49, 1)',
      },
      garlicBread3: {
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 14.56,
        fontStyle: 'normal',
        fontWeight: '600',
      },
      frame34: {
        width: 165.013,
        height: 227.75999,
        paddingTop: 21.493,
        paddingLeft: 15.947,
        paddingBottom: 21.493,
        paddingRight: 15.947,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        rowGap: 3.467,
        columnGap: 3.467,
        borderBottomLeftRadius: 24.267,
        borderBottomRightRadius: 24.267,
        borderTopLeftRadius: 24.267,
        borderTopRightRadius: 24.267,
        backgroundColor: 'rgba(49, 49, 49, 1)',
      },
      garlicBread4: {
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 14.56,
        fontStyle: 'normal',
        fontWeight: '600',
      },
      frame352: {
        width: 165.013,
        height: 227.75999,
        paddingTop: 21.493,
        paddingLeft: 15.947,
        paddingBottom: 21.493,
        paddingRight: 15.947,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        rowGap: 3.467,
        columnGap: 3.467,
        borderBottomLeftRadius: 24.267,
        borderBottomRightRadius: 24.267,
        borderTopLeftRadius: 24.267,
        borderTopRightRadius: 24.267,
        backgroundColor: 'rgba(49, 49, 49, 1)',
      },
})




export default d