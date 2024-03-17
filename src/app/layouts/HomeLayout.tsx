import React from 'react';
import {
    AppRoot,
    Group,
    Header,
    Panel,
    PanelHeader,
    SplitCol,
    SplitLayout,
    Title,
    usePlatform,
    View
} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import {BrowserRouter, Link} from "react-router-dom";
import {Icon32LogoVkColor} from "@vkontakte/icons";
import {AppRouter} from "../router";
import {homeRoutes} from "../../shared";

const HomeLayout = () => {
    const platform = usePlatform();

    return (
        <AppRoot>
            <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
                <SplitCol autoSpaced>
                    <View activePanel="main">
                        <Panel id="main">
                            <PanelHeader before={<Icon32LogoVkColor/>}>VK-TEST</PanelHeader>
                            <Group header={<Header mode="secondary">Form</Header>}>
                               {/*<Outlet/>*/}
                                <BrowserRouter>
                                        <Link to={homeRoutes.first.path}><Title>1 часть</Title></Link>
                                        <Link to={homeRoutes.second.path}><Title>2 часть</Title></Link>
                                    <AppRouter />
                                </BrowserRouter>
                            </Group>
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
};

export default HomeLayout;