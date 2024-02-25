import React from 'react'
import { AppBox, AppText } from '../ui'
import { Image, MenuIcon } from '../Icons'
import { statusBarHeight } from '../../theme/config'

const HomeScreenNav = () => {
    return (
        <AppBox>
            <AppBox flexDirection="row" justifyContent="space-between" alignItems="center" p="s" style={{ marginTop: statusBarHeight }}>
                {/* <MenuIcon /> */}
                <AppText>Index</AppText>
                <Image />
            </AppBox>
        </AppBox>
    )
}

export default HomeScreenNav