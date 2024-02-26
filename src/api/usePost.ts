import React from "react";
import apiNational from "./apiNational";


const usePost = (body: any, endPoint: any, isObject?: any) => {
    const [data, setData] = React.useState([]);
    const uuid = isObject?.isuuid ? `?college_uuid=${isObject?.uuid}` : '';

    React.useEffect(() => {
        apiNational
            .post(endPoint + uuid, body)
            .then((res) => {
                setData(res.data.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.response.data.message);
                err.response.data.message == "Unauthorize" && window.location.reload();
            });
    }, []);
    return [data];

}

export default usePost;