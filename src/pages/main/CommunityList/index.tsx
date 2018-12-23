import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from '@ant-design/react-native'
import { NavigationScreenProp } from 'react-navigation'

interface Props {
  navigation: NavigationScreenProp<any, any>
}

export default class CommunityList extends Component<Props> {
  render() {
    return (
      <View>
        <Text>Community List</Text>
        <Button
          type='primary'
          onPress={() => this.props.navigation.navigate('CommunityCreate')}>
          Go To Community Create
        </Button>
      </View>
    )
  }
}