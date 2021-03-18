import React from 'react';
import {useSelector} from "react-redux";


const UserList: React.FC = () => {
    const state = useSelector(state => state)
    console.log(state)
    return (
        <div>
            <ul>
                <li>test</li>
                <li>tes2t</li>
            </ul>
        </div>
    );
};

export default UserList;
