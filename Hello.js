import React from 'react';

const Hello = () => {
    // return (
    //     <div>
            
    //         <h1>Hello Vishwak</h1>
    //     </div>
    // )
    return React.createElement(
      'div',
       {id: 'hello' , className: 'dummmyclass'},
       React.createElement('h1',null,'Hello Vishwak')
     )
}

export default Hello