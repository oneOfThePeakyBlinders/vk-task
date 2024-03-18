import styles from "./index.module.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { MutableRefObject, useRef } from "react";
import {Group, Panel, View} from "@vkontakte/vkui";

export const FirstPartBlock = () => {
    const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
    const [title, setTitle] = React.useState("");
    const getUserAge = async () => {
        try {
            const { data } = await axios.get(`https://catfact.ninja/fact`);
            return data;
        } catch (e) {
            console.log(e)
        }
    };

    const { refetch, isFetched } = useQuery({
        queryKey: [title],
        queryFn: getUserAge,
        enabled: false,
    });

    const setInpurCursor = (position: number) => {
        let timeout = setTimeout(() => {
            inputRef.current?.setSelectionRange(position, position);
            inputRef.current?.focus();
        }, 100);
        return () => {
            clearTimeout(timeout);
        };
    };

    const onClick = async () => {
        const { data } = await refetch();
        if (data) {
            const cursorPosition = data.fact.split(" ")[0].length;
            await setTitle(data.fact);
            setInpurCursor(cursorPosition);
        }
    };

    return (
        <View activePanel="get-fact">
            <Panel id='get-fact'>
                <Group style={{display: 'flex', justifyContent: 'center'}}>
                    <div className={styles.block}>
                        <input
                            ref={inputRef}
                            className={styles.textfield}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <button
                            className={styles.btn}
                            onClick={onClick}
                            disabled={isFetched}
                        >
                            Получить
                        </button>
                    </div>
                </Group>
            </Panel>
        </View>
    );
};
