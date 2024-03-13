import React from "react";
import apiNational from "./apiNational";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const useGet = (endPoint: any, isObject?: any) => {
    const token = Cookies.get("token");
    const [data, setData] = React.useState([]);
    const navigate = useNavigate();
    const [loading, setLoading]: any = React.useState(false);
    const [profileData, setProfileData]: any = React.useState(null);
    const [errorMessage, setErrorMessage] = React.useState("");
    const college_UUID = isObject?.isCollege_UUID ? `?college_uuid=${isObject?.college_UUID}` : '';
    const speciality_UUID = isObject?.isSpeciality_UUID ? `&specialty_uuid=${isObject?.speciality_UUID}` : '';
    const subject_UUID = isObject?.isSubject_UUID ? `&subject_uuid=${isObject?.subject_UUID}` : '';
    const exam_UUID = isObject?.isExam_UUID ? `&exam_uuid=${isObject?.exam_UUID}` : '';
    const degree = isObject?.isDegree ? `&degree=${isObject?.degree}` : '';
    const position = isObject?.isPosition ? `&position=${isObject?.position}` : '';

    /* Check token */
    React.useEffect(() => {
        if (!token) {
            if (location.pathname.includes("/dashboard")) {
                navigate('/dashboard/login')
            } else {
                if (location.pathname !== '/') {
                    navigate('/')
                }
            }
        }
    }, []);

    React.useEffect(() => {
        setLoading(true)
        apiNational
            .get(endPoint + college_UUID + speciality_UUID + subject_UUID + exam_UUID + degree + position)
            .then((res) => {
                setLoading(false)
                setData(res.data.data);
                setProfileData(res.data.data);
                console.log(res.data)
            })
            .catch((err) => {
                setLoading(false)
                setErrorMessage(err.response.data.message);
                if (err.response.data.message === "Unauthorize") {
                    if (location.pathname.includes("/dashboard")) {
                        navigate('/dashboard/login')
                    } else {
                        if (location.pathname !== '/') {
                            navigate('/')
                        }
                    }
                }
                console.log(err)
            });

    }, []);
    return [data, setData, errorMessage, profileData, loading];
}

export default useGet;