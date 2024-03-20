import styles from "./index.module.css";
import { UserType } from "../../shared";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDebounce } from "use-debounce";
import React from "react";
import {Group, Panel, View} from "@vkontakte/vkui";

export const SecondPartForm = () => {
    const shema = yup.object().shape({
        name: yup
            .string()
            .trim()
            .required("Введите имя")
            .matches(/^[A-Za-z]+$/, "Можно вводить только буквы"),
    });

    const {register, watch, formState: {errors}} = useForm<UserType>({
        resolver: yupResolver(shema),
        mode: "onChange"
    });
    const name = watch("name");
    const [debounceName] = useDebounce(name, 3000);

    React.useEffect(() => {
        if (debounceName) refetch();
    }, [debounceName]);

    const getUserAge = async () => {
        try {
            const { data } = await axios.get(
                `https://api.agify.io?name=${name}`
            );
            return data;
        } catch (error) {
            console.log(error)
        }
    };

    const { data, refetch } = useQuery({
        queryKey: [name],
        queryFn: getUserAge,
        enabled: false,
    });

    console.log(errors)

    // const onSubmit = async (formData: UserType) => {
    //     console.log(formData)
    // };

    return (
        <View activePanel="get-fact">
            <Panel id='get-fact'>
                <Group style={{display: 'flex', justifyContent: 'center', height: '140px', width: '500px', margin: 'auto'}}>
                    <form style={{margin: 'auto'}}>
                        <input className={styles.textfield} {...register("name")} />
                        {data?.age && <p>{data.age}</p>}
                        <div>
                            <p className={styles.error}>{errors.name?.message}</p>
                        </div>
                    </form>
                </Group>
            </Panel>
        </View>
    );
};
