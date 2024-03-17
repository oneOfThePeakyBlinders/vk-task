import React from 'react';
import {
    AppRoot, Card,
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
                            <Group header={<Header mode="secondary">Выберите раздел:</Header>}>
                                <Card>
                                    <BrowserRouter>
                                        <Title><Link style={{textDecoration: 'none'}} to={homeRoutes.first.path}>1-ый раздел</Link></Title>
                                        <Title><Link style={{textDecoration: 'none'}} to={homeRoutes.second.path}>2-ый раздел</Link></Title>
                                        <AppRouter />
                                    </BrowserRouter>
                                </Card>
                            </Group>
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
};

export default HomeLayout;