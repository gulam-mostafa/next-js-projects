import { useRouter } from 'next/router';
import React from 'react';

const Document = () => {
    const router = useRouter()
    const params = router.query.params || [];
    console.log(params)
    if(params.length ==2){
        return (
<h2>this page for {params[0]} and {params[1]}</h2>        )
    }
    return (
        <div>
            <p>Document home page</p>
            <h2>this page for {params[0]} and {params[1]}</h2>  
        </div>
    );
};

export default Document;