import React from "react";
import apiNational from "./apiNational";


const useGet = (endPoint: any, isObject?: any) => {
    const [data, setData] = React.useState([]);
    const [profileData, setProfileData]: any = React.useState(null);
    const [errorMessage, setErrorMessage] = React.useState("");
    const college_UUID = isObject?.isCollege_UUID ? `?college_uuid=${isObject?.college_UUID}` : '';
    const speciality_UUID = isObject?.isSpeciality_UUID ? `&specialty_uuid=${isObject?.speciality_UUID}` : '';
    const subject_UUID = isObject?.isSubject_UUID ? `&subject_uuid=${isObject?.subject_UUID}` : '';
    const exam_UUID = isObject?.isExam_UUID ? `&exam_uuid=${isObject?.exam_UUID}` : '';
    const degree = isObject?.isDegree ? `&degree=${isObject?.degree}` : '';
    const position = isObject?.isPosition ? `&position=${isObject?.position}` : '';

    React.useEffect(() => {
        apiNational
            .get(endPoint + college_UUID + speciality_UUID + subject_UUID + exam_UUID + degree + position)
            .then((res) => {
                setData(res.data.data);
                setProfileData(res.data.data);
                console.log(res.data)
            })
            .catch((err) => {
                setErrorMessage(err.response.data.message);
                console.log(err)
            });

    }, []);
    return [data, setData, errorMessage, profileData];
}

export default useGet;