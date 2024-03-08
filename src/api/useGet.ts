import React from "react";
import apiNational from "./apiNational";


const useGet = (endPoint: any, isObject?: any) => {
    const [data, setData] = React.useState([]);
    const uuid = isObject?.isuuid ? `?college_uuid=${isObject?.uuid}` : '';
    const degree = isObject?.isDegree ? `&degree=${isObject?.degree}` : '';

    React.useEffect(() => {
        apiNational
            .get(endPoint + uuid + degree)
            .then((res) => {
                setData(res.data.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.response.data.message);
            });
    }, []);
    return [data, setData];
}

export default useGet;