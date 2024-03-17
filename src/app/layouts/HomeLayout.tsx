import React from 'react';
import {AppRoot, Group, Header, Panel, PanelHeader, SplitCol, SplitLayout, usePlatform, View} from "@vkontakte/vkui";
import {Outlet} from "react-router-dom";

const HomeLayout = () => {
    const platform = usePlatform();

    return (
        <AppRoot>
            <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
                <SplitCol autoSpaced>
                    <View activePanel="main">
                        <Panel id="main">
                            <PanelHeader>VKUI</PanelHeader>
                            <Group header={<Header mode="secondary">VK-TEST</Header>}>
                               <Outlet/>
                            </Group>
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
};

export default HomeLayout;