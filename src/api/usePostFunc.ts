import React from "react";
import apiNational from "./apiNational";


const usePostFunc = (body: any, endPoint: any, isObject?: any) => {
    const [data, setData] = React.useState();
    const uuid = isObject?.isCollege_UUID ? `?college_uuid=${isObject?.college_UUID}` : '';

    const postFunc = () => {
        apiNational
            .post(endPoint + uuid, body)
            .then((res) => {
                setData(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.response.data.message);
            });
    }

    return [data, postFunc];

}

export default usePostFunc;