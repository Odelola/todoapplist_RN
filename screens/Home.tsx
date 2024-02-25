import { HomeScreenNav } from '../components';
import { AppBox, AppText } from '../components/ui';
import { NoTaskImage } from '../components/Icons/svgImages'

const Home = () => {
    return (
        <AppBox flex={1} backgroundColor="appBackground">
            {/* <HomeScreenNav /> */}

            <AppBox marginTop="l" alignItems="center">
                <NoTaskImage />
                <AppBox alignItems="center">
                    <AppText marginBottom="s">What do you want to do today?</AppText>
                    <AppText variant="light">Tap + to add your tasks</AppText>
                </AppBox>
            </AppBox>
        </AppBox>
    )
}

export default Home