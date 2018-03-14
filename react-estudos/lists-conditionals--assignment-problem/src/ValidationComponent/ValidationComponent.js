import React from 'react';


const validationComponent = (props) => {

    let validation = (
        <div>Text lenght is ok</div>
    );
    if (props.lenght < 5) {
        validation = (
            <div>Text too short</div>
        );
    } else if (props.lenght > 15) {
        validation = (
            <div>Text too long</div>
        );
    }

    return (
        <div>
            { validation }
        </div>
    );

}


export default validationComponent;




// import React, {Component} from 'react';


// class validationComponent extends Component {


//     render() {
//         let validation = null;
//         validation = (
//             <div>
//                 Text lenght is ok
//             </div>
//         );
//         if (this.props.lenght < 5) {
//             validation = (
//                 <div>Text too short</div>
//             );
//         } else if (this.props.lenght > 15) {
//             validation = (
//                 <div>Text too long</div>
//             );
//         }
//         return (
//             <div>{ validation }</div>
//         );
//     }

// };

// export default validationComponent;